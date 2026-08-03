        // ============================================
        // NAVBAR SCROLL EFFECT
        // ============================================
        const themeToggle = document.getElementById('themeToggle');
        const themeToggleText = document.getElementById('themeToggleText');

        function setTheme(theme, shouldPersist = true) {
            const isDark = theme === 'dark';
            document.documentElement.dataset.theme = theme;
            document.documentElement.style.colorScheme = theme;
            themeToggle.setAttribute('aria-pressed', String(isDark));
            themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
            themeToggleText.textContent = isDark ? 'Light' : 'Dark';
            const themeColorMeta = document.querySelector('meta[name="theme-color"]');
            if (themeColorMeta) themeColorMeta.setAttribute('content', isDark ? '#0b1120' : '#0a1628');

            if (shouldPersist) {
                try { localStorage.setItem('portfolio-theme', theme); } catch (error) {}
            }
        }

        setTheme(document.documentElement.dataset.theme || 'light', false);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });

        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });

        // ============================================
        // MOBILE MENU TOGGLE
        // ============================================
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');

        mobileToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', String(isOpen));
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // ============================================
        // ACTIVE NAV LINK ON SCROLL
        // ============================================
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.nav-links a');

        function highlightNavOnScroll() {
            const scrollPos = window.scrollY + 150;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navItems.forEach(item => {
                        item.classList.remove('active');
                        if (item.getAttribute('href') === `#${sectionId}`) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        }
        window.addEventListener('scroll', highlightNavOnScroll);

        // ============================================
        // FADE-IN ANIMATION (Intersection Observer)
        // ============================================
        const fadeElements = document.querySelectorAll('.fade-in');
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        fadeElements.forEach(el => fadeObserver.observe(el));

        // ============================================
        // SMOOTH SCROLL FOR ANCHOR LINKS
        // ============================================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - navbar.offsetHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // ============================================
        // MODAL FUNCTIONALITY
        // ============================================
        const modalTriggers = document.querySelectorAll('[data-modal]');
        const modalOverlays = document.querySelectorAll('.modal-overlay');
        const modalCloseButtons = document.querySelectorAll('.modal-close');
        let lastFocusedElement = null;

        function getFocusableElements(container) {
            return Array.from(container.querySelectorAll(
                'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
            )).filter(element => element.offsetParent !== null);
        }

        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const modal = document.getElementById(trigger.getAttribute('data-modal'));
                if (modal) {
                    lastFocusedElement = trigger;
                    modal.classList.add('active');
                    document.body.classList.add('modal-open');
                    const closeButton = modal.querySelector('.modal-close');
                    if (closeButton) closeButton.focus();
                }
            });
        });

        function closeModal(modal) {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
            if (lastFocusedElement) {
                lastFocusedElement.focus();
                lastFocusedElement = null;
            }
        }

        modalCloseButtons.forEach(button => {
            button.addEventListener('click', () => closeModal(button.closest('.modal-overlay')));
        });

        modalOverlays.forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) closeModal(overlay);
            });
        });

        // ============================================
        // LIGHTBOX / SLIDESHOW FUNCTIONALITY
        // ============================================
        const lightbox = document.getElementById('lightbox');
        const lightboxImgWrapper = document.getElementById('lightbox-img-wrapper');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxCounter = document.getElementById('lightbox-counter');
        const lightboxThumbnails = document.getElementById('lightbox-thumbnails');
        const lightboxCloseBtn = lightbox.querySelector('.lightbox-close');
        const lightboxPrevBtn = lightbox.querySelector('.lightbox-prev');
        const lightboxNextBtn = lightbox.querySelector('.lightbox-next');

        let currentLightboxImages = [];
        let currentLightboxIndex = 0;

        // Collect screenshot data from a modal
        function getScreenshotsFromModal(modalId) {
            const modal = document.getElementById(modalId);
            if (!modal) return [];
            
            const items = modal.querySelectorAll('.modal-screenshot-item');
            return Array.from(items).map(item => {
                const img = item.querySelector('img');
                const label = item.querySelector('.modal-screenshot-label');
                return {
                    src: img ? img.getAttribute('src') : '',
                    alt: img ? img.getAttribute('alt') : '',
                    label: label ? label.textContent : '',
                    hasImage: img && img.style.display !== 'none'
                };
            });
        }

        // Open lightbox
        function openLightbox(modalId, startIndex) {
            currentLightboxImages = getScreenshotsFromModal(modalId);
            currentLightboxIndex = startIndex;
            
            renderLightboxImage();
            renderLightboxThumbnails();
            
            lightbox.classList.add('active');
            document.body.classList.add('lightbox-open');
        }

        // Render current image in lightbox
        function renderLightboxImage(animate = true) {
            const data = currentLightboxImages[currentLightboxIndex];
            
            if (animate) {
                lightboxImgWrapper.classList.add('transitioning');
                setTimeout(() => {
                    updateLightboxContent(data);
                    lightboxImgWrapper.classList.remove('transitioning');
                }, 150);
            } else {
                updateLightboxContent(data);
            }

            lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
            lightboxCaption.textContent = data.label;
            
            // Update thumbnail active state
            document.querySelectorAll('.lightbox-thumb').forEach((thumb, i) => {
                thumb.classList.toggle('active', i === currentLightboxIndex);
            });
        }

        function updateLightboxContent(data) {
            lightboxImgWrapper.innerHTML = '';
            
            if (data.src && data.hasImage) {
                const img = document.createElement('img');
                img.src = data.src;
                img.alt = data.alt;
                img.onerror = function() {
                    this.parentElement.innerHTML = createPlaceholderHTML(data.label);
                };
                lightboxImgWrapper.appendChild(img);
            } else {
                lightboxImgWrapper.innerHTML = createPlaceholderHTML(data.label);
            }
        }

        function createPlaceholderHTML(label) {
            return `
                <div class="lightbox-placeholder">
                    <div class="lightbox-placeholder-icon">ðŸ–¼ï¸</div>
                    <div>${label}</div>
                    <div style="font-size: 0.8rem; opacity: 0.6;">Screenshot coming soon</div>
                </div>
            `;
        }

        // Render thumbnail strip
        function renderLightboxThumbnails() {
            lightboxThumbnails.innerHTML = '';
            currentLightboxImages.forEach((data, i) => {
                const thumb = document.createElement('div');
                thumb.className = `lightbox-thumb${i === currentLightboxIndex ? ' active' : ''}`;
                
                if (data.src && data.hasImage) {
                    const img = document.createElement('img');
                    img.src = data.src;
                    img.alt = data.label;
                    img.onerror = function() {
                        this.parentElement.innerHTML = `<div class="lightbox-thumb-placeholder">${i + 1}</div>`;
                    };
                    thumb.appendChild(img);
                } else {
                    thumb.innerHTML = `<div class="lightbox-thumb-placeholder">${i + 1}</div>`;
                }
                
                thumb.addEventListener('click', () => {
                    currentLightboxIndex = i;
                    renderLightboxImage();
                });
                
                lightboxThumbnails.appendChild(thumb);
            });
        }

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.classList.remove('lightbox-open');
        }

        // Navigate
        function lightboxNext() {
            currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
            renderLightboxImage();
        }

        function lightboxPrev() {
            currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
            renderLightboxImage();
        }

        // Event listeners for lightbox triggers (screenshot clicks in modals)
        document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
            const label = trigger.querySelector('.modal-screenshot-label')?.textContent || 'project screenshot';
            trigger.setAttribute('role', 'button');
            trigger.setAttribute('tabindex', '0');
            trigger.setAttribute('aria-label', `Open ${label} screenshot`);

            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const modalId = trigger.getAttribute('data-group');
                const index = parseInt(trigger.getAttribute('data-index'), 10);
                openLightbox(modalId, index);
            });

            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    const modalId = trigger.getAttribute('data-group');
                    const index = parseInt(trigger.getAttribute('data-index'), 10);
                    openLightbox(modalId, index);
                }
            });
        });

        // Lightbox controls
        lightboxCloseBtn.addEventListener('click', closeLightbox);
        lightboxNextBtn.addEventListener('click', lightboxNext);
        lightboxPrevBtn.addEventListener('click', lightboxPrev);

        // Click outside image to close
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Lightbox controls (highest priority)
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    lightboxNext();
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    lightboxPrev();
                }
                return;
            }

            // Modal close
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal-overlay.active');
                if (activeModal) closeModal(activeModal);
            }

            if (e.key === 'Tab') {
                const activeModal = document.querySelector('.modal-overlay.active');
                if (!activeModal) return;

                const focusableElements = getFocusableElements(activeModal);
                if (!focusableElements.length) return;

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });

        // Touch/swipe support for lightbox on mobile
        let touchStartX = 0;
        let touchEndX = 0;

        lightbox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeDistance = touchEndX - touchStartX;
            
            if (Math.abs(swipeDistance) > 50) {
                if (swipeDistance > 0) {
                    lightboxPrev(); // Swipe right = previous
                } else {
                    lightboxNext(); // Swipe left = next
                }
            }
        }, { passive: true });

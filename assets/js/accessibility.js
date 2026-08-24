/**
 * Accessibility Enhancements
 * - Reduced motion support
 * - Focus visible polyfill
 * - Keyboard navigation improvements
 */

(function() {
    'use strict';

    // ============================================
    // REDUCED MOTION SUPPORT
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleReducedMotion() {
        if (prefersReducedMotion.matches) {
            document.documentElement.classList.add('reduce-motion');
            document.documentElement.style.scrollBehavior = 'auto';
            
            // Disable animations
            const animatedElements = document.querySelectorAll('.fade-in, .transition, [class*="animate"]');
            animatedElements.forEach(el => {
                el.style.transition = 'none';
                el.style.animation = 'none';
            });
        } else {
            document.documentElement.classList.remove('reduce-motion');
            document.documentElement.style.scrollBehavior = 'smooth';
        }
    }

    handleReducedMotion();
    prefersReducedMotion.addEventListener('change', handleReducedMotion);

    // ============================================
    // FOCUS VISIBLE POLYFILL
    // ============================================
    let hadKeyboardEvent = false;
    const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            hadKeyboardEvent = true;
        }
    });

    document.addEventListener('mousedown', function() {
        hadKeyboardEvent = false;
    });

    document.addEventListener('focusin', function(e) {
        if (hadKeyboardEvent) {
            e.target.classList.add('focus-visible');
        } else {
            e.target.classList.remove('focus-visible');
        }
    });

    document.addEventListener('focusout', function(e) {
        e.target.classList.remove('focus-visible');
    });

    // Add focus-visible styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .focus-visible {
            outline: 3px solid rgba(56, 189, 248, 0.85) !important;
            outline-offset: 3px !important;
        }
        
        .reduce-motion *,
        .reduce-motion *::before,
        .reduce-motion *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // ENHANCED SKIP LINK FUNCTIONALITY
    // ============================================
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.setAttribute('tabindex', '-1');
                target.focus();
                target.removeAttribute('tabindex');
            }
        });
    }

    // ============================================
    // ARIA LIVE REGION ANNOUNCEMENTS
    // ============================================
    function announceToScreenReader(message) {
        let announcer = document.getElementById('aria-announcer');
        if (!announcer) {
            announcer = document.createElement('div');
            announcer.id = 'aria-announcer';
            announcer.setAttribute('role', 'status');
            announcer.setAttribute('aria-live', 'polite');
            announcer.setAttribute('aria-atomic', 'true');
            announcer.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;';
            document.body.appendChild(announcer);
        }
        announcer.textContent = message;
    }

    // Announce theme changes
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDark = document.documentElement.dataset.theme === 'dark';
            announceToScreenReader(`Switched to ${isDark ? 'dark' : 'light'} theme`);
        });
    }

    // Announce modal open/close
    document.addEventListener('DOMContentLoaded', function() {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.attributeName === 'class') {
                        const isActive = modal.classList.contains('active');
                        if (isActive) {
                            const modalTitle = modal.querySelector('h2, h3')?.textContent || 'Dialog';
                            announceToScreenReader(`${modalTitle} opened`);
                        }
                    }
                });
            });
            observer.observe(modal, { attributes: true });
        });
    });

    // ============================================
    // KEYBOARD NAVIGATION ENHANCEMENTS
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        // Escape key closes all modals and lightboxes
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal-overlay.active, .lightbox.active');
                if (activeModal) {
                    const closeBtn = activeModal.querySelector('.modal-close, .lightbox-close');
                    if (closeBtn) closeBtn.click();
                }
            }
        });

        // Ensure all interactive elements are keyboard accessible
        const interactiveElements = document.querySelectorAll('[onclick]:not(button):not(a):not(input)');
        interactiveElements.forEach(el => {
            if (!el.hasAttribute('tabindex')) {
                el.setAttribute('tabindex', '0');
            }
            if (!el.hasAttribute('role')) {
                el.setAttribute('role', 'button');
            }
        });
    });

    // ============================================
    // CONTRAST CHECK HELPER (for development)
    // ============================================
    window.checkContrast = function() {
        const elements = document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, a, button');
        const issues = [];
        
        elements.forEach(el => {
            const style = window.getComputedStyle(el);
            const color = style.color;
            const bgColor = style.backgroundColor;
            
            // Simple check - in production you'd use a proper contrast ratio calculator
            if (color === 'rgb(0, 0, 0)' && bgColor === 'rgb(0, 0, 0)') {
                issues.push(el);
            }
        });
        
        console.log(`Found ${issues.length} potential contrast issues`);
        return issues;
    };

})();

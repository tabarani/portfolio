# Mustafa Elnaiem Portfolio

A modern, accessible portfolio website built with Jekyll showcasing intelligent systems for modern education.

## Features

### CMS Integration
- **Decap CMS** for content management at `/admin`
- Manage projects, site settings, testimonials, and blog posts via web interface
- GitHub-backed version control

### SEO & Discoverability
- Automatic sitemap generation (`/sitemap.xml`)
- Enhanced meta tags (Open Graph, Twitter Cards)
- Schema.org structured data
- RSS feed for blog posts (`/feed.xml`)
- robots.txt for search engine guidance

### Accessibility
- WCAG 2.1 AA compliant
- Skip links and ARIA live regions
- Reduced motion support for vestibular disorders
- Focus visible polyfill
- Full keyboard navigation
- Screen reader announcements

### Performance
- Minimal JavaScript dependencies
- CSS print stylesheet
- Optimized font loading
- Debounced scroll handlers

### Additional Features
- Dark/light theme with localStorage persistence
- Responsive design (mobile-first)
- Blog section with tag filtering
- Testimonials section
- Custom 404 page
- Lightbox image viewer

## Local Development

### Prerequisites
- Ruby 3.0+
- Bundler

### Installation

```bash
# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve --livereload

# Open http://localhost:4000
```

### Build for Production

```bash
bundle exec jekyll build
```

## Content Management

### Access CMS
Navigate to `https://your-domain.com/admin` and authenticate with GitHub.

### Available Collections

1. **Projects** (`_projects/`)
   - Card title, description, screenshot
   - Tech stack chips
   - Modal content with sections
   - Metrics and screenshots

2. **Blog Posts** (`_posts/`)
   - Title, date, tags
   - Markdown content
   - SEO description

3. **Site Settings** (`_data/settings.yml`)
   - SEO metadata
   - Hero section
   - About section
   - Contact information
   - Testimonials

4. **Testimonials**
   - Client name and title
   - Quote text

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _data/
│   └── settings.yml     # Site content (CMS-managed)
├── _includes/           # Reusable HTML components
├── _layouts/            # Page templates
├── _posts/              # Blog posts
├── _projects/           # Project markdown files
├── admin/               # Decap CMS configuration
├── assets/
│   ├── css/             # Stylesheets
│   │   ├── style.css    # Main styles
│   │   └── print.css    # Print optimization
│   └── js/
│       ├── main.js      # Core functionality
│       └── accessibility.js  # A11y enhancements
├── images/              # Image assets
├── index.html           # Homepage
├── 404.html             # Custom error page
└── robots.txt           # Search engine directives
```

## Deployment

### GitHub Pages

The site is configured for GitHub Pages deployment. Push to `main` branch to trigger automatic build.

### Manual Deployment

```bash
bundle exec jekyll build
# Deploy _site directory to your hosting
```

## Customization

### Adding a New Project

Via CMS:
1. Go to `/admin`
2. Click "Projects" → "New Project"
3. Fill in all fields
4. Publish

Manually:
```markdown
---
title: "Project Name"
card_tag: "AI • RAG"
status: "Production"
card_description: "Brief description"
card_screenshot: "/images/screenshot.png"
tech:
  - FastAPI
  - Qdrant
  - Python
role: "Lead Architect"
sections:
  - title: "Overview"
    text: "Project description..."
---
```

### Changing Theme Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
    --primary: #0a1628;
    --secondary: #1d4ed8;
    --accent: #38bdf8;
    /* ... */
}
```

## License

MIT License - See LICENSE file for details.

## Contact

- **Email**: [8masan8@gmail.com](mailto:8masan8@gmail.com)
- **GitHub**: [@tabarani](https://github.com/tabarani)
- **LinkedIn**: [Mustafa Elnaiem](https://www.linkedin.com/in/mustafa-elnaiem-78098872/)

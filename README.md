# Leonardo Rocha - Personal Portfolio

A minimalist personal portfolio showcasing professional experience, projects, and technical expertise. Built with vanilla HTML, CSS, and JavaScript for maximum performance.


## ✨ Highlights

- **Bilingual** (Portuguese & English) with manual toggle, defaults to Portuguese
- **Mobile-first design** fully responsive across all devices
- **Dark theme** built on the "Nocturne" design tokens the page was designed against
- **SEO-optimized** with structured metadata, semantic HTML and JSON-LD
- **Zero build step** - pure vanilla HTML/CSS/JavaScript, no framework, no bundler
- **Lightning-fast** - hosted on AWS CloudFront CDN


## 📊 What's Inside

**Hero** - Headline stats: Athena cost cut, rows processed per day, documentation effort, training NPS

**Personal projects** - Work built outside the job, from code to infrastructure

**Experience** - Every role at Itaú Unibanco since 2021, with the outcome each one moved

**Education & certifications** - Academic training and AWS certifications


## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Infrastructure | AWS S3 (Static Hosting) + CloudFront (CDN) + Route 53 (DNS) |
| Optimization | Mobile-first responsive, fluid (`clamp()`) hero typography, i18n, scroll reveal |
| Typography | Inter, served by Google Fonts (system-ui fallback) |
| SEO | Semantic HTML, Open Graph/Twitter meta tags, canonical URL, JSON-LD Person |
| Development | Built with [Claude Code](https://claude.com/claude-code) |


## 📁 Project Structure

```
claude-my-personal-web-page/
├── index.html              # Main page with all sections
├── scripts/
│   └── main.js             # i18n, mobile menu, contact dropdown, scroll reveal
├── styles/
│   └── main.css            # Design tokens and mobile-first responsive layout
├── assets/                 # Logo, favicon, apple-touch-icon
└── README.md               # This file
```


## 🚀 Local Development

**Prerequisites:** Python 3.x or Node.js

**Setup:**

```bash
# Clone repository
git clone https://github.com/leonardosantosrocha/claude-my-personal-web-page.git
cd claude-my-personal-web-page

# Start local server (Python)
python -m http.server 8000

# Or with Node.js (http-server)
npx http-server .

# Open browser
# http://localhost:8000
```


## 📡 Deployment

**Current Setup:** AWS S3 + CloudFront

**Architecture Diagram:**

```
                          ┌─────────────────────┐
                          │   User Browser      │
                          │  (Desktop/Mobile)   │
                          └──────────┬──────────┘
                                     │
                                     │ HTTPS Request
                                     ▼
                          ┌─────────────────────┐
                          │    Route 53         │
                          │  (DNS Resolution)   │
                          └──────────┬──────────┘
                                     │
                                     │ Points to
                                     ▼
                          ┌─────────────────────┐
                          │   CloudFront CDN    │
                          │  (Global Caching)   │
                          └──────────┬──────────┘
                                     │
                                     │ Cache Miss
                                     ▼
                          ┌─────────────────────┐
                          │   AWS S3 Bucket     │
                          │ (Static HTML/CSS/JS)│
                          └─────────────────────┘

Features:
- Origin: S3 Bucket (origin domain)
- Edge: CloudFront distribution (global caching)
- SSL: Automatic HTTPS via CloudFront
- TTL: Configurable cache expiration
- Invalidation: Automatic on code changes
```

**Performance:**
- Sub-second load times (global edge locations)
- Automatic cache invalidation on updates
- Gzip compression enabled


## 🌍 Features Explained

### Internationalization (i18n)
- Defaults to Portuguese (BR)
- Toggle between Portuguese (BR) and English
- Both languages ship in the markup; CSS shows one and hides the other
- Preference saved in localStorage; `<html lang>` and the mailto subject follow the choice

### Theme
- Single dark theme, built on the design system's tokens (`--color-bg: #161826`, blurple accent)
- No light mode: the palette the page was designed against is dark only

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (base), tablet (768px+), desktop (1024px+)
- Touch-friendly (44px minimum tap targets)
- Navigation collapses into a menu below 768px; the closed panel is fully hidden, so it stays out of tab order
- Hero headline, tags and stats scale fluidly (`clamp()`) with the viewport instead of jumping at breakpoints
- Header's "Contato" button opens an anchored dropdown (email, LinkedIn, GitHub) instead of navigating to a separate section

### Motion
- Sections fade in on scroll via IntersectionObserver
- Nothing is hidden by CSS: without JavaScript, or under `prefers-reduced-motion`, all content renders immediately

---
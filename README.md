# Personal Portfolio

A minimalist personal portfolio showcasing professional experience, projects, and technical expertise. Built with vanilla HTML, CSS, and JavaScript for maximum performance.


## ✨ Highlights

- **Bilingual** (Portuguese & English) with manual toggle, defaults to Portuguese
- **Mobile-first design** fully responsive across all devices
- **One grid for the whole page** - every section hangs off a single continuous chronological axis
- **Proof up front** - a single monospace line in the hero carries the headline numbers
- **Five colour tokens** - paper, ink, muted ink, rule, accent; the accent appears in exactly three places
- **SEO-optimized** with structured metadata, semantic HTML and JSON-LD
- **Zero build step** - pure vanilla HTML/CSS/JavaScript, no framework, no bundler
- **Lightning-fast** - hosted on AWS CloudFront CDN


## 📊 What's Inside

**Hero** - Name, one line, and a single line of proof in monospace

**Personal projects** - Work built outside the job, from code to infrastructure

**Experience** - Every role at Itaú Unibanco since 2021. Each delivery is a single line, its metric highlighted inline, with a rule-coloured dash holding the left column and the role's stack listed underneath

**Education & certifications** - Academic training and AWS certifications


## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Infrastructure | AWS S3 (Static Hosting) + CloudFront (CDN) + Route 53 (DNS) |
| Optimization | Mobile-first responsive, fluid (`clamp()`) hero typography, i18n |
| Typography | Inter for text, IBM Plex Mono for dates, figures and labels (Google Fonts, system fallbacks) |
| SEO | Semantic HTML, Open Graph/Twitter meta tags, canonical URL, JSON-LD Person |
| Development | Built with [Claude Code](https://claude.com/claude-code) |


## 📁 Project Structure

```
claude-my-personal-web-page/
├── index.html              # Main page with all sections
├── scripts/
│   └── main.js             # i18n, mobile menu, contact dropdown, scroll spy, load-in
├── styles/
│   └── main.css            # Design tokens and mobile-first responsive layout
├── assets/                 # favicon.png and apple-touch-icon.png are referenced;
│                           # logo.png, me.png and me.webp are currently unused
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
- Single light theme: paper `#FAFAF8`, ink `#1A1A18`, muted ink `#5C5C57`, rule `#E2E2DC`, accent `#2C4A5E`
- The accent is reserved for links, the marker for the present on the axis, and the focus ring — nothing else
- Figures stand out through the monospaced face and weight, never through colour
- All text pairs clear WCAG AA against the paper (6.4:1 at the lowest)

### The chronological axis
- One 1px rule runs behind projects, experience, education and certifications
- Every section uses the same two-column grid: monospaced label on the left, content on the right
- Two solid markers sit on the axis, and only two — the current role and the degree in progress. Everything finished gets a hollow marker
- Read top to bottom, the page is a time series: Jul 2026 back to Jan 2017

### Deliveries
- Each role holds a list of deliveries, one line each, sourced verbatim from the LinkedIn export — no paraphrasing
- Any metric in a delivery's text is highlighted inline with `.num` (same treatment as the hero's proof line)
- A rule-coloured dash holds the left column. It is structure, not content, so it carries `aria-hidden` and never reaches a screen reader
- The dash column is sized `auto`, so it takes the width of the dash itself rather than reserving space for a figure
- Spacing follows the rest of the page: `gap: 12px` between deliveries and between the dash and the text, `max-width: 68ch` on the text — the same values `.axis__body` uses
- Each role closes with its stack, listed in `.axis__tech` underneath the delivery list

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (base), tablet (768px+), desktop (1024px+)
- The label column collapses on mobile: the date stacks above the content, the axis stays put
- The delivery grid does not collapse — its marker column is only as wide as the dash, so it holds at every width
- The header carries no wordmark: navigation on the left, language and menu controls pushed right by `margin-left: auto`
- Navigation collapses into a menu below 768px; the closed panel is fully hidden, so it stays out of tab order
- The hero headline scales fluidly (`clamp()`) with the viewport instead of jumping at breakpoints
- Header's "Contato" button opens an anchored dropdown (email, LinkedIn, GitHub) instead of navigating to a separate section

### Motion
- One orchestrated moment on load: the name, the opening line and the proof line rise in sequence (90ms apart), then the axis draws itself top to bottom
- No per-section reveal while scrolling
- Nothing is hidden by CSS: without JavaScript, or under `prefers-reduced-motion`, the page renders whole
- A 600ms timeout backs up the `requestAnimationFrame` handoff, so a page opened in a background tab never stays invisible

---
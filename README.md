# Leonardo Rocha - Personal Portfolio

A minimalist personal portfolio showcasing professional experience, projects, and technical expertise. Built with vanilla HTML, CSS, and JavaScript for maximum performance.


## ✨ Highlights

- **Bilingual** (Portuguese & English) with smart language detection
- **Mobile-first design** fully responsive across all devices
- **Dark mode** with automatic system preference detection
- **SEO-optimized** with structured metadata and semantic HTML
- **Zero dependencies** - pure vanilla HTML/CSS/JavaScript
- **Lightning-fast** - hosted on AWS CloudFront CDN


## 📊 What's Inside

**Profile** - 5+ years as Data Engineer & Analytics specialist at Itaú Unibanco

**Projects** - Showcase of professional work and technical contributions

**Curriculum** - Detailed professional experience, academic training, and AWS certifications


## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Infrastructure | AWS S3 (Static Hosting) + CloudFront (CDN) |
| Optimization | Mobile-responsive, Dark mode, i18n |
| SEO | robots.txt, sitemap.xml, semantic HTML |


## 📁 Project Structure

```
claude-my-personal-web-page/
├── src/
│   ├── index.html              # Main page with all sections
│   ├── scripts/
│   │   └── main.js             # i18n, dark mode, interactivity
│   ├── styles/
│   │   └── main.css            # Responsive design, dark mode
│   └── assets/
│       └── images/             # Logo and profile photo
├── robots.txt                   # SEO crawler configuration
├── sitemap.xml                  # XML sitemap for search engines
└── README.md                    # This file
```


## 🚀 Local Development

**Prerequisites:** Python 3.x or Node.js

**Setup:**

```bash
# Clone repository
git clone https://github.com/leonardosantosrocha/claude-my-personal-web-page.git
cd claude-my-personal-web-page

# Start local server (Python)
cd src
python -m http.server 8000

# Or with Node.js (http-server)
npx http-server src

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
- Image optimization and lazy loading


## 🌍 Features Explained

### Internationalization (i18n)
- Automatic browser language detection
- Toggle between Portuguese (BR) and English
- Preference saved in localStorage

### Dark Mode
- Auto-detect system preference (prefers-color-scheme)
- Manual toggle with persistent storage
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Breakpoints: 360px, 480px, 640px, 768px, 1024px+
- Touch-friendly (44px minimum tap targets)
- Optimized for all modern devices

---
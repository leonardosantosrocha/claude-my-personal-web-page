# Claude's Personal Portfolio

Portfólio técnico minimalista de Leonardo Rocha — Data Engineer & AI Products. Construído com HTML, CSS, JavaScript puro e hospedado em AWS.

---

## 📂 Estrutura do Projeto

```
claude-my-personal-web-page/
├── src/
│   ├── index.html          # Página principal
│   ├── scripts/
│   │   └── main.js         # JavaScript (dark mode, i18n)
│   ├── styles/
│   │   └── main.css        # Estilos CSS
│   └── assets/
│       └── images/         # Logo, foto
├── .claude/                # Configurações Claude Code
├── robots.txt              # SEO crawlers
├── sitemap.xml             # Mapa do site
└── README.md               # Este arquivo
```

---

## 🏗️ Arquitetura

**Stack:** HTML5 + CSS3 + JavaScript vanilla

**Infraestrutura:** AWS S3 (hosting) + CloudFront (CDN)

**Principais features:**
- Internacionalização nativa (PT/BR ↔ EN)
- Dark mode automático com override manual
- Design responsivo mobile-first
- Zero dependências externas
- SEO otimizado (robots.txt, sitemap.xml)

**Trade-offs:** Máxima performance e simplicidade vs. sem features de SPA

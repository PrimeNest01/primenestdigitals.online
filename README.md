# PrimeNest Digitals — Astro v2 Rebuild

> **Marketing With a Mechanism.** Astro static site for GitHub Pages.
> Black + purple + white palette · Fraunces + Poppins + Inter · 3.5s Mechanism preloader · R mark motif.

## Quick Start

```bash
# Install deps
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview
```

## Deploy to GitHub Pages

1. Push this repo to your GitHub
2. Go to **Repo → Settings → Pages → Source = GitHub Actions**
3. Push to `main` — the workflow in `public/.github/workflows/deploy.yml` will build + deploy automatically
4. The CNAME file (`primenestdigitals.online`) is auto-generated during build, so your custom domain continues to resolve

## Project Structure

```
primenest-v2/
├── astro.config.mjs              # Astro config (static output, GitHub Pages)
├── tailwind.config.mjs           # Tailwind theme (brand tokens)
├── package.json
├── public/
│   ├── .github/workflows/
│   │   └── deploy.yml             # GitHub Actions auto-deploy
│   ├── favicon-32x32.png         # ← COPY from current site
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── site.webmanifest
│   ├── robots.txt
│   └── og-image.png              # ← CREATE 1200×630 social preview
└── src/
    ├── styles/
    │   └── global.css            # Full design system (849 lines)
    ├── layouts/
    │   └── BaseLayout.astro      # HTML shell + cursor + grain + preloader + JSON-LD
    ├── components/
    │   ├── RMark.astro           # Reusable R logo (4 sizes)
    │   ├── Header.astro          # Sticky nav with active state
    │   ├── Footer.astro          # 4-column footer + R watermark
    │   └── MechanismPreloader.astro  # 3.5s opening animation
    ├── data/
    │   ├── services.js           # 9 services (full data, used by services.astro + [slug])
    │   ├── case-studies.js       # 3 case studies (full narrative chapters)
    │   └── blog-posts.js        # 12 blog post metadata
    └── pages/
        ├── index.astro           # / (Home)
        ├── 404.astro             # /404.html
        ├── about.astro           # /pages/about.html
        ├── services.astro        # /pages/services.html
        ├── portfolio.astro       # /pages/portfolio.html
        ├── blog.astro            # /pages/blog.html
        ├── contact.astro         # /pages/contact.html
        ├── privacy.astro         # /pages/privacy.html
        ├── services/[slug]/index.astro     # ×9 service detail pages
        ├── case-studies/[slug]/index.astro # ×3 case study pages
        └── blog-posts/[slug].astro          # ×12 blog post pages
```

## URL Preservation Contract

All 33 of the existing URLs are preserved 1:1:

| Current URL | New URL | Source |
|---|---|---|
| `/` | `/` | `src/pages/index.astro` |
| `/pages/about.html` | `/pages/about.html` | `src/pages/about.astro` |
| `/pages/services.html` | `/pages/services.html` | `src/pages/services.astro` |
| `/pages/portfolio.html` | `/pages/portfolio.html` | `src/pages/portfolio.astro` |
| `/pages/blog.html` | `/pages/blog.html` | `src/pages/blog.astro` |
| `/pages/contact.html` | `/pages/contact.html` | `src/pages/contact.astro` |
| `/pages/privacy.html` | `/pages/privacy.html` | `src/pages/privacy.astro` |
| `/pages/terms.html` | `/pages/terms.html` | Copy of privacy.astro (Phase 6) |
| `/404.html` | `/404.html` | `src/pages/404.astro` |
| `/pages/services/meta-ads/index.html` | Same | `src/pages/services/[slug]/index.astro` (×9) |
| `/pages/case-studies/{slug}/index.html` | Same | `src/pages/case-studies/[slug]/index.astro` (×3) |
| `/pages/blog-posts/{slug}.html` | Same | `src/pages/blog-posts/[slug].astro` (×12) |

## Production Migration Checklist

### Phase 1: Foundation ✅ (DONE in this build)
- [x] Astro project scaffolded
- [x] Tailwind + sitemap integration installed
- [x] astro.config.mjs configured for GitHub Pages
- [x] BaseLayout with full design system
- [x] R mark, Header, Footer, MechanismPreloader components
- [x] services.js, case-studies.js, blog-posts.js data files
- [x] GitHub Actions workflow for auto-deploy

### Phase 2: Core Pages ✅ (DONE)
- [x] Home (with mechanism animation + founder note + stats pill)
- [x] About (story + values + timeline + founder feature)
- [x] Services overview (4 pillars + 9 service list)
- [x] Contact (3 channels + form)
- [x] Portfolio (30 valid items)
- [x] Blog index (12 posts)
- [x] 404

### Phase 3: Service Detail Pages ✅ (DONE — one template, 9 URLs)
- [x] Service detail template (Meta Ads as example)
- [x] All 9 services configured in `services.js`
- [ ] Replace tagline auto-em-italic with proper tagged taglines in `services.js`

### Phase 4: Case Studies ✅ (DONE — one template, 3 URLs)
- [x] Case study template (sticky-scroll 4-chapter narrative)
- [x] All 3 case studies configured in `case-studies.js`

### Phase 5: Blog Posts ⚠️ (PARTIAL — 1 of 12 has full content)
- [x] Blog post template built
- [x] 12 post slugs/metadata configured in `blog-posts.js`
- [x] "Why Your Facebook Ads..." has full content (sample)
- [ ] Migrate the other 11 blog posts from the existing live site
  - To do this, copy the article HTML from `/analysis/pages/blog-posts/{slug}.html`
  - Strip the wrapper (header/footer/etc.) and keep only the article body
  - Paste into the `sampleContent` template literal in `src/pages/blog-posts/[slug].astro`
  - OR convert to MDX (cleaner long-term) and rewrite the template

### Phase 6: Polish + Ship ⚠️ (PENDING)
- [ ] Copy static assets (favicon, manifest, icons) from current site to `/public`
- [ ] Create proper 1200×630 OG image
- [ ] Replace placeholder founder photo (initials "HG") with real headshot
- [ ] Replace 30 portfolio gradient placeholders with real project images
- [ ] Replace 3 case study gradient placeholders with real case study images
- [ ] Replace 12 blog post gradient placeholders with real blog hero images
- [ ] Build Terms of Service page (duplicate privacy.astro, swap content)
- [ ] Test the contact form (POST to your CRM endpoint)
- [ ] Verify sitemap.xml generates correctly
- [ ] Run Lighthouse audit (target 90+ on all metrics)
- [ ] Test all internal links
- [ ] Push to GitHub main → auto-deploy via Actions

## Brand Color Tokens

```css
--black:    #0A0A0A;   /* primary background */
--black-2:  #111111;   /* raised cards */
--black-3:  #1A1A1A;   /* alt sections */
--white:    #FFFFFF;   /* primary text */
--purple:   #8B5CF6;   /* brand accent (CTAs only) */
--purple-d: #7C3AED;   /* gradient start */
--purple-l: #A855F7;   /* gradient end */
--purple-grad: linear-gradient(135deg, #7C3AED 0%, #A855F7 100%);
--purple-glow: rgba(139,92,246,0.35);   /* drop shadows */
--purple-dim:  rgba(139,92,246,0.08);   /* subtle bg tints */
--purple-border: rgba(139,92,246,0.30); /* hover borders */
```

## Typography

- **Display**: Fraunces (variable serif, italic axis used for emphasis)
- **Brand wordmark**: Poppins (geometric sans, matches LinkedIn brand)
- **Body**: Inter (clean sans for paragraphs)
- **Mono**: JetBrains Mono (for metric numbers, dates, breadcrumbs)

## The Mechanism Preloader

3.5-second opening animation for first-time visitors only:

1. **0–1.5s** — Wireframe mechanism assembles (8 purple dots + connecting lines)
2. **1.5–2.5s** — R mark emerges at center with scale + rotate + glow
3. **2.5–3.2s** — "PRIMENEST DIGITALS" types out below
4. **3.2–3.6s** — "Marketing With a Mechanism" tagline fades in
5. **3.6s** — Page splits horizontally via clip-path to reveal content

Guarded by `sessionStorage` so returning visitors within the same session skip it entirely. Respects `prefers-reduced-motion`.

## License

Proprietary — © 2026 PrimeNest Digitals. All rights reserved.

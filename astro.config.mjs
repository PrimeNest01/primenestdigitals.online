import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ IMPORTANT: For GitHub Pages project sites (https://user.github.io/repo/),
// set `site` to your custom domain and `base` to '/' (root).
// For user/org sites (https://user.github.io/), set `site` and leave `base` as '/'.
// PrimeNest uses a custom domain (primenestdigitals.online) so base stays '/'.

export default defineConfig({
  site: 'https://primenestdigitals.online',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    // Output /pages/about.astro as /pages/about.html (preserves your existing URLs)
    format: 'file',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      hostname: 'https://primenestdigitals.online',
      lastmod: new Date(),
    }),
  ],
});

// ============================================================
// Post-build script: convert [slug].html → [slug]/index.html
// Also adds CNAME for GitHub Pages custom domain
// ============================================================
// This preserves the EXACT URL structure from the original site:
//   /pages/services/meta-ads/index.html  (not /pages/services/meta-ads.html)
//   /pages/case-studies/{slug}/index.html
// ============================================================

import { promises as fs } from 'fs';
import path from 'path';

const distDir = './dist';

async function convertRouteToDirectory(route) {
  const routeDir = path.join(distDir, route);
  try {
    const entries = await fs.readdir(routeDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'index.html') {
        const slug = entry.name.replace('.html', '');
        const slugDir = path.join(routeDir, slug);
        const oldPath = path.join(routeDir, entry.name);
        const newPath = path.join(slugDir, 'index.html');

        await fs.mkdir(slugDir, { recursive: true });
        await fs.rename(oldPath, newPath);
        console.log(`  ✓ ${route}/${entry.name} → ${route}/${slug}/index.html`);
      }
    }
  } catch (e) {
    console.log(`  (skip) ${route}: ${e.message}`);
  }
}

async function addCname() {
  const cnamePath = path.join(distDir, 'CNAME');
  await fs.writeFile(cnamePath, 'primenestdigitals.online\n');
  console.log('  ✓ Added CNAME → primenestdigitals.online');
}

async function addNojekyll() {
  const nojekyllPath = path.join(distDir, '.nojekyll');
  await fs.writeFile(nojekyllPath, '');
  console.log('  ✓ Added .nojekyll');
}

async function addRobotsTxt() {
  // Already in public/, but ensure it's there
  const robotsPath = path.join(distDir, 'robots.txt');
  try {
    await fs.access(robotsPath);
    console.log('  ✓ robots.txt present');
  } catch {
    await fs.writeFile(robotsPath, 'User-agent: *\nAllow: /\n\nSitemap: https://primenestdigitals.online/sitemap.xml\n');
    console.log('  ✓ Created robots.txt');
  }
}

console.log('Post-build: URL structure fix');
await convertRouteToDirectory('pages/services');
await convertRouteToDirectory('pages/case-studies');
console.log('\nPost-build: GitHub Pages essentials');
await addCname();
await addNojekyll();
await addRobotsTxt();
console.log('\n✓ Post-build complete.');

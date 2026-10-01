// Render the LinkedIn hook graphic from template.html to a PNG.
// Usage: node render.mjs <out.png> [configJsonPath]
// config: { headlineHtml, kicker, sub, handle, file, codeHtml }
import pw from '/opt/node-tools/node_modules/playwright/index.js';
const { chromium } = pw;
import { readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = process.argv[2] || resolve(here, 'out.png');
const cfgPath = process.argv[3];
const cfg = cfgPath && existsSync(cfgPath) ? JSON.parse(readFileSync(cfgPath, 'utf8')) : {};

const templateUrl = pathToFileURL(resolve(here, 'template.html')).href;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });
  await page.goto(templateUrl, { waitUntil: 'networkidle' });

  await page.evaluate((c) => {
    const set = (id, html) => { const el = document.getElementById(id); if (el && html != null) el.innerHTML = html; };
    set('headline', c.headlineHtml);
    set('kicker', c.kicker);
    set('sub', c.sub);
    set('handle', c.handle);
    set('file', c.file);
    set('code', c.codeHtml);
  }, cfg);

  // ensure fonts are ready
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);

  await page.screenshot({ path: out, type: 'png' });
  console.log('rendered ->', out);
} finally {
  await browser.close();
}

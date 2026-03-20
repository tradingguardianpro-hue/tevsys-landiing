/**
 * Optimiza imágenes para Core Web Vitals (LCP, CLS).
 * Genera WebP y comprime PNG. Uso: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..', 'public');

const IMAGES = [
  { input: 'mano robotica central web.png', webp: 'mano-robotica-central-web.webp', maxWidth: 1200 },
  { input: 'assets/images/home/cards/card-1-input.png', webp: 'assets/images/home/cards/card-1-input.webp', maxWidth: 800 },
  { input: 'assets/images/home/cards/card-2-hyperclose.png', webp: 'assets/images/home/cards/card-2-hyperclose.webp', maxWidth: 800 },
  { input: 'assets/images/home/cards/card-3-sml.png', webp: 'assets/images/home/cards/card-3-sml.webp', maxWidth: 800 },
  { input: 'assets/images/home/cards/card-4-evidencia.png', webp: 'assets/images/home/cards/card-4-evidencia.webp', maxWidth: 800 },
  { input: 'assets/images/plans/essential-card.png', webp: 'assets/images/plans/essential-card.webp', maxWidth: 800 },
  { input: 'assets/images/plans/advanced-card.png', webp: 'assets/images/plans/advanced-card.webp', maxWidth: 800 },
  { input: 'assets/images/plans/pro-card.png', webp: 'assets/images/plans/pro-card.webp', maxWidth: 800 },
];

async function optimize(inputPath, outputWebpPath, maxWidth) {
  const fullInput = path.join(ROOT, inputPath);
  const fullWebp = path.join(ROOT, outputWebpPath);

  if (!fs.existsSync(fullInput)) {
    console.warn('⚠ Skip (no existe):', inputPath);
    return;
  }

  const meta = await sharp(fullInput).metadata();
  const w = Math.min(meta.width || 1200, maxWidth);
  const h = Math.round(((meta.height || 800) / (meta.width || 1200)) * w);

  await sharp(fullInput)
    .resize(w, h)
    .webp({ quality: 82 })
    .toFile(fullWebp);

  const before = fs.statSync(fullInput).size;
  const after = fs.statSync(fullWebp).size;
  const saved = ((1 - after / before) * 100).toFixed(1);
  console.log(`✓ ${path.basename(inputPath)} → ${outputWebpPath} (${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB, -${saved}%)`);
}

async function main() {
  console.log('Optimizando imágenes...\n');
  for (const img of IMAGES) {
    try {
      await optimize(img.input, img.webp, img.maxWidth);
    } catch (e) {
      console.error('Error:', img.input, e.message);
    }
  }
  console.log('\nListo. Ejecuta build para ver cambios.');
}

main();

/**
 * Añade borde más claro y reduce imagen.
 * Uso: npm run image:border
 *      node scripts/add-border-to-image.js [input] [output]
 */

const sharp = require('sharp');
const path = require('path');

const INPUT = process.argv[2] || 'public/assets/images/home/cards/card-1-input.png';
const OUTPUT = process.argv[3] || 'public/assets/images/home/cards/card-1-bordered.png';

const BORDER_COLOR = '#1a1a1a';  // gris oscuro, borde ligero
const BORDER_PX = 24;
const SCALE = 0.9;               // 0.9 = 90% tamaño

async function main() {
  const inputPath = path.join(__dirname, '..', INPUT);
  const outputPath = path.join(__dirname, '..', OUTPUT);

  const metadata = await sharp(inputPath).metadata();
  const { width, height } = metadata;

  const newWidth = Math.round(width * SCALE);
  const newHeight = Math.round(height * SCALE);
  const pad = BORDER_PX;

  await sharp(inputPath)
    .resize(newWidth, newHeight)
    .extend({
      top: pad,
      bottom: pad,
      left: pad,
      right: pad,
      background: BORDER_COLOR,
    })
    .png()
    .toFile(outputPath);

  console.log('✓ Guardado:', outputPath);
  console.log(`  ${width}x${height} → ${newWidth + pad * 2}x${newHeight + pad * 2} (borde ${BORDER_PX}px)`);
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});

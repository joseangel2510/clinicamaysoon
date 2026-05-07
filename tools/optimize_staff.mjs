import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const jobs = [
  { src: "media/staff/DSC_0334.jpg", out: "public/images/team/laura-fernandez.webp" },
  { src: "media/staff/DSC_0079.jpg", out: "public/images/team/lisa-recepcion.webp" },
  { src: "media/staff/DSC_9875.jpg", out: "public/images/team/ricardo-masajista.webp" },
  { src: "media/staff/DSC_9956.jpg", out: "public/images/team/sandra-auxiliar.webp" },
  { src: "media/staff/DSC_0229.jpg", out: "public/images/team/dr-jose-david.webp" },
];

for (const { src, out } of jobs) {
  const srcPath = path.join(root, src);
  const outPath = path.join(root, out);
  await sharp(srcPath)
    .rotate()
    .resize({ width: 800, height: 800, fit: "cover", position: "attention" })
    .webp({ quality: 82 })
    .toFile(outPath);
  console.log(`✓ ${out}`);
}

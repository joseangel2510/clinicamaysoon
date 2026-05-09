import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Use puppeteer's headless Chrome + canvas to crop the source image to a
// face-focused 600x600 portrait, then save as JPEG.
const SRC = path.join(ROOT, "public", "images", "team", "laura-fernandez.jpg");
const OUT = path.join(ROOT, "public", "images", "team", "laura-fernandez-portrait.jpg");

// Crop region in source pixels (laura.jpg is 661x420).
// Laura stands centered with face at ~(300, 140). Square crop with hair
// and shoulder breathing room, then upscale.
const CROP = { x: 190, y: 30, w: 220, h: 220 };
const OUT_SIZE = 660;

const imgBuf = fs.readFileSync(SRC);
const b64 = imgBuf.toString("base64");
const ext = path.extname(SRC).slice(1);
const mime = ext === "webp" ? "image/webp" : "image/jpeg";
const dataUrl = `data:${mime};base64,${b64}`;

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.setContent(`<!doctype html><html><body style="margin:0">
  <canvas id="c" width="${OUT_SIZE}" height="${OUT_SIZE}"></canvas>
  <script>
    const img = new Image();
    img.onload = () => {
      const ctx = document.getElementById('c').getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, ${CROP.x}, ${CROP.y}, ${CROP.w}, ${CROP.h}, 0, 0, ${OUT_SIZE}, ${OUT_SIZE});
      window.__done = true;
    };
    img.src = "${dataUrl}";
  </script>
</body></html>`);

await page.waitForFunction("window.__done === true", { timeout: 10000 });
const dataOut = await page.evaluate(() => document.getElementById("c").toDataURL("image/jpeg", 0.9));
await browser.close();

const outBuf = Buffer.from(dataOut.split(",")[1], "base64");
fs.writeFileSync(OUT, outBuf);
console.log(`Saved ${OUT} (${outBuf.length} bytes)`);

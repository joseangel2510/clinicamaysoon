import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "public", "images", "team", "laura-fernandez.webp");
const OUT = path.join(ROOT, "tools", "_laura_grid.jpg");

const buf = fs.readFileSync(SRC);
const dataUrl = `data:image/webp;base64,${buf.toString("base64")}`;

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.setContent(`<!doctype html><html><body style="margin:0">
  <canvas id="c" width="800" height="800"></canvas>
  <script>
    const img = new Image();
    img.onload = () => {
      const ctx = document.getElementById('c').getContext('2d');
      ctx.drawImage(img, 0, 0, 800, 800);
      ctx.strokeStyle = 'rgba(255,255,0,0.9)';
      ctx.fillStyle = 'rgba(255,255,0,0.9)';
      ctx.lineWidth = 1;
      ctx.font = '14px sans-serif';
      for (let y = 0; y <= 800; y += 100) {
        ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(800,y); ctx.stroke();
        ctx.fillText('y='+y, 4, y-2);
      }
      for (let x = 0; x <= 800; x += 100) {
        ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,800); ctx.stroke();
        ctx.fillText('x='+x, x+2, 14);
      }
      window.__done = true;
    };
    img.src = "${dataUrl}";
  </script>
</body></html>`);
await page.waitForFunction("window.__done === true", { timeout: 10000 });
const out = await page.evaluate(() => document.getElementById("c").toDataURL("image/jpeg", 0.85));
await browser.close();
fs.writeFileSync(OUT, Buffer.from(out.split(",")[1], "base64"));
console.log("wrote", OUT);

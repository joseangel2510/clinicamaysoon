import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "public", "images", "team", "equipo-sala-espera.jpg");
const OUT = path.join(ROOT, "tools", "_sala_grid.jpg");

const buf = fs.readFileSync(SRC);
const dataUrl = `data:image/jpeg;base64,${buf.toString("base64")}`;

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.setContent(`<!doctype html><html><body style="margin:0">
  <canvas id="c" width="660" height="442"></canvas>
  <script>
    const img = new Image();
    img.onload = () => {
      const ctx = document.getElementById('c').getContext('2d');
      ctx.drawImage(img, 0, 0, 660, 442);
      ctx.strokeStyle = 'rgba(255,255,0,0.9)';
      ctx.fillStyle = 'rgba(255,255,0,0.95)';
      ctx.lineWidth = 1; ctx.font = '12px sans-serif';
      for (let y = 0; y <= 442; y += 50) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(660,y); ctx.stroke(); ctx.fillText('y='+y, 4, y-2); }
      for (let x = 0; x <= 660; x += 50) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,442); ctx.stroke(); ctx.fillText('x='+x, x+2, 12); }
      window.__done = true;
    };
    img.src = "${dataUrl}";
  </script>
</body></html>`);
await page.waitForFunction("window.__done === true", { timeout: 10000 });
const out = await page.evaluate(() => document.getElementById("c").toDataURL("image/jpeg", 0.9));
await browser.close();
fs.writeFileSync(OUT, Buffer.from(out.split(",")[1], "base64"));
console.log("wrote", OUT);

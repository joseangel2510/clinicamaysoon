import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = path.join(__dirname, "temporary screenshots");

// Ensure screenshots directory exists
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

// Get next available screenshot number
function getNextNumber() {
  const files = fs.readdirSync(SCREENSHOTS_DIR).filter(f => f.startsWith("screenshot-"));
  let max = 0;
  for (const file of files) {
    const match = file.match(/screenshot-(\d+)/);
    if (match) max = Math.max(max, parseInt(match[1]));
  }
  return max + 1;
}

async function takeScreenshot(url, label) {
  const num = getNextNumber();
  const filename = label ? `screenshot-${num}-${label}.png` : `screenshot-${num}.png`;
  const filepath = path.join(SCREENSHOTS_DIR, filename);

  console.log(`Taking screenshot of ${url}...`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Set viewport to standard desktop
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

  // Auto-scroll to bottom in steps so IntersectionObserver-based animations fire.
  // Slow pace + dwell at each step gives whileInView time to register every section.
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const step = 600;
    let total = 0;
    while (total < document.documentElement.scrollHeight) {
      window.scrollBy(0, step);
      total += step;
      await sleep(180);
    }
    // Bottom dwell
    await sleep(400);
  });

  // Scroll back to top and let any final settle complete
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Take full page screenshot
  await page.screenshot({ path: filepath, fullPage: true });

  await browser.close();

  console.log(`Screenshot saved: ${filepath}`);
  return filepath;
}

// Parse CLI args
const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || null;

if (!url.startsWith("http")) {
  console.error("Usage: node screenshot.mjs <url> [label]");
  console.error("Example: node screenshot.mjs http://localhost:3000 hero-v1");
  process.exit(1);
}

takeScreenshot(url, label).catch(err => {
  console.error("Screenshot failed:", err.message);
  process.exit(1);
});

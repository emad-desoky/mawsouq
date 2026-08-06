import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

const root = process.cwd();
const sourceDir = path.join(root, "app", "_arabic-pages");
const validSlugs = new Set([
  "مخطط-استراحة-جاهز",
  "تصميم-استراحة-صغيرة",
  "تصميم-استراحة-غير-مكلفة-في-السعودية",
  "تصميم-استراحة-مودرن",
  "مخطط-استراحة-صغيرة-بمسبح",
]);

if (!fs.existsSync(sourceDir)) {
  console.error("Missing app/_arabic-pages. Copy the patch into the project root first.");
  process.exit(1);
}

for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const currentDir = path.join(sourceDir, entry.name);
  const pageFile = path.join(currentDir, "page.jsx");
  if (!fs.existsSync(pageFile)) continue;

  const source = fs.readFileSync(pageFile, "utf8");
  const match = source.match(/const\s+SLUG\s*=\s*["']([^"']+)["']/);
  if (!match || !validSlugs.has(match[1])) continue;

  const slug = match[1];
  const correctDir = path.join(sourceDir, slug);
  if (path.resolve(currentDir) === path.resolve(correctDir)) continue;

  if (fs.existsSync(correctDir)) {
    fs.rmSync(currentDir, { recursive: true, force: true });
    console.log(`Removed malformed duplicate folder: ${entry.name}`);
  } else {
    fs.renameSync(currentDir, correctDir);
    console.log(`Renamed malformed folder to: ${slug}`);
  }
}

for (const slug of validSlugs) {
  const pageFile = path.join(sourceDir, slug, "page.jsx");
  if (!fs.existsSync(pageFile)) {
    console.error(`Missing cluster source page: app/_arabic-pages/${slug}/page.jsx`);
    process.exit(1);
  }
}

const generator = path.join(root, "scripts", "generate-arabic-routes.mjs");
if (!fs.existsSync(generator)) {
  console.error("Missing scripts/generate-arabic-routes.mjs");
  process.exit(1);
}

console.log("Generating public Arabic route wrappers...");
const result = spawnSync(process.execPath, [generator], {
  cwd: root,
  stdio: "inherit",
});

if (result.status !== 0) process.exit(result.status ?? 1);
console.log("Resthouse routes repaired and generated successfully.");

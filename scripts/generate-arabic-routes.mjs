import fs from "fs";
import path from "path";

const appDir = path.join(process.cwd(), "app");
const sourceRoot = path.join(appDir, "_arabic-pages");
const generatedRoot = path.join(appDir, "(generated-arabic-routes)");

const PAGE_FILES = ["page.js", "page.jsx", "page.ts", "page.tsx"];

function hasArabic(value) {
  return /[\u0600-\u06FF]/.test(value);
}

function hasEncoded(value) {
  return /%[0-9a-fA-F]{2}/.test(value);
}

function toImportPath(fromFile, toFile) {
  let relative = path
    .relative(path.dirname(fromFile), toFile)
    .replace(/\\/g, "/");

  if (!relative.startsWith(".")) {
    relative = "./" + relative;
  }

  return relative;
}

function findExportedNames(sourceCode) {
  const names = [];

  const checks = [
    "metadata",
    "generateMetadata",
    "viewport",
    "dynamic",
    "revalidate",
    "runtime",
    "preferredRegion",
    "maxDuration",
  ];

  for (const name of checks) {
    const regex = new RegExp(
      `export\\s+(const|let|var|function|async\\s+function)\\s+${name}\\b`,
    );

    if (regex.test(sourceCode)) {
      names.push(name);
    }
  }

  return names;
}

function generateWrapper(sourcePageFile, routeParts) {
  // IMPORTANT:
  // Keep generated filesystem segments as real Arabic text.
  // Do not encodeURIComponent() the folder names here.
  // Encoding here causes Vercel/Next to encode them again in build artifacts,
  // which can create ENAMETOOLONG paths for long Arabic slugs.
  const outputDir = path.join(generatedRoot, ...routeParts);
  const outputPageFile = path.join(outputDir, "page.jsx");

  fs.mkdirSync(outputDir, { recursive: true });

  const importPath = toImportPath(outputPageFile, sourcePageFile);
  const sourceCode = fs.readFileSync(sourcePageFile, "utf8");
  const exportedNames = findExportedNames(sourceCode);

  const lines = [`export { default } from "${importPath}";`];

  for (const name of exportedNames) {
    lines.push(`export { ${name} } from "${importPath}";`);
  }

  lines.push("");

  fs.writeFileSync(outputPageFile, lines.join("\n"), "utf8");

  console.log(`Generated Arabic route: /${routeParts.join("/")}`);
}

function walk(dir, routeParts = []) {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir, { withFileTypes: true });

  const pageFile = items.find(
    (item) => item.isFile() && PAGE_FILES.includes(item.name),
  );

  if (pageFile && routeParts.length > 0) {
    const routePath = routeParts.join("/");

    if (hasArabic(routePath) && !hasEncoded(routePath)) {
      generateWrapper(path.join(dir, pageFile.name), routeParts);
    }
  }

  for (const item of items) {
    if (!item.isDirectory()) continue;

    if (item.name.startsWith("_")) continue;
    if (item.name.startsWith("@")) continue;
    if (item.name.startsWith("(") && item.name.endsWith(")")) continue;

    walk(path.join(dir, item.name), [...routeParts, item.name]);
  }
}

// Remove every stale encoded wrapper before regenerating clean Arabic folders.
fs.rmSync(generatedRoot, { recursive: true, force: true });

if (!fs.existsSync(sourceRoot)) {
  fs.mkdirSync(sourceRoot, { recursive: true });
}

walk(sourceRoot);

console.log("Arabic route generation complete.");

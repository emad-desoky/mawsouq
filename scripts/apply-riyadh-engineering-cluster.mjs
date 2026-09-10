import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

const root = process.cwd();
const legacySlug = "افضل-مكتب-هندسي-مدينة-الرياض";
const newSlugs = [
  "افضل-مكتب-هندسي-مدينة-الرياض",
  "مكتب-هندسي-معتمد-في-الرياض",
  "تصميم-فلل-في-الرياض",
  "اسعار-المخططات-الهندسية-في-الرياض",
  "استشارات-هندسية-في-الرياض",
];

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function removeLegacyEncodedRiyadhRoute() {
  const arRoot = path.join(root, "app", "(ar)");
  if (!fs.existsSync(arRoot)) return;

  for (const entry of fs.readdirSync(arRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (!entry.name.includes("%")) continue;

    if (safeDecode(entry.name) === legacySlug) {
      const target = path.join(arRoot, entry.name);
      fs.rmSync(target, { recursive: true, force: true });
      console.log(`Removed legacy encoded Riyadh route: ${path.relative(root, target)}`);
    }
  }
}

function findArabicBlogHubPage() {
  const arRoot = path.join(root, "app", "(ar)");
  if (!fs.existsSync(arRoot)) return null;

  for (const entry of fs.readdirSync(arRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (safeDecode(entry.name) !== "المدونات") continue;

    for (const file of ["page.jsx", "page.js", "page.tsx", "page.ts"]) {
      const candidate = path.join(arRoot, entry.name, file);
      if (fs.existsSync(candidate)) return candidate;
    }
  }

  return null;
}

function patchBlogHub() {
  const pageFile = findArabicBlogHubPage();
  if (!pageFile) {
    console.warn("Arabic blog hub page was not found. New source routes will still be auto-discovered by the existing route scanner if present.");
    return;
  }

  let source = fs.readFileSync(pageFile, "utf8");
  let changed = false;

  if (!source.includes("riyadhBlogCards")) {
    const importNeedle =
      'import { getArabicSeo2026BlogCards } from "@/lib/arabicSeo2026";';
    if (source.includes(importNeedle)) {
      source = source.replace(
        importNeedle,
        `${importNeedle}\nimport { riyadhBlogCards } from "@/app/_arabic-pages/_riyadh-engineering-cluster/riyadh-engineering-data";`,
      );
      changed = true;
    }

    const mapNeedle = "const blogDataBySlug = {";
    if (source.includes(mapNeedle)) {
      source = source.replace(
        mapNeedle,
        `const riyadhBlogDataBySlug = Object.fromEntries(
  riyadhBlogCards.map((article) => [
    article.slug,
    {
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
      image: article.image,
    },
  ]),
);

${mapNeedle}`,
      );
      changed = true;
    }

    const lookupNeedle =
      "const data = seo2026BlogDataBySlug[slug] || resthouseBlogDataBySlug[slug] || blogDataBySlug[slug];";
    if (source.includes(lookupNeedle)) {
      source = source.replace(
        lookupNeedle,
        `const data =
      riyadhBlogDataBySlug[slug] ||
      seo2026BlogDataBySlug[slug] ||
      resthouseBlogDataBySlug[slug] ||
      blogDataBySlug[slug];`,
      );
      changed = true;
    }
  }

  const manualMarker = "const manualBlogSlugs = [";
  if (source.includes(manualMarker)) {
    const missing = newSlugs.filter(
      (slug) => !source.includes(`    "${slug}",`),
    );

    if (missing.length) {
      source = source.replace(
        manualMarker,
        `${manualMarker}\n${missing.map((slug) => `    "${slug}",`).join("\n")}`,
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(pageFile, source, "utf8");
    console.log(`Updated Arabic blog hub cards: ${path.relative(root, pageFile)}`);
  } else {
    console.log("Arabic blog hub already contains the Riyadh cluster integration or uses a different auto-discovery implementation.");
  }
}

function verifySourcePages() {
  for (const slug of newSlugs) {
    const page = path.join(root, "app", "_arabic-pages", slug, "page.jsx");
    if (!fs.existsSync(page)) {
      throw new Error(`Missing Riyadh source page: ${path.relative(root, page)}`);
    }
  }
}

function runArabicRouteGenerator() {
  const result = spawnSync(
    process.execPath,
    [path.join(root, "scripts", "generate-arabic-routes.mjs")],
    {
      cwd: root,
      stdio: "inherit",
      env: process.env,
    },
  );

  if (result.status !== 0) {
    throw new Error("Arabic route generation failed.");
  }
}

removeLegacyEncodedRiyadhRoute();
verifySourcePages();
patchBlogHub();
runArabicRouteGenerator();

console.log("Riyadh engineering pillar + four clusters installed successfully.");

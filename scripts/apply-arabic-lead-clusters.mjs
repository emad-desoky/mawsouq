import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const APP = path.join(ROOT, "app");
const CLUSTER_FILE = path.join(APP, "_arabic-pages", "تكلفة-بناء-دور-واحد", "clusters.js");
const SITEMAP_FILE = path.join(APP, "sitemap.js");

const newSlugs = [
  "حاسبة-تكلفة-البناء-في-السعودية",
  "تكلفة-اضافة-دور-فوق-منزل-قائم",
  "بنود-عقد-مقاول-بناء-دور-واحد",
  "تكلفة-بناء-دورين-في-السعودية",
  "تكلفة-بناء-ملحق-في-السعودية",
];

const blogCards = `\n  // === MAWSOUQ LEAD CLUSTERS 2026-08-21 ===\n  "حاسبة-تكلفة-البناء-في-السعودية": {\n    title: "حاسبة تكلفة البناء في السعودية 2026",\n    excerpt: "احسب ميزانية البناء من المساحة ونوع التنفيذ والبنود غير الظاهرة قبل طلب عرض السعر.",\n    category: "تكاليف البناء",\n    image: "/images/blog/build-cost-leads/construction-cost-calculator-saudi.webp",\n  },\n  "تكلفة-اضافة-دور-فوق-منزل-قائم": {\n    title: "تكلفة إضافة دور فوق منزل قائم",\n    excerpt: "الفحص الإنشائي والتدعيم والرخص والخدمات التي يجب حسابها قبل إضافة طابق جديد.",\n    category: "تكاليف البناء",\n    image: "/images/blog/build-cost-leads/add-floor-existing-house-saudi.webp",\n  },\n  "بنود-عقد-مقاول-بناء-دور-واحد": {\n    title: "بنود عقد مقاول بناء دور واحد",\n    excerpt: "قائمة عملية لمراجعة النطاق والدفعات والمواد والتغييرات والاستلام قبل توقيع عقد المقاول.",\n    category: "تكاليف البناء",\n    image: "/images/blog/build-cost-leads/contractor-contract-clauses-saudi.webp",\n  },\n  "تكلفة-بناء-دورين-في-السعودية": {\n    title: "تكلفة بناء دورين في السعودية 2026",\n    excerpt: "احسب إجمالي المساحة المبنية وافهم فرق العظم والتشطيب والتسليم على المفتاح لمنزل من دورين.",\n    category: "تكاليف البناء",\n    image: "/images/blog/build-cost-leads/two-story-house-cost-saudi.webp",\n  },\n  "تكلفة-بناء-ملحق-في-السعودية": {\n    title: "تكلفة بناء ملحق في السعودية 2026",\n    excerpt: "دليل تكلفة الملحق العلوي أو الأرضي أو شقة الملحق مع الخدمات والتشطيب والبنود المؤثرة على السعر.",\n    category: "تكاليف البناء",\n    image: "/images/blog/build-cost-leads/annex-construction-cost-saudi.webp",\n  },\n`;

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function write(file, text) {
  fs.writeFileSync(file, text, "utf8");
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function patchClusters() {
  let text = read(CLUSTER_FILE);
  if (!text.includes('from "./lead-clusters"')) {
    text = `import { leadClusters } from "./lead-clusters";\n\n${text}`;
  }

  text = text.replace(
    /export function getClusterBySlug\(slug\) \{[\s\S]*?\n\}/,
    `export function getClusterBySlug(slug) {\n  return (\n    leadClusters.find((cluster) => cluster.slug === slug) ||\n    futureClusterBlogs.find((cluster) => cluster.slug === slug) ||\n    null\n  );\n}`,
  );

  text = text.replace(
    /export function getSiblings\(slug, limit = 3\) \{[\s\S]*?\n\}/,
    `export function getSiblings(slug, limit = 3) {\n  const published = [...futureClusterBlogs, ...leadClusters]\n    .filter((cluster) => cluster.isLive && cluster.slug !== slug);\n\n  const item = getClusterBySlug(slug);\n  const preferred = item?.relatedSlugs || [];\n\n  return published\n    .slice()\n    .sort((a, b) => {\n      const ai = preferred.indexOf(a.slug);\n      const bi = preferred.indexOf(b.slug);\n      if (ai === -1 && bi === -1) return 0;\n      if (ai === -1) return 1;\n      if (bi === -1) return -1;\n      return ai - bi;\n    })\n    .slice(0, limit);\n}`,
  );

  text = text.replace(
    /export function getPublishedClusters\(\) \{[\s\S]*?\n\}/,
    `export function getPublishedClusters() {\n  return [...futureClusterBlogs, ...leadClusters]\n    .filter((cluster) => cluster.isLive)\n    .sort((a, b) => new Date(b.dateModified || b.datePublished) - new Date(a.dateModified || a.datePublished));\n}`,
  );

  text = text.replace('dateModified: "2026-07-21T10:40:00+03:00"', 'dateModified: "2026-08-21T13:00:00+03:00"');
  write(CLUSTER_FILE, text);
  console.log("Updated cluster registry and pillar internal links.");
}

function findFileContaining(needle) {
  return walk(APP).find((file) => /\.(jsx?|tsx?)$/.test(file) && read(file).includes(needle));
}

function patchBlogHub() {
  const page = findFileContaining("const blogDataBySlug = {");
  if (page) {
    let text = read(page);
    if (!text.includes("MAWSOUQ LEAD CLUSTERS 2026-08-21")) {
      text = text.replace("const blogDataBySlug = {", `const blogDataBySlug = {${blogCards}`);
      write(page, text);
      console.log(`Updated blog data: ${path.relative(ROOT, page)}`);
    }
  } else {
    console.warn("Could not find blogDataBySlug automatically.");
  }

  const client = findFileContaining("const latestArticleSlugs = [");
  if (client) {
    let text = read(client);
    const missing = newSlugs.filter((slug) => !text.includes(`\"${slug}\"`));
    if (missing.length) {
      const insert = missing.map((slug) => `  \"${slug}\",`).join("\n");
      text = text.replace("const latestArticleSlugs = [", `const latestArticleSlugs = [\n${insert}`);
      text = text.replace(".slice(0, 9)", ".slice(0, 12)");
      write(client, text);
      console.log(`Updated latest blog carousel: ${path.relative(ROOT, client)}`);
    }
  } else {
    console.warn("Could not find latestArticleSlugs automatically.");
  }
}

function patchSitemap() {
  let text = read(SITEMAP_FILE);
  const importLine = 'import { getAllBlogEntries as getAllOneFloorCostEntries } from "./_arabic-pages/تكلفة-بناء-دور-واحد/clusters";';

  if (!text.includes("getAllOneFloorCostEntries")) {
    const firstImportEnd = text.indexOf("\n", text.indexOf("import "));
    text = `${text.slice(0, firstImportEnd + 1)}${importLine}\n${text.slice(firstImportEnd + 1)}`;
  }

  if (!text.includes("MAWSOUQ ONE FLOOR COST CLUSTER ENTRIES")) {
    const block = `  // MAWSOUQ ONE FLOOR COST CLUSTER ENTRIES\n  for (const entry of getAllOneFloorCostEntries()) {\n    entries.set(entry.url, entry);\n  }\n\n`;
    const resthouseMarker = "  // The Arabic resthouse pillar keeps its existing public URL";
    const returnMarker = "  return Array.from(entries.values()).sort(";

    if (text.includes(resthouseMarker)) {
      text = text.replace(resthouseMarker, `${block}${resthouseMarker}`);
    } else if (text.includes(returnMarker)) {
      text = text.replace(returnMarker, `${block}${returnMarker}`);
    } else {
      throw new Error("Could not find a safe sitemap insertion point. app/sitemap.js was not changed.");
    }
  }

  write(SITEMAP_FILE, text);
  console.log("Updated sitemap with Arabic cost pillar + live clusters.");
}

patchClusters();
patchBlogHub();
patchSitemap();
console.log("Arabic lead-cluster patch applied successfully.");
console.log("Next: node scripts/generate-arabic-routes.mjs (for dev) or npm run build (generator runs automatically).\n");

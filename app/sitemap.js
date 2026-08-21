import fs from "fs";
import { getAllBlogEntries as getAllOneFloorCostEntries } from "./_arabic-pages/تكلفة-بناء-دور-واحد/clusters";
import path from "path";
import { getAllEnglishBlogEntries } from "./(en)/en/blog/blog-data";
import { getAllResthouseEntries } from "./_arabic-pages/_resthouse-cluster/resthouse-data";

export const dynamic = "force-static";

const SITE_URL = "https://mawsouq.com";

// Since the old WordPress URLs mostly had trailing slash.
// IMPORTANT: if you do NOT add trailingSlash: true in next.config.js,
// change this to false.
const USE_TRAILING_SLASH = true;

const APP_DIR = path.join(process.cwd(), "app");

const PAGE_FILES = new Set(["page.js", "page.jsx", "page.ts", "page.tsx"]);

const SKIP_SEGMENTS = new Set([
  "api",
  "admin",
  "dashboard",
  "login",
  "register",
]);

const HIGH_PRIORITY_ROUTES = [
  "/",
  "/افضل-شركة-تشطيبات-في-السعودية",
  "/تصاميم-استراحات",
  "/التصميم-المعماري",
  "/تكلفة-بناء-دور-واحد",
  "/حفر-الأرض",
  "/باركيه",
  "/بناء-فلة",
  "/افضل-مكتب-هندسي-بالدمام",
  "/تصميم-انشائي",
  "/جبس-عادي-بورد",
  "/طريقة-توزيع-الغرف-في-البيت",
  "/تصميم-حدائق",
  "/الدهان-البوية",
  "/فلل-مودرن",
  "/التصميم-الإنشائي",
  "/تصاميم-فلل-نيو-كلاسيك-موسوق",
  "/أحدث-ديكورات-غرف-نوم-ماستر",
  "/طرق-تمنع-نمو-العفن",
  "/هدم-مبانى",
  "/تصاميم-منازل-من-الخارج",
  "/انواع-الديكور-الداخلي",
  "/افضل-مكتب-هندسي-مدينة-الرياض",
  "/السيراميك-الرخام",
  "/حاسبة-التشيد-و-البناء",
  "/واجهات-منازل-حديثة",
  "/شركة-موسوق-تصميم-استراحات-وشاليهات",
  "/ايجاد-مهندس-انشائي",
  "/cost-building-rest-house-saudi-mawsooq",
  "/ديكور-التلفاز",
  "/صيانة-المكيفات",
  "/مظلات-السيارات-السعودية",
  "/تكلفة-رخصة-الهدم-في-السعودية",
  "/الفرق-بين-رخصة-الهدم-وقرار-الهدم",
  "/تصميم-وتنفيذ-الهياكل-الخرسانية-خدمات",
  "/مكتبة-الوثائق",
  "/تصميم-واجهات-مودرن",
  "/المدونات",
  "/عن-الشركة",
  "/خدماتنا",
  "/اتصل-بنا",
  "/سياسة-الخصوصية",
  "/شروط-الاستخدام",
];

const HIGH_PRIORITY_SET = new Set(
  HIGH_PRIORITY_ROUTES.map((route) =>
    stripTrailingSlash(normalizeRoute(route)),
  ),
);

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function decodeUntilStable(value) {
  let output = value;

  for (let i = 0; i < 3; i += 1) {
    const decoded = safeDecode(output);
    if (decoded === output) break;
    output = decoded;
  }

  return output;
}

function stripTrailingSlash(value) {
  if (value === "/") return "/";
  return value.replace(/\/+$/, "");
}

function withTrailingSlash(value) {
  if (!USE_TRAILING_SLASH) return value;
  if (value === "/") return "/";
  return value.endsWith("/") ? value : `${value}/`;
}

function normalizeRoute(route) {
  if (!route || route === "/") return "/";

  const cleaned = route
    .replace(/^https?:\/\/[^/]+/i, "")
    .split("?")[0]
    .split("#")[0];

  const segments = cleaned
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeUntilStable(segment))
    .map((segment) => encodeURIComponent(segment));

  return `/${segments.join("/")}`;
}

function isRouteGroup(segment) {
  return segment.startsWith("(") && segment.endsWith(")");
}

function isParallelRoute(segment) {
  return segment.startsWith("@");
}

function isDynamicRoute(segment) {
  return segment.includes("[") || segment.includes("]");
}

function shouldSkipDirectory(segment) {
  if (!segment) return true;
  if (segment.startsWith(".")) return true;

  // Next.js private folders are not public routes.
  // Rename app/_arabic-pages to app/(arabic-pages) if you want those pages live.
  if (segment.startsWith("_")) return true;

  if (SKIP_SEGMENTS.has(segment)) return true;
  if (isDynamicRoute(segment)) return true;

  return false;
}

function hasPageFile(items) {
  return items.find((item) => item.isFile() && PAGE_FILES.has(item.name));
}

function getPriority(route) {
  const cleanRoute = stripTrailingSlash(normalizeRoute(route));

  if (cleanRoute === "/") return 1;

  if (HIGH_PRIORITY_SET.has(cleanRoute)) {
    return 0.95;
  }

  const decoded = safeDecode(cleanRoute);

  if (
    decoded.includes("المدونات") ||
    decoded.includes("التصميم") ||
    decoded.includes("تكلفة") ||
    decoded.includes("بناء") ||
    decoded.includes("فلل") ||
    decoded.includes("استراحات")
  ) {
    return 0.85;
  }

  if (
    decoded.includes("عن-الشركة") ||
    decoded.includes("اتصل-بنا") ||
    decoded.includes("سياسة-الخصوصية") ||
    decoded.includes("شروط-الاستخدام")
  ) {
    return 0.6;
  }

  return 0.75;
}

function getChangeFrequency(route) {
  const cleanRoute = stripTrailingSlash(normalizeRoute(route));

  if (cleanRoute === "/") return "daily";
  if (HIGH_PRIORITY_SET.has(cleanRoute)) return "weekly";

  const decoded = safeDecode(cleanRoute);

  if (
    decoded.includes("المدونات") ||
    decoded.includes("التصميم") ||
    decoded.includes("تكلفة") ||
    decoded.includes("بناء")
  ) {
    return "weekly";
  }

  return "monthly";
}

function collectRoutes() {
  const routes = new Map();

  function addRoute(route, lastModified) {
    const normalized = normalizeRoute(route);

    if (!normalized) return;

    routes.set(normalized, {
      route: normalized,
      lastModified,
    });
  }

  function walk(directory, routeParts = []) {
    if (!fs.existsSync(directory)) return;

    const items = fs.readdirSync(directory, { withFileTypes: true });
    const pageFile = hasPageFile(items);

    if (pageFile) {
      const route = routeParts.length === 0 ? "/" : `/${routeParts.join("/")}`;

      const pagePath = path.join(directory, pageFile.name);
      const stats = fs.statSync(pagePath);

      addRoute(route, stats.mtime);
    }

    for (const item of items) {
      if (!item.isDirectory()) continue;

      const segment = item.name;

      if (shouldSkipDirectory(segment)) continue;

      const nextRouteParts =
        isRouteGroup(segment) || isParallelRoute(segment)
          ? routeParts
          : [...routeParts, segment];

      walk(path.join(directory, segment), nextRouteParts);
    }
  }

  walk(APP_DIR);

  return Array.from(routes.values()).sort((a, b) => {
    if (a.route === "/") return -1;
    if (b.route === "/") return 1;

    const aHigh = HIGH_PRIORITY_SET.has(stripTrailingSlash(a.route));
    const bHigh = HIGH_PRIORITY_SET.has(stripTrailingSlash(b.route));

    if (aHigh && !bHigh) return -1;
    if (!aHigh && bHigh) return 1;

    return a.route.localeCompare(b.route, "ar");
  });
}

export default function sitemap() {
  const routes = collectRoutes();
  const entries = new Map();

  for (const { route, lastModified } of routes) {
    const finalPath = withTrailingSlash(route);
    const entry = {
      url: `${SITE_URL}${finalPath}`,
      lastModified,
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
    };

    entries.set(entry.url, entry);
  }

  // Dynamic English blog routes are not discoverable by the filesystem walker,
  // so the topic-cluster data file supplies their canonical sitemap entries.
  for (const entry of getAllEnglishBlogEntries()) {
    entries.set(entry.url, entry);
  }

  // MAWSOUQ ONE FLOOR COST CLUSTER ENTRIES
  for (const entry of getAllOneFloorCostEntries()) {
    entries.set(entry.url, entry);
  }

  // The Arabic resthouse pillar keeps its existing public URL, while the five
  // new cluster routes are generated from app/_arabic-pages at build time.
  // Their canonical entries come from the shared cluster data file.
  for (const entry of getAllResthouseEntries()) {
    entries.set(entry.url, entry);
  }

  return Array.from(entries.values()).sort((a, b) => {
    if (a.url === `${SITE_URL}/`) return -1;
    if (b.url === `${SITE_URL}/`) return 1;
    return a.url.localeCompare(b.url, "en");
  });
}

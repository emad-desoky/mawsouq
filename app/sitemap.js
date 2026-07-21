import fs from "fs";
import path from "path";

export const dynamic = "force-static";

const SITE_URL = "https://mawsouq.com";
const USE_TRAILING_SLASH = true;

const APP_DIR = path.join(process.cwd(), "app");
const ARABIC_SOURCE_DIR = path.join(APP_DIR, "_arabic-pages");

const PAGE_FILES = new Set(["page.js", "page.jsx", "page.ts", "page.tsx"]);

const SKIP_SEGMENTS = new Set([
  "api",
  "admin",
  "dashboard",
  "login",
  "register",
]);

/**
 * Important Arabic pages added manually as a safety layer.
 *
 * This guarantees that:
 * - Private source folders inside _arabic-pages are represented.
 * - The long dynamic Arabic route appears in the sitemap.
 * - Generated wrapper discovery is not the only sitemap source.
 *
 * The Map used later prevents duplicates.
 */
const MANUAL_ARABIC_ROUTES = [
  {
    route: "/تكلفة-بناء-دور-واحد",
    sourceDirectory: "تكلفة-بناء-دور-واحد",
  },
  {
    route: "/تكلفة-بناء-دور-واحد-100-متر",
    sourceDirectory: "تكلفة-بناء-دور-واحد-100-متر",
  },
  {
    route: "/تكلفة-بناء-دور-واحد-200-متر",
    sourceDirectory: "تكلفة-بناء-دور-واحد-200-متر",
  },
  {
    route: "/تكلفة-بناء-دور-واحد-250-متر",
    sourceDirectory: "تكلفة-بناء-دور-واحد-250-متر",
  },
  {
    route: "/تكلفة-بناء-دور-واحد-300-متر",
    sourceDirectory: "تكلفة-بناء-دور-واحد-300-متر",
  },
  {
    route: "/تكلفة-بناء-دور-واحد-500-متر",
    sourceDirectory: "تكلفة-بناء-دور-واحد-500-متر",
  },
  {
    route: "/تكلفة-بناء-دور-واحد-تسليم-مفتاح",
    sourceDirectory: "تكلفة-بناء-دور-واحد-تسليم-مفتاح",
  },
  {
    route: "/سعر-متر-العظم-بالمواد-في-السعودية",
    sourceDirectory: "سعر-متر-العظم-بالمواد-في-السعودية",
  },
];

const HIGH_PRIORITY_ROUTES = [
  "/",

  // Main pages
  "/المدونات",
  "/عن-الشركة",
  "/خدماتنا",
  "/اتصل-بنا",

  // Pillar and building-cost clusters
  "/تكلفة-بناء-دور-واحد",
  "/تكلفة-بناء-دور-واحد-100-متر",
  "/تكلفة-بناء-دور-واحد-200-متر",
  "/تكلفة-بناء-دور-واحد-250-متر",
  "/تكلفة-بناء-دور-واحد-300-متر",
  "/تكلفة-بناء-دور-واحد-500-متر",
  "/تكلفة-بناء-دور-واحد-تسليم-مفتاح",
  "/سعر-متر-العظم-بالمواد-في-السعودية",

  // Strong existing SEO pages
  "/افضل-شركة-تشطيبات-في-السعودية",
  "/تصاميم-استراحات",
  "/التصميم-المعماري",
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

  // Legal pages
  "/سياسة-الخصوصية",
  "/شروط-الاستخدام",
];

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function decodeUntilStable(value) {
  let output = value;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const decoded = safeDecode(output);

    if (decoded === output) {
      break;
    }

    output = decoded;
  }

  return output;
}

function stripTrailingSlash(value) {
  if (value === "/") {
    return "/";
  }

  return value.replace(/\/+$/, "");
}

function withTrailingSlash(value) {
  if (!USE_TRAILING_SLASH) {
    return value;
  }

  if (value === "/") {
    return "/";
  }

  return value.endsWith("/") ? value : `${value}/`;
}

/**
 * Converts every route to one consistent encoded format.
 *
 * Examples:
 *
 * /تكلفة-بناء-دور-واحد
 * becomes:
 * /%D8%AA%D9%83%D9%84%D9%81%D8%A9...
 *
 * Already encoded routes are decoded first and encoded only once.
 */
function normalizeRoute(route) {
  if (!route || route === "/") {
    return "/";
  }

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

const HIGH_PRIORITY_SET = new Set(
  HIGH_PRIORITY_ROUTES.map((route) =>
    stripTrailingSlash(normalizeRoute(route)),
  ),
);

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
  if (!segment) {
    return true;
  }

  if (segment.startsWith(".")) {
    return true;
  }

  // Private implementation folders do not create public routes.
  if (segment.startsWith("_")) {
    return true;
  }

  if (SKIP_SEGMENTS.has(segment)) {
    return true;
  }

  // Dynamic routes are added manually when needed.
  if (isDynamicRoute(segment)) {
    return true;
  }

  return false;
}

function findPageFile(items) {
  return items.find((item) => item.isFile() && PAGE_FILES.has(item.name));
}

function getPriority(route) {
  const cleanRoute = stripTrailingSlash(normalizeRoute(route));

  if (cleanRoute === "/") {
    return 1;
  }

  if (HIGH_PRIORITY_SET.has(cleanRoute)) {
    return 0.95;
  }

  const decoded = decodeUntilStable(cleanRoute);

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

  if (cleanRoute === "/") {
    return "daily";
  }

  if (HIGH_PRIORITY_SET.has(cleanRoute)) {
    return "weekly";
  }

  const decoded = decodeUntilStable(cleanRoute);

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

function getManualRouteLastModified(sourceDirectory) {
  const directory = path.join(ARABIC_SOURCE_DIR, sourceDirectory);

  if (!fs.existsSync(directory)) {
    return new Date("2026-07-21T00:00:00.000Z");
  }

  const files = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  const pageFile = findPageFile(files);

  if (!pageFile) {
    return new Date("2026-07-21T00:00:00.000Z");
  }

  const pagePath = path.join(directory, pageFile.name);

  return fs.statSync(pagePath).mtime;
}

function collectRoutes() {
  const routes = new Map();

  function addRoute(route, lastModified) {
    const normalized = normalizeRoute(route);

    if (!normalized) {
      return;
    }

    routes.set(normalized, {
      route: normalized,
      lastModified:
        lastModified instanceof Date ? lastModified : new Date(lastModified),
    });
  }

  function walk(directory, routeParts = []) {
    if (!fs.existsSync(directory)) {
      return;
    }

    const items = fs.readdirSync(directory, {
      withFileTypes: true,
    });

    const pageFile = findPageFile(items);

    if (pageFile) {
      const route = routeParts.length === 0 ? "/" : `/${routeParts.join("/")}`;

      const pagePath = path.join(directory, pageFile.name);

      const stats = fs.statSync(pagePath);

      addRoute(route, stats.mtime);
    }

    for (const item of items) {
      if (!item.isDirectory()) {
        continue;
      }

      const segment = item.name;

      if (shouldSkipDirectory(segment)) {
        continue;
      }

      const nextRouteParts =
        isRouteGroup(segment) || isParallelRoute(segment)
          ? routeParts
          : [...routeParts, segment];

      walk(path.join(directory, segment), nextRouteParts);
    }
  }

  // Discover normal static routes and generated wrappers.
  walk(APP_DIR);

  // Guarantee inclusion of the pillar and every cost cluster.
  for (const item of MANUAL_ARABIC_ROUTES) {
    addRoute(item.route, getManualRouteLastModified(item.sourceDirectory));
  }

  return Array.from(routes.values()).sort((first, second) => {
    if (first.route === "/") {
      return -1;
    }

    if (second.route === "/") {
      return 1;
    }

    const firstHigh = HIGH_PRIORITY_SET.has(stripTrailingSlash(first.route));

    const secondHigh = HIGH_PRIORITY_SET.has(stripTrailingSlash(second.route));

    if (firstHigh && !secondHigh) {
      return -1;
    }

    if (!firstHigh && secondHigh) {
      return 1;
    }

    return first.route.localeCompare(second.route, "ar");
  });
}

export default function sitemap() {
  const routes = collectRoutes();

  return routes.map(({ route, lastModified }) => {
    const finalPath = withTrailingSlash(route);

    return {
      url: `${SITE_URL}${finalPath}`,
      lastModified,
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
    };
  });
}

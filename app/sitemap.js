import fs from "fs";
import path from "path";

import { getAllEnglishBlogEntries } from "./(en)/en/blog/blog-data";
import { getAllBlogEntries as getAllOneFloorCostEntries } from "./_arabic-pages/تكلفة-بناء-دور-واحد/clusters";
import { getAllResthouseEntries } from "./_arabic-pages/_resthouse-cluster/resthouse-data";
import { getAllArabicSeo2026Entries } from "@/lib/arabicSeo2026";
import { getAllRiyadhEngineeringEntries } from "./_arabic-pages/_riyadh-engineering-cluster/riyadh-engineering-data";
import { getAllMawsooqProjectEntries } from "@/lib/mawsouqProjects";

export const dynamic = "force-static";

const SITE_URL = "https://mawsouq.com";
const USE_TRAILING_SLASH = true;
const APP_DIR = path.join(process.cwd(), "app");
const PAGE_FILES = new Set(["page.js", "page.jsx", "page.ts", "page.tsx"]);

// URLs that permanently redirect must not be advertised as indexable sitemap URLs.
const REDIRECTED_PATHS = new Set(["/التصميم-الإنشائي"]);

const SKIP_SEGMENTS = new Set([
  "api",
  "admin",
  "dashboard",
  "login",
  "register",
]);

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

function withTrailingSlash(value) {
  if (!USE_TRAILING_SLASH || value === "/") return value;
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
  if (!segment || segment.startsWith(".")) return true;
  if (segment.startsWith("_")) return true;
  if (SKIP_SEGMENTS.has(segment)) return true;
  if (isDynamicRoute(segment)) return true;
  return false;
}

function hasPageFile(items) {
  return items.find((item) => item.isFile() && PAGE_FILES.has(item.name));
}

function collectFilesystemRoutes() {
  const routes = new Set();

  function addRoute(route) {
    const normalized = normalizeRoute(route);
    if (!normalized) return;
    if (REDIRECTED_PATHS.has(safeDecode(normalized))) return;
    routes.add(normalized);
  }

  function walk(directory, routeParts = []) {
    if (!fs.existsSync(directory)) return;

    const items = fs.readdirSync(directory, { withFileTypes: true });

    if (hasPageFile(items)) {
      addRoute(routeParts.length === 0 ? "/" : `/${routeParts.join("/")}`);
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
  return Array.from(routes);
}

function cleanExplicitEntry(entry) {
  if (!entry?.url) return null;

  const normalizedPath = normalizeRoute(entry.url);
  if (!normalizedPath) return null;
  if (REDIRECTED_PATHS.has(safeDecode(normalizedPath))) return null;

  // Normalize explicit/dynamic entries the same way as filesystem routes so an
  // Arabic URL cannot appear twice as both Unicode and percent-encoded forms.
  const url = `${SITE_URL}${withTrailingSlash(normalizedPath)}`;

  // Google ignores changefreq and priority. Keep lastModified only when it is
  // supplied by the content data itself and therefore represents a real,
  // substantial page update rather than a deployment/build timestamp.
  return {
    url,
    ...(entry.lastModified ? { lastModified: entry.lastModified } : {}),
  };
}

export default function sitemap() {
  const entries = new Map();

  // Filesystem pages are included without lastModified because file mtimes can
  // change during builds/deployments even when the page content did not.
  for (const route of collectFilesystemRoutes()) {
    const finalPath = withTrailingSlash(route);
    const url = `${SITE_URL}${finalPath}`;
    entries.set(url, { url });
  }

  const trustedContentEntries = [
    ...getAllEnglishBlogEntries(),
    ...getAllOneFloorCostEntries(),
    ...getAllResthouseEntries(),
    ...getAllArabicSeo2026Entries(),
    ...getAllRiyadhEngineeringEntries(),
    ...getAllMawsooqProjectEntries(),
  ];

  for (const sourceEntry of trustedContentEntries) {
    const entry = cleanExplicitEntry(sourceEntry);
    if (entry) entries.set(entry.url, entry);
  }

  return Array.from(entries.values()).sort((a, b) => {
    if (a.url === `${SITE_URL}/`) return -1;
    if (b.url === `${SITE_URL}/`) return 1;
    return a.url.localeCompare(b.url, "en");
  });
}

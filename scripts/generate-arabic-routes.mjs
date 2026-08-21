import fs from "fs";
import path from "path";

const projectRoot = process.cwd();
const appDir = path.join(projectRoot, "app");

const sourceCandidates = [
  path.join(appDir, "(ar)", "_arabic-pages"),
  path.join(appDir, "_arabic-pages"),
];

const sourceRoot =
  sourceCandidates.find((candidate) => fs.existsSync(candidate)) ||
  sourceCandidates[1];

const generatedRoot = path.join(
  appDir,
  "(ar)",
  "(generated-arabic-routes)",
);

const longRouteRoot = path.join(
  appDir,
  "(ar)",
  "(generated-arabic-long-route)",
);

const longRoutePage = path.join(longRouteRoot, "[slug]", "page.jsx");
const longRouteRegistry = path.join(longRouteRoot, "long-routes.js");

// Vercel/Next creates additional encoded segment filenames during prerendering.
// Arabic slugs at or above this encoded length are served through one short
// dynamic filesystem route to prevent ENAMETOOLONG while keeping their public
// URLs, canonicals and SEO signals unchanged.
const MAX_PHYSICAL_ENCODED_ROUTE_LENGTH = 170;

const legacyGeneratedRoots = [
  path.join(appDir, "(generated-arabic-routes)"),
  path.join(appDir, "(generated-arabic-long-route)"),
];

const PAGE_FILES = ["page.js", "page.jsx", "page.ts", "page.tsx"];
const EXPORTED_ROUTE_CONFIG_NAMES = [
  "metadata",
  "generateMetadata",
  "viewport",
  "generateViewport",
  "dynamic",
  "dynamicParams",
  "revalidate",
  "runtime",
  "preferredRegion",
  "maxDuration",
  "generateStaticParams",
];

const longRoutes = [];

function hasArabic(value) {
  return /[\u0600-\u06FF]/.test(value);
}

function hasEncoded(value) {
  return /%[0-9a-fA-F]{2}/.test(value);
}

function encodeSegment(segment) {
  return encodeURIComponent(segment);
}

function encodedRouteLength(routeParts) {
  return routeParts.map(encodeSegment).join("/").length;
}

function shouldUseDynamicLongRoute(routeParts) {
  return encodedRouteLength(routeParts) >= MAX_PHYSICAL_ENCODED_ROUTE_LENGTH;
}

function toAliasImportPath(filePath) {
  const relativeFromProjectRoot = path
    .relative(projectRoot, filePath)
    .replace(/\\/g, "/");

  return `@/${relativeFromProjectRoot}`;
}

function findExportedNames(sourceCode) {
  return EXPORTED_ROUTE_CONFIG_NAMES.filter((name) => {
    const regex = new RegExp(
      `export\\s+(const|let|var|function|async\\s+function)\\s+${name}\\b`,
    );

    return regex.test(sourceCode);
  });
}

function generatePhysicalWrapper(sourcePageFile, routeParts) {
  const encodedParts = routeParts.map(encodeSegment);
  const outputDir = path.join(generatedRoot, ...encodedParts);
  const outputPageFile = path.join(outputDir, "page.jsx");

  fs.mkdirSync(outputDir, { recursive: true });

  const importPath = toAliasImportPath(sourcePageFile);
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

function registerLongRoute(sourcePageFile, routeParts) {
  if (routeParts.length !== 1) {
    throw new Error(
      `Long Arabic routes currently must contain one URL segment: /${routeParts.join("/")}`,
    );
  }

  const slug = routeParts[0];
  const sourceCode = fs.readFileSync(sourcePageFile, "utf8");
  const exportedNames = findExportedNames(sourceCode);

  longRoutes.push({
    slug,
    sourcePageFile,
    importPath: toAliasImportPath(sourcePageFile),
    exportedNames,
  });

  console.log(
    `Skipped physical wrapper for long Arabic route: /${slug} ` +
      `(encoded length ${encodedRouteLength(routeParts)})`,
  );
}

function processPage(sourcePageFile, routeParts) {
  if (shouldUseDynamicLongRoute(routeParts)) {
    registerLongRoute(sourcePageFile, routeParts);
    return;
  }

  generatePhysicalWrapper(sourcePageFile, routeParts);
}

function walk(directory, routeParts = []) {
  if (!fs.existsSync(directory)) return;

  const items = fs.readdirSync(directory, { withFileTypes: true });
  const pageFile = items.find(
    (item) => item.isFile() && PAGE_FILES.includes(item.name),
  );

  if (pageFile && routeParts.length > 0) {
    const routePath = routeParts.join("/");

    if (hasArabic(routePath) && !hasEncoded(routePath)) {
      processPage(path.join(directory, pageFile.name), routeParts);
    }
  }

  for (const item of items) {
    if (!item.isDirectory()) continue;
    if (item.name.startsWith("_")) continue;
    if (item.name.startsWith("@")) continue;
    if (item.name.startsWith("(") && item.name.endsWith(")")) continue;

    walk(path.join(directory, item.name), [...routeParts, item.name]);
  }
}

function generateLongRouteRegistry() {
  if (longRoutes.length === 0) return;

  fs.mkdirSync(longRouteRoot, { recursive: true });

  const lines = [];

  longRoutes.forEach((route, index) => {
    const imports = [`default as LongPage${index}`];

    if (route.exportedNames.includes("metadata")) {
      imports.push(`metadata as LongMetadata${index}`);
    }

    if (route.exportedNames.includes("generateMetadata")) {
      imports.push(`generateMetadata as LongGenerateMetadata${index}`);
    }

    lines.push(
      `import { ${imports.join(", ")} } from ${JSON.stringify(route.importPath)};`,
    );
  });

  lines.push("", "export const LONG_ARABIC_ROUTES = {");

  longRoutes.forEach((route, index) => {
    lines.push(`  ${JSON.stringify(route.slug)}: {`);
    lines.push(`    Component: LongPage${index},`);

    if (route.exportedNames.includes("metadata")) {
      lines.push(`    metadata: LongMetadata${index},`);
    } else {
      lines.push("    metadata: undefined,");
    }

    if (route.exportedNames.includes("generateMetadata")) {
      lines.push(`    generateMetadata: LongGenerateMetadata${index},`);
    } else {
      lines.push("    generateMetadata: undefined,");
    }

    lines.push("  },");
  });

  lines.push("};", "");
  fs.writeFileSync(longRouteRegistry, lines.join("\n"), "utf8");
}

function generateLongRoutePage() {
  if (longRoutes.length === 0) return;

  fs.mkdirSync(path.dirname(longRoutePage), { recursive: true });

  const wrapper = `import { notFound } from "next/navigation";
import { LONG_ARABIC_ROUTES } from "../long-routes";

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const runtime = "nodejs";

function decodeRouteSlug(value = "") {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = decodeRouteSlug(resolvedParams?.slug || "");
  const route = LONG_ARABIC_ROUTES[slug];

  if (!route) {
    return {
      title: "الصفحة غير موجودة",
      robots: { index: false, follow: false },
    };
  }

  if (typeof route.generateMetadata === "function") {
    return route.generateMetadata({
      params: Promise.resolve({ slug }),
    });
  }

  return route.metadata || {};
}

export default async function LongArabicRoute({ params }) {
  const resolvedParams = await params;
  const slug = decodeRouteSlug(resolvedParams?.slug || "");
  const route = LONG_ARABIC_ROUTES[slug];

  if (!route) notFound();

  const PageComponent = route.Component;
  return <PageComponent />;
}
`;

  fs.writeFileSync(longRoutePage, wrapper, "utf8");
}

function assertLongRoutesWereNotPhysicallyGenerated() {
  for (const route of longRoutes) {
    const encodedDirectory = path.join(
      generatedRoot,
      encodeURIComponent(route.slug),
    );

    if (fs.existsSync(encodedDirectory)) {
      throw new Error(
        `Long Arabic slug was generated as a physical folder: ${encodedDirectory}`,
      );
    }
  }
}

for (const legacyRoot of legacyGeneratedRoots) {
  fs.rmSync(legacyRoot, { recursive: true, force: true });
}

fs.rmSync(generatedRoot, { recursive: true, force: true });
fs.rmSync(longRouteRoot, { recursive: true, force: true });
fs.mkdirSync(sourceRoot, { recursive: true });

walk(sourceRoot);
generateLongRouteRegistry();
generateLongRoutePage();
assertLongRoutesWereNotPhysicallyGenerated();

console.log(`Dynamic long Arabic routes generated: ${longRoutes.length}`);
console.log(`Arabic route source: ${sourceRoot}`);
console.log(`Arabic route output: ${generatedRoot}`);
console.log("Arabic route generation complete.");

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

// This slug is deliberately served by one short dynamic filesystem route.
// Generating a physical percent-encoded folder for it causes Vercel's output
// path to exceed the filesystem limit.
const LONG_ROUTE_SLUG = "سعر-متر-العظم-بالمواد-في-السعودية";

const legacyGeneratedRoots = [
  path.join(appDir, "(generated-arabic-routes)"),
  path.join(appDir, "(generated-arabic-long-route)"),
];

const PAGE_FILES = ["page.js", "page.jsx", "page.ts", "page.tsx"];
const EXPORTED_ROUTE_CONFIG_NAMES = [
  "metadata",
  "viewport",
  "dynamicParams",
  "runtime",
  "preferredRegion",
  "maxDuration",
];

function hasArabic(value) {
  return /[\u0600-\u06FF]/.test(value);
}

function hasEncoded(value) {
  return /%[0-9a-fA-F]{2}/.test(value);
}

function encodeSegment(segment) {
  return encodeURIComponent(segment);
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

function generateWrapper(sourcePageFile, routeParts) {
  const routePath = routeParts.join("/");

  // Never create a physical encoded directory for the very long slug.
  if (routePath === LONG_ROUTE_SLUG) {
    console.log(`Skipped physical wrapper for long Arabic route: /${routePath}`);
    return;
  }

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

  console.log(`Generated Arabic route: /${routePath}`);
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
      generateWrapper(path.join(directory, pageFile.name), routeParts);
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

function findSourcePage(directory) {
  for (const fileName of PAGE_FILES) {
    const candidate = path.join(directory, fileName);
    if (fs.existsSync(candidate)) return candidate;
  }

  return null;
}

function generateLongRouteWrapper() {
  const sourceDirectory = path.join(sourceRoot, LONG_ROUTE_SLUG);
  const sourcePageFile = findSourcePage(sourceDirectory);

  if (!sourcePageFile) {
    throw new Error(
      `Long Arabic route source page was not found: ${sourceDirectory}`,
    );
  }

  const importPath = toAliasImportPath(sourcePageFile);

  fs.mkdirSync(path.dirname(longRoutePage), { recursive: true });

  const wrapper = `import { notFound } from "next/navigation";
import LongArabicPage, { metadata as sourceMetadata } from "${importPath}";

const LONG_ROUTE_SLUG = ${JSON.stringify(LONG_ROUTE_SLUG)};

// Keep the public Arabic URL unchanged, but render it through one short
// filesystem function so Vercel does not create an overlong prerender path.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const metadata = sourceMetadata;

export default async function LongArabicRoute({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || "";

  let decodedSlug = rawSlug;
  try {
    decodedSlug = decodeURIComponent(rawSlug);
  } catch {
    // Next.js normally supplies a decoded param. Keep the raw value if a
    // malformed escape sequence is ever received.
  }

  if (decodedSlug !== LONG_ROUTE_SLUG) {
    notFound();
  }

  return <LongArabicPage />;
}
`;

  fs.writeFileSync(longRoutePage, wrapper, "utf8");
  console.log(`Generated dynamic long Arabic route: /${LONG_ROUTE_SLUG}`);
}

function assertLongSlugWasNotPhysicallyGenerated() {
  const encodedLongDirectory = path.join(
    generatedRoot,
    encodeURIComponent(LONG_ROUTE_SLUG),
  );

  if (fs.existsSync(encodedLongDirectory)) {
    throw new Error(
      `The long Arabic slug was generated as a physical folder: ${encodedLongDirectory}`,
    );
  }
}

for (const legacyRoot of legacyGeneratedRoots) {
  fs.rmSync(legacyRoot, { recursive: true, force: true });
}

fs.rmSync(generatedRoot, { recursive: true, force: true });
fs.rmSync(longRouteRoot, { recursive: true, force: true });
fs.mkdirSync(sourceRoot, { recursive: true });

walk(sourceRoot);
generateLongRouteWrapper();
assertLongSlugWasNotPhysicallyGenerated();

console.log(`Arabic route source: ${sourceRoot}`);
console.log(`Arabic route output: ${generatedRoot}`);
console.log("Arabic route generation complete.");

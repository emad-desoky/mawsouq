
import fs from "fs";
import path from "path";

const appDir = path.join(process.cwd(), "app");
const sourceRoot = path.join(appDir, "_arabic-pages");

const generatedRoot = path.join(
  appDir,
  "(generated-arabic-routes)",
);

const longRouteRoot = path.join(
  appDir,
  "(generated-arabic-long-route)",
);

const PAGE_FILES = [
  "page.js",
  "page.jsx",
  "page.ts",
  "page.tsx",
];

/**
 * Very long Arabic slugs are handled by one short dynamic route.
 *
 * The public URL does not change.
 * No redirect is created.
 * Canonical URLs stay unchanged.
 */
const LONG_DYNAMIC_SLUGS = new Set([
  "سعر-متر-العظم-بالمواد-في-السعودية",
]);

function hasArabic(value) {
  return /[\u0600-\u06FF]/.test(value);
}

function hasEncoded(value) {
  return /%[0-9a-fA-F]{2}/.test(value);
}

function encodeSegment(segment) {
  return encodeURIComponent(segment);
}

function toImportPath(fromFile, toFile) {
  let relative = path
    .relative(path.dirname(fromFile), toFile)
    .replace(/\\\\/g, "/");

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
    "generateViewport",
    "revalidate",
    "runtime",
    "preferredRegion",
    "maxDuration",
  ];

  for (const name of checks) {
    const regex = new RegExp(
      \`export\\\\s+(const|let|var|function|async\\\\s+function)\\\\s+\${name}\\\\b\`,
    );

    if (regex.test(sourceCode)) {
      names.push(name);
    }
  }

  return names;
}

function generateEncodedWrapper(
  sourcePageFile,
  routeParts,
) {
  const encodedParts = routeParts.map(encodeSegment);

  const outputDir = path.join(
    generatedRoot,
    ...encodedParts,
  );

  const outputPageFile = path.join(
    outputDir,
    "page.jsx",
  );

  fs.mkdirSync(outputDir, {
    recursive: true,
  });

  const importPath = toImportPath(
    outputPageFile,
    sourcePageFile,
  );

  const sourceCode = fs.readFileSync(
    sourcePageFile,
    "utf8",
  );

  const exportedNames =
    findExportedNames(sourceCode);

  const lines = [
    \`export { default } from "\${importPath}";\`,
  ];

  for (const name of exportedNames) {
    lines.push(
      \`export { \${name} } from "\${importPath}";\`,
    );
  }

  lines.push("");

  fs.writeFileSync(
    outputPageFile,
    lines.join("\\n"),
    "utf8",
  );

  console.log(
    \`Generated encoded Arabic route: /\${routeParts.join("/")}\`,
  );
}

function generateLongDynamicRoute(longRoutes) {
  if (!longRoutes.length) {
    return;
  }

  const outputDir = path.join(
    longRouteRoot,
    "[slug]",
  );

  const outputPageFile = path.join(
    outputDir,
    "page.jsx",
  );

  fs.mkdirSync(outputDir, {
    recursive: true,
  });

  const imports = [
    'import { notFound } from "next/navigation";',
  ];

  const metadataCases = [];
  const pageCases = [];

  longRoutes.forEach((route, index) => {
    const importPath = toImportPath(
      outputPageFile,
      route.sourcePageFile,
    );

    imports.push(
      \`import Page\${index}, * as Module\${index} from "\${importPath}";\`,
    );

    metadataCases.push(
      \`    case \${JSON.stringify(route.slug)}:
      if (
        typeof Module\${index}.generateMetadata ===
        "function"
      ) {
        return Module\${index}.generateMetadata({
          params,
          parent,
        });
      }

      return Module\${index}.metadata ?? {};\`,
    );

    pageCases.push(
      \`    case \${JSON.stringify(route.slug)}:
      return (
        <Page\${index}
          params={params}
          searchParams={searchParams}
        />
      );\`,
    );
  });

  const code = \`\${imports.join("\\n")}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
  parent,
}) {
  const resolvedParams = await params;

  switch (resolvedParams?.slug) {
\${metadataCases.join("\\n")}
    default:
      return {};
  }
}

export default async function LongArabicRoute({
  params,
  searchParams,
}) {
  const resolvedParams = await params;

  switch (resolvedParams?.slug) {
\${pageCases.join("\\n")}
    default:
      notFound();
  }
}
\`;

  fs.writeFileSync(
    outputPageFile,
    code,
    "utf8",
  );

  for (const route of longRoutes) {
    console.log(
      \`Generated dynamic long Arabic route: /\${route.slug}\`,
    );
  }
}

function walk(
  dir,
  routeParts = [],
  longRoutes = [],
) {
  if (!fs.existsSync(dir)) {
    return longRoutes;
  }

  const items = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  const pageFile = items.find(
    (item) =>
      item.isFile() &&
      PAGE_FILES.includes(item.name),
  );

  if (pageFile && routeParts.length > 0) {
    const routePath = routeParts.join("/");

    if (
      hasArabic(routePath) &&
      !hasEncoded(routePath)
    ) {
      const sourcePageFile = path.join(
        dir,
        pageFile.name,
      );

      if (
        routeParts.length === 1 &&
        LONG_DYNAMIC_SLUGS.has(routePath)
      ) {
        longRoutes.push({
          slug: routePath,
          sourcePageFile,
        });
      } else {
        generateEncodedWrapper(
          sourcePageFile,
          routeParts,
        );
      }
    }
  }

  for (const item of items) {
    if (!item.isDirectory()) continue;
    if (item.name.startsWith("_")) continue;
    if (item.name.startsWith("@")) continue;

    if (
      item.name.startsWith("(") &&
      item.name.endsWith(")")
    ) {
      continue;
    }

    walk(
      path.join(dir, item.name),
      [...routeParts, item.name],
      longRoutes,
    );
  }

  return longRoutes;
}

fs.rmSync(generatedRoot, {
  recursive: true,
  force: true,
});

fs.rmSync(longRouteRoot, {
  recursive: true,
  force: true,
});

if (!fs.existsSync(sourceRoot)) {
  fs.mkdirSync(sourceRoot, {
    recursive: true,
  });
}

const longRoutes = walk(sourceRoot);

generateLongDynamicRoute(longRoutes);

console.log(
  "Arabic route generation complete.",
);

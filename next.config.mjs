import fs from "fs";
import path from "path";
import { MERGED_ARABIC_PAGES, MERGED_ARABIC_SLUGS } from "./lib/mergedPages.mjs";

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function safeEncodePath(decodedPath) {
  return decodedPath
    .split("/")
    .map((part) => (part ? encodeURIComponent(part).toLowerCase() : ""))
    .join("/");
}

function getArabicEncodedRewrites() {
  const appDir = path.join(process.cwd(), "app");
  const rewrites = [];
  const seen = new Set();

  function addRewrite(source, destination) {
    if (!source || !destination) return;
    if (source === destination) return;

    const key = `${source}=>${destination}`;
    if (seen.has(key)) return;

    seen.add(key);
    rewrites.push({ source, destination });
  }

  function addArabicVariants(decodedRoute, encodedRoute) {
    addRewrite(decodedRoute, encodedRoute);
    addRewrite(decodedRoute + "/", encodedRoute + "/");

    const encodedLower = safeEncodePath(decodedRoute);
    addRewrite(encodedLower, encodedRoute);
    addRewrite(encodedLower + "/", encodedRoute + "/");
  }

  function walk(dir, routeParts = []) {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir, { withFileTypes: true });

    const hasPage = items.some(
      (item) =>
        item.isFile() &&
        ["page.js", "page.jsx", "page.ts", "page.tsx"].includes(item.name),
    );

    if (hasPage && routeParts.length > 0) {
      const encodedRoute = "/" + routeParts.join("/");
      const decodedRoute = safeDecode(encodedRoute);

      if (/[\u0600-\u06FF]/.test(decodedRoute)) {
        addArabicVariants(decodedRoute, encodedRoute);
      }
    }

    for (const item of items) {
      if (!item.isDirectory()) continue;

      if (item.name === "api") continue;
      if (item.name.startsWith("_")) continue;

      const isRouteGroup = item.name.startsWith("(") && item.name.endsWith(")");
      const isSlot = item.name.startsWith("@");

      const nextRouteParts =
        isRouteGroup || isSlot ? routeParts : [...routeParts, item.name];

      walk(path.join(dir, item.name), nextRouteParts);
    }
  }

  walk(appDir);

  console.log("Arabic rewrites generated:", rewrites.length);

  return rewrites;
}

function encodeDirectArabicUpper(decodedPath) {
  return decodedPath
    .split("/")
    .map((part) => (part ? encodeURIComponent(part) : ""))
    .join("/");
}

function encodeDirectArabicLower(decodedPath) {
  return encodeDirectArabicUpper(decodedPath).toLowerCase();
}

function getDirectArabicFolderRewrites() {
  const appDir = path.join(process.cwd(), "app");
  const rewrites = [];
  const seen = new Set();

  function addRewrite(source, destination) {
    if (!source || !destination) return;
    if (source === destination) return;

    const key = `${source}=>${destination}`;
    if (seen.has(key)) return;

    seen.add(key);
    rewrites.push({ source, destination });
  }

  function addRewriteWithSlash(source, destination) {
    addRewrite(source, destination);
    addRewrite(source + "/", destination + "/");
  }

  function walk(dir, routeParts = []) {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir, { withFileTypes: true });

    const hasPage = items.some(
      (item) =>
        item.isFile() &&
        ["page.js", "page.jsx", "page.ts", "page.tsx"].includes(item.name),
    );

    if (hasPage && routeParts.length > 0) {
      const actualRoute = "/" + routeParts.join("/");

      // DO NOT TOUCH OLD ENCODED FOLDERS
      const isOldEncodedFolder = routeParts.some((part) =>
        /%[0-9a-fA-F]{2}/.test(part),
      );

      // ONLY HANDLE NEW DIRECT ARABIC FOLDERS
      const isDirectArabicFolder = /[\u0600-\u06FF]/.test(actualRoute);

      if (!isOldEncodedFolder && isDirectArabicFolder) {
        const upperEncodedRoute = encodeDirectArabicUpper(actualRoute);
        const lowerEncodedRoute = encodeDirectArabicLower(actualRoute);

        // Browser Arabic encoded URL: /%D8%B9%D9%86...
        addRewriteWithSlash(upperEncodedRoute, actualRoute);

        // Lowercase encoded URL: /%d8%b9%d9%86...
        addRewriteWithSlash(lowerEncodedRoute, actualRoute);
      }
    }

    for (const item of items) {
      if (!item.isDirectory()) continue;

      if (item.name === "api") continue;
      if (item.name.startsWith("_")) continue;

      const isRouteGroup = item.name.startsWith("(") && item.name.endsWith(")");
      const isSlot = item.name.startsWith("@");

      const nextRouteParts =
        isRouteGroup || isSlot ? routeParts : [...routeParts, item.name];

      walk(path.join(dir, item.name), nextRouteParts);
    }
  }

  walk(appDir);

  console.log("Direct Arabic folder rewrites generated:", rewrites.length);

  return rewrites;
}
function encodeUpper(decodedPath) {
  return decodedPath
    .split("/")
    .map((part) => (part ? encodeURIComponent(part) : ""))
    .join("/");
}

function getArabicSeoRedirects() {
  const appDir = path.join(process.cwd(), "app");
  const redirects = [];
  const seen = new Set();
  const existingRoutes = new Set();

  function addRedirect(decodedSource, decodedDestination) {
    const destination = encodeUpper(`/${decodedDestination}`) + "/";
    const sources = [
      `/${decodedSource}`,
      encodeUpper(`/${decodedSource}`),
      encodeUpper(`/${decodedSource}`).toLowerCase(),
    ];
    for (const base of sources) {
      for (const source of [base, base + "/"]) {
        if (seen.has(source)) continue;
        seen.add(source);
        redirects.push({ source, destination, permanent: true });
      }
    }
  }

  function walk(dir, routeParts = []) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = items.some(
      (item) => item.isFile() && /^page\.(js|jsx|ts|tsx)$/.test(item.name),
    );
    if (hasPage && routeParts.length === 1) {
      existingRoutes.add(safeDecode(routeParts[0]));
    }
    for (const item of items) {
      if (!item.isDirectory()) continue;
      if (item.name === "api" || item.name.startsWith("_")) continue;
      if (item.name.includes("[")) continue;
      const isGroup = item.name.startsWith("(") && item.name.endsWith(")");
      walk(
        path.join(dir, item.name),
        isGroup ? routeParts : [...routeParts, item.name],
      );
    }
  }

  walk(appDir);

  // Long Arabic slugs are served by a dynamic route, register them too.
  const longRoutesFile = path.join(
    appDir,
    "(ar)",
    "(generated-arabic-long-route)",
    "long-routes.js",
  );
  if (fs.existsSync(longRoutesFile)) {
    const content = fs.readFileSync(longRoutesFile, "utf8");
    for (const match of content.matchAll(/^\s{2}"([^"]+)":\s*\{/gm)) {
      existingRoutes.add(match[1]);
    }
  }

  for (const [from, to] of Object.entries(MERGED_ARABIC_PAGES)) {
    addRedirect(from, to);
  }

  // One URL per page: redirect the ي / ى word-ending spelling variant to the
  // spelling that actually exists instead of serving duplicate content.
  for (const route of existingRoutes) {
    if (!/[\u0600-\u06FF]/.test(route)) continue;
    if (MERGED_ARABIC_SLUGS.has(route)) continue;
    const variants = new Set([
      route.replace(/ي(?=$|-)/g, "ى"),
      route.replace(/ى(?=$|-)/g, "ي"),
    ]);
    for (const variant of variants) {
      if (variant === route || existingRoutes.has(variant)) continue;
      addRedirect(variant, route);
    }
  }

  return redirects;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/en/blog/build-saudi-arabia",
        destination: "/en/blog/build-a-house-saudi-arabia/",
        permanent: true,
      },
      {
        source:
          "/%d9%83%d9%8a%d9%81-%d8%aa%d8%ae%d8%aa%d8%a7%d8%b1-%d8%a7%d9%84%d9%85%d8%b5%d9%85%d9%85-%d8%a7%d9%84%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a-%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b3%d8%a8",
        destination:
          "/%d8%a7%d8%ae%d8%aa%d9%8a%d8%a7%d8%b1-%d9%85%d8%b5%d9%85%d9%85-%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a",
        permanent: true,
      },
      {
        source:
          "/%d9%83%d9%8a%d9%81-%d8%aa%d8%ac%d8%af-%d9%85%d9%87%d9%86%d8%af%d8%b3-%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a-%d8%af%d9%84%d9%8a%d9%84%d9%83-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84",
        destination:
          "/%d8%af%d9%84%d9%8a%d9%84-%d9%85%d9%87%d9%86%d8%af%d8%b3-%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a",
        permanent: true,
      },
      {
        source:
          "/%d8%a7%d9%84%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d8%a5%d9%86%d8%b4%d8%a7%d8%a6%d9%8a",
        destination:
          "/%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%a7%d9%86%d8%b4%d8%a7%d8%a6%d9%8a",
        permanent: true,
      },
      {
        source: "/category/:slug*",
        destination: "/:slug*",
        permanent: true,
      },
      ...getArabicSeoRedirects(),
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
        ],
      },
    ];
  },

  async rewrites() {
    return {
      afterFiles: [
        ...getArabicEncodedRewrites(),
        ...getDirectArabicFolderRewrites(),
      ],
    };
  },

  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "mawsouq.com",
      },
    ],
  },
};

export default nextConfig;

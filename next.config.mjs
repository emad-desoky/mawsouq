import fs from "fs";
import path from "path";

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
    const variants = new Set();

    variants.add(decodedRoute);

    // Fix Arabic ي / ى word-ending issue globally
    variants.add(decodedRoute.replace(/ي(?=$|\/|-)/g, "ى"));
    variants.add(decodedRoute.replace(/ى(?=$|\/|-)/g, "ي"));

    for (const variant of variants) {
      addRewrite(variant, encodedRoute);
      addRewrite(variant + "/", encodedRoute + "/");

      const encodedVariant = safeEncodePath(variant);
      addRewrite(encodedVariant, encodedRoute);
      addRewrite(encodedVariant + "/", encodedRoute + "/");
    }
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
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const ROOT_DIR = process.cwd();

const SCAN_DIRS = ["app", "components"];
const OUTPUT_DIR = path.join(ROOT_DIR, "public", "wp-content", "uploads");
const REPORT_DIR = path.join(ROOT_DIR, "migration-reports");

const CONCURRENCY = 3;
const TIMEOUT_MS = 45000;
const RETRIES = 2;

const WP_IMAGE_REGEX =
  /https:\/\/mawsouq\.com\/wp-content\/uploads\/[^"'`\s)<>}]+/g;

const seedUrls = [
  "https://mawsouq.com/wp-content/uploads/2026/03/اسعار-نقل-العفش-بالسعوديّة-2.webp",
  "https://mawsouq.com/wp-content/uploads/2026/03/تكلفة-بناء-دور-واحد-copy-1024x768.webp",

  "https://mawsouq.com/wp-content/uploads/2026/05/15427010832568.jpg",
  "https://mawsouq.com/wp-content/uploads/2026/05/Projector-vs-TV.jpg",
  "https://mawsouq.com/wp-content/uploads/2026/05/2مخطط-انشائى-سطح-فيلا-scaled.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/التصميم-الانشائى-مبنى-تحت-الانشاء.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/كشف-عزل-الخزانات-copy.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/مخطط-انشائى-سطح-فيلا-scaled.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/مشروع-مجمع-فيللات-دوبلكس-بمكة-أثناء-التنفيذ.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/مشروع-مجمع-فيللات-دوبلكس-بمكة-بعد-التنفيذ.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/منظور-ثلاثى-الابعاد-لمشروع-مجمع-فيللات-دوبلكس-بمكة.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/منظور-ثلاثى-الابعاد-لمشروع-مجمع-فيللات-دوبلكس-بمكة-2.webp",

  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-1.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-2.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-4.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-5.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-6.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-7.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-8.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-9.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-10.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-11.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-12.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-13.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-14.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-15.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-16.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-17.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-18.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-19.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-20.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-21.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-22.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-23.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-24.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-25.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-26.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-27.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-28.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-30.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-31.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-32.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-33.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-34.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-35.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-36.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-37.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-38.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-39.webp",
  "https://mawsouq.com/wp-content/uploads/2026/05/ديكور-تلفزيون-40.webp",

  "https://mawsouq.com/wp-content/uploads/2026/06/السيراميك-الرخام.webp",
  "https://mawsouq.com/wp-content/uploads/2026/06/صيانة-المكيفات.webp",

  "https://mawsouq.com/wp-content/uploads/2026/11/engineer-office.png",
  "https://mawsouq.com/wp-content/uploads/2026/11/engineer-office2.png",
  "https://mawsouq.com/wp-content/uploads/2026/11/كيف-تجد-مهندس-معماري؟.png",
  "https://mawsouq.com/wp-content/uploads/2026/11/مصمم-المعماري.png",

  "https://mawsouq.com/wp-content/uploads/2023/02/تصميم-معماري-عن-بعد.webp",
  "https://mawsouq.com/wp-content/uploads/2023/02/ديكور-داخلى-1-copy.webp",
];

function addGeneratedSeries(urls) {
  for (let i = 1; i <= 75; i += 1) {
    urls.add(`https://mawsouq.com/wp-content/uploads/2026/11/${i}.png`);
  }
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (
        [
          "node_modules",
          ".next",
          ".git",
          "public",
          "migration-reports",
        ].includes(entry.name)
      ) {
        continue;
      }

      walk(fullPath, files);
    } else if (/\.(js|jsx|ts|tsx|md|mdx)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function cleanUrl(url) {
  return url
    .replace(/&amp;/g, "&")
    .replace(/[.,;]+$/g, "")
    .trim();
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function normalizeRemoteUrl(rawUrl) {
  const cleaned = cleanUrl(rawUrl);
  const parsed = new URL(cleaned);

  const encodedPath = parsed.pathname
    .split("/")
    .map((part) => {
      if (!part) return part;

      const decoded = safeDecode(part);
      return encodeURIComponent(decoded);
    })
    .join("/");

  return `${parsed.protocol}//${parsed.host}${encodedPath}${parsed.search}`;
}

function localPathFromUrl(rawUrl) {
  const normalized = normalizeRemoteUrl(rawUrl);
  const parsed = new URL(normalized);

  const uploadsPrefix = "/wp-content/uploads/";
  const relativeEncoded = parsed.pathname.startsWith(uploadsPrefix)
    ? parsed.pathname.slice(uploadsPrefix.length)
    : parsed.pathname.replace(/^\/+/, "");

  const relativeDecoded = safeDecode(relativeEncoded);
  return path.join(OUTPUT_DIR, relativeDecoded);
}

function extractUrlsFromProject() {
  const urls = new Set(seedUrls.map(cleanUrl));

  addGeneratedSeries(urls);

  for (const dir of SCAN_DIRS) {
    const fullDir = path.join(ROOT_DIR, dir);
    const files = walk(fullDir);

    for (const file of files) {
      const content = fs.readFileSync(file, "utf8");
      const matches = content.match(WP_IMAGE_REGEX) || [];

      for (const match of matches) {
        if (match.includes("${")) continue;
        urls.add(cleanUrl(match));
      }
    }
  }

  return [...urls].sort();
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125 Safari/537.36",
        Accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        Referer: "https://mawsouq.com/",
        "Cache-Control": "no-cache",
      },
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function downloadOnce(rawUrl) {
  const normalizedUrl = normalizeRemoteUrl(rawUrl);
  const outputPath = localPathFromUrl(rawUrl);
  const relativeOutputPath = path.relative(ROOT_DIR, outputPath);

  if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 0) {
    return {
      url: rawUrl,
      normalizedUrl,
      status: "exists",
      path: relativeOutputPath,
      bytes: fs.statSync(outputPath).size,
    };
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const tempPath = `${outputPath}.download`;

  if (fs.existsSync(tempPath)) {
    fs.rmSync(tempPath, { force: true });
  }

  const args = [
    "--location",
    "--fail",
    "--silent",
    "--show-error",
    "--connect-timeout",
    "30",
    "--max-time",
    "180",
    "--retry",
    "3",
    "--retry-delay",
    "2",
    "--globoff",
    "--user-agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125 Safari/537.36",
    "--referer",
    "https://mawsouq.com/",
    "--output",
    tempPath,
    normalizedUrl,
  ];

  const result = await new Promise((resolve) => {
    const child = spawn("curl.exe", args, {
      windowsHide: true,
    });

    let stderr = "";

    child.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    child.on("close", (code) => {
      resolve({ code, stderr });
    });

    child.on("error", (error) => {
      resolve({ code: 1, stderr: error.message });
    });
  });

  if (result.code !== 0) {
    fs.rmSync(tempPath, { force: true });

    return {
      url: rawUrl,
      normalizedUrl,
      status: "failed",
      reason: result.stderr || `curl failed with code ${result.code}`,
      path: relativeOutputPath,
    };
  }

  if (!fs.existsSync(tempPath) || fs.statSync(tempPath).size <= 0) {
    fs.rmSync(tempPath, { force: true });

    return {
      url: rawUrl,
      normalizedUrl,
      status: "failed",
      reason: "Downloaded empty file",
      path: relativeOutputPath,
    };
  }

  fs.renameSync(tempPath, outputPath);

  return {
    url: rawUrl,
    normalizedUrl,
    status: "downloaded",
    path: relativeOutputPath,
    bytes: fs.statSync(outputPath).size,
  };
}

async function download(rawUrl) {
  let lastResult = null;

  for (let attempt = 1; attempt <= RETRIES + 1; attempt += 1) {
    try {
      const result = await downloadOnce(rawUrl);

      if (result.status !== "failed") {
        return result;
      }

      lastResult = {
        ...result,
        attempt,
      };
    } catch (error) {
      lastResult = {
        url: rawUrl,
        normalizedUrl: normalizeRemoteUrl(rawUrl),
        status: "failed",
        reason:
          error.name === "AbortError"
            ? `Timeout after ${TIMEOUT_MS}ms`
            : error.message,
        path: path.relative(ROOT_DIR, localPathFromUrl(rawUrl)),
        attempt,
      };
    }

    if (attempt <= RETRIES) {
      await wait(1200 * attempt);
    }
  }

  const outputPath = localPathFromUrl(rawUrl);

  if (fs.existsSync(outputPath) && fs.statSync(outputPath).size === 0) {
    fs.rmSync(outputPath, { force: true });
  }

  return lastResult;
}

async function runPool(items, workerCount, workerFn) {
  const results = new Array(items.length);
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const currentIndex = index;
      index += 1;

      results[currentIndex] = await workerFn(items[currentIndex], currentIndex);
    }
  }

  const workers = Array.from(
    { length: Math.min(workerCount, items.length) },
    () => worker(),
  );

  await Promise.all(workers);

  return results;
}

async function main() {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const urls = extractUrlsFromProject();

  fs.writeFileSync(
    path.join(REPORT_DIR, "wp-image-urls.json"),
    JSON.stringify(urls, null, 2),
    "utf8",
  );

  console.log(`Found ${urls.length} unique WordPress image URLs.`);
  console.log(`Saving into: ${path.relative(ROOT_DIR, OUTPUT_DIR)}`);
  console.log("");

  const results = await runPool(urls, CONCURRENCY, async (url, index) => {
    const result = await download(url);

    const label =
      result.status === "failed"
        ? `FAILED: ${result.reason}`
        : result.status.toUpperCase();

    console.log(`[${index + 1}/${urls.length}] ${label}`);
    console.log(result.normalizedUrl || url);
    console.log(result.path);
    console.log("");

    return result;
  });

  const successful = results.filter((item) => item.status !== "failed");
  const failed = results.filter((item) => item.status === "failed");

  fs.writeFileSync(
    path.join(REPORT_DIR, "wp-image-migration-results.json"),
    JSON.stringify(results, null, 2),
    "utf8",
  );

  fs.writeFileSync(
    path.join(REPORT_DIR, "wp-image-failed.json"),
    JSON.stringify(failed, null, 2),
    "utf8",
  );

  console.log("DONE");
  console.log(`Success: ${successful.length}`);
  console.log(`Failed: ${failed.length}`);
  console.log("");
  console.log("Reports:");
  console.log("migration-reports/wp-image-urls.json");
  console.log("migration-reports/wp-image-migration-results.json");
  console.log("migration-reports/wp-image-failed.json");

  if (failed.length > 0) {
    console.log("");
    console.log("Some images failed. Open:");
    console.log("migration-reports/wp-image-failed.json");
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

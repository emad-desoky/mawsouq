"use client";

import { useEffect } from "react";

const SITE_DOMAINS = [
  "mawsouq.com",
  "www.mawsouq.com",
  "mawsouq-wheat.vercel.app",
];

export default function LocalDomainLinkFix() {
  useEffect(() => {
    const hostname = window.location.hostname;

    const shouldFixLinks =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "mawsouq-wheat.vercel.app";

    if (!shouldFixLinks) return;

    function fixLinks() {
      document.querySelectorAll("a[href]").forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;

        // only fix full domain links
        if (!href.startsWith("http://") && !href.startsWith("https://")) return;

        try {
          const url = new URL(href);

          if (SITE_DOMAINS.includes(url.hostname)) {
            link.setAttribute("href", url.pathname + url.search + url.hash);
          }
        } catch {}
      });
    }

    fixLinks();

    const observer = new MutationObserver(fixLinks);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

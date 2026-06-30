"use client";

import { useEffect } from "react";

export default function ArabicLinkFix() {
  useEffect(() => {
    function safeDecode(value) {
      try {
        return decodeURIComponent(value);
      } catch {
        return value;
      }
    }

    function handleClick(event) {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;

      const link = event.target.closest("a");
      if (!link) return;

      const rawHref = link.getAttribute("href");
      if (!rawHref) return;

      if (link.target && link.target !== "_self") return;

      const url = new URL(rawHref, window.location.origin);

      if (url.origin !== window.location.origin) return;

      const decodedPath = safeDecode(url.pathname);

      const hasArabic = /[\u0600-\u06FF]/.test(decodedPath);
      const hasEncodedArabic = /%d8|%d9/i.test(rawHref);

      if (!hasArabic && !hasEncodedArabic) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();

      window.location.href = url.pathname + url.search + url.hash;
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}

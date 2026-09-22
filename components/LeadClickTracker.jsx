"use client";

import { useEffect } from "react";
import {
  captureFirstTouchAttribution,
  getWhatsAppDisplayNumber,
  isWhatsAppUrl,
  normalizeWhatsAppUrl,
  startWhatsAppLead,
  trackLeadAction,
} from "@/lib/leadTracking";

function parseLeadContext(anchor) {
  const raw = anchor.dataset.leadContext;
  if (!raw) return {};

  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export default function LeadClickTracker() {
  useEffect(() => {
    captureFirstTouchAttribution();

    const normalizeAnchor = (anchor) => {
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const currentHref = anchor.href || anchor.getAttribute("href") || "";
      if (!isWhatsAppUrl(currentHref)) return;

      const normalizedHref = normalizeWhatsAppUrl(currentHref);
      if (normalizedHref && normalizedHref !== currentHref) {
        anchor.href = normalizedHref;
      }

      // Update any plain-text legacy WhatsApp number shown in the UI without
      // disturbing CTA labels or icons.
      if (anchor.children.length === 0) {
        const label = (anchor.textContent || "").trim();
        if (/^(?:\+?20\s*)?12\s*2332\s*8270$/.test(label.replace(/-/g, " "))) {
          anchor.textContent = getWhatsAppDisplayNumber();
        }
      }
    };

    const normalizeWhatsAppLinks = (root = document) => {
      if (root instanceof HTMLAnchorElement) normalizeAnchor(root);
      root.querySelectorAll?.("a[href]").forEach(normalizeAnchor);
    };

    normalizeWhatsAppLinks(document);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          normalizeAnchor(mutation.target);
          return;
        }

        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) normalizeWhatsAppLinks(node);
        });
      });
    });

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["href"],
    });

    const handleClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href") || "";
      const href = anchor.href || rawHref;
      const placement = anchor.dataset.leadPlacement || "global_lead_link";

      if (rawHref.startsWith("tel:") || href.startsWith("tel:")) {
        if (anchor.dataset.leadTracked !== "true") {
          trackLeadAction("phone", placement, { link_url: rawHref || href });
        }
        return;
      }

      if (isWhatsAppUrl(href)) {
        event.preventDefault();
        const targetWindow = anchor.getAttribute("target") === "_self" ? "_self" : "_blank";
        startWhatsAppLead(href, placement, parseLeadContext(anchor), targetWindow);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}

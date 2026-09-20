"use client";

import { useEffect } from "react";
import {
  captureFirstTouchAttribution,
  isWhatsAppUrl,
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
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}

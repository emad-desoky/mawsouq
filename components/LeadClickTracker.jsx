"use client";

import { useEffect } from "react";
import { trackLeadAction } from "@/lib/leadTracking";

export default function LeadClickTracker() {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!anchor || anchor.dataset.leadTracked === "true") return;

      const rawHref = anchor.getAttribute("href") || "";
      const href = anchor.href || rawHref;
      const placement = anchor.dataset.leadPlacement || "global_lead_link";

      if (rawHref.startsWith("tel:") || href.startsWith("tel:")) {
        trackLeadAction("phone", placement, { link_url: rawHref || href });
        return;
      }

      if (href.includes("wa.me/") || href.includes("api.whatsapp.com/")) {
        trackLeadAction("whatsapp", placement, { link_url: href });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}

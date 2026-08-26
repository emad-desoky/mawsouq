export function trackLeadAction(method, placement, extra = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    lead_method: method,
    placement,
    page_path: window.location.pathname,
    page_title: document.title,
    ...extra,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", method === "phone" ? "phone_click" : "whatsapp_click", payload);
    window.gtag("event", "generate_lead", payload);
  }
}

export function trackTrustVideo(videoType, videoId, placement = "seo_trust_section") {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "trust_video_play", {
      video_type: videoType,
      video_id: videoId,
      placement,
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }
}

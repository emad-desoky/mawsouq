const ATTRIBUTION_KEY = "mawsooq_first_touch_v2";
const EVENT_DEDUPE_MS = 900;
const WHATSAPP_NUMBER = "966598061334";
const WHATSAPP_DISPLAY_NUMBER = "+966 59 806 1334";

let lastLeadEvent = { signature: "", at: 0 };

function safeStorageRead(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageWrite(key, value) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Storage can be blocked in privacy modes; tracking still works without it.
  }
}

function normalizeText(value, max = 500) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/\s+/g, " ").trim().slice(0, max);
}

function getDeviceType() {
  if (typeof window === "undefined") return "unknown";
  const width = window.innerWidth || 0;
  if (width <= 767) return "mobile";
  if (width <= 1100) return "tablet";
  return "desktop";
}

export function captureFirstTouchAttribution() {
  if (typeof window === "undefined") return {};

  const existing = safeStorageRead(ATTRIBUTION_KEY);
  if (existing) {
    try {
      return JSON.parse(existing);
    } catch {
      // Rebuild malformed session data below.
    }
  }

  const params = new URLSearchParams(window.location.search);
  const attribution = {
    first_page: window.location.href,
    first_referrer: document.referrer || "",
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
  };

  safeStorageWrite(ATTRIBUTION_KEY, JSON.stringify(attribution));
  return attribution;
}

export function createLeadReference() {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");

  let token = "";
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const bytes = new Uint8Array(6);
    crypto.getRandomValues(bytes);
    token = Array.from(bytes, (byte) => (byte % 36).toString(36)).join("").toUpperCase();
  } else {
    token = Math.random().toString(36).slice(2, 8).toUpperCase().padEnd(6, "X");
  }

  return `MSQ-${yy}${mm}${dd}-${token}`;
}

export function isWhatsAppUrl(rawUrl = "") {
  try {
    const url = new URL(rawUrl, typeof window !== "undefined" ? window.location.href : "https://mawsouq.com");
    return url.hostname === "wa.me" || url.hostname === "api.whatsapp.com" || url.hostname === "www.whatsapp.com";
  } catch {
    return rawUrl.includes("wa.me/") || rawUrl.includes("api.whatsapp.com/");
  }
}

export function normalizeWhatsAppUrl(rawUrl = "") {
  try {
    const url = new URL(
      rawUrl,
      typeof window !== "undefined" ? window.location.href : "https://mawsouq.com",
    );

    if (!isWhatsAppUrl(url.toString())) return rawUrl;

    if (url.hostname === "wa.me") {
      url.pathname = `/${WHATSAPP_NUMBER}`;
    } else {
      url.searchParams.set("phone", WHATSAPP_NUMBER);
    }

    return url.toString();
  } catch {
    return String(rawUrl || "")
      .replace(/wa\.me\/\+?\d+/i, `wa.me/${WHATSAPP_NUMBER}`)
      .replace(/([?&]phone=)\+?\d+/i, `$1${WHATSAPP_NUMBER}`);
  }
}

export function getWhatsAppDisplayNumber() {
  return WHATSAPP_DISPLAY_NUMBER;
}

export function appendLeadReferenceToWhatsAppUrl(rawUrl, reference) {
  try {
    const normalizedUrl = normalizeWhatsAppUrl(rawUrl);
    const url = new URL(
      normalizedUrl,
      typeof window !== "undefined" ? window.location.href : "https://mawsouq.com",
    );
    const currentText = url.searchParams.get("text") || "Hello Mawsooq, I would like to discuss my project.";
    const marker = `Mawsooq Reference: ${reference}`;
    const nextText = currentText.includes("Mawsooq Reference:")
      ? currentText.replace(/Mawsooq Reference:\s*[A-Z0-9-]+/i, marker)
      : `${currentText.trim()}\n\n${marker}`;

    url.searchParams.set("text", nextText);
    return url.toString();
  } catch {
    return normalizeWhatsAppUrl(rawUrl);
  }
}

function buildLeadPayload(reference, placement, finalUrl, extra = {}) {
  const firstTouch = captureFirstTouchAttribution();
  const params = new URLSearchParams(window.location.search);

  return {
    reference,
    page_url: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
    placement: normalizeText(placement, 100) || "global_lead_link",
    language: document.documentElement.lang || "unknown",
    device: getDeviceType(),
    screen: `${window.innerWidth || 0}x${window.innerHeight || 0}`,
    referrer: document.referrer || firstTouch.first_referrer || "",
    first_page: firstTouch.first_page || "",
    utm_source: params.get("utm_source") || firstTouch.utm_source || "",
    utm_medium: params.get("utm_medium") || firstTouch.utm_medium || "",
    utm_campaign: params.get("utm_campaign") || firstTouch.utm_campaign || "",
    utm_term: params.get("utm_term") || firstTouch.utm_term || "",
    utm_content: params.get("utm_content") || firstTouch.utm_content || "",
    whatsapp_url: finalUrl,
    chat_summary: normalizeText(extra.chat_summary || extra.chatSummary, 1200),
    ai_ready: Boolean(extra.ai_ready ?? extra.aiReady),
    ...extra,
  };
}

export function trackLeadAction(method, placement, extra = {}) {
  if (typeof window === "undefined") return;

  const signature = `${method}|${placement}|${window.location.pathname}`;
  const now = Date.now();
  if (lastLeadEvent.signature === signature && now - lastLeadEvent.at < EVENT_DEDUPE_MS) {
    return;
  }
  lastLeadEvent = { signature, at: now };

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

export function startWhatsAppLead(rawUrl, placement = "global_lead_link", extra = {}, target = "_blank") {
  if (typeof window === "undefined") return null;

  const reference = createLeadReference();
  const finalUrl = appendLeadReferenceToWhatsAppUrl(rawUrl, reference);
  const payload = buildLeadPayload(reference, placement, finalUrl, extra);

  trackLeadAction("whatsapp", placement, {
    link_url: finalUrl,
    lead_reference: reference,
    ai_ready: payload.ai_ready,
  });

  // Fire-and-forget so the visitor reaches WhatsApp immediately. keepalive helps the
  // request complete even if the browser changes tab or leaves the page.
  fetch("/api/leads/whatsapp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});

  const popup = window.open(finalUrl, target === "_self" ? "_self" : "_blank", "noopener,noreferrer");
  if (!popup && target !== "_self") {
    window.location.href = finalUrl;
  }

  return { reference, finalUrl };
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

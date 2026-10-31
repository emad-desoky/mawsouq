"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  buildLeadPayload,
  createLeadReference,
  trackLeadAction,
} from "@/lib/leadTracking";

const COPY = {
  ar: {
    badge: "رد خلال ساعات العمل",
    title: "اطلب اتصالًا من مهندس موسوق",
    lead: "اترك اسمك ورقم جوالك ونبذة قصيرة عن مشروعك، ونتواصل معك لنفهم احتياجك ونقترح الخطوة التالية. بدون التزام.",
    name: "الاسم",
    phone: "رقم الجوال / واتساب",
    phonePh: "مثال: 05XXXXXXXX",
    city: "المدينة",
    cityPh: "الرياض، جدة، الدمام…",
    project: "ما المشروع؟",
    projectPh: "مثال: تصميم استراحة 600م، بناء دور واحد 300م…",
    submit: "اطلب الاتصال",
    sending: "جارٍ الإرسال…",
    ok: "تم استلام طلبك ✅ سنتواصل معك قريبًا. رقم الطلب:",
    err: "تعذر الإرسال الآن. راسلنا مباشرة على واتساب وسنرد عليك.",
    invalid: "اكتب الاسم ورقم جوال صحيح.",
    privacy: "نستخدم رقمك للتواصل بخصوص مشروعك فقط.",
  },
  en: {
    badge: "We reply during working hours",
    title: "Request a call from a Mawsooq engineer",
    lead: "Leave your name, phone and a short note about your project. We'll call to understand what you need and suggest the next step — no obligation.",
    name: "Name",
    phone: "Mobile / WhatsApp",
    phonePh: "e.g. +966 5X XXX XXXX",
    city: "City",
    cityPh: "Riyadh, Jeddah, Dammam…",
    project: "Your project",
    projectPh: "e.g. 300 m² villa design, rest house…",
    submit: "Request a call",
    sending: "Sending…",
    ok: "Request received ✅ We'll contact you soon. Reference:",
    err: "Couldn't send right now. Please message us on WhatsApp and we'll reply.",
    invalid: "Please enter your name and a valid phone number.",
    privacy: "We only use your number to contact you about your project.",
  },
};

const HIDDEN_ON = ["/api", "/admin"];

export default function CallbackForm({ language = "ar" }) {
  const t = COPY[language] || COPY.ar;
  const pathname = usePathname() || "";
  const [state, setState] = useState({ status: "idle", reference: "", message: "" });

  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;

  async function onSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const digits = phone.replace(/[^\d٠-٩۰-۹]/g, "");
    if (!name || digits.length < 9) {
      setState({ status: "error", reference: "", message: t.invalid });
      return;
    }

    const reference = createLeadReference();
    const context = buildLeadPayload(reference, "callback_form", "");
    setState({ status: "sending", reference: "", message: "" });

    try {
      const response = await fetch("/api/leads/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...context,
          name,
          phone,
          city: form.get("city") || "",
          project: form.get("project") || "",
          website: form.get("website") || "",
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error || "failed");

      trackLeadAction("callback", "callback_form", { lead_reference: reference });
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "callback_request", { lead_reference: reference, page_path: pathname });
      }
      event.target.reset?.();
      setState({ status: "ok", reference, message: t.ok });
    } catch {
      setState({ status: "error", reference: "", message: t.err });
    }
  }

  const input =
    "h-12 w-full rounded-2xl border border-[var(--hairline)] bg-[var(--surface)] px-4 text-base text-[var(--ink)] placeholder:text-[var(--ink-faint)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--ring)]";

  return (
    <section
      id="callback"
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-[var(--page)] px-4 py-12 sm:px-8 sm:py-16"
      aria-labelledby="callback-title"
    >
      <div className="mx-auto grid w-full max-w-[1100px] gap-8 rounded-[28px] border border-[var(--hairline)] bg-[var(--surface)] p-6 shadow-[var(--card-shadow)] sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-2)] px-3 py-1.5 text-sm font-bold text-[var(--brand)]">
            <span className="h-2 w-2 rounded-full bg-[#25d366]" />
            {t.badge}
          </span>
          <h2 id="callback-title" className="mt-4 text-2xl font-black leading-tight text-[var(--ink)] sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-3 text-base leading-8 text-[var(--ink-muted)]">{t.lead}</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2" noValidate>
          <label className="grid gap-1.5 text-sm font-bold text-[var(--ink)]">
            {t.name}
            <input name="name" autoComplete="name" required className={input} />
          </label>
          <label className="grid gap-1.5 text-sm font-bold text-[var(--ink)]">
            {t.phone}
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              dir="ltr"
              required
              placeholder={t.phonePh}
              className={input}
            />
          </label>
          <label className="grid gap-1.5 text-sm font-bold text-[var(--ink)]">
            {t.city}
            <input name="city" placeholder={t.cityPh} className={input} />
          </label>
          <label className="grid gap-1.5 text-sm font-bold text-[var(--ink)]">
            {t.project}
            <input name="project" placeholder={t.projectPh} className={input} />
          </label>
          {/* Honeypot for bots */}
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <button
            type="submit"
            disabled={state.status === "sending"}
            className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand)] px-8 text-base font-black text-white transition hover:opacity-90 disabled:opacity-60 sm:col-span-2"
          >
            {state.status === "sending" ? t.sending : t.submit}
          </button>

          <p className="text-xs text-[var(--ink-faint)] sm:col-span-2">{t.privacy}</p>

          {state.message ? (
            <p
              role="status"
              className={`rounded-2xl px-4 py-3 text-sm font-bold sm:col-span-2 ${
                state.status === "ok" ? "bg-[#25d366]/12 text-[#128c4a]" : "bg-red-500/10 text-red-600"
              }`}
            >
              {state.message} {state.reference}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

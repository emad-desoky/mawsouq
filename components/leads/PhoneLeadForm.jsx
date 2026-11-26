"use client";

// Phone-capture form used by the rest-house catalog, the calculator and the
// project proof sections. Saves the lead to the same Google Sheet as WhatsApp
// clicks (via /api/leads/callback). If saving fails, the visitor gets a
// WhatsApp button with everything they typed, so the lead is never lost.

import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { buildLeadPayload, createLeadReference, trackLeadAction } from "@/lib/leadTracking";

const WHATSAPP_NUMBER = "201223328270";

const inputClass =
  "h-12 w-full rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface)] px-4 text-base text-[color:var(--ink)] placeholder:text-[color:var(--ink-faint)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--ring)]";

/**
 * @param {object} props
 * @param {string} props.placement  one of the PLACEMENTS keys in /api/leads/callback
 * @param {string} props.title
 * @param {string} [props.lead]
 * @param {string} props.submitLabel
 * @param {string} props.successText
 * @param {string} [props.project]   fixed project summary sent with the lead
 * @param {string[]} [props.details] extra lines sent with the lead (e.g. calculator inputs)
 * @param {boolean} [props.askCity]
 * @param {boolean} [props.askLand]
 * @param {{label:string, options:string[]}} [props.choice]  optional select (e.g. service)
 * @param {boolean} [props.bare]     no card frame (when embedded in another card)
 * @param {boolean} [props.stacked]  one column (for narrow sidebars)
 */
export default function PhoneLeadForm({
  placement,
  title,
  lead,
  submitLabel,
  successText,
  project = "",
  details = [],
  askCity = true,
  askLand = false,
  landLabel = "مساحة الأرض",
  choice = null,
  bare = false,
  stacked = false,
}) {
  const [state, setState] = useState({ status: "idle", reference: "", fallback: "" });

  async function onSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const city = String(form.get("city") || "").trim();
    const land = String(form.get("land") || "").trim();
    const choiceValue = String(form.get("choice") || "").trim();

    if (!name || phone.replace(/[^\d٠-٩۰-۹]/g, "").length < 9) {
      setState({ status: "invalid", reference: "", fallback: "" });
      return;
    }

    const lines = [
      ...details,
      land ? `${landLabel}: ${land}` : "",
      choice && choiceValue ? `${choice.label}: ${choiceValue}` : "",
    ].filter(Boolean);

    const reference = createLeadReference();
    const context = buildLeadPayload(reference, placement, "");
    setState({ status: "sending", reference: "", fallback: "" });

    const fallbackText = [
      "مرحبًا موسوق،",
      title,
      `الاسم: ${name}`,
      city ? `المدينة: ${city}` : "",
      project ? `المشروع: ${project}` : "",
      ...lines,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/leads/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...context,
          placement,
          name,
          phone,
          city,
          project,
          details: lines,
          website: form.get("website") || "",
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error || "failed");

      trackLeadAction("phone_form", placement, { lead_reference: reference });
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", { lead_reference: reference, placement });
      }
      event.target.reset?.();
      setState({ status: "ok", reference, fallback: "" });
    } catch {
      setState({
        status: "error",
        reference: "",
        fallback: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fallbackText)}`,
      });
    }
  }

  const frame = bare
    ? ""
    : "rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] sm:p-6";

  return (
    <div className={frame} dir="rtl">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--surface-2)] text-[color:var(--brand)]">
          <Phone size={20} aria-hidden="true" />
        </span>
        <div>
          <p className="text-lg font-black leading-8 text-[color:var(--ink)]">{title}</p>
          {lead ? <p className="mt-1 text-sm leading-7 text-[color:var(--ink-muted)]">{lead}</p> : null}
        </div>
      </div>

      {state.status === "ok" ? (
        <p role="status" className="mt-4 rounded-2xl bg-[#25d366]/12 px-4 py-3 text-sm font-bold leading-7 text-[#128c4a]">
          {successText} رقم الطلب: <span dir="ltr">{state.reference}</span>
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate className={`mt-4 grid gap-3 ${stacked ? "" : "sm:grid-cols-2"}`}>
          <label className="grid gap-1.5 text-sm font-bold text-[color:var(--ink)]">
            الاسم
            <input name="name" autoComplete="name" required className={inputClass} />
          </label>
          <label className="grid gap-1.5 text-sm font-bold text-[color:var(--ink)]">
            رقم الجوال / واتساب
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              dir="ltr"
              required
              placeholder="05XXXXXXXX"
              className={inputClass}
            />
          </label>
          {askCity ? (
            <label className="grid gap-1.5 text-sm font-bold text-[color:var(--ink)]">
              المدينة
              <input name="city" placeholder="الرياض، جدة، الدمام…" className={inputClass} />
            </label>
          ) : null}
          {askLand ? (
            <label className="grid gap-1.5 text-sm font-bold text-[color:var(--ink)]">
              {landLabel}
              <input name="land" inputMode="numeric" placeholder="مثال: 600 م²" className={inputClass} />
            </label>
          ) : null}
          {choice ? (
            <label className="grid gap-1.5 text-sm font-bold text-[color:var(--ink)] sm:col-span-2">
              {choice.label}
              <select name="choice" className={inputClass} defaultValue={choice.options[0]}>
                {choice.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          ) : null}
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <button
            type="submit"
            disabled={state.status === "sending"}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3 text-base font-black text-white transition hover:opacity-90 disabled:opacity-60 sm:col-span-2"
          >
            {state.status === "sending" ? "جارٍ الإرسال…" : submitLabel}
            <Send size={17} aria-hidden="true" />
          </button>

          {state.status === "invalid" ? (
            <p role="alert" className="text-sm font-bold text-red-600 sm:col-span-2">
              اكتب الاسم ورقم جوال صحيح.
            </p>
          ) : null}
          {state.status === "error" ? (
            <p role="alert" className="text-sm font-bold leading-7 text-red-600 sm:col-span-2">
              تعذر الإرسال الآن.{" "}
              <a href={state.fallback} target="_blank" rel="noopener noreferrer" className="underline">
                أرسل نفس الطلب عبر واتساب
              </a>
            </p>
          ) : null}
          <p className="text-xs leading-6 text-[color:var(--ink-faint)] sm:col-span-2">
            نستخدم رقمك للتواصل بخصوص مشروعك فقط.
          </p>
        </form>
      )}
    </div>
  );
}

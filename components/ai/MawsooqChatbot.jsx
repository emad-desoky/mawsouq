"use client";

import { useMemo, useRef, useState } from "react";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";

const WHATSAPP_NUMBER = "201223328270";

const copy = {
  en: {
    title: "Mawsooq AI",
    subtitle: "Project planning assistant",
    greeting: "Hi — tell me what you are planning to build or design, and I’ll help you identify the right next step.",
    placeholder: "Describe your project…",
    send: "Send",
    open: "Ask Mawsooq AI",
    close: "Close assistant",
    whatsapp: "Continue on WhatsApp",
    error: "I couldn't reach the AI service just now. You can still continue with the Mawsooq team on WhatsApp.",
    privacy: "Share project details only. Please do not send IDs, payment details or passwords.",
    quick: ["Estimate my construction budget", "I need architectural design", "What should I prepare before building?"],
    defaultWa: "Hello Mawsooq, I used the website AI assistant and would like to continue discussing my project.",
  },
  ar: {
    title: "مساعد موسوق AI",
    subtitle: "مساعد تخطيط المشروع",
    greeting: "أهلًا بك — اشرح لي ما الذي تريد بناءه أو تصميمه وسأساعدك في تحديد الخطوة المناسبة التالية.",
    placeholder: "اكتب تفاصيل مشروعك…",
    send: "إرسال",
    open: "اسأل مساعد موسوق",
    close: "إغلاق المساعد",
    whatsapp: "أكمل على واتساب",
    error: "تعذر الوصول إلى خدمة الذكاء الاصطناعي الآن. يمكنك متابعة المحادثة مباشرة مع فريق موسوق على واتساب.",
    privacy: "شارك تفاصيل المشروع فقط، ولا ترسل هويات أو بيانات دفع أو كلمات مرور.",
    quick: ["أريد تقدير ميزانية البناء", "أحتاج تصميم معماري", "ماذا أجهز قبل بدء البناء؟"],
    defaultWa: "مرحبًا موسوق، استخدمت مساعد الموقع وأريد متابعة مناقشة مشروعي.",
  },
};

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function MawsooqChatbot({ language = "en" }) {
  const lang = language === "ar" ? "ar" : "en";
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadSummary, setLeadSummary] = useState("");
  const [readyForWhatsApp, setReadyForWhatsApp] = useState(false);
  const [waMessage, setWaMessage] = useState(t.defaultWa);
  const [messages, setMessages] = useState([
    { role: "assistant", content: t.greeting },
  ]);
  const inputRef = useRef(null);

  const whatsappUrl = useMemo(() => buildWhatsAppUrl(waMessage || t.defaultWa), [waMessage, t.defaultWa]);
  const leadContext = useMemo(
    () => JSON.stringify({ chat_summary: leadSummary, ai_ready: readyForWhatsApp }),
    [leadSummary, readyForWhatsApp],
  );

  async function submitMessage(value) {
    const text = String(value || "").trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/mawsooq-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages,
          pagePath: window.location.pathname,
          pageTitle: document.title,
          language: lang,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.reply) throw new Error(data.error || "AI request failed");

      setMessages((current) => [...current, { role: "assistant", content: data.reply }]);
      setLeadSummary(data.leadSummary || "");
      setReadyForWhatsApp(Boolean(data.readyForWhatsApp));
      if (data.suggestedWhatsAppMessage) setWaMessage(data.suggestedWhatsAppMessage);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  }

  return (
    <div className={`fixed bottom-[96px] z-[110] sm:bottom-6 ${lang === "ar" ? "left-4 sm:left-6" : "left-4 sm:left-6"}`} dir={lang === "ar" ? "rtl" : "ltr"}>
      {open ? (
        <section
          aria-label={t.title}
          className="absolute bottom-16 left-0 flex h-[min(620px,72vh)] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-[28px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[0_26px_90px_rgba(7,19,33,.30)]"
        >
          <header className="flex items-center justify-between gap-3 bg-[#071321] px-5 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#2f86f6]/20 text-[#72b8ff]">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <strong className="block truncate text-sm font-black">{t.title}</strong>
                <span className="block truncate text-xs font-semibold text-white/60">{t.subtitle}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label={t.close}
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[86%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm font-semibold leading-6 ${
                    message.role === "user"
                      ? "bg-[#2f86f6] text-white"
                      : "bg-[color:var(--surface-2)] text-[color:var(--ink)]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {loading ? (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-[color:var(--surface-2)] px-4 py-3 text-sm font-bold text-[color:var(--ink-muted)]">
                  <Bot className="h-4 w-4 animate-pulse" />
                  <span className="inline-flex gap-1"><i className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" /><i className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:120ms]" /><i className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:240ms]" /></span>
                </div>
              </div>
            ) : null}

            {messages.length === 1 ? (
              <div className="grid gap-2 pt-1">
                {t.quick.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => submitMessage(item)}
                    className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface)] px-4 py-3 text-start text-xs font-black text-[#2f86f6] transition hover:bg-[color:var(--surface-2)]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="border-t border-[color:var(--hairline)] bg-[color:var(--surface)] p-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-lead-placement="ai_chatbot"
              data-lead-context={leadContext}
              className={`mb-3 flex min-h-11 items-center justify-center gap-2 rounded-2xl px-4 text-sm font-black transition ${readyForWhatsApp ? "bg-[#20c96b] text-[#062818] shadow-lg" : "border border-[#20c96b]/35 bg-[#20c96b]/10 text-[#159554]"}`}
            >
              <MessageCircle className="h-4 w-4" /> {t.whatsapp}
            </a>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                submitMessage(input);
              }}
              className="flex items-end gap-2"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value.slice(0, 1200))}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    submitMessage(input);
                  }
                }}
                rows={1}
                placeholder={t.placeholder}
                className="min-h-11 max-h-28 flex-1 resize-none rounded-2xl border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] px-4 py-3 text-sm font-semibold text-[color:var(--ink)] outline-none transition focus:border-[#2f86f6]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#2f86f6] text-white transition hover:bg-[#1e70dc] disabled:cursor-not-allowed disabled:opacity-45"
                aria-label={t.send}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-2 px-1 text-[10px] font-semibold leading-4 text-[color:var(--ink-muted)]">{t.privacy}</p>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => {
          setOpen((value) => !value);
          window.setTimeout(() => inputRef.current?.focus(), 0);
        }}
        className="flex min-h-[52px] items-center gap-2 rounded-full border border-white/15 bg-[#071321] px-4 py-3 text-sm font-black text-white shadow-[0_14px_45px_rgba(7,19,33,.34)] transition hover:-translate-y-0.5"
        aria-expanded={open}
        aria-label={t.open}
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#2f86f6]"><Bot className="h-4 w-4" /></span>
        <span className="hidden sm:inline">{t.open}</span>
      </button>
    </div>
  );
}

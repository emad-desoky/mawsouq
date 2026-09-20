"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, MessageCircle, Phone, Send, Sparkles, X } from "lucide-react";

const WHATSAPP_NUMBER = "201223328270";
const PHONE_NUMBER = "+201223328270";

const copy = {
  en: {
    title: "Mawsooq AI",
    subtitle: "Project planning assistant",
    greeting:
      "Hi — tell me what you are planning to build or design, and I’ll help you identify the right next step.",
    placeholder: "Describe your project…",
    send: "Send",
    open: "Ask Mawsooq AI",
    close: "Close assistant",
    whatsappShort: "Continue with Mawsooq on WhatsApp",
    error:
      "I couldn't reach the AI service just now. You can still continue with the Mawsooq team on WhatsApp.",
    privacy:
      "Share project details only. Please do not send IDs, payment details or passwords.",
    quick: [
      "Estimate my construction budget",
      "I need architectural design",
      "I need structural design",
      "I need interior design",
      "I need a BOQ / quantity survey",
      "I need construction supervision",
      "How much could my project cost?",
      "What should I prepare before building?",
      "I want to compare project services",
      "Help me plan a villa project",
    ],
    fallbackSuggestions: [
      "What information do you need from me?",
      "How do I start my project?",
      "Which service fits my project?",
      "What affects construction cost?",
    ],
    defaultWa:
      "Hello Mawsooq, I used the website AI assistant and would like to continue discussing my project.",
    phoneLabel: "Call Mawsooq",
    waLabel: "WhatsApp Mawsooq",
  },
  ar: {
    title: "مساعد موسوق AI",
    subtitle: "مساعد تخطيط المشروع",
    greeting:
      "أهلًا بك — اشرح لي ما الذي تريد بناءه أو تصميمه وسأساعدك في تحديد الخطوة المناسبة التالية.",
    placeholder: "اكتب تفاصيل مشروعك…",
    send: "إرسال",
    open: "اسأل مساعد موسوق",
    close: "إغلاق المساعد",
    whatsappShort: "أكمل مع موسوق على واتساب",
    error:
      "تعذر الوصول إلى خدمة الذكاء الاصطناعي الآن. يمكنك متابعة المحادثة مباشرة مع فريق موسوق على واتساب.",
    privacy:
      "شارك تفاصيل المشروع فقط، ولا ترسل هويات أو بيانات دفع أو كلمات مرور.",
    quick: [
      "أريد تقدير ميزانية البناء",
      "أحتاج تصميم معماري",
      "أحتاج تصميم إنشائي",
      "أحتاج تصميم داخلي",
      "أحتاج جدول كميات BOQ",
      "أحتاج إشراف على التنفيذ",
      "كم قد تبلغ تكلفة مشروعي؟",
      "ماذا أجهز قبل بدء البناء؟",
      "أريد مقارنة خدمات المشروع",
      "ساعدني في تخطيط مشروع فيلا",
    ],
    fallbackSuggestions: [
      "ما المعلومات التي تحتاجها مني؟",
      "كيف أبدأ مشروعي؟",
      "ما الخدمة المناسبة لمشروعي؟",
      "ما العوامل التي تؤثر على تكلفة البناء؟",
    ],
    defaultWa:
      "مرحبًا موسوق، استخدمت مساعد الموقع وأريد متابعة مناقشة مشروعي.",
    phoneLabel: "اتصل بموسوق",
    waLabel: "تواصل واتساب مع موسوق",
  },
};

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function normalizeSuggestions(values, fallback, max = 6) {
  const seen = new Set();
  const suggestions = (Array.isArray(values) ? values : [])
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .filter((value) => {
      const key = value.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, max);

  return suggestions.length ? suggestions : fallback.slice(0, max);
}

function FloatingIcon({ href, label, className, children, placement }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      data-lead-placement={placement}
      className={`grid h-12 w-12 place-items-center rounded-full text-white shadow-[0_12px_30px_rgba(7,19,33,.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(7,19,33,.28)] ${className}`}
    >
      {children}
    </a>
  );
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
    {
      role: "assistant",
      content: t.greeting,
      suggestions: t.quick,
    },
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const endRef = useRef(null);

  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl(waMessage || t.defaultWa),
    [waMessage, t.defaultWa],
  );
  const leadContext = useMemo(
    () => JSON.stringify({ chat_summary: leadSummary, ai_ready: readyForWhatsApp }),
    [leadSummary, readyForWhatsApp],
  );

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  async function submitMessage(value) {
    const text = String(value || "").trim();
    if (!text || loading) return;

    const nextMessages = [
      ...messages.map(({ role, content }) => ({ role, content })),
      { role: "user", content: text },
    ];

    setMessages((current) => [...current, { role: "user", content: text }]);
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

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.reply) {
        throw new Error(data.error || "AI request failed");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply,
          suggestions: normalizeSuggestions(data.suggestions, t.fallbackSuggestions, 6),
        },
      ]);
      setLeadSummary(data.leadSummary || "");
      setReadyForWhatsApp(Boolean(data.readyForWhatsApp));
      if (data.suggestedWhatsAppMessage) setWaMessage(data.suggestedWhatsAppMessage);
    } catch (error) {
      console.error("Mawsooq AI chat request failed", error);
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: t.error,
          suggestions: t.fallbackSuggestions,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const stopNestedScroll = (event) => event.stopPropagation();

  return (
    <>
      <div
        className="fixed bottom-4 right-4 z-[120] sm:bottom-6 sm:right-6"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {open ? (
          <section
            aria-label={t.title}
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            onWheelCapture={stopNestedScroll}
            onTouchMoveCapture={stopNestedScroll}
            className="fixed inset-x-3 bottom-3 z-[130] flex h-[min(720px,calc(100dvh-24px))] min-h-0 flex-col overflow-hidden rounded-[26px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[0_26px_90px_rgba(7,19,33,.34)] sm:absolute sm:inset-x-auto sm:bottom-0 sm:right-16 sm:h-[min(680px,82vh)] sm:w-[420px]"
          >
            <header className="flex shrink-0 items-center justify-between gap-3 bg-[#071321] px-5 py-4 text-white">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#2f86f6]/20 text-[#72b8ff]">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <strong className="block truncate text-sm font-black">{t.title}</strong>
                  <span className="block truncate text-xs font-semibold text-white/60">
                    {t.subtitle}
                  </span>
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

            <div
              ref={scrollRef}
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              onWheelCapture={stopNestedScroll}
              onTouchMoveCapture={stopNestedScroll}
              className="mawsooq-chat-scroll min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4"
              style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}
              aria-live="polite"
            >
              {messages.map((message, index) => {
                const isAssistant = message.role === "assistant";
                const isLatestAssistant =
                  isAssistant &&
                  !messages.slice(index + 1).some((item) => item.role === "assistant");

                return (
                  <div key={`${message.role}-${index}`} className="space-y-2.5">
                    <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[90%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm font-semibold leading-6 ${
                          message.role === "user"
                            ? "bg-[#2f86f6] text-white"
                            : "bg-[color:var(--surface-2)] text-[color:var(--ink)]"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>

                    {isAssistant ? (
                      <div className="space-y-2">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-lead-placement="ai_message_whatsapp_cta"
                          data-lead-context={leadContext}
                          className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#20c96b]/40 bg-[#20c96b]/10 px-4 text-xs font-black text-[#159554] transition hover:bg-[#20c96b]/16"
                        >
                          <MessageCircle className="h-4 w-4" />
                          {t.whatsappShort}
                        </a>

                        {isLatestAssistant && Array.isArray(message.suggestions) && message.suggestions.length ? (
                          <div
                            data-lenis-prevent
                            data-lenis-prevent-wheel
                            data-lenis-prevent-touch
                            onWheelCapture={stopNestedScroll}
                            onTouchMoveCapture={stopNestedScroll}
                            className="mawsooq-suggestion-scroll flex w-full snap-x snap-mandatory flex-nowrap gap-2 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-2 pt-0.5"
                            style={{ touchAction: "pan-x", WebkitOverflowScrolling: "touch" }}
                          >
                            {message.suggestions.map((item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => submitMessage(item)}
                                disabled={loading}
                                className="shrink-0 snap-start whitespace-nowrap rounded-full border border-[#2f86f6]/30 bg-[#2f86f6]/10 px-3.5 py-2 text-[11px] font-black leading-4 text-[#2f86f6] transition hover:bg-[#2f86f6]/16 disabled:opacity-50"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                );
              })}

              {loading ? (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-[color:var(--surface-2)] px-4 py-3 text-sm font-bold text-[color:var(--muted)]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#2f86f6]" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#2f86f6] [animation-delay:120ms]" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#2f86f6] [animation-delay:240ms]" />
                  </div>
                </div>
              ) : null}
              <div ref={endRef} />
            </div>

            <footer className="shrink-0 border-t border-[color:var(--hairline)] bg-[color:var(--surface)] p-3">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  submitMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={t.placeholder}
                  maxLength={1800}
                  className="min-w-0 flex-1 rounded-xl border border-[#2f86f6]/40 bg-[color:var(--surface)] px-4 py-3 text-sm font-semibold text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--muted)] focus:border-[#2f86f6] focus:ring-2 focus:ring-[#2f86f6]/15"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label={t.send}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2f86f6] text-white transition hover:bg-[#1674e8] disabled:cursor-not-allowed disabled:opacity-45"
                >
                  <Send className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
                </button>
              </form>
              <p className="mt-2 text-center text-[9px] font-semibold leading-4 text-[color:var(--muted)]">
                {t.privacy}
              </p>
            </footer>
          </section>
        ) : null}

        <div className="flex flex-col items-center gap-2.5">
          <FloatingIcon
            href={`tel:${PHONE_NUMBER}`}
            label={t.phoneLabel}
            placement="floating_phone"
            className="bg-[#176fd1]"
          >
            <Phone className="h-5 w-5" />
          </FloatingIcon>

          <FloatingIcon
            href={buildWhatsAppUrl(t.defaultWa)}
            label={t.waLabel}
            placement="floating_whatsapp"
            className="bg-[#20c96b]"
          >
            <MessageCircle className="h-5 w-5" />
          </FloatingIcon>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={t.open}
            title={t.open}
            className={`grid h-12 w-12 place-items-center rounded-full text-white shadow-[0_12px_30px_rgba(7,19,33,.24)] transition hover:-translate-y-0.5 ${
              open ? "bg-[#071321]" : "bg-[#2f86f6]"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <style jsx global>{`
        .mawsooq-chat-scroll,
        .mawsooq-suggestion-scroll {
          scrollbar-color: #2f86f6 rgba(47, 134, 246, 0.12);
          scrollbar-width: thin;
        }

        .mawsooq-chat-scroll::-webkit-scrollbar {
          width: 7px;
        }

        .mawsooq-suggestion-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .mawsooq-chat-scroll::-webkit-scrollbar-track,
        .mawsooq-suggestion-scroll::-webkit-scrollbar-track {
          background: rgba(47, 134, 246, 0.1);
          border-radius: 999px;
        }

        .mawsooq-chat-scroll::-webkit-scrollbar-thumb,
        .mawsooq-suggestion-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #5aa7ff, #2f86f6);
          border-radius: 999px;
        }

        .mawsooq-chat-scroll::-webkit-scrollbar-thumb:hover,
        .mawsooq-suggestion-scroll::-webkit-scrollbar-thumb:hover {
          background: #1674e8;
        }
      `}</style>
    </>
  );
}

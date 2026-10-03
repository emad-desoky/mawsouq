"use client";

import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/966598061334?text=Hello%20Mawsooq%2C%20I%20have%20a%20question";

const faqs = [
  {
    question: "What services does Mawsooq provide across the Arab region?",
    answer:
      "Mawsooq provides architectural, structural, and interior design services, a construction cost calculator, feasibility studies, and access to suitable service providers across the Arab region.",
  },
  {
    question: "Can Mawsooq help estimate construction costs?",
    answer:
      "Yes. Our calculator uses Saudi market pricing to estimate your project based on area, building type, and finish level.",
  },
  {
    question: "Does Mawsooq provide architectural and structural design?",
    answer:
      "Yes. We provide architectural, structural, and interior design through experienced designers and engineers across the Arab region, with competitive pricing.",
  },
  {
    question: "Can I contact Mawsooq through WhatsApp?",
    answer:
      "Yes. You can contact us directly on WhatsApp at +966 59 806 1334 for an initial project consultation.",
  },
  {
    question: "Is this page focused on the Saudi market?",
    answer:
      "Yes. The page is tailored to Saudi Arabia and covers Riyadh, Jeddah, Dammam, Al Khobar, Makkah, Madinah, and other regions.",
  },
];

function WhatsAppIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.464 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9.25 9.1a3 3 0 1 1 4.25 2.72c-.9.43-1.5 1.1-1.5 2.18v.25"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.25h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`h-5 w-5 transition duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      dir="ltr"
      className="relative isolate overflow-hidden bg-[var(--surface-2)] py-20 text-[var(--ink)] sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_14%,rgba(47,134,246,0.14),transparent_32%),radial-gradient(circle_at_10%_88%,rgba(11,91,184,0.10),transparent_32%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,var(--hairline-strong)_1px,transparent_0)] [background-size:34px_34px]" />

      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--surface)]/85 px-4 py-2 shadow-[var(--card-shadow)] backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-bright)] shadow-[0_0_0_5px_rgba(47,134,246,0.12)]" />
            <span className="text-sm font-black text-[var(--brand)]">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-4xl lg:text-5xl">
            FAQs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-[var(--ink-muted)] sm:text-lg">
            Answers to the questions clients ask most often
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="rounded-[34px] border border-[var(--hairline)] bg-gradient-to-br from-[#0b5bb8] via-[#1473dc] to-[#2f86f6] p-6 text-white shadow-[0_28px_90px_rgba(11,91,184,0.25)] sm:p-8">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-white/15 ring-1 ring-white/20">
              <QuestionIcon />
            </div>

            <h3 className="mt-6 text-2xl font-black">Have a Question About Your Project?</h3>

            <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
              If you do not find the answer here, contact us and we will help identify
              the suitable service, approximate cost, and next step.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black">5</p>
                <p className="mt-1 text-xs font-bold text-white/65">
                  Key Questions
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black">24/7</p>
                <p className="mt-1 text-xs font-bold text-white/65">
                  Fast Response
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-13 min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 text-sm font-black text-white shadow-[0_16px_42px_rgba(37,211,102,0.32)] transition duration-300 hover:-translate-y-1 sm:text-base"
            >
              <WhatsAppIcon />
              Contact Us
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden rounded-[26px] border bg-[var(--surface)] shadow-[var(--card-shadow)] transition duration-300 ${
                    isOpen
                      ? "border-[var(--brand)]/18 shadow-[var(--card-shadow)]"
                      : "border-[var(--hairline)] hover:border-[var(--brand)]/12 hover:bg-[var(--surface)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-sm font-black transition duration-300 ${
                          isOpen
                            ? "bg-[var(--brand)] text-white"
                            : "bg-[var(--surface-3)] text-[var(--brand)]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-base font-black leading-7 text-[var(--ink)] sm:text-lg">
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition duration-300 ${
                        isOpen
                          ? "bg-[var(--brand)] text-white"
                          : "bg-[var(--surface-3)] text-[var(--brand)]"
                      }`}
                    >
                      <ChevronIcon open={isOpen} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="border-t border-[var(--hairline)] pt-4">
                          <p className="text-sm leading-8 text-[var(--ink-muted)] sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

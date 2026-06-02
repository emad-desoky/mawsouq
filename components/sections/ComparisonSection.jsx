const withoutPlanning = [
  { text: "تكلفة غير واضحة" },
  { text: "قرارات عشوائية" },
  { text: "تأخير في التنفيذ" },
  { text: "صعوبة مقارنة العروض" },
];

const withMawsouq = [
  { text: "تصور أوضح للتكلفة" },
  { text: "خدمات منظمة" },
  { text: "خطوات محددة" },
  { text: "تواصل مباشر" },
  { text: "قرارات مبنية على معلومات" },
];

function XIcon() {
  return (
    <svg
      className="h-4.5 w-4.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 7l10 10M17 7 7 17"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4.5 w-4.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12.5 4.25 4.25L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-3.5 7-10.25V5.8L12 3 5 5.8v4.95C5 17.5 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m8.5 12 2.25 2.25L15.75 9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.25 3.75 18.5h16.5L12 4.25Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.25v4.25M12 16.75h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ComparisonSection() {
  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#f6fbff] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(47,134,246,0.14),transparent_32%),radial-gradient(circle_at_8%_82%,rgba(11,91,184,0.10),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(16,32,51,0.12)_1px,transparent_0)] [background-size:34px_34px]" />

      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0b5bb8]/10 bg-white/85 px-4 py-2 shadow-[0_10px_30px_rgba(16,32,51,0.06)] backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2f86f6] shadow-[0_0_0_5px_rgba(47,134,246,0.12)]" />
            <span className="text-sm font-black text-[#0b5bb8]">
              الفرق واضح
            </span>
          </div>

          <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.03em] text-[#102033] sm:text-4xl lg:text-5xl">
            لماذا لا تبدأ المشروع بدون تصور واضح؟
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-[#102033]/65 sm:text-lg">
            قارن بين البدء بدون تخطيط والبدء مع موسوق
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white shadow-[0_24px_70px_rgba(16,32,51,0.16)] lg:grid">
            <span className="text-xl font-black text-[#0b5bb8]">VS</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <article className="group relative overflow-hidden rounded-[34px] border border-red-100 bg-white p-6 shadow-[0_24px_75px_rgba(16,32,51,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(16,32,51,0.12)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-red-400 to-red-600" />
              <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-red-100/60 blur-3xl" />

              <div className="relative mb-7 flex items-center gap-4 border-b border-[#102033]/8 pb-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-50 text-red-500 ring-1 ring-red-100">
                  <WarningIcon />
                </div>

                <div>
                  <p className="text-xs font-black text-red-500">
                    مسار عالي المخاطر
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-[#102033]">
                    بدون تخطيط
                  </h3>
                </div>
              </div>

              <ul className="relative space-y-4">
                {withoutPlanning.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 rounded-2xl bg-red-50/55 px-4 py-3 text-right"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-red-500 shadow-sm ring-1 ring-red-100">
                      <XIcon />
                    </span>
                    <span className="text-sm font-bold text-[#102033]/72 sm:text-base">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-7 rounded-3xl bg-red-50 p-4 text-sm font-bold leading-7 text-red-700">
                النتيجة غالبًا: قرارات مكلفة، وقت أطول، وضبابية في اختيار الخدمة
                المناسبة.
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-[34px] border border-white/20 bg-gradient-to-br from-[#0b5bb8] via-[#1473dc] to-[#2f86f6] p-6 text-white shadow-[0_30px_95px_rgba(11,91,184,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_38px_110px_rgba(11,91,184,0.36)] sm:p-8 lg:scale-[1.03]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.28),transparent_34%),radial-gradient(circle_at_86%_90%,rgba(255,255,255,0.12),transparent_30%)]" />
              <div className="absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-xs font-black backdrop-blur-xl">
                الخيار الأفضل
              </div>

              <div className="relative mb-7 mt-7 flex items-center gap-4 border-b border-white/20 pb-5 sm:mt-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
                  <ShieldIcon />
                </div>

                <div>
                  <p className="text-xs font-black text-white/70">
                    مسار واضح ومنظم
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-white">
                    مع موسوق
                  </h3>
                </div>
              </div>

              <ul className="relative space-y-4">
                {withMawsouq.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 rounded-2xl bg-white/12 px-4 py-3 text-right backdrop-blur-xl"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[#0b5bb8] shadow-sm">
                      <CheckIcon />
                    </span>
                    <span className="text-sm font-bold text-white/92 sm:text-base">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-7 rounded-3xl border border-white/15 bg-white/12 p-4 text-sm font-bold leading-7 text-white/86 backdrop-blur-xl">
                النتيجة: وضوح أعلى، مقارنة أسهل، وخطوات عملية تساعدك تبدأ بثقة.
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

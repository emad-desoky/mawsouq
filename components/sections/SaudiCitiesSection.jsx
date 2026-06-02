const WHATSAPP_URL =
  "https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20استشارة%20عن%20خدمات%20البناء%20في%20السعودية";

const cities = [
  { name: "الرياض", type: "عاصمة الأعمال", position: "lg:translate-y-8" },
  { name: "جدة", type: "مشاريع ساحلية", position: "lg:-translate-y-3" },
  { name: "الدمام", type: "المنطقة الشرقية", position: "lg:translate-y-10" },
  { name: "الخبر", type: "تجاري وسكني", position: "lg:-translate-y-6" },
  { name: "مكة المكرمة", type: "مشاريع عمرانية", position: "lg:translate-y-2" },
  {
    name: "المدينة المنورة",
    type: "حلول متكاملة",
    position: "lg:-translate-y-8",
  },
];

const factors = [
  "كود البناء السعودي",
  "اختلاف التكلفة حسب المدينة",
  "المساحة ونوع البناء",
  "مستوى التشطيب",
  "طبيعة الأرض",
];

function ArrowIcon() {
  return (
    <svg
      className="h-5 w-5 rotate-180"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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

function PinIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6.5-5.75 6.5-11.25A6.5 6.5 0 0 0 5.5 9.75C5.5 15.25 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.25a2.35 2.35 0 1 0 0-4.7 2.35 2.35 0 0 0 0 4.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SaudiMapMark() {
  return (
    <svg
      viewBox="0 0 420 360"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M104 54c27-18 59-21 94-12 31 8 55 7 80 1 31-7 56 3 75 27 21 27 21 58 9 92-10 30-5 51 14 76 23 31 16 66-16 86-35 22-80 10-113-13-27-18-48-21-78-8-41 18-82 6-105-27-22-32-19-75 5-104 18-21 23-43 17-70-4-19 1-34 18-44Z"
        fill="url(#mapGradient)"
      />
      <path
        d="M104 54c27-18 59-21 94-12 31 8 55 7 80 1 31-7 56 3 75 27 21 27 21 58 9 92-10 30-5 51 14 76 23 31 16 66-16 86-35 22-80 10-113-13-27-18-48-21-78-8-41 18-82 6-105-27-22-32-19-75 5-104 18-21 23-43 17-70-4-19 1-34 18-44Z"
        stroke="#0b5bb8"
        strokeOpacity=".18"
        strokeWidth="2"
      />

      {[
        [250, 135],
        [165, 170],
        [292, 196],
        [304, 220],
        [188, 230],
        [205, 258],
      ].map(([cx, cy], index) => (
        <g key={index}>
          <circle cx={cx} cy={cy} r="14" fill="#ffffff" />
          <circle cx={cx} cy={cy} r="8" fill="#2f86f6" />
          <circle cx={cx} cy={cy} r="20" stroke="#2f86f6" strokeOpacity=".2" />
        </g>
      ))}

      <defs>
        <linearGradient
          id="mapGradient"
          x1="90"
          y1="40"
          x2="350"
          y2="330"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e8f3ff" />
          <stop offset=".55" stopColor="#f5f9ff" />
          <stop offset="1" stopColor="#dcecff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function SaudiCitiesSection() {
  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(47,134,246,0.12),transparent_30%),radial-gradient(circle_at_8%_78%,rgba(11,91,184,0.08),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#2f86f6]/30 to-transparent" />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="order-1">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0b5bb8]/10 bg-[#f5f9ff] px-4 py-2 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2f86f6] shadow-[0_0_0_5px_rgba(47,134,246,0.12)]" />
                <span className="text-sm font-black text-[#0b5bb8]">
                  تغطية شاملة
                </span>
              </div>

              <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-[#102033] sm:text-4xl lg:text-5xl">
                خدمة مخصصة للسوق السعودي
              </h2>

              <p className="mt-5 text-pretty text-base leading-8 text-[#102033]/65 sm:text-lg">
                نقدم خدماتنا في جميع مناطق المملكة العربية السعودية مع مراعاة
                اختلاف التكاليف والمتطلبات حسب كل منطقة ونوع المشروع.
              </p>
            </div>

            <div className="mt-8 rounded-[32px] border border-[#102033]/5 bg-[#f6fbff] p-5 sm:p-6">
              <h3 className="text-lg font-black text-[#102033]">
                عوامل نراعيها في كل مشروع:
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {factors.map((factor) => (
                  <span
                    key={factor}
                    className="inline-flex items-center gap-2 rounded-full border border-[#0b5bb8]/10 bg-white px-4 py-2.5 text-sm font-bold text-[#102033] shadow-[0_8px_22px_rgba(16,32,51,0.045)]"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e9f3ff] text-[#0b5bb8]">
                      <CheckIcon />
                    </span>
                    {factor}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-13 min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-l from-[#0b5bb8] to-[#2f86f6] px-7 text-sm font-black text-white shadow-[0_16px_42px_rgba(11,91,184,0.26)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(11,91,184,0.34)] sm:text-base"
            >
              استشر خبراءنا
              <ArrowIcon />
            </a>
          </div>

          <div className="order-2">
            <div className="relative rounded-[36px] border border-[#102033]/5 bg-[#f6fbff] p-4 shadow-[0_24px_80px_rgba(16,32,51,0.08)] sm:p-6 lg:p-7">
              <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_70%_16%,rgba(47,134,246,0.15),transparent_35%)]" />

              <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="relative mx-auto aspect-square w-full max-w-[430px] rounded-[32px] bg-white/70 p-4 shadow-inner">
                  <SaudiMapMark />

                  <div className="absolute bottom-5 right-5 rounded-3xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_18px_55px_rgba(16,32,51,0.12)] backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#25d366] text-white">
                        <CheckIcon />
                      </div>
                      <div>
                        <p className="text-2xl font-black leading-none text-[#102033]">
                          +13
                        </p>
                        <p className="mt-1 text-xs font-bold text-[#102033]/55">
                          منطقة نغطيها
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                  {cities.map((city, index) => (
                    <article
                      key={city.name}
                      className={`group relative overflow-hidden rounded-3xl border border-white/80 bg-white p-4 shadow-[0_16px_45px_rgba(16,32,51,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,32,51,0.12)] ${city.position}`}
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#0b5bb8] to-[#2f86f6] opacity-0 transition duration-300 group-hover:opacity-100" />

                      <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[#f5f9ff] text-[#0b5bb8] transition duration-300 group-hover:bg-[#0b5bb8] group-hover:text-white">
                        <PinIcon />
                      </div>

                      <h3 className="text-base font-black text-[#102033]">
                        {city.name}
                      </h3>
                      <p className="mt-1 text-xs font-bold text-[#102033]/50">
                        {city.type}
                      </p>

                      <span className="absolute left-3 top-3 text-xs font-black text-[#2f86f6]/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

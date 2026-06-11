import Image from "next/image";

const features = [
  {
    title: "خدمات موثوقة",
    icon: "trust",
  },
  {
    title: "أسعار تنافسية",
    icon: "price",
  },
  {
    title: "استجابة سريعة",
    icon: "speed",
  },
  {
    title: "فريق متخصص",
    icon: "team",
  },
];

const stats = [
  { value: "2018", label: "بداية الخدمة" },
  { value: "+13", label: "منطقة نغطيها" },
  { value: "KSA", label: "السوق السعودي" },
];

function FeatureIcon({ type }) {
  const base =
    "stroke-current stroke-[1.9] [stroke-linecap:round] [stroke-linejoin:round]";

  const icons = {
    trust: (
      <>
        <path
          className={base}
          d="M12 21s7-3.5 7-10.25V5.8L12 3 5 5.8v4.95C5 17.5 12 21 12 21Z"
        />
        <path className={base} d="m8.5 12 2.25 2.25L15.75 9" />
      </>
    ),
    price: (
      <>
        <path
          className={base}
          d="M12 3v18M16.5 7.5c-.8-1.1-2.25-1.8-4.1-1.8-2.2 0-3.9 1.05-3.9 2.75s1.35 2.4 4.15 3.05c2.9.68 4.1 1.6 4.1 3.35 0 1.8-1.75 3-4.1 3-2.05 0-3.75-.8-4.75-2.1"
        />
      </>
    ),
    speed: (
      <>
        <path className={base} d="M13 3 5.5 13h5L9 21l9.5-12h-5L13 3Z" />
      </>
    ),
    team: (
      <>
        <path
          className={base}
          d="M8.5 19.25v-1.5a3.5 3.5 0 0 1 7 0v1.5M12 13.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
        <path
          className={base}
          d="M4.75 18.5v-.75a2.75 2.75 0 0 1 3.35-2.68M19.25 18.5v-.75a2.75 2.75 0 0 0-3.35-2.68"
        />
      </>
    ),
  };

  return (
    <svg
      className="h-5.5 w-5.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.5 20.5h15M6.5 20.5V6.5A2.5 2.5 0 0 1 9 4h6a2.5 2.5 0 0 1 2.5 2.5v14M9 8h1M14 8h1M9 11.5h1M14 11.5h1M9 15h1M14 15h1M10 20.5v-3h4v3"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6.5-5.75 6.5-11.25A6.5 6.5 0 0 0 5.5 9.75C5.5 15.25 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.25a2.35 2.35 0 1 0 0-4.7 2.35 2.35 0 0 0 0 4.7Z"
        stroke="currentColor"
        strokeWidth="1.9"
      />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-[var(--surface-2)] py-20 text-[var(--ink)] sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_14%,rgba(47,134,246,0.15),transparent_32%),radial-gradient(circle_at_10%_86%,rgba(11,91,184,0.10),transparent_34%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,var(--hairline-strong)_1px,transparent_0)] [background-size:34px_34px]" />

      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute -inset-5 rounded-[44px] bg-gradient-to-br from-[var(--brand)]/16 via-[var(--brand-bright)]/10 to-transparent blur-2xl" />

              <div className="relative overflow-hidden rounded-[36px] border border-[var(--hairline)] bg-[var(--surface)] p-4 shadow-[var(--card-shadow)]">
                <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b5bb8] via-[#1473dc] to-[#2f86f6]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.28),transparent_34%),radial-gradient(circle_at_82%_86%,rgba(255,255,255,0.16),transparent_30%)]" />
                  <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.65)_1px,transparent_0)] [background-size:30px_30px]" />

                  <div className="relative grid h-48 w-48 place-items-center rounded-[34px] border border-white/18 bg-white/12 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:h-56 sm:w-56">
                    <Image
                      src="/mawsouq-logo.png"
                      alt="موسوق"
                      fill
                      sizes="224px"
                      className="object-contain p-8 drop-shadow-2xl"
                    />
                  </div>

                  <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/20" />
                  <div className="absolute bottom-10 left-10 h-16 w-16 rounded-full bg-white/10" />
                  <div className="absolute left-10 top-1/2 h-8 w-8 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="absolute -top-6 left-4 hidden rounded-3xl border border-[var(--hairline)] bg-[var(--surface)]/92 p-4 shadow-[var(--card-shadow)] backdrop-blur-xl sm:left-[-20px] md:block">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25d366] text-white shadow-[0_14px_34px_rgba(37,211,102,0.24)]">
                    <LocationIcon />
                  </div>
                  <div>
                    <p className="text-lg font-black text-[var(--ink)]">
                      الوطن العربى
                    </p>
                    <p className="text-sm font-bold text-[var(--ink-muted)]">
                      نطاق عملنا
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-3 sm:mt-14">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-[var(--hairline)] bg-[var(--surface)]/85 p-4 text-center shadow-[var(--card-shadow)] backdrop-blur-xl"
                  >
                    <p className="text-xl font-black text-[var(--ink)] sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-bold text-[var(--ink-faint)]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="max-w-2xl text-center lg:text-right">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--surface)]/85 px-4 py-2 shadow-[var(--card-shadow)] backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-bright)] shadow-[0_0_0_5px_rgba(47,134,246,0.12)]" />
                <span className="text-sm font-black text-[var(--brand)]">
                  عن موسوق
                </span>
              </div>

              <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-4xl lg:text-5xl">
                منصة عربية للتصميم والبناء
              </h2>

              <div className="mt-6 space-y-5 text-pretty text-base leading-8 text-[var(--ink-muted)] sm:text-lg">
                <p>
                  موسوق منصة عربية تهدف إلى تسهيل رحلة التصميم والبناء من الفكرة
                  إلى التنفيذ باستخدام التكنولوجيا وتنظيم المعلومات.
                </p>

                <p>
                  تساعد المنصة العملاء على فهم الخدمات المطلوبة، حساب التكلفة
                  التقريبية، والوصول إلى مزودي خدمات في مجالات التصميم المعماري
                  والهندسي والتنفيذ والإشراف.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group flex items-center gap-3 rounded-3xl border border-[var(--hairline)] bg-[var(--surface)]/88 p-4 text-right shadow-[var(--card-shadow)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface)] hover:shadow-[var(--card-shadow)]"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--surface-3)] text-[var(--brand)] transition duration-300 group-hover:bg-[var(--brand)] group-hover:text-white">
                      <FeatureIcon type={feature.icon} />
                    </div>

                    <span className="text-sm font-black text-[var(--ink)] sm:text-base">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[32px] border border-[var(--hairline)] bg-[var(--surface)]/80 p-5 shadow-[var(--card-shadow)] backdrop-blur-xl">
                <p className="text-sm font-bold leading-7 text-[var(--ink-muted)] sm:text-base">
                  هدفنا أن تبدأ مشروعك بوضوح أكبر: تعرف الخدمة المناسبة، تفهم
                  التكلفة المتوقعة، وتصل إلى مزود الخدمة الأنسب لاحتياجك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

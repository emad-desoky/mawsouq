import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20الاستفسار%20عن%20خدمة%20";

const services = [
  {
    title: "التصميم المعماري",
    description:
      "تنفيذ جميع التصميمات والمخططات الهندسية المعمارية للمشروع بأحدث الأساليب العالمية",
    icon: "architecture",
  },
  {
    title: "التصميم الإنشائي",
    description:
      "تنفيذ جميع التصميمات والمخططات الهندسية الإنشائية للمشروع طبقاً للكود السعودي",
    icon: "structure",
  },
  {
    title: "التصميم الداخلي",
    description:
      "تنفيذ جميع التصميمات الداخلية للمبنى بأحدث الأفكار العالمية في هذا المجال",
    icon: "interior",
  },
  {
    title: "حاسبة تكلفة البناء",
    description:
      "حساب تكلفة البناء بدقة طبقاً لأسعار السوق السعودي المحدثة باستمرار",
    icon: "calculator",
  },
  {
    title: "دراسة الجدوى والتكاليف",
    description:
      "تنفيذ أعمال دراسات الجدوى وحساب التكاليف للمشروع طبقاً لأسعار السوق",
    icon: "feasibility",
  },
  {
    title: "شبكات الكهرباء والإضاءة",
    description:
      "تنفيذ أعمال تصميم شبكات الكهرباء والإضاءة للمبنى طبقاً للكود السعودي",
    icon: "electricity",
  },
  {
    title: "شبكات الصرف الصحي",
    description:
      "تنفيذ أعمال تصميم شبكات الصرف الصحي للمبنى طبقاً للكود السعودي",
    icon: "plumbing",
  },
  {
    title: "أنظمة التكييف والتدفئة",
    description: "تنفيذ أعمال التكييف والتبريد والتدفئة طبقاً للكود السعودي",
    icon: "hvac",
  },
  {
    title: "الإطفاء والحماية المدنية",
    description:
      "تنفيذ أعمال تصميم شبكات الإطفاء ومكافحة الحريق طبقاً للكود السعودي",
    icon: "fire",
  },
  {
    title: "حفر الأساسات وتجهيز الموقع",
    description:
      "تنفيذ جميع أعمال الحفر والرفع المساحي في الموقع طبقاً لعمل التأسيس المطلوب",
    icon: "excavation",
  },
];

function ServiceIcon({ type }) {
  const common =
    "stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]";

  const icons = {
    architecture: (
      <>
        <path className={common} d="M4.5 20.5h15" />
        <path className={common} d="M6.5 20.5V9.5L12 5l5.5 4.5v11" />
        <path className={common} d="M9.25 20.5v-6.25h5.5v6.25" />
        <path className={common} d="M8.5 10.75h7" />
      </>
    ),
    structure: (
      <>
        <path className={common} d="M4.5 20.5h15" />
        <path className={common} d="M6.5 20.5v-9h11v9" />
        <path className={common} d="M5.5 11.5 12 4l6.5 7.5" />
        <path className={common} d="M9 15h6M9 18h6" />
      </>
    ),
    interior: (
      <>
        <path
          className={common}
          d="M5 20V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V20"
        />
        <path className={common} d="M8 20v-5.25h8V20" />
        <path className={common} d="M8.25 10.5h7.5M9.5 13h5" />
      </>
    ),
    calculator: (
      <>
        <rect
          className={common}
          x="5"
          y="3.75"
          width="14"
          height="16.5"
          rx="3"
        />
        <path className={common} d="M8.5 7.25h7" />
        <path
          className={common}
          d="M8.5 11h.01M12 11h.01M15.5 11h.01M8.5 14.5h.01M12 14.5h.01M15.5 14.5h.01M8.5 18h.01M12 18h3.5"
        />
      </>
    ),
    feasibility: (
      <>
        <path
          className={common}
          d="M6.5 20.5h11A2.5 2.5 0 0 0 20 18V8.5L15.5 4h-9A2.5 2.5 0 0 0 4 6.5V18a2.5 2.5 0 0 0 2.5 2.5Z"
        />
        <path className={common} d="M15.5 4v4.5H20" />
        <path className={common} d="M8 16.5v-3M12 16.5V10M16 16.5v-5" />
      </>
    ),
    electricity: (
      <>
        <path className={common} d="M13 3 5.5 13h5L9 21l9.5-12h-5L13 3Z" />
      </>
    ),
    plumbing: (
      <>
        <path
          className={common}
          d="M7 5h10M9 5v5.25a3 3 0 0 1-.88 2.12L5.6 14.9a3.3 3.3 0 0 0 2.33 5.63h8.14a3.3 3.3 0 0 0 2.33-5.63l-2.52-2.53A3 3 0 0 1 15 10.25V5"
        />
        <path
          className={common}
          d="M8.5 15.5c1.2-.6 2.2-.6 3.3 0s2.15.6 3.35 0"
        />
      </>
    ),
    hvac: (
      <>
        <path className={common} d="M12 3v18M5.5 6.5l13 11M18.5 6.5l-13 11" />
        <circle className={common} cx="12" cy="12" r="3" />
      </>
    ),
    fire: (
      <>
        <path
          className={common}
          d="M12.25 21c3.6-.35 6.25-3.15 6.25-6.85 0-3.15-1.85-5.2-4.65-7.9.05 2.15-.75 3.4-2.2 4.35.05-2.7-1.25-5.15-3.15-6.6.35 3.25-3 5.25-3 9.9C5.5 18 8.45 20.65 12.25 21Z"
        />
        <path
          className={common}
          d="M10 17.25c0-1.35 1.15-2.15 1.1-3.45 1.15.8 2.4 1.9 2.4 3.45a1.75 1.75 0 0 1-3.5 0Z"
        />
      </>
    ),
    excavation: (
      <>
        <path className={common} d="M4 19.5h16" />
        <path className={common} d="M6.5 19.5l2-7h7l2 7" />
        <path className={common} d="M9 12.5l1.5-6h3l1.5 6" />
        <path className={common} d="M8 6.5h8M10 16h4" />
      </>
    ),
  };

  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="architectural-design"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#f6fbff] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(47,134,246,0.16),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(11,91,184,0.10),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.22] [background-image:radial-gradient(circle_at_1px_1px,rgba(16,32,51,0.12)_1px,transparent_0)] [background-size:34px_34px]" />

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0b5bb8]/10 bg-white/80 px-4 py-2 shadow-[0_10px_30px_rgba(16,32,51,0.06)] backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2f86f6] shadow-[0_0_0_5px_rgba(47,134,246,0.12)]" />
            <span className="text-sm font-black text-[#0b5bb8]">
              خدماتنا المتكاملة
            </span>
          </div>

          <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.03em] text-[#102033] sm:text-4xl lg:text-5xl">
            خدمات موسوق في السعودية
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-[#102033]/65 sm:text-lg">
            نجمع لك أفضل مزوّدي الخدمات بحسب آراء العملاء لنقدم لك تجربة بناء
            متكاملة
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-[0_18px_55px_rgba(16,32,51,0.075)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_28px_80px_rgba(16,32,51,0.13)] ${
                index === 0 ? "lg:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#0b5bb8] via-[#2f86f6] to-[#7cc4ff] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[#2f86f6]/10 blur-2xl transition duration-300 group-hover:bg-[#2f86f6]/20" />

              <div className="relative flex h-full min-h-[245px] flex-col">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#0b5bb8] to-[#2f86f6] text-white shadow-[0_16px_34px_rgba(11,91,184,0.26)] transition duration-300 group-hover:scale-105 group-hover:rotate-3">
                    <ServiceIcon type={service.icon} />
                  </div>

                  <span className="rounded-full bg-[#f5f9ff] px-3 py-1 text-xs font-black text-[#0b5bb8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-black leading-7 text-[#102033] transition-colors duration-300 group-hover:text-[#0b5bb8]">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#102033]/62">
                  {service.description}
                </p>

                <a
                  href={`${WHATSAPP_URL}${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#f5f9ff] px-4 py-2.5 text-sm font-black text-[#0b5bb8] transition duration-300 hover:bg-[#0b5bb8] hover:text-white"
                >
                  اطلب الخدمة
                  <svg
                    className="h-4 w-4 rotate-180 transition duration-300 group-hover:-translate-x-1"
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
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[32px] border border-white/80 bg-[#102033] p-6 text-white shadow-[0_24px_80px_rgba(16,32,51,0.18)] sm:p-8 lg:mt-12">
          <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-right">
            <div>
              <h3 className="text-2xl font-black">تحتاج خدمة محددة لمشروعك؟</h3>
              <p className="mt-2 text-sm leading-7 text-white/65 sm:text-base">
                تواصل معنا وسنساعدك في اختيار الخدمة المناسبة حسب مرحلة مشروعك.
              </p>
            </div>

            <a
              href="https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20استشارة%20عن%20خدمات%20التصميم%20والبناء"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#25d366] px-6 text-sm font-black text-white shadow-[0_14px_35px_rgba(37,211,102,0.28)] transition hover:-translate-y-1 sm:h-14 sm:px-8 sm:text-base"
            >
              ابدأ استشارة واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

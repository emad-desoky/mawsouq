import Link from "next/link";

const articles = [
  {
    title: "تكلفة بناء فلة في السعودية",
    description:
      "دليل شامل لتكاليف بناء الفلل في السعودية مع أسعار السوق المحدثة",
    href: "/تكلفة-بناء-فلة-في-السعودية/",
    category: "تكاليف البناء",
    icon: "villa",
  },
  {
    title: "تكلفة التصميم المعماري في السعودية",
    description:
      "تعرف على أسعار التصميم المعماري ومتوسط الأسعار في السوق السعودي",
    href: "/تكلفة-التصميم-المعماري-في-السعودية/",
    category: "التصميم",
    icon: "design",
  },
  {
    title: "طريقة توزيع الغرف في البيت",
    description: "نقاط مهمة وأساسية لتوزيع الغرف بطريقة عملية ومريحة",
    href: "/طريقة-توزيع-الغرف-في-البيت/",
    category: "تخطيط",
    icon: "layout",
  },
  {
    title: "واجهات فلل حديثة",
    description: "31 فكرة رائعة لواجهات الفلل الحديثة مع ألبوم صور ملهم",
    href: "/واجهات-فلل-حديثة/",
    category: "تصميم خارجي",
    icon: "facade",
  },
  {
    title: "تكلفة بناء دور واحد",
    description: "خطوات البناء والتكلفة التفصيلية لبناء دور واحد في السعودية",
    href: "/تكلفة-بناء-دور-واحد/",
    category: "تكاليف البناء",
    icon: "building",
  },
];

function ArticleIcon({ type }) {
  const base =
    "stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]";

  const icons = {
    villa: (
      <>
        <path className={base} d="M4.5 20.25h15" />
        <path className={base} d="M6.25 20.25V9.75L12 5l5.75 4.75v10.5" />
        <path className={base} d="M9 20.25v-6h6v6" />
        <path className={base} d="M8.25 10.75h7.5" />
      </>
    ),
    design: (
      <>
        <path
          className={base}
          d="M4.75 19.25 15.8 8.2a2.2 2.2 0 0 1 3.1 3.1L7.85 22.35H4.75v-3.1Z"
        />
        <path className={base} d="m14.5 9.5 3 3" />
        <path className={base} d="M5 5.5h7M5 9h4.5" />
      </>
    ),
    layout: (
      <>
        <rect className={base} x="4" y="4" width="16" height="16" rx="2.5" />
        <path className={base} d="M4 10h16M10 10v10M14.5 4v6" />
      </>
    ),
    facade: (
      <>
        <path className={base} d="M4.5 20.25h15" />
        <path className={base} d="M6.5 20.25V7.75h11v12.5" />
        <path
          className={base}
          d="M8.75 10.25h2.25M13 10.25h2.25M8.75 13.75h2.25M13 13.75h2.25"
        />
        <path className={base} d="M10 20.25V16.5h4v3.75" />
      </>
    ),
    building: (
      <>
        <path className={base} d="M4.5 20.25h15" />
        <path className={base} d="M6.5 20.25v-9.5h11v9.5" />
        <path className={base} d="M8.25 10.75 12 5.25l3.75 5.5" />
        <path className={base} d="M9 14.25h6M9 17.25h6" />
      </>
    ),
  };

  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4.5 w-4.5 rotate-180"
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

export default function ArticlesSection() {
  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_12%,rgba(47,134,246,0.12),transparent_32%),radial-gradient(circle_at_10%_88%,rgba(11,91,184,0.08),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#2f86f6]/25 to-transparent" />

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0b5bb8]/10 bg-[#f5f9ff] px-4 py-2 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2f86f6] shadow-[0_0_0_5px_rgba(47,134,246,0.12)]" />
            <span className="text-sm font-black text-[#0b5bb8]">
              مقالات مفيدة
            </span>
          </div>

          <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.03em] text-[#102033] sm:text-4xl lg:text-5xl">
            مقالات تساعدك قبل بدء البناء
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-[#102033]/65 sm:text-lg">
            اقرأ دليلنا الشامل لفهم تكاليف وخطوات البناء في السعودية
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {articles.map((article, index) => (
            <Link
              key={article.href}
              href={article.href}
              className={`group relative overflow-hidden rounded-[30px] border border-[#102033]/5 bg-[#f6fbff] p-5 shadow-[0_18px_55px_rgba(16,32,51,0.065)] transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_85px_rgba(16,32,51,0.12)] ${
                index === 0 ? "lg:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#0b5bb8] via-[#2f86f6] to-[#7cc4ff] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute -left-14 -top-14 h-36 w-36 rounded-full bg-[#2f86f6]/10 blur-3xl transition duration-300 group-hover:bg-[#2f86f6]/20" />

              <div className="relative flex min-h-[275px] flex-col">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#0b5bb8] to-[#2f86f6] text-white shadow-[0_16px_34px_rgba(11,91,184,0.24)] transition duration-300 group-hover:scale-105 group-hover:rotate-3">
                    <ArticleIcon type={article.icon} />
                  </div>

                  <span className="rounded-full border border-[#0b5bb8]/10 bg-white px-3 py-1.5 text-xs font-black text-[#0b5bb8]">
                    {article.category}
                  </span>
                </div>

                <h3 className="line-clamp-2 text-xl font-black leading-8 text-[#102033] transition-colors duration-300 group-hover:text-[#0b5bb8]">
                  {article.title}
                </h3>

                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-[#102033]/62">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#102033]/8 pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-black text-[#0b5bb8]">
                    اقرأ المزيد
                    <ArrowIcon />
                  </span>

                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-black text-[#2f86f6] shadow-sm ring-1 ring-[#0b5bb8]/8">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-[32px] border border-[#102033]/5 bg-[#102033] p-6 text-white shadow-[0_24px_80px_rgba(16,32,51,0.18)] sm:p-8 lg:mt-12">
          <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-right">
            <div>
              <h3 className="text-2xl font-black">
                تريد معرفة تكلفة مشروعك بدل القراءة فقط؟
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/65 sm:text-base">
                استخدم حاسبة التكلفة أو تواصل معنا لنساعدك في تحديد الخطوة
                التالية.
              </p>
            </div>

            <Link
              href="#cost-calculator"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-black text-[#0b5bb8] shadow-[0_14px_35px_rgba(255,255,255,0.12)] transition hover:-translate-y-1 sm:h-14 sm:px-8 sm:text-base"
            >
              احسب تكلفة مشروعك
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

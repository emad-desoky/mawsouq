import Image from "next/image";

const reasons = [
  {
    iconSrc: "/images/icons/decision.png",
    title: "تنظيم قرارات المشروع",
    description: "نساعدك في ترتيب أفكارك واتخاذ القرارات الصحيحة من البداية",
  },
  {
    iconSrc: "/images/icons/cost.png",
    title: "فهم التكلفة المتوقعة",
    description: "احصل على تقدير واضح لميزانية مشروعك قبل البدء",
  },
  {
    iconSrc: "/images/icons/compare.png",
    title: "مقارنة الخدمات والعروض",
    description: "قارن بين مزودي الخدمات واختر الأنسب لمشروعك",
  },
  {
    iconSrc: "/images/icons/execution.png",
    title: "من الفكرة إلى التنفيذ",
    description: "نرافقك في كل خطوة حتى يتحول حلمك إلى واقع",
  },
];

export default function WhyMawsouqSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            لماذا موسوق؟
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            لماذا موسوق لمشاريع البناء في السعودية؟
          </h2>
          <p className="text-base sm:text-lg text-slate-700">
            موسوق تساعد العملاء في تنظيم قرارات المشروع المبكرة، ومقارنة
            الخدمات، وفهم التكلفة المتوقعة، والانتقال من الفكرة إلى التنفيذ
            بوضوح أكبر.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <Image
                src={reason.iconSrc}
                alt={reason.title}
                width={1200}
                height={1020}
                className="object-cover w-44 h-auto mb-6"
              />

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-slate-700 leading-relaxed">
                {reason.description}
              </p>

              {/* Hover underline effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-3xl bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const reasons = [
  {
    iconSrc: "/images/icons/decision.png",
    title: "Organize Project Decisions",
    description: "We help you structure your ideas and make the right decisions from day one",
  },
  {
    iconSrc: "/images/icons/cost.png",
    title: "Understand Expected Costs",
    description: "Get a clear estimate of your project budget before you begin",
  },
  {
    iconSrc: "/images/icons/compare.png",
    title: "Compare Services and Quotations",
    description: "Compare providers and choose the best fit for your project",
  },
  {
    iconSrc: "/images/icons/execution.png",
    title: "From Idea to Delivery",
    description: "We support you at every step until your plan becomes reality",
  },
];

export default function WhyMawsouqSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[color:var(--page)] dark:via-[color:var(--surface-2)] dark:to-[color:var(--page)] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 dark:bg-[color:var(--surface-3)] dark:text-[color:var(--brand-bright)] text-sm font-semibold mb-4">
            Why Mawsooq?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[color:var(--ink)] mb-6 leading-tight">
            Why Choose Mawsooq for Construction Projects in the Arab Region
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-[color:var(--ink-muted)]">
            Mawsooq helps clients organize early project decisions, compare
            services, understand expected costs, and move from concept to delivery
            with greater clarity.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-center bg-white dark:bg-[color:var(--surface)] dark:border dark:border-[color:var(--hairline)] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2"
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
              <h3 className="text-xl font-bold text-slate-900 dark:text-[color:var(--ink)] mb-2">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-slate-700 dark:text-[color:var(--ink-muted)] leading-relaxed">
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

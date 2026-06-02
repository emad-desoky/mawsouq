const withoutPlanning = [
  { text: 'تكلفة غير واضحة', icon: '❌' },
  { text: 'قرارات عشوائية', icon: '❌' },
  { text: 'تأخير في التنفيذ', icon: '❌' },
  { text: 'صعوبة مقارنة العروض', icon: '❌' },
]

const withMawsouq = [
  { text: 'تصور أوضح للتكلفة', icon: '✓' },
  { text: 'خدمات منظمة', icon: '✓' },
  { text: 'خطوات محددة', icon: '✓' },
  { text: 'تواصل مباشر', icon: '✓' },
  { text: 'قرارات مبنية على معلومات', icon: '✓' },
]

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-[var(--mawsouq-light)] relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--mawsouq-primary)]/10 text-[var(--mawsouq-primary)] text-sm font-medium mb-4">
            الفرق واضح
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--mawsouq-dark)] mb-6 text-balance">
            لماذا لا تبدأ المشروع بدون تصور واضح؟
          </h2>
          <p className="text-lg text-[var(--mawsouq-dark)]/70 text-pretty">
            قارن بين البدء بدون تخطيط والبدء مع موسوق
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without Planning */}
            <div className="bg-white rounded-3xl p-8 border-2 border-red-200 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--mawsouq-dark)]">بدون تخطيط</h3>
              </div>

              {/* Items */}
              <ul className="space-y-4">
                {withoutPlanning.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-[var(--mawsouq-dark)]/70">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-50 rounded-full opacity-50" />
            </div>

            {/* With Mawsouq */}
            <div className="bg-gradient-to-br from-[var(--mawsouq-primary)] to-[var(--mawsouq-bright)] rounded-3xl p-8 text-white relative overflow-hidden transform md:scale-105 shadow-2xl">
              {/* Popular Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                الخيار الأفضل
              </div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20 mt-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">مع موسوق</h3>
              </div>

              {/* Items */}
              <ul className="space-y-4">
                {withMawsouq.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-white/90">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

const features = [
  'تقدير بناءً على المساحة',
  'نوع المشروع (سكني/تجاري)',
  'مستوى التشطيب',
  'أسعار محدثة باستمرار',
]

export default function CostCalculatorSection() {
  return (
    <section id="cost-calculator" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--mawsouq-bright)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--mawsouq-primary)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[var(--mawsouq-light)] to-white rounded-3xl p-8 md:p-12 border border-[var(--mawsouq-bright)]/10 relative overflow-hidden">
            {/* Decorative Icons */}
            <div className="absolute top-4 left-4 text-6xl opacity-10">📊</div>
            <div className="absolute bottom-4 right-4 text-6xl opacity-10">🏗️</div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--mawsouq-primary)]/10 text-[var(--mawsouq-primary)] text-sm font-medium">
                  أداة احترافية
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--mawsouq-dark)] text-balance">
                  حاسبة تكلفة البناء في السعودية
                </h2>
                <p className="text-lg text-[var(--mawsouq-dark)]/70 leading-relaxed text-pretty">
                  حاسبة التشييد والبناء من موسوق تساعدك في تقدير التكلفة التقريبية لمشروعك بناءً على المساحة ونوع المشروع ومستوى التشطيب وتغيرات السوق.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--mawsouq-whatsapp)]/20 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-[var(--mawsouq-whatsapp)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-[var(--mawsouq-dark)]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20استخدام%20حاسبة%20تكلفة%20البناء"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gradient-primary text-white px-8 py-4 rounded-full font-bold hover-lift hover-glow transition-all text-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  استخدم حاسبة تكلفة البناء
                </a>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-[var(--mawsouq-bright)]/20">
                  {/* Calculator Preview */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-[var(--mawsouq-dark)]">حاسبة البناء السعودية</h3>
                    </div>

                    {/* Form Preview */}
                    <div className="space-y-3">
                      <div className="h-12 bg-[var(--mawsouq-light)] rounded-xl flex items-center px-4">
                        <span className="text-sm text-[var(--mawsouq-dark)]/60">مساحة البناء (م²)</span>
                      </div>
                      <div className="h-12 bg-[var(--mawsouq-light)] rounded-xl flex items-center px-4">
                        <span className="text-sm text-[var(--mawsouq-dark)]/60">نوع المشروع</span>
                      </div>
                      <div className="h-12 bg-[var(--mawsouq-light)] rounded-xl flex items-center px-4">
                        <span className="text-sm text-[var(--mawsouq-dark)]/60">مستوى التشطيب</span>
                      </div>
                    </div>

                    {/* Result Preview */}
                    <div className="bg-gradient-to-br from-[var(--mawsouq-primary)] to-[var(--mawsouq-bright)] rounded-xl p-4 text-white">
                      <p className="text-sm text-white/80 mb-1">التكلفة التقديرية</p>
                      <p className="text-2xl font-bold">1,250,000 ر.س</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-[var(--mawsouq-whatsapp)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float">
                  محدثة بأسعار 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

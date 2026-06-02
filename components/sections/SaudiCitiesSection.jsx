const cities = [
  { name: 'الرياض', icon: '🏢' },
  { name: 'جدة', icon: '🌊' },
  { name: 'الدمام', icon: '🏭' },
  { name: 'الخبر', icon: '🏝️' },
  { name: 'مكة المكرمة', icon: '🕋' },
  { name: 'المدينة المنورة', icon: '🕌' },
]

const factors = [
  'كود البناء السعودي',
  'اختلاف التكلفة حسب المدينة',
  'المساحة ونوع البناء',
  'مستوى التشطيب',
  'طبيعة الأرض',
]

export default function SaudiCitiesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[var(--mawsouq-bright)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[var(--mawsouq-primary)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--mawsouq-light)] text-[var(--mawsouq-primary)] text-sm font-medium mb-4">
                تغطية شاملة
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--mawsouq-dark)] mb-6 text-balance">
                خدمة مخصصة للسوق السعودي
              </h2>
              <p className="text-lg text-[var(--mawsouq-dark)]/70 leading-relaxed text-pretty">
                نقدم خدماتنا في جميع مناطق المملكة العربية السعودية مع مراعاة اختلاف التكاليف والمتطلبات حسب كل منطقة ونوع المشروع.
              </p>
            </div>

            {/* Factors */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[var(--mawsouq-dark)]">عوامل نراعيها في كل مشروع:</h3>
              <div className="flex flex-wrap gap-3">
                {factors.map((factor, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--mawsouq-light)] rounded-full text-sm text-[var(--mawsouq-dark)]"
                  >
                    <svg className="w-4 h-4 text-[var(--mawsouq-bright)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {factor}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20استشارة%20عن%20خدمات%20البناء%20في%20السعودية"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-primary text-white px-6 py-3.5 rounded-full font-medium hover-lift transition-all"
            >
              استشر خبراءنا
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Cities Grid */}
          <div className="relative">
            {/* Saudi Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                <text x="50" y="50" textAnchor="middle" fontSize="40" className="font-bold">🇸🇦</text>
              </svg>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="group bg-[var(--mawsouq-light)] rounded-2xl p-6 text-center hover-lift hover:bg-gradient-to-br hover:from-[var(--mawsouq-primary)] hover:to-[var(--mawsouq-bright)] transition-all duration-300"
                >
                  <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-300">
                    {city.icon}
                  </span>
                  <h3 className="font-bold text-[var(--mawsouq-dark)] group-hover:text-white transition-colors">
                    {city.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--mawsouq-whatsapp)] flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--mawsouq-dark)]">+13</p>
                  <p className="text-sm text-[var(--mawsouq-dark)]/60">منطقة نغطيها</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

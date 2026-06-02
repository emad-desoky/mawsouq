import Link from 'next/link'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'التصميم المعماري',
    description: 'تنفيذ جميع التصميمات والمخططات الهندسية المعمارية للمشروع بأحدث الأساليب العالمية',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: 'التصميم الإنشائي',
    description: 'تنفيذ جميع التصميمات والمخططات الهندسية الإنشائية للمشروع طبقاً للكود السعودي',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'التصميم الداخلي',
    description: 'تنفيذ جميع التصميمات الداخلية للمبنى بأحدث الأفكار العالمية في هذا المجال',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'حاسبة تكلفة البناء',
    description: 'حساب تكلفة البناء بدقة طبقاً لأسعار السوق السعودي المحدثة باستمرار',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'دراسة الجدوى والتكاليف',
    description: 'تنفيذ أعمال دراسات الجدوى وحساب التكاليف للمشروع طبقاً لأسعار السوق',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'شبكات الكهرباء والإضاءة',
    description: 'تنفيذ أعمال تصميم شبكات الكهرباء والإضاءة للمبنى طبقاً للكود السعودي',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'شبكات الصرف الصحي',
    description: 'تنفيذ أعمال تصميم شبكات الصرف الصحي للمبنى طبقاً للكود السعودي',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'أنظمة التكييف والتدفئة',
    description: 'تنفيذ أعمال التكييف والتبريد والتدفئة طبقاً للكود السعودي',
    color: 'from-sky-500 to-sky-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'الإطفاء والحماية المدنية',
    description: 'تنفيذ أعمال تصميم شبكات الإطفاء ومكافحة الحريق طبقاً للكود السعودي',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: 'حفر الأساسات وتجهيز الموقع',
    description: 'تنفيذ جميع أعمال الحفر والرفع المساحي في الموقع طبقاً لعمل التأسيس المطلوب',
    color: 'from-orange-500 to-orange-600',
  },
]

export default function ServicesSection() {
  return (
    <section id="architectural-design" className="py-24 bg-[var(--mawsouq-light)] relative">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(47, 134, 246, 0.1) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--mawsouq-primary)]/10 text-[var(--mawsouq-primary)] text-sm font-medium mb-4">
            خدماتنا المتكاملة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--mawsouq-dark)] mb-6 text-balance">
            خدمات موسوق في السعودية
          </h2>
          <p className="text-lg text-[var(--mawsouq-dark)]/70 text-pretty">
            نجمع لك أفضل مزوّدي الخدمات بحسب آراء العملاء لنقدم لك تجربة بناء متكاملة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 hover-lift card-shine transition-all duration-300 border border-transparent hover:border-[var(--mawsouq-bright)]/30"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[var(--mawsouq-dark)] mb-2 group-hover:text-[var(--mawsouq-primary)] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--mawsouq-dark)]/60 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* CTA */}
              <a
                href="https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20الاستفسار%20عن%20خدمة%20" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--mawsouq-primary)] hover:text-[var(--mawsouq-bright)] transition-colors"
              >
                اطلب الخدمة
                <svg className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

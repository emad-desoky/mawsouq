import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-24 bg-[var(--mawsouq-light)] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--mawsouq-primary)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--mawsouq-primary)] to-[var(--mawsouq-bright)] p-8 aspect-square flex items-center justify-center">
                {/* Logo */}
                <div className="relative w-48 h-48 animate-float">
                  <Image
                    src="/mawsouq-logo.png"
                    alt="موسوق"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-8 right-8 w-24 h-24 rounded-full border-2 border-white/20 animate-pulse" />
                <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-white/10" />
                <div className="absolute top-1/2 left-8 w-8 h-8 rounded-full bg-white/20" />
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[var(--mawsouq-dark)]">منذ 2018</p>
                    <p className="text-sm text-[var(--mawsouq-dark)]/60">نخدم عملاءنا</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 glass rounded-2xl p-4 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--mawsouq-whatsapp)] flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[var(--mawsouq-dark)]">🇸🇦 🇪🇬</p>
                    <p className="text-sm text-[var(--mawsouq-dark)]/60">السعودية ومصر</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--mawsouq-primary)]/10 text-[var(--mawsouq-primary)] text-sm font-medium">
                عن موسوق
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--mawsouq-dark)] text-balance">
                منصة سعودية للتصميم والبناء
              </h2>
              <p className="text-lg text-[var(--mawsouq-dark)]/70 leading-relaxed text-pretty">
                موسوق منصة سعودية تهدف إلى تسهيل رحلة التصميم والبناء من الفكرة إلى التنفيذ باستخدام التكنولوجيا وتنظيم المعلومات.
              </p>
              <p className="text-lg text-[var(--mawsouq-dark)]/70 leading-relaxed text-pretty">
                تساعد المنصة العملاء على فهم الخدمات المطلوبة، حساب التكلفة التقريبية، والوصول إلى مزودي خدمات في مجالات التصميم المعماري والهندسي والتنفيذ والإشراف.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--mawsouq-primary)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--mawsouq-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--mawsouq-dark)]">خدمات موثوقة</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--mawsouq-primary)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--mawsouq-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--mawsouq-dark)]">أسعار تنافسية</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--mawsouq-primary)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--mawsouq-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--mawsouq-dark)]">استجابة سريعة</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--mawsouq-primary)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--mawsouq-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--mawsouq-dark)]">فريق متخصص</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

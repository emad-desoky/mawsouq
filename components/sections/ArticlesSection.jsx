import Link from 'next/link'

const articles = [
  {
    title: 'تكلفة بناء فلة في السعودية',
    description: 'دليل شامل لتكاليف بناء الفلل في السعودية مع أسعار السوق المحدثة',
    href: '/تكلفة-بناء-فلة-في-السعودية/',
    icon: '🏠',
    category: 'تكاليف البناء',
  },
  {
    title: 'تكلفة التصميم المعماري في السعودية',
    description: 'تعرف على أسعار التصميم المعماري ومتوسط الأسعار في السوق السعودي',
    href: '/تكلفة-التصميم-المعماري-في-السعودية/',
    icon: '📐',
    category: 'التصميم',
  },
  {
    title: 'طريقة توزيع الغرف في البيت',
    description: 'نقاط مهمة وأساسية لتوزيع الغرف بطريقة عملية ومريحة',
    href: '/طريقة-توزيع-الغرف-في-البيت/',
    icon: '🏡',
    category: 'تخطيط',
  },
  {
    title: 'واجهات فلل حديثة',
    description: '31 فكرة رائعة لواجهات الفلل الحديثة مع ألبوم صور ملهم',
    href: '/واجهات-فلل-حديثة/',
    icon: '🎨',
    category: 'تصميم خارجي',
  },
  {
    title: 'تكلفة بناء دور واحد',
    description: 'خطوات البناء والتكلفة التفصيلية لبناء دور واحد في السعودية',
    href: '/تكلفة-بناء-دور-واحد/',
    icon: '🧱',
    category: 'تكاليف البناء',
  },
]

export default function ArticlesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--mawsouq-bright)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--mawsouq-light)] text-[var(--mawsouq-primary)] text-sm font-medium mb-4">
            مقالات مفيدة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--mawsouq-dark)] mb-6 text-balance">
            مقالات تساعدك قبل بدء البناء
          </h2>
          <p className="text-lg text-[var(--mawsouq-dark)]/70 text-pretty">
            اقرأ دليلنا الشامل لفهم تكاليف وخطوات البناء في السعودية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="group bg-[var(--mawsouq-light)] rounded-2xl p-6 hover-lift transition-all duration-300 border border-transparent hover:border-[var(--mawsouq-bright)]/30"
            >
              {/* Category */}
              <span className="inline-block px-3 py-1 rounded-full bg-white text-xs font-medium text-[var(--mawsouq-primary)] mb-4">
                {article.category}
              </span>

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {article.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[var(--mawsouq-dark)] mb-2 group-hover:text-[var(--mawsouq-primary)] transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-[var(--mawsouq-dark)]/60 line-clamp-2 mb-4">
                {article.description}
              </p>

              {/* Read More */}
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--mawsouq-primary)]">
                اقرأ المزيد
                <svg className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

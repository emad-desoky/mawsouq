'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'ما هي خدمات موسوق في السعودية؟',
    answer: 'موسوق تقدم خدمات التصميم المعماري والإنشائي والداخلي، بالإضافة إلى حاسبة تكلفة البناء ودراسات الجدوى وربطك بمزودي الخدمات المناسبين في السعودية.',
  },
  {
    question: 'هل تساعد موسوق في حساب تكلفة البناء؟',
    answer: 'نعم، نقدم حاسبة تكلفة البناء المحدثة بأسعار السوق السعودي والتي تساعدك في تقدير تكلفة مشروعك بناءً على المساحة ونوع المشروع ومستوى التشطيب.',
  },
  {
    question: 'هل تقدم موسوق التصميم المعماري والإنشائي؟',
    answer: 'نعم، نقدم خدمات التصميم المعماري والإنشائي والداخلي بالتعاون مع أفضل المصممين والمهندسين من العالم العربي مع توفير يصل إلى 70% من أسعار المكاتب الهندسية.',
  },
  {
    question: 'هل يمكنني التواصل عبر واتساب؟',
    answer: 'نعم، يمكنك التواصل معنا مباشرة عبر واتساب على الرقم +201223328270 للحصول على استشارة مجانية حول مشروعك.',
  },
  {
    question: 'هل الصفحة مخصصة للسوق السعودي؟',
    answer: 'نعم، هذه الصفحة مخصصة بالكامل للسوق السعودي وتغطي خدماتنا في الرياض وجدة والدمام والخبر ومكة والمدينة وجميع مناطق المملكة.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-[var(--mawsouq-light)] relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--mawsouq-primary)]/10 text-[var(--mawsouq-primary)] text-sm font-medium mb-4">
            أسئلة شائعة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--mawsouq-dark)] mb-6 text-balance">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-[var(--mawsouq-dark)]/70 text-pretty">
            إجابات على أهم الأسئلة التي يطرحها عملاؤنا
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'open shadow-lg' : 'shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-right"
              >
                <h3 className="text-lg font-bold text-[var(--mawsouq-dark)]">
                  {faq.question}
                </h3>
                <div className={`faq-toggle w-10 h-10 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[var(--mawsouq-primary)] text-white' 
                    : 'bg-[var(--mawsouq-light)] text-[var(--mawsouq-primary)]'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className="faq-answer px-6 pb-6">
                <p className="text-[var(--mawsouq-dark)]/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-[var(--mawsouq-dark)]/70 mb-4">
            لم تجد إجابة سؤالك؟
          </p>
          <a
            href="https://wa.me/201223328270?text=مرحبا%20موسوق،%20لدي%20سؤال"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-primary text-white px-6 py-3 rounded-full font-medium hover-lift transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  )
}

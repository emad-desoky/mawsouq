import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import FloatingButtons from '../../../components/FloatingButtons'

export const metadata = {
  title: 'خدمات التصميم والبناء في السعودية | موسوق',
  description: 'موسوق تساعدك في التصميم المعماري والإنشائي وحساب تكلفة البناء واختيار مزودي الخدمات في السعودية بخطوات واضحة واستشارة مباشرة.',
  keywords: 'تصميم معماري, بناء السعودية, حاسبة تكلفة البناء, تصميم داخلي, مقاولات الرياض',
  alternates: {
    canonical: 'https://mawsouq.com/ar/sa/',
    languages: {
      'ar-SA': 'https://mawsouq.com/ar/sa/',
      'en-SA': 'https://mawsouq.com/en/sa/',
      'x-default': 'https://mawsouq.com/ar/sa/',
    },
  },
  openGraph: {
    title: 'خدمات التصميم والبناء في السعودية | موسوق',
    description: 'ابدأ مشروعك في السعودية مع موسوق: تصميم معماري، تصميم إنشائي، تصميم داخلي، حاسبة تكلفة، وربطك بمزودي الخدمات.',
    url: 'https://mawsouq.com/ar/sa/',
    siteName: 'موسوق',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://mawsouq.com/og/mawsouq-sa.webp',
        width: 1200,
        height: 630,
        alt: 'موسوق - خدمات التصميم والبناء في السعودية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدمات التصميم والبناء في السعودية | موسوق',
    description: 'ابدأ مشروعك في السعودية مع موسوق: تصميم معماري، تصميم إنشائي، تصميم داخلي، حاسبة تكلفة.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#0b5bb8',
}

export default function SaudiArabicLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}

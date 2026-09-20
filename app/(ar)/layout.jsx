import { Tajawal } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import LocalDomainLinkFix from "@/components/LocalDomainLinkFix";
import SocialFloatingButtons from "@/components/SocialFloatingButtons";
import LeadClickTracker from "@/components/LeadClickTracker";
import MawsooqChatbot from "@/components/ai/MawsooqChatbot";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata = {
  title: "موسوق | منصة خدمات التصميم والبناء",
  description:
    "موسوق منصة تساعدك في التصميم المعماري والإنشائي وحساب تكلفة البناء واختيار مزودي الخدمات",
  icons: {
    icon: "/mawsouq-logo.png",
    apple: "/mawsouq-logo.png",
  },
  generator: "v0.app",
};

export const viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#071321",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.variable} font-sans antialiased pb-[78px] sm:pb-0`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Header />
            <LocalDomainLinkFix />
            <LeadClickTracker />

            {children}

            <Footer />
            <SocialFloatingButtons />
            <MawsooqChatbot language="ar" />
          </SmoothScrollProvider>
        </ThemeProvider>

        <GoogleAnalytics gaId="G-6RSM6BCKSM" />
      </body>
    </html>
  );
}

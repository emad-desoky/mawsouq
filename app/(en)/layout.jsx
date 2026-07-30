import { Tajawal } from "next/font/google";
import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import EnglishHeader from "@/components/en/EnglishHeader";
import EnglishFooter from "@/components/en/EnglishFooter";
import EnglishFloatingButtons from "@/components/en/EnglishFloatingButtons";
import GoogleAnalytics from "@/components/en/GoogleAnalytics";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import LocalDomainLinkFix from "@/components/LocalDomainLinkFix";
import SocialFloatingButtons from "@/components/SocialFloatingButtons";

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mawsouq.com"),
  title: {
    default: "Mawsooq | Design and Construction Services",
    template: "%s | Mawsooq",
  },
  description:
    "Mawsooq helps clients plan architectural, structural, interior-design, and construction projects across Saudi Arabia and the Arab region.",
  icons: {
    icon: "/mawsouq-logo.png",
    apple: "/mawsouq-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#071321" },
  ],
};

export default function EnglishRootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${tajawal.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <EnglishHeader />
            <LocalDomainLinkFix />
            {children}
            <EnglishFooter />
            <EnglishFloatingButtons />
            <SocialFloatingButtons />
          </SmoothScrollProvider>
        </ThemeProvider>

        <GoogleAnalytics />
      </body>
    </html>
  );
}

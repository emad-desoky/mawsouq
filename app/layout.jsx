import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata = {
  title: "موسوق | منصة خدمات التصميم والبناء",
  description:
    "موسوق منصة سعودية تساعدك في التصميم المعماري والإنشائي وحساب تكلفة البناء واختيار مزودي الخدمات",
  icons: {
    icon: "/mawsouq-logo.png",
    apple: "/mawsouq-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${tajawal.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

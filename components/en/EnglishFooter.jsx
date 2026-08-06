"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { href: "/en/#architectural-design", label: "Our Services" },
    { href: "/en/#cost-calculator", label: "Cost Calculator" },
  ],
  company: [
    { href: "/en/#about", label: "About Mawsooq" },
    { href: "/en/#contact", label: "Contact Us" },
    { href: "/en/#privacy", label: "Privacy Policy" },
    { href: "/en/#terms", label: "Terms of Use" },
  ],
};

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.94L0 24l6.32-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.75.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.02 2.91a9.86 9.86 0 0 1 2.9 7.03c0 5.47-4.45 9.91-9.91 9.91Zm5.44-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.11 3.22 5.1 4.52.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
      />
    </svg>
  );
}

export default function EnglishFooter() {
  return (
    <footer
      dir="ltr"
      className="relative overflow-hidden bg-[#081c36] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(47,134,246,0.16),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(11,91,184,0.12),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Branedd */}
          <div className="lg:col-span-1">
            <Link href="/en/" className="mb-5 flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
                <Image
                  src="/logo-png.webp"
                  alt="Mawsooq"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight">
                  Mawsooq
                </div>
                <div className="text-sm text-white/55">
                  Design & Construction
                </div>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-8 text-white/70">
              An Arab platform that simplifies the project journey from concept
              to delivery using technology and clearer, more professional design
              and construction services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-black">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-lg font-black">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-black">Contact Us</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2f86f6] text-white shadow-lg">
                  <LocationIcon />
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold text-white/45">
                    Address
                  </p>
                  <p className="max-w-[280px] text-sm leading-7 text-white/75">
                    Safwat Al Mostakbal Project No. 215, Sporting, Port Said
                    Main Street, Ground Floor, Sidi Gaber, Alexandria, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg">
                  <WhatsAppIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold text-white/45">
                    WhatsApp / Phone
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="https://wa.me/966598061334"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/75 transition hover:text-[#25D366]"
                      dir="ltr"
                    >
                      +966 598 061 334
                    </a>
                    <a
                      href="https://wa.me/201223328270"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/75 transition hover:text-[#25D366]"
                      dir="ltr"
                    >
                      +20 122 332 8270
                    </a>
                    <a
                      href="https://wa.me/201060160164"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/75 transition hover:text-[#25D366]"
                      dir="ltr"
                    >
                      +20 106 016 0164
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2f86f6] text-white shadow-lg">
                  <MailIcon />
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold text-white/45">Email</p>
                  <a
                    href="mailto:info@mawsouq.com"
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    info@mawsouq.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">
            <p className="text-sm text-white/55">
              All rights reserved © Mawsooq 2026
            </p>

            <a
              href="https://wa.me/201223328270?text=Hello%20Mawsooq%2C%20I%20would%20like%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

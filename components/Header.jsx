"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { trackLeadAction } from "@/lib/leadTracking";

const WHATSAPP_URL =
  "https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20استشارة%20عن%20خدمات%20التصميم%20والبناء%20في%20السعودية";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/مشاريعنا/", label: "مشاريعنا" },
  {
    href: "/%d8%a7%d9%84%d9%85%d8%af%d9%88%d9%86%d8%a7%d8%aa/",
    label: "المدونات",
  },
  {
    href: "/عن-الشركة",
    label: "عن الشركة",
  },
  { href: "/#architectural-design", label: "التصميم المعماري" },
  { href: "/#cost-calculator", label: "حاسبة التكلفة" },
];

function WhatsAppIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.464 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function MenuIcon({ isOpen }) {
  return (
    <span className="relative flex h-5 w-6 items-center justify-center">
      <span
        className={`absolute h-0.5 w-6 rounded-full bg-[color:var(--ink)] transition duration-300 ${
          isOpen ? "rotate-45" : "-translate-y-2"
        }`}
      />
      <span
        className={`absolute h-0.5 w-6 rounded-full bg-[color:var(--ink)] transition duration-300 ${
          isOpen ? "opacity-0 scale-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-0.5 w-6 rounded-full bg-[color:var(--ink)] transition duration-300 ${
          isOpen ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </span>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      dir="rtl"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <div
          className={`relative flex items-center justify-between rounded-full border border-[color:var(--hairline-strong)] px-4 backdrop-blur-2xl transition-all duration-300 lg:px-5 ${
            isScrolled || isOpen
              ? "bg-[color:var(--header-bg-scrolled)] shadow-[var(--header-shadow)]"
              : "bg-[color:var(--header-bg)] shadow-[0_10px_32px_rgba(16,32,51,0.055)]"
          }`}
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex h-[84px] items-center gap-3"
            aria-label="موسوق"
          >
            <span className="relative grid h-[70px] w-[70px] place-items-center overflow-hidden rounded-full transition duration-300 group-hover:scale-105">
              <Image
                src="/logo-png.webp"
                alt="شعار موسوق"
                width={256}
                height={256}
                sizes="70px"
                quality={100}
                className="h-full w-full object-contain"
                priority
              />
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2.5 text-sm font-black text-[color:var(--ink-muted)] transition duration-300 hover:bg-[color:var(--surface)] hover:text-[color:var(--brand)] hover:shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <Link
              href="/en"
              className="rounded-full px-4 py-2.5 text-sm font-black text-[color:var(--ink-muted)] transition duration-300 hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"
            >
              English
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-lead-tracked="true"
              data-lead-placement="header_desktop"
              onClick={() => trackLeadAction("whatsapp", "header_desktop")}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-l from-[#0b5bb8] to-[#2f86f6] px-5 text-sm font-black !text-white shadow-[0_14px_32px_rgba(11,91,184,0.26)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(11,91,184,0.34)]"
              style={{ color: "#fff" }}
            >
              <WhatsAppIcon />
              تواصل واتساب
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface)] text-[color:var(--ink)] shadow-sm transition duration-300 hover:bg-[color:var(--surface-2)]"
              aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isOpen}
            >
              <MenuIcon isOpen={isOpen} />
            </button>
          </div>
        </div>

        <div
          className={`grid transition-all duration-300 lg:hidden ${
            isOpen
              ? "grid-rows-[1fr] pt-3 opacity-100"
              : "grid-rows-[0fr] pt-0 opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-[28px] border border-[color:var(--hairline-strong)] bg-[color:var(--header-bg-scrolled)] p-3 shadow-[var(--header-shadow)] backdrop-blur-2xl">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-black text-[color:var(--ink)] transition duration-300 hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-black text-[color:var(--brand-bright)]/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                ))}

                <Link
                  href="/en"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-black text-[color:var(--ink)] transition duration-300 hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"
                >
                  <span>English</span>
                  <span className="text-xs font-black text-[color:var(--brand-bright)]/45">
                    EN
                  </span>
                </Link>

                <div className="mt-3 border-t border-[color:var(--hairline)] pt-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-lead-tracked="true"
                    data-lead-placement="header_mobile_menu"
                    onClick={() => {
                      trackLeadAction("whatsapp", "header_mobile_menu");
                      setIsOpen(false);
                    }}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 text-sm font-black !text-white shadow-[0_14px_34px_rgba(37,211,102,0.30)] transition duration-300 hover:-translate-y-0.5"
                    style={{ color: "#fff" }}
                  >
                    <WhatsAppIcon />
                    تواصل واتساب الآن
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <button
          type="button"
          aria-label="إغلاق القائمة"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 -z-10 bg-[#102033]/18 backdrop-blur-[2px] lg:hidden"
        />
      )}
    </header>
  );
}

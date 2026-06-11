"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.55 1.55M17.85 17.85l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.55-1.55M17.85 6.15l1.55-1.55"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M20 14.5A8 8 0 0 1 9.5 4a0.5 0.5 0 0 0-.66-.6A9 9 0 1 0 20.6 15.16a0.5 0.5 0 0 0-.6-.66Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThemeToggle({ className = "" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      title={isDark ? "الوضع الفاتح" : "الوضع الداكن"}
      className={`group grid h-11 w-11 place-items-center rounded-2xl border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] text-[color:var(--brand)] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:text-[color:var(--brand-bright)] ${className}`}
    >
      {mounted ? (
        <span className="transition-transform duration-300 group-hover:rotate-12">
          {isDark ? <SunIcon /> : <MoonIcon />}
        </span>
      ) : (
        <span className="h-5 w-5" />
      )}
    </button>
  );
}

"use client";

import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/mawsouq",
    icon: FaFacebookF,
    className: "bg-[#1877F2] hover:bg-[#166FE5]",
  },
  {
    label: "X",
    href: "https://x.com/mawsouq1",
    icon: FaXTwitter,
    className: "bg-black hover:bg-[#111]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mawsouq1",
    icon: FaInstagram,
    className: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCsLilv9AZyX-a3NWBRWiD4Q",
    icon: FaYoutube,
    className: "bg-[#FF0000] hover:bg-[#E60000]",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/rehamnagybusiness/",
    icon: FaPinterestP,
    className: "bg-[#E60023] hover:bg-[#C9001F]",
  },
];

export default function SocialFloatingButtons() {
  return (
    <div className="no-print fixed bottom-5 left-5 z-50 flex flex-col gap-3 max-sm:bottom-4 max-sm:left-4">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={`flex h-[46px] w-[46px] items-center justify-center rounded-full text-white shadow-[0_12px_32px_rgba(0,0,0,0.20)] transition duration-300 hover:-translate-y-1 hover:scale-105 max-sm:h-[42px] max-sm:w-[42px] ${item.className}`}
          >
            <Icon className="h-5 w-5 max-sm:h-[18px] max-sm:w-[18px]" />
          </a>
        );
      })}
    </div>
  );
}

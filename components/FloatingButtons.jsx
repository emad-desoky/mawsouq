"use client";

import { MessageCircle, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { trackLeadAction } from "@/lib/leadTracking";

const PHONE = "+966598061334";
const WHATSAPP_NUMBER = "966598061334";

const WHATSAPP_ONLY_SEO_SLUGS = [
  "بناء-فلة",
  "افضل-مكتب-هندسي-بالدمام",
  "التصميم-المعماري",
  "تصميم-انشائي",
  "ايجاد-مهندس-انشائي",
  "تكلفة-بناء-فيلا-300-متر",
  "تكلفة-التصميم-المعماري-في-السعودية",
  "سعر-التصميم-الانشائي-في-السعودية",
  "تصميم-فلل-بالدمام",
  "متى-تحتاج-مهندس-انشائي",
];

function decodedPath(pathname = "") {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function getLeadMessage(pathname) {
  const path = decodedPath(pathname);

  if (path.includes("تصاميم-استراحات")) {
    return "مرحبًا موسوق، أريد تصميم استراحة. المدينة: ___، مساحة الأرض: ___، الاستخدام: ___، وهل أحتاج مسبحًا أو مجلسًا: ___";
  }

  if (path.includes("تكلفة-بناء-دور-واحد")) {
    return "مرحبًا موسوق، أريد تقدير تكلفة بناء دور واحد. المدينة: ___، مساحة البناء: ___، ونوع التنفيذ (عظم/تشطيب/تسليم مفتاح): ___";
  }

  if (path.includes("تكلفة-بناء-فيلا-300-متر")) {
    return "مرحبًا موسوق، أريد تقدير تكلفة فيلا قرابة 300 متر. المدينة: ___، 300 متر تعني مساحة الأرض/البناء: ___، عدد الأدوار: ___، مستوى التنفيذ: ___";
  }

  if (path.includes("تكلفة-التصميم-المعماري-في-السعودية")) {
    return "مرحبًا موسوق، أريد تقدير تكلفة تصميم معماري. المدينة: ___، مساحة الأرض: ___، عدد الأدوار: ___، المخرجات المطلوبة: ___";
  }

  if (path.includes("سعر-التصميم-الانشائي-في-السعودية")) {
    return "مرحبًا موسوق، أريد تقدير سعر تصميم إنشائي. المدينة: ___، نوع المبنى: ___، المساحة وعدد الأدوار: ___، وهل المعماري جاهز: نعم/لا";
  }

  if (path.includes("تصميم-فلل-بالدمام")) {
    return "مرحبًا موسوق، أريد تصميم فيلا في الدمام. مساحة الأرض: ___، عدد الأدوار: ___، أهم الفراغات المطلوبة: ___";
  }

  if (path.includes("متى-تحتاج-مهندس-انشائي")) {
    return "مرحبًا موسوق، أريد معرفة هل حالتي تحتاج مهندسًا إنشائيًا. المدينة: ___، نوع المبنى: ___، وصف الحالة/التعديل: ___";
  }

  if (path.includes("افضل-مكتب-هندسي-بالدمام")) {
    return "مرحبًا موسوق، لدي مشروع في الدمام وأريد استشارة هندسية. نوع المشروع: ___، مساحة الأرض أو المبنى: ___، والخدمة المطلوبة: ___";
  }

  if (path.includes("تصميم-انشائي") || path.includes("مهندس-انشائي")) {
    return "مرحبًا موسوق، أريد استشارة بخصوص التصميم الإنشائي. المدينة: ___، نوع المبنى: ___، المساحة: ___، وهل توجد مخططات معمارية: ___";
  }

  if (path.includes("بناء-فلة")) {
    return "مرحبًا موسوق، أريد استشارة حول بناء فيلا. المدينة: ___، مساحة الأرض: ___، مساحة البناء التقريبية: ___، ومرحلة المشروع الحالية: ___";
  }

  if (path.includes("التصميم-المعماري")) {
    return "مرحبًا موسوق، أريد استشارة تصميم معماري. المدينة: ___، مساحة الأرض: ___، نوع المشروع: ___، وهل لدي متطلبات أو صور مرجعية: ___";
  }

  return "مرحبًا موسوق، أريد استشارة عن خدمات التصميم والبناء. المدينة: ___، نوع المشروع: ___، المساحة: ___";
}

function WhatsAppIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FloatingButtons() {
  const pathname = usePathname();
  const message = getLeadMessage(pathname);
  const decoded = decodedPath(pathname);
  const whatsappOnly = WHATSAPP_ONLY_SEO_SLUGS.some((slug) => decoded.includes(slug));
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="no-print">
      <div className="hidden sm:block">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-lead-tracked="true"
          data-lead-placement="floating_desktop"
          onClick={() => trackLeadAction("whatsapp", "floating_desktop")}
          className="floating-btn whatsapp-btn text-white"
          style={{ color: "#fff" }}
          aria-label="تواصل عبر واتساب"
        >
          <WhatsAppIcon />
        </a>

        {!whatsappOnly && (
          <a
            href={`tel:${PHONE}`}
            data-lead-tracked="true"
            data-lead-placement="floating_desktop"
            onClick={() => trackLeadAction("phone", "floating_desktop")}
            className="floating-btn call-btn text-white"
            style={{ color: "#fff" }}
            aria-label="اتصل بنا"
          >
            <Phone className="h-6 w-6" />
          </a>
        )}
      </div>

      <div className={`fixed inset-x-3 bottom-[max(10px,env(safe-area-inset-bottom))] z-[95] grid gap-2 rounded-[22px] border border-[color:var(--hairline-strong)] bg-[color:var(--header-bg-scrolled)] p-2 shadow-[0_18px_55px_rgba(7,19,33,.28)] backdrop-blur-2xl sm:hidden ${whatsappOnly ? "grid-cols-1" : "grid-cols-2"}`}>
        {!whatsappOnly && (
          <a
            href={`tel:${PHONE}`}
            data-lead-tracked="true"
            data-lead-placement="mobile_sticky_bar"
            onClick={() => trackLeadAction("phone", "mobile_sticky_bar")}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[color:var(--brand)] px-3 text-sm font-black !text-white"
            style={{ color: "#fff" }}
          >
            <Phone size={19} />
            اتصل الآن
          </a>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-lead-tracked="true"
          data-lead-placement="mobile_sticky_bar"
          onClick={() => trackLeadAction("whatsapp", "mobile_sticky_bar")}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-3 text-sm font-black !text-white"
          style={{ color: "#fff" }}
        >
          <MessageCircle size={19} />
          {whatsappOnly ? "أرسل تفاصيل مشروعك على واتساب" : "واتساب"}
        </a>
      </div>
    </div>
  );
}

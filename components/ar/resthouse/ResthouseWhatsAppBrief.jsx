"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const WHATSAPP_NUMBER = "966598061334";

export default function ResthouseWhatsAppBrief({
  articleTitle = "تصاميم استراحات",
  compact = false,
}) {
  const [city, setCity] = useState("");
  const [land, setLand] = useState("");
  const [usage, setUsage] = useState("استراحة عائلية خاصة");
  const [style, setStyle] = useState("مودرن");
  const [pool, setPool] = useState("لم أحدد بعد");

  const href = useMemo(() => {
    const message = [
      "مرحبًا موسوق،",
      `قرأت صفحة: ${articleTitle}`,
      "وأرغب في مناقشة تصميم استراحة مناسبة لمشروعي.",
      `المدينة: ${city || "سأحددها في المحادثة"}`,
      `مساحة الأرض التقريبية: ${land || "غير محددة"}`,
      `الاستخدام: ${usage}`,
      `النمط المفضل: ${style}`,
      `المسبح: ${pool}`,
      "أرجو مساعدتي في تحديد الخطوة التالية ونطاق التصميم المناسب.",
    ].join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [articleTitle, city, land, usage, style, pool]);

  return (
    <div className={`resthouse-lead-card ${compact ? "is-compact" : ""}`}>
      <div className="resthouse-lead-heading">
        <span className="resthouse-lead-icon">
          <MessageCircle size={22} aria-hidden="true" />
        </span>
        <div>
          <strong>حوّل الفكرة إلى brief واضح</strong>
          <p>أدخل المعلومات الأساسية، ثم أرسلها مباشرة عبر واتساب.</p>
        </div>
      </div>

      <div className="resthouse-lead-fields">
        <label>
          <span>المدينة</span>
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="الرياض، جدة، الدمام..."
            inputMode="text"
          />
        </label>

        <label>
          <span>مساحة الأرض</span>
          <input
            value={land}
            onChange={(event) => setLand(event.target.value)}
            placeholder="مثال: 500 م²"
            inputMode="text"
          />
        </label>

        <label>
          <span>الاستخدام</span>
          <select value={usage} onChange={(event) => setUsage(event.target.value)}>
            <option>استراحة عائلية خاصة</option>
            <option>استراحة للضيوف</option>
            <option>استراحة مناسبات</option>
            <option>استراحة تجارية</option>
            <option>لم أحدد بعد</option>
          </select>
        </label>

        <label>
          <span>النمط</span>
          <select value={style} onChange={(event) => setStyle(event.target.value)}>
            <option>مودرن</option>
            <option>سعودي معاصر</option>
            <option>ريفي</option>
            <option>كلاسيك مبسط</option>
            <option>لم أحدد بعد</option>
          </select>
        </label>

        <label className="lead-field-full">
          <span>هل تحتاج مسبحًا؟</span>
          <select value={pool} onChange={(event) => setPool(event.target.value)}>
            <option>لم أحدد بعد</option>
            <option>نعم، مسبح خاص</option>
            <option>نعم، مسبح صغير</option>
            <option>لا أحتاج مسبحًا</option>
          </select>
        </label>
      </div>

      <a href={href} target="_blank" rel="noopener noreferrer" className="resthouse-whatsapp-submit">
        أرسل تفاصيل مشروعك عبر واتساب
        <Send size={18} aria-hidden="true" />
      </a>

      <p className="resthouse-lead-note">
        لا ترسل بيانات حساسة. هذه المعلومات تساعد فقط على بدء محادثة أكثر دقة.
      </p>
    </div>
  );
}

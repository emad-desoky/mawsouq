"use client";

import { useMemo, useState } from "react";

const BUILD_TYPES = {
  laborOnly: {
    label: "عظم — مصنعية فقط",
    min: 140,
    max: 250,
    note: "لا يشمل شراء الحديد والخرسانة والبلك والعزل والمواد الأخرى.",
  },
  skeletonMaterials: {
    label: "عظم — بالمواد",
    min: 650,
    max: 950,
    note: "نطاق تخطيطي للهيكل والأعمال المرتبطة به، ويتغير حسب المخطط والتربة والموقع.",
  },
  turnkeyEconomy: {
    label: "تسليم مفتاح — اقتصادي",
    min: 1350,
    max: 1850,
    note: "تشطيب عملي بمواصفات واضحة ومن دون إضافات فاخرة أو أنظمة خاصة.",
  },
  turnkeyMedium: {
    label: "تسليم مفتاح — متوسط",
    min: 1850,
    max: 2600,
    note: "مواد وتشطيبات متوسطة مع مستوى أفضل للأرضيات والأبواب والواجهات والتأسيسات.",
  },
  turnkeyLuxury: {
    label: "تسليم مفتاح — فاخر",
    min: 2700,
    max: 4000,
    note: "قد يتجاوز الحد الأعلى مع الرخام المستورد أو المنزل الذكي أو التكييف المركزي أو الواجهات المعقدة.",
  },
};

const CITY_OPTIONS = {
  riyadh: { label: "الرياض" },
  jeddah: { label: "جدة / مكة" },
  eastern: { label: "الدمام / الخبر / الشرقية" },
  madinah: { label: "المدينة / القصيم" },
  other: { label: "مدينة أخرى" },
};

const formatter = new Intl.NumberFormat("ar-SA", {
  style: "currency",
  currency: "SAR",
  maximumFractionDigits: 0,
});

function clampNumber(value, min, max) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return min;
  return Math.min(Math.max(parsed, min), max);
}

export default function OneFloorCostCalculator({ initialArea = 200 }) {
  const [area, setArea] = useState(initialArea);
  const [buildType, setBuildType] = useState("skeletonMaterials");
  const [city, setCity] = useState("riyadh");
  const [reserve, setReserve] = useState(10);

  const result = useMemo(() => {
    const safeArea = clampNumber(area, 40, 2000);
    const safeReserve = clampNumber(reserve, 0, 30);
    const selectedType = BUILD_TYPES[buildType];
    const selectedCity = CITY_OPTIONS[city];
    const reserveFactor = 1 + safeReserve / 100;

    const baseMin = safeArea * selectedType.min;
    const baseMax = safeArea * selectedType.max;

    return {
      safeArea,
      safeReserve,
      selectedType,
      selectedCity,
      baseMin,
      baseMax,
      totalMin: baseMin * reserveFactor,
      totalMax: baseMax * reserveFactor,
    };
  }, [area, buildType, city, reserve]);

  return (
    <div className="overflow-hidden rounded-[34px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]">
      <div className="border-b border-[color:var(--hairline)] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-6 text-white md:p-8">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black">
          حاسبة سيناريوهات — مراجعة أكتوبر 2026
        </span>
        <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
          احسب تكلفة بناء دور واحد خلال دقيقة
        </h3>
        <p className="mt-3 max-w-3xl text-base font-bold leading-8 text-white/75">
          أدخل <strong className="text-white">مسطح البناء الفعلي</strong> للدور،
          وليس مساحة الأرض بالكامل. النتيجة للتخطيط الأولي ولا تستبدل جدول
          الكميات أو عرض سعر هندسي.
        </p>
      </div>

      <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-black text-[color:var(--ink)]">
              مسطح الدور المبني بالمتر المربع
            </span>
            <input
              type="number"
              min="40"
              max="2000"
              step="10"
              inputMode="numeric"
              value={area}
              onChange={(event) => setArea(event.target.value)}
              className="h-14 w-full rounded-2xl border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] px-4 text-lg font-black text-[color:var(--ink)] outline-none transition focus:border-[color:var(--brand)]"
              aria-label="مسطح الدور بالمتر المربع"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-[color:var(--ink)]">
              نوع التنفيذ المطلوب
            </span>
            <select
              value={buildType}
              onChange={(event) => setBuildType(event.target.value)}
              className="h-14 w-full rounded-2xl border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] px-4 text-base font-black text-[color:var(--ink)] outline-none transition focus:border-[color:var(--brand)]"
            >
              {Object.entries(BUILD_TYPES).map(([value, item]) => (
                <option key={value} value={value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-[color:var(--ink)]">
              المدينة أو المنطقة
            </span>
            <select
              value={city}
              onChange={(event) => setCity(event.target.value)}
              className="h-14 w-full rounded-2xl border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] px-4 text-base font-black text-[color:var(--ink)] outline-none transition focus:border-[color:var(--brand)]"
            >
              {Object.entries(CITY_OPTIONS).map(([value, item]) => (
                <option key={value} value={value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 flex items-center justify-between gap-3 text-sm font-black text-[color:var(--ink)]">
              <span>احتياطي تغييرات ومفاجآت</span>
              <strong className="text-[color:var(--brand)]">{reserve}%</strong>
            </span>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={reserve}
              onChange={(event) => setReserve(event.target.value)}
              className="w-full accent-[color:var(--brand)]"
              aria-label="نسبة الاحتياطي المالي"
            />
          </label>
        </div>

        <div className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 md:p-7">
          <p className="text-sm font-black text-[color:var(--brand)]">
            النطاق التقديري شامل احتياطي {result.safeReserve}%
          </p>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[color:var(--surface)] p-5">
              <span className="text-xs font-black text-[color:var(--ink-faint)]">
                الحد الأدنى التخطيطي
              </span>
              <strong className="mt-2 block text-2xl font-black text-[color:var(--ink)] md:text-3xl">
                {formatter.format(result.totalMin)}
              </strong>
            </div>

            <div className="rounded-2xl bg-[color:var(--surface)] p-5">
              <span className="text-xs font-black text-[color:var(--ink-faint)]">
                الحد الأعلى التخطيطي
              </span>
              <strong className="mt-2 block text-2xl font-black text-[color:var(--ink)] md:text-3xl">
                {formatter.format(result.totalMax)}
              </strong>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
            <p>
              <strong className="text-[color:var(--ink)]">المساحة:</strong>{" "}
              {result.safeArea.toLocaleString("ar-SA")} م² —{" "}
              <strong className="text-[color:var(--ink)]">الفئة:</strong>{" "}
              {result.selectedType.label}.
            </p>
            <p>{result.selectedType.note}</p>
            <p>
              قبل الاحتياطي: من {formatter.format(result.baseMin)} إلى{" "}
              {formatter.format(result.baseMax)}.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4 text-sm font-bold leading-7 text-[color:var(--ink)]">
            هذه سيناريوهات حسابية تقريبية وليست أسعار سوق موثقة أو عروض مقاولين. المدينة مسجلة في الملخص فقط، ولا نضيف معاملًا رقميًا افتراضيًا لها دون عروض محلية قابلة للمقارنة. تحقق من استبعاد الرخصة والتصميم وفحص التربة والتكييف والمطبخ والضريبة.
          </div>
          <a
            href={`https://wa.me/201223328270?text=${encodeURIComponent(`مرحبًا موسوق، أريد مراجعة تقدير بناء دور واحد. المدينة: ${result.selectedCity.label}، المسطح المبني: ${result.safeArea} متر مربع، فئة التنفيذ: ${result.selectedType.label}، الاحتياطي: ${result.safeReserve}%. لدي مخططات: نعم/لا.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            data-lead-placement="one-floor-calculator-result"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#25D366] px-5 text-center text-sm font-black text-white transition hover:bg-[#20bd5a]"
          >
            أرسل هذه الحسبة واطلب مراجعة النطاق
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function CostCalculatorSection() {
  const [area, setArea] = useState("");
  const [type, setType] = useState("residential");
  const [finish, setFinish] = useState("standard");

  // Pricing factors
  const typeFactor = { residential: 1200, commercial: 1800 }; // SAR per m²
  const finishFactor = { standard: 1, premium: 1.35, luxury: 1.7 };

  const calculateCost = () => {
    const a = parseFloat(area) || 0;
    const t = typeFactor[type];
    const f = finishFactor[finish];
    return Math.round(a * t * f).toLocaleString("ar-EG") + " ر.س";
  };

  return (
    <section
      id="cost-calculator"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative max-w-5xl">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 border border-blue-500/10 relative overflow-hidden shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            حاسبة تكلفة البناء في السعودية
          </h2>
          <p className="text-lg text-blue-900/70 mb-8">
            احسب تكلفة مشروعك بسهولة حسب المساحة، نوع المشروع، ومستوى التشطيب.
          </p>

          <div className="grid md:grid-cols-2 gap-6 items-end">
            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-1">
                  المساحة (م²)
                </label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-blue-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="أدخل مساحة البناء"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-1">
                  نوع المشروع
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-blue-300 focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="residential">سكني</option>
                  <option value="commercial">تجاري</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-1">
                  مستوى التشطيب
                </label>
                <select
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-blue-300 focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="standard">عادي</option>
                  <option value="premium">متوسط</option>
                  <option value="luxury">فاخر</option>
                </select>
              </div>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg">
              <span className="text-sm mb-2 opacity-80">التكلفة التقديرية</span>
              <span className="text-3xl font-bold">{calculateCost()}</span>
            </div>
          </div>

          <a
            href="https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20استشارة%20عن%20مشروعي"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            استخدم الاستشارة مع موسوق
          </a>
        </div>
      </div>
    </section>
  );
}

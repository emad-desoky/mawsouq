import Link from "next/link";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="flex min-h-[70vh] items-center justify-center px-6 py-24"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-3 text-sm font-bold text-blue-600">خطأ 404</p>

        <h1 className="mb-4 text-4xl font-black">الصفحة غير موجودة</h1>

        <p className="mb-8 text-lg text-gray-600">
          ربما تم تغيير الرابط أو حذف الصفحة. يمكنك العودة إلى الصفحة الرئيسية
          أو تصفح مقالات موسوق.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
          >
            العودة للرئيسية
          </Link>

          <Link
            href="/المدونات/"
            className="rounded-xl border border-gray-300 px-6 py-3 font-bold"
          >
            تصفح المدونات
          </Link>
        </div>
      </div>
    </main>
  );
}

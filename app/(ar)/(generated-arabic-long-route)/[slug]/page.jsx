import { notFound } from "next/navigation";
import LongArabicPage, { metadata as sourceMetadata } from "@/app/_arabic-pages/سعر-متر-العظم-بالمواد-في-السعودية/page.jsx";

const LONG_ROUTE_SLUG = "سعر-متر-العظم-بالمواد-في-السعودية";

// Keep the public Arabic URL unchanged, but render it through one short
// filesystem function so Vercel does not create an overlong prerender path.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const metadata = sourceMetadata;

export default async function LongArabicRoute({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || "";

  let decodedSlug = rawSlug;
  try {
    decodedSlug = decodeURIComponent(rawSlug);
  } catch {
    // Next.js normally supplies a decoded param. Keep the raw value if a
    // malformed escape sequence is ever received.
  }

  if (decodedSlug !== LONG_ROUTE_SLUG) {
    notFound();
  }

  return <LongArabicPage />;
}

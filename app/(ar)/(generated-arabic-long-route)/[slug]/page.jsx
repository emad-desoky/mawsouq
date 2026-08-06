import { notFound } from "next/navigation";
import { LONG_ARABIC_ROUTES } from "../long-routes";

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const runtime = "nodejs";

function decodeRouteSlug(value = "") {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = decodeRouteSlug(resolvedParams?.slug || "");
  const route = LONG_ARABIC_ROUTES[slug];

  if (!route) {
    return {
      title: "الصفحة غير موجودة",
      robots: { index: false, follow: false },
    };
  }

  if (typeof route.generateMetadata === "function") {
    return route.generateMetadata({
      params: Promise.resolve({ slug }),
    });
  }

  return route.metadata || {};
}

export default async function LongArabicRoute({ params }) {
  const resolvedParams = await params;
  const slug = decodeRouteSlug(resolvedParams?.slug || "");
  const route = LONG_ARABIC_ROUTES[slug];

  if (!route) notFound();

  const PageComponent = route.Component;
  return <PageComponent />;
}

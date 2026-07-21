import { notFound } from "next/navigation";
import Page0, * as Module0 from "../../_arabic-pages/سعر-متر-العظم-بالمواد-في-السعودية/page.jsx";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
  parent,
}) {
  const resolvedParams = await params;

  switch (resolvedParams?.slug) {

    case "سعر-متر-العظم-بالمواد-في-السعودية":
      if (
        typeof Module0.generateMetadata ===
        "function"
      ) {
        return Module0.generateMetadata({
          params,
          parent,
        });
      }

      return Module0.metadata ?? {};

    default:
      return {};
  }
}

export default async function LongArabicRoute({
  params,
  searchParams,
}) {
  const resolvedParams = await params;

  switch (resolvedParams?.slug) {

    case "سعر-متر-العظم-بالمواد-في-السعودية":
      return (
        <Page0
          params={params}
          searchParams={searchParams}
        />
      );

    default:
      notFound();
  }
}

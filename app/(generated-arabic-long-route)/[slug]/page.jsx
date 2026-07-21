import { notFound } from "next/navigation";
import Page0, * as Module0 from "../../_arabic-pages/سعر-متر-العظم-بالمواد-في-السعودية/page.jsx";

export const dynamic = "force-dynamic";

/**
 * Next.js or Vercel may provide an Arabic parameter as:
 *
 * Arabic:
 * سعر-متر-العظم-بالمواد-في-السعودية
 *
 * Encoded:
 * %D8%B3%D8%B9%D8%B1...
 *
 * Or double encoded:
 * %25D8%25B3%25D8%25B9...
 *
 * Decode repeatedly before matching the route.
 */
function decodeRouteSlug(value = "") {
  let result = String(value);

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const decoded = decodeURIComponent(result);

      if (decoded === result) {
        break;
      }

      result = decoded;
    } catch {
      break;
    }
  }

  return result.normalize("NFC");
}

export async function generateMetadata({
  params,
  parent,
}) {
  const resolvedParams = await params;

  const resolvedSlug = decodeRouteSlug(
    resolvedParams?.slug,
  );

  switch (resolvedSlug) {

    case "سعر-متر-العظم-بالمواد-في-السعودية": {
      const normalizedParams = {
        ...resolvedParams,
        slug: resolvedSlug,
      };

      if (
        typeof Module0.generateMetadata ===
        "function"
      ) {
        return Module0.generateMetadata({
          params: Promise.resolve(normalizedParams),
          parent,
        });
      }

      return Module0.metadata ?? {};
    }

    default:
      return {};
  }
}

export default async function LongArabicRoute({
  params,
  searchParams,
}) {
  const resolvedParams = await params;

  const resolvedSlug = decodeRouteSlug(
    resolvedParams?.slug,
  );

  switch (resolvedSlug) {

    case "سعر-متر-العظم-بالمواد-في-السعودية": {
      const normalizedParams = {
        ...resolvedParams,
        slug: resolvedSlug,
      };

      return (
        <Page0
          params={Promise.resolve(normalizedParams)}
          searchParams={searchParams}
        />
      );
    }

    default:
      notFound();
  }
}

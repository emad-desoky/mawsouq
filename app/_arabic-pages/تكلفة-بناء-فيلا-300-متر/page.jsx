import ArabicSeo2026Article from "@/components/ar/ArabicSeo2026Article";
import { getArabicSeo2026Metadata, getArabicSeo2026Page } from "@/lib/arabicSeo2026";

const page = getArabicSeo2026Page("villa300Cost");

export const metadata = getArabicSeo2026Metadata("villa300Cost");
export const dynamic = "force-static";

export default function Page() {
  return <ArabicSeo2026Article page={page} />;
}

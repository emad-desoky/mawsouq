import InteriorPricingBlogPage, {
  buildInteriorPricingMetadata,
} from "../_interior-pricing-cluster/InteriorPricingBlogPage";

export const revalidate = 86400;
export const metadata = buildInteriorPricingMetadata("تصميم-داخلي-مع-اشراف-تنفيذ");

export default function Page() {
  return <InteriorPricingBlogPage slug="تصميم-داخلي-مع-اشراف-تنفيذ" />;
}

import InteriorPricingBlogPage, {
  buildInteriorPricingMetadata,
} from "../_interior-pricing-cluster/InteriorPricingBlogPage";

export const revalidate = 86400;
export const metadata = buildInteriorPricingMetadata("تكلفة-التصميم-الداخلي-للفلل");

export default function Page() {
  return <InteriorPricingBlogPage slug="تكلفة-التصميم-الداخلي-للفلل" />;
}

import InteriorPricingBlogPage, {
  buildInteriorPricingMetadata,
} from "../_interior-pricing-cluster/InteriorPricingBlogPage";

export const revalidate = 86400;
export const metadata = buildInteriorPricingMetadata("سعر-التصميم-الداخلي");

export default function Page() {
  return <InteriorPricingBlogPage slug="سعر-التصميم-الداخلي" />;
}

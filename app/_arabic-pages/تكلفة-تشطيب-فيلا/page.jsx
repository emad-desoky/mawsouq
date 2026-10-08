import VillaFinishingBlogPage, {
  buildVillaFinishingMetadata,
} from "../_villa-finishing-cluster/VillaFinishingBlogPage";

export const revalidate = 86400;
export const metadata = buildVillaFinishingMetadata("تكلفة-تشطيب-فيلا");

export default function Page() {
  return <VillaFinishingBlogPage slug="تكلفة-تشطيب-فيلا" />;
}

import VillaFinishingBlogPage, {
  buildVillaFinishingMetadata,
} from "../_villa-finishing-cluster/VillaFinishingBlogPage";

export const revalidate = 86400;
export const metadata = buildVillaFinishingMetadata("تشطيب-واجهات-فلل");

export default function Page() {
  return <VillaFinishingBlogPage slug="تشطيب-واجهات-فلل" />;
}

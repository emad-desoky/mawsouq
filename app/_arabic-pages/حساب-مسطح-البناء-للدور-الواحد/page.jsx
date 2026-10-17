import PracticalCostGuide, { getPracticalCostMetadata } from "@/app/_arabic-pages/تكلفة-بناء-دور-واحد/PracticalCostGuide";

export const metadata = getPracticalCostMetadata("حساب-مسطح-البناء-للدور-الواحد");
export const revalidate = 86400;

export default function Page() {
  return <PracticalCostGuide slug="حساب-مسطح-البناء-للدور-الواحد" />;
}

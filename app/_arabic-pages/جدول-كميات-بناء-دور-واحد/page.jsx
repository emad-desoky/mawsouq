import PracticalCostGuide, { getPracticalCostMetadata } from "@/app/_arabic-pages/تكلفة-بناء-دور-واحد/PracticalCostGuide";

export const metadata = getPracticalCostMetadata("جدول-كميات-بناء-دور-واحد");
export const revalidate = 86400;

export default function Page() {
  return <PracticalCostGuide slug="جدول-كميات-بناء-دور-واحد" />;
}

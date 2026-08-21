import LeadCostClusterPage from "../تكلفة-بناء-دور-واحد/LeadCostClusterPage";
import {
  buildLeadClusterMetadata,
  getLeadClusterBySlug,
} from "../تكلفة-بناء-دور-واحد/lead-clusters";

const article = getLeadClusterBySlug("حاسبة-تكلفة-البناء-في-السعودية");

export const metadata = buildLeadClusterMetadata(article);

export default function Page() {
  return <LeadCostClusterPage article={article} />;
}

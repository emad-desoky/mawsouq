import LeadCostClusterPage from "../تكلفة-بناء-دور-واحد/LeadCostClusterPage";
import {
  buildLeadClusterMetadata,
  getLeadClusterBySlug,
} from "../تكلفة-بناء-دور-واحد/lead-clusters";

const article = getLeadClusterBySlug("تكلفة-اضافة-دور-فوق-منزل-قائم");

export const metadata = buildLeadClusterMetadata(article);

export default function Page() {
  return <LeadCostClusterPage article={article} />;
}

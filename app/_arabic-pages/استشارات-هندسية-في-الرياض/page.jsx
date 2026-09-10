import RiyadhEngineeringArticle from "../_riyadh-engineering-cluster/RiyadhEngineeringArticle";
import {
  createRiyadhEngineeringMetadata,
  getRiyadhEngineeringArticleBySlug,
} from "../_riyadh-engineering-cluster/riyadh-engineering-data";

const article = getRiyadhEngineeringArticleBySlug("استشارات-هندسية-في-الرياض");

export const metadata = createRiyadhEngineeringMetadata(article);
export const revalidate = 86400;
export const dynamic = "force-static";

export default function Page() {
  return <RiyadhEngineeringArticle article={article} />;
}

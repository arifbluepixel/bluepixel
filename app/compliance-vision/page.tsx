import ComplianceVisionPage from "@/components/pages/ComplianceVisionPage";
import { SITE_NAME } from "@/lib/constants/env";
import { generateMetadata } from "@/lib/generateMetadata";

// SEO Starts
export const metadata = generateMetadata({
  title: `Compliance Vision | ${SITE_NAME}`,
  description:
    "At Apparel Resource BD, our Compliance Vision is rooted in ethical manufacturing, sustainability, and worker well-being. We adhere to international standards to ensure safe workplaces, fair wages, environmental responsibility, and transparent production across our entire supply chain.",
  keywords:
    "compliance vision, ethical manufacturing, sustainable garment production, factory compliance Bangladesh, RMG sustainability, fair labor practices, workplace safety, environmental responsibility, apparel sourcing ethics, transparent supply chain",
});
// SEO Ends

const ComplianceVision = () => {
  return <ComplianceVisionPage />;
};

export default ComplianceVision;

import ZeroTolerancePage from "@/components/pages/ZeroTolerancePage";
import { SITE_NAME } from "@/lib/constants/env";
import { generateMetadata } from "@/lib/generateMetadata";

// SEO Starts
export const metadata = generateMetadata({
  title: `Zero Tolerance Policy | ${SITE_NAME}`,
  description:
    "BluePixel upholds a strict Zero Tolerance Policy to maintain ethical, safe, and transparent manufacturing practices. We firmly prohibit child labor, forced labor, harassment, discrimination, and any form of unethical behavior across our operations and partner facilities.",
  keywords:
    "zero tolerance policy, ethical compliance, anti child labor, no forced labor, workplace ethics, garment industry compliance, RMG safety standards, factory regulations Bangladesh, ethical manufacturing policy, BluePixel ethics",
});
// SEO Ends

const ZeroTolerance = () => {
  return <ZeroTolerancePage />;
};

export default ZeroTolerance;

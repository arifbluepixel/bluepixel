import Home from "@/components/pages/Home";
import { generateMetadata } from "@/lib/generateMetadata";

// SEO Starts
export const metadata = generateMetadata({
  title: `Home `,
  description:
    "BluePixel is dedicated to ensuring consistent quality products in the RMG sector. We specialize in sourcing, manufacturing, and delivering high-quality knit, woven, and sweater garments through a reliable global supply chain. Our mission is to connect buyers with trusted suppliers while maintaining excellence, sustainability, and transparency across every step of production.",
  keywords:
    "quality product, RMG, buying house, sweater, woven, knit, apparel sourcing, garment manufacturing, textile industry, clothing supplier, sustainable fashion",
});
// SEO Ends
const page = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default page;

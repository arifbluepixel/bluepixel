import ProductsPage from "@/components/pages/ProductsPage";
import { SITE_NAME } from "@/lib/constants/env";
import { generateMetadata } from "@/lib/generateMetadata";

// SEO Starts
export const metadata = generateMetadata({
  title: `Products | ${SITE_NAME}`,
  description:
    "Explore Apparel Resource BD’s latest clothing collections featuring premium quality, comfort, and sustainability. Discover our ethically manufactured garments designed with precision and crafted for modern lifestyles.",
  keywords:
    "Apparel Resource BD products, clothing collections, sustainable fashion, ethical garments, Bangladesh apparel manufacturer, RMG products, premium clothing, eco-friendly fashion, modern apparel designs, high-quality garments",
});
// SEO Ends

const Products = () => {
  return <ProductsPage />;
};

export default Products;

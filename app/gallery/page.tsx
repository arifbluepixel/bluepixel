import PhotoGalleryPage from "@/components/pages/PhotoGalleryPage";
import { SITE_NAME } from "@/lib/constants/env";
import { generateMetadata } from "@/lib/generateMetadata";

// SEO Starts
export const metadata = generateMetadata({
  title: `Photo Gallery | ${SITE_NAME}`,
  description:
    "Explore the Apparel Resource BD photo gallery showcasing our apparel manufacturing excellence. Discover our latest collections, production facilities, fabric sourcing, and behind-the-scenes visuals that highlight our commitment to quality, craftsmanship, and sustainable garment production.",
  keywords:
    "apparel gallery, garment manufacturing photos, clothing production, textile factory images, fashion collection showcase, RMG gallery, knit woven sweater production, apparel sourcing visuals, Bangladesh clothing manufacturer, sustainable fashion photos",
});
// SEO Ends

const PhotoGallery = () => {
  return <PhotoGalleryPage />;
};

export default PhotoGallery;

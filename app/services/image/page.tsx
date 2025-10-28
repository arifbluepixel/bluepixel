import FAQ from "./FAQ";
import ImageHero from "./ImageHero";
import ServicesSection from "./ServicesSection";
import { generateMetadata } from "@/lib/generateMetadata";
import WhyChooseUs from "./WhyChooseUs";
import ProcessSection from "./ProcessSection";
import ToolsSoftware from "./ToolsSoftware";
import ServiceExamples from "./ServiceExamples";

// SEO Starts
export const metadata = generateMetadata({
  title: "Image",
  description:
    "Blue-Pixel offers professional image editing services including clipping path, color correction, image masking, image retouching, and image manipulation to enhance the quality of your digital images.",
  keywords:
    "image editing, clipping path, color correction, image masking, image retouching, image manipulation, professional image services, photo editing, high-quality image editing, photo retouching, image enhancement",
});
// SEO Ends

export default function page() {
  return (
    <>
      <ImageHero />
      <ServicesSection />
      <ServiceExamples />
      <WhyChooseUs />
      <ProcessSection />
      <ToolsSoftware />
      <FAQ />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Image Editing Services",
            description:
              "Blue-Pixel offers professional image editing services including clipping path, color correction, image masking, image retouching, and image manipulation to enhance the quality of your digital images.",
            provider: {
              "@type": "Organization",
              name: "Blue-Pixel",
              url: "https://duck-iq.com",
              logo: "https://duck-iq.com/duckiqlogo.png",
            },
            serviceType: "Image Editing",
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 0,
                longitude: 0,
              },
              geoRadius: 20000000,
            },
            url: "https://duck-iq.com/services/image",
            keywords: [
              "image editing",
              "clipping path",
              "color correction",
              "image masking",
              "image retouching",
              "image manipulation",
              "professional image services",
              "photo editing",
              "high-quality image editing",
              "photo retouching",
              "image enhancement",
            ],
          }),
        }}
      />
    </>
  );
}

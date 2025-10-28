import { generateMetadata } from "@/lib/generateMetadata";
import ThreeDRenderingHero from "./ThreeDRenderingHero";
import Showcase from "./Showcase";
import ServicesOverview from "./ServicesOverview";
import ClientTestimonials from "./ClientTestimonials";
import TechnologiesTools from "./TechnologiesTools";
import ProcessWorkflow from "./ProcessWorkflow";
import FAQ from "@/components/shared/FAQ";
import { ThreedRenderingFaqs } from "@/lib/data/faqData";

// SEO Starts
export const metadata = generateMetadata({
  title: "3D Rendering",
  description:
    "Blue-Pixel specializes in high-quality 3D animation services, including 3D modeling, rendering, character animation, motion capture, and visual effects. We bring your ideas to life with dynamic, realistic animations for various digital platforms.",
  keywords:
    "3D animation, 3D modeling, 3D rendering, character animation, motion capture, visual effects, professional 3D services, animation production, high-quality 3D animations, digital animation, CGI animation, 3D rendering services",
});
// SEO Ends

export default function page() {
  return (
    <>
      <ThreeDRenderingHero />
      <Showcase />
      <ServicesOverview />
      <ClientTestimonials />
      <ProcessWorkflow />
      <TechnologiesTools />
      <FAQ faqs={ThreedRenderingFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "3D Rendering Services",
            description:
              "Blue-Pixel specializes in high-quality 3D animation services, including 3D modeling, rendering, character animation, motion capture, and visual effects. We bring your ideas to life with dynamic, realistic animations for various digital platforms.",
            provider: {
              "@type": "Organization",
              name: "Blue-Pixel",
              url: "https://duck-iq.com",
              logo: "https://duck-iq.com/duckiqlogo.png",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 0,
                longitude: 0,
              },
              geoRadius: 20000000,
            },
            serviceType: "3D Rendering",
            url: "https://duck-iq.com/services/3d-rendering",
            keywords: [
              "3D animation",
              "3D modeling",
              "3D rendering",
              "character animation",
              "motion capture",
              "visual effects",
              "CGI animation",
            ],
          }),
        }}
      />
    </>
  );
}

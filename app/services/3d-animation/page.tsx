import { generateMetadata } from "@/lib/generateMetadata";
import LetsCraft from "./LetsCraft";
import ThreeDHero from "./ThreeDHero";
import CreativeTeam from "./CreativeTeam";
import IndustriesWeWork from "./IndustriesWeWork";
import VideoBox from "./VideoBox";
import HowWeWork from "./HowWeWork";
import { ThreedAnimationFaqs } from "@/lib/data/faqData";
import FAQ from "@/components/shared/FAQ";

// SEO Starts
export const metadata = generateMetadata({
  title: "3D Animations",
  description:
    "Blue-Pixel specializes in high-quality 3D animation services, including 3D modeling, rendering, character animation, motion capture, and visual effects. We bring your ideas to life with dynamic, realistic animations for various digital platforms.",
  keywords:
    "3D animation, 3D modeling, 3D rendering, character animation, motion capture, visual effects, professional 3D services, animation production, high-quality 3D animations, digital animation, CGI animation, 3D rendering services",
});
// SEO Ends

export default function page() {
  return (
    <>
      <ThreeDHero />
      <VideoBox />
      <LetsCraft />
      <IndustriesWeWork />
      <CreativeTeam />
      <HowWeWork />

      <FAQ faqs={ThreedAnimationFaqs} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "3D Animation Services",
            description:
              "Blue-Pixel specializes in high-quality 3D animation services, including 3D modeling, rendering, character animation, motion capture, and visual effects. We bring your ideas to life with dynamic, realistic animations for various digital platforms.",
            provider: {
              "@type": "Organization",
              name: "Blue-Pixel",
              url: "https://duck-iq.com",
              logo: "https://duck-iq.com/duckiqlogo.png",
            },
            serviceType: "3D Animation",
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 0,
                longitude: 0,
              },
              geoRadius: 20000000,
            },
            url: "https://duck-iq.com/services/3d-animation",
            keywords: [
              "3D animation",
              "3D modeling",
              "3D rendering",
              "character animation",
              "motion capture",
              "visual effects",
              "professional 3D services",
              "CGI animation",
              "high-quality 3D animations",
              "digital animation",
            ],
          }),
        }}
      />
    </>
  );
}

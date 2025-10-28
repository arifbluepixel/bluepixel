import { generateMetadata } from "@/lib/generateMetadata";
import ProcessSection from "./ProcessSection";
import VideoHero from "./VideoHero";
import VideoServices from "./VideoServices";
import WhyChooseUs from "./WhyChooseUs";
import ToolsSoftware from "./ToolsSoftware";
import { videoFaqs } from "@/lib/data/faqData";
import FAQ from "@/components/shared/FAQ";

// SEO Starts
export const metadata = generateMetadata({
  title: "Video",
  description:
    "Blue-Pixel offers professional video services including video editing, color grading, motion graphics, VFX & special effects, audio enhancement, cutting & trimming, cinematic transitions, and subtitle & captioning to enhance your video content.",
  keywords:
    "video editing, color grading, motion graphics, VFX, special effects, audio enhancement, video cutting, video trimming, cinematic transitions, subtitle captioning, professional video services, video production, high-quality video content",
});

// SEO Ends

export default function page() {
  return (
    <>
      <VideoHero />
      <VideoServices />
      <WhyChooseUs />
      <ToolsSoftware />
      <ProcessSection />
      <FAQ faqs={videoFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Video Services",
            description:
              "Blue-Pixel offers professional video services including video editing, color grading, motion graphics, VFX & special effects, audio enhancement, cutting & trimming, cinematic transitions, and subtitle & captioning to enhance your video content.",
            provider: {
              "@type": "Organization",
              name: "Blue-Pixel",
              url: "https://duck-iq.com",
              logo: "https://duck-iq.com/duckiqlogo.png",
            },
            serviceType: "Video Editing & Production",
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 0,
                longitude: 0,
              },
              geoRadius: 20000000,
            },
            url: "https://duck-iq.com/services/video",
            keywords: [
              "video editing",
              "color grading",
              "motion graphics",
              "VFX",
              "special effects",
              "audio enhancement",
              "video cutting",
              "video trimming",
              "cinematic transitions",
              "subtitle captioning",
              "professional video services",
              "video production",
              "high-quality video content",
            ],
          }),
        }}
      />
    </>
  );
}

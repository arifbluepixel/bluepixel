import { generateMetadata } from "@/lib/generateMetadata";
import FAQ from "./FAQs";
import HowWeWork from "./HowWeWork";
import Industry from "./Industry";
import LetsCreate from "./LetsCreate";
import Technologies from "./Technologies";
import WebHero from "./WebHero";
import WhatWeDo from "./WhatWeDo";
import WhyUs from "./WhyUs";
import Projects from "@/components/shared/ProjectShowcase";

// SEO Starts
export const metadata = generateMetadata({
  title: "Web Development Services",
  description:
    "Boost your online presence with Blue-Pixel's expert web development services. We create fast, responsive, and SEO-friendly websites tailored to your business needs.",
  keywords:
    "web development, custom web development, responsive websites, SEO-friendly websites, Blue-Pixel",
});
// SEO Ends

export default function page() {
  return (
    <>
      <WebHero />
      <WhatWeDo />
      <Industry />
      <HowWeWork />
      <WhyUs />
      <Technologies />
      <FAQ />
      <Projects />
      <LetsCreate />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Development Services",
            description:
              "Boost your online presence with Blue-Pixel's expert web development services. We create fast, responsive, and SEO-friendly websites tailored to your business needs.",
            provider: {
              "@type": "Organization",
              name: "Blue-Pixel",
              url: "https://duck-iq.com",
              logo: "https://duck-iq.com/duckiqlogo.png",
            },
            serviceType: "Web Development",
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 0,
                longitude: 0,
              },
              geoRadius: 20000000,
            },
            url: "https://duck-iq.com/services/web-development",
            keywords: [
              "web development",
              "custom web development",
              "responsive websites",
              "SEO-friendly websites",
              "Blue-Pixel",
              "web design",
              "website optimization",
              "website speed optimization",
              "Wordpress Development",
              "Website Bug Fixes",
            ],
          }),
        }}
      />
    </>
  );
}

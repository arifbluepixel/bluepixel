import AboutHero from "@/components/AboutUs/about-hero";
import AboutStatsSimple from "@/components/AboutUs/about-stats";
import MissionVisionValues from "@/components/AboutUs/mission-vision";
import OurPartners from "@/components/AboutUs/our-partners";
import BackToTop from "@/components/shared/BackToTop";

export default function page() {
  return (
    <>
      <div className="mt-20">
        <AboutHero />
        <MissionVisionValues />
        <AboutStatsSimple />
        <OurPartners />
      </div>
      <BackToTop showText={false} showIcon={true} />
    </>
  );
}

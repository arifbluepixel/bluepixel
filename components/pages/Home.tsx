import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import BackToTop from "@/components/shared/BackToTop";
import Footer from "@/components/shared/footer/Footer";
import BottomGallery from "@/components/shared/home/BottomGallery";
import OurStory from "@/components/shared/home/OurStory";
import Products from "@/components/shared/home/Products";
import Quality from "@/components/shared/home/Quality";
import Testimonials2 from "@/components/shared/home/Testimonials2";
import Welcome from "@/components/shared/home/Welcome";
import Parallax from "@/components/shared/Parallax";
import OurStrengths2 from "../shared/home/OurStrengths2";

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section - Sticky */}
      <Hero />

      {/* Content sections - overlaps Hero when scrolling */}
      <div className="relative z-20 bg-white dark:bg-gray-950 rounded-t-3xl -mt-8">
        <Welcome />
        <OurStrengths2 />
        <Quality />
        <OurStory
          videoUrl="https://www.youtube.com/watch?v=U6ZvdP9TK-s"
          signatureString={"Israt Jahan"}
        />
        <Testimonials2 />
        <Parallax
          showExtraData={true}
          title="Let's Work Together !"
          description="Let's work to succeed together and achieve the same goals."
          contactButton={true}
          contactButtonText={`GET IN TOUCH`}
          parallaxOverlay=" bg-black opacity-30 dark:opacity-50"
          rounded={true}
        />
        <Footer />
      </div>

      {/* Back to Top Button */}
      <BackToTop
        showIcon={false}
        showText={true}
        text="To Top"
        showParticles={false}
        showTooltip={false}
        showGlow={false}
        showProgress={false}
        cursor="cursor-pointer"
      />
    </>
  );
};

export default Home;

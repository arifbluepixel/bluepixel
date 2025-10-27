import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import BackToTop from "@/components/shared/BackToTop";
import Footer from "@/components/shared/footer/Footer";
import OurStory from "@/components/shared/home/OurStory";
import OurStrengths from "@/components/shared/home/OurStrengths";
import Products from "@/components/shared/home/Products";
import Quality from "@/components/shared/home/Quality";
import Testimonials from "@/components/shared/home/Testimonials";
import Welcome from "@/components/shared/home/Welcome";
import Parallax from "@/components/shared/Parallax";

const Home1 = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Products />
      <OurStrengths />
      <Quality />
      <OurStory
        videoUrl="https://www.youtube.com/watch?v=U6ZvdP9TK-s"
        signatureString={"Israt Jahan"}
      />
      <Testimonials />
      <Parallax
        showExtraData={true}
        title="Let's Work Together !"
        description="Let’s work to succeed together and achieve the same goals."
        contactButton={true}
        contactButtonText={`GET IN TOUCH`}
        parallaxOverlay=" bg-black opacity-30 dark:opacity-50"
        rounded={true}
      />
      <Footer />
      <BackToTop showText={false} showIcon={true} />
    </>
  );
};

export default Home1;

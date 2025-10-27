import ContactFAQ from "../contact/contact-faq";
import ContactBottom from "../contact/ContactBottom";
import ContactHero from "../contact/ContactHero";
import MapWrapper from "../contact/MapWrapper";
import Navbar from "../Home/Navbar";
import BackToTop from "../shared/BackToTop";
import Footer from "../shared/footer/Footer";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <ContactHero />
      </div>
      <MapWrapper />
      <ContactBottom />
      <ContactFAQ />
      <Footer />
      <BackToTop showText={false} showIcon={true} />
    </>
  );
};

export default ContactUsPage;

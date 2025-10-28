import ContactFAQ from "../contact/contact-faq";
import ContactBottom from "../contact/ContactBottom";
import ContactHero from "../contact/ContactHero";
import MapWrapper from "../contact/MapWrapper";
import Header from "../Home/Header";
import BackToTop from "../shared/BackToTop";
import Footer from "../shared/footer/Footer";

const ContactUsPage = () => {
  return (
    <>
      <Header />
      <div>
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

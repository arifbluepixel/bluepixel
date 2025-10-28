import ContactFAQ from "../contact/contact-faq";
import ContactBottom from "../contact/ContactBottom";
import ContactHero from "../contact/ContactHero";
import MapWrapper from "../contact/MapWrapper";
import BackToTop from "../shared/BackToTop";

const ContactUsPage = () => {
  return (
    <>
      <ContactHero />
      <MapWrapper />
      <ContactBottom />
      <ContactFAQ />
      <BackToTop showText={false} showIcon={true} />
    </>
  );
};

export default ContactUsPage;

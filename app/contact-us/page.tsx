import ContactUsPage from "@/components/pages/ContactUsPage";
import { SITE_NAME } from "@/lib/constants/env";
import { generateMetadata } from "@/lib/generateMetadata";
import React from "react";

// SEO Starts
export const metadata = generateMetadata({
  title: `Contact Us | ${SITE_NAME}`,
  description:
    "Get in touch with Apparel Resource BD — your trusted partner in apparel sourcing and garment manufacturing. Whether you have questions, project inquiries, or partnership opportunities, our team is here to provide prompt support and reliable solutions for all your RMG and fashion production needs.",
  keywords:
    "contact apparel resource bd, garment sourcing contact, clothing manufacturer support, apparel inquiry, fashion production help, RMG contact, buying house Bangladesh, textile supplier contact, knit woven sweater manufacturer",
});
// SEO Ends

const ContactUs = () => {
  return <ContactUsPage />;
};

export default ContactUs;

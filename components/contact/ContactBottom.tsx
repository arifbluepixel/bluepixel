"use client";

import { Playfair_Display } from "next/font/google";
import SocialFollow from "../shared/SocialFollow";
import ContactForm from "./ContactForm";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function ContactBottom() {
  return (
    <section className="max-w-5xl w-11/12 mx-auto">
      <div className="flex flex-col  justify-center items-center  gap-6">
        <h2
          className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl text-center tracking-wide text-gray-900`}
        >
          Get A Quote
        </h2>

        <p className="mb-6 text-gray-600 text-center text-base md:text-lg w-10/12 md:w-8/12 lg:w-7/12 mx-auto leading-relaxed">
          Leave your contacts and I will get back to you as soon as possible.
          I&apos;m here to help you.
        </p>

        <ContactForm />
      </div>

      <SocialFollow />
    </section>
  );
}

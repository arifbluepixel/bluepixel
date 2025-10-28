"use client";

import { ColoredButton } from "@/components/shared/ColoredButton";
import faq from "@/public/animations/faq.json";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const faqs = [
  {
    question: "How long does editing take?",
    answer:
      "Turnaround time depends on the project's complexity, but we usually deliver within 5-7 business days.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes! We provide up to two free revisions to ensure the final video meets your expectations.",
  },
  {
    question: "What file formats do you support?",
    answer:
      "We support MP4, MOV, AVI, and more. Let us know your preferred format for the best results.",
  },
  {
    question: "Can I request custom animations?",
    answer:
      "Absolutely! We create tailored animations that align with your brand and project needs.",
  },
  {
    question: "Do you provide voice-over services?",
    answer:
      "Yes, we offer professional voice-overs in multiple languages, accents, and styles to fit your video.",
  },
  {
    question: "Is there an extra cost for fast delivery?",
    answer:
      "Yes, we offer expedited delivery for an additional fee. Contact us for pricing and availability.",
  },
  {
    question: "Do you work with businesses and individuals?",
    answer:
      "Yes! We work with individuals, startups, and large businesses, offering customized video editing services.",
  },
  {
    question: "Can you edit videos for social media?",
    answer:
      "Definitely! We optimize videos for YouTube, Instagram, TikTok, and other social media platforms.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept PayPal, credit/debit cards, and bank transfers for secure and hassle-free payments.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply reach out with your project details, and we’ll guide you through the entire process step by step.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex]!.style.maxHeight =
        contentRefs.current[openIndex]!.scrollHeight + "px";
    }
  }, [openIndex]);

  return (
    <section className="bg-gray-400">
      <div className="w-11/12 max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-start gap-8 relative py-12 md:py-16 lg:py-20">
        {/* Left Section - Image (Fixed) */}
        <div className="w-full md:w-1/3 md:sticky md:top-30">
          <Lottie
            animationData={faq}
            loop
            className="w-full h-full rounded-lg"
          />
          <ColoredButton
            ColoringButton={{
              id: "startYourProject1",
              name: "Start Your Project",
              link: "/contact-us",
            }}
            isPrimary={true}
            isFullWidth={true}
          />
        </div>

        {/* Right Section - FAQ (Scrollable) */}
        <div className="w-full md:w-2/3 md:px-4 ">
          <div className="flex flex-col gap-3 my-5 ">
            <h2 className="text-2xl font-semibold font-oswald italic text-yellow-300 text-left uppercase">
              * Your Questions, Answered!?!
            </h2>
            <p className="text-4xl md:text-5xl lg:text-5xl font-extrabold font-oswald text-[#093150] text-left uppercase">
              FAQs
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm overflow-hidden"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button className="w-full text-left p-4 flex justify-between items-center font-medium text-gray-800 bg-yellow-100 hover:bg-yellow-200 transition duration-300 ease-in-out cursor-pointer">
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <div
                  ref={(el: HTMLDivElement | null) => {
                    contentRefs.current[index] = el;
                  }}
                  className={`transition-[max-height] duration-300 ease-in-out overflow-hidden bg-white text-gray-600 border-t`}
                  style={{ maxHeight: openIndex === index ? "1000px" : "0px" }}
                >
                  <div className="p-4">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

"use client";

import { ColoredButton } from "@/components/shared/ColoredButton";
import faq from "@/public/animations/faq.json";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const faqs = [
  {
    question: "How long does image editing take?",
    answer:
      "It depends on the complexity of the project, but we typically deliver within 3-5 business days.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, we offer up to 2 rounds of revisions for free.",
  },
  {
    question: "What file formats do you support?",
    answer:
      "We support JPEG, PNG, TIFF, PSD, and more. Let us know your requirements.",
  },
  {
    question: "Can you remove backgrounds from images?",
    answer: "Yes, we specialize in background removal and replacement.",
  },
  {
    question: "Do you provide color correction services?",
    answer:
      "Absolutely! We ensure your images have perfect color balance and tone.",
  },
  {
    question: "Can you retouch portraits?",
    answer:
      "Yes, we offer professional portrait retouching, including skin smoothing, blemish removal, and more.",
  },
  {
    question: "Do you work with businesses and individuals?",
    answer: "Yes, we cater to both individuals and businesses of all sizes.",
  },
  {
    question: "Can you edit images for social media?",
    answer:
      "Absolutely! We optimize images for platforms like Instagram, Facebook, and LinkedIn.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept PayPal, credit/debit cards, and bank transfers.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us with your project details, and we’ll guide you through the process.",
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
    <section className="bg-gray-300">
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
            <h2 className="text-2xl font-semibold font-osWald italic text-yellow-600 text-left uppercase">
              * Your Questions, Answered!?!
            </h2>
            <p className="text-4xl md:text-5xl lg:text-5xl font-extrabold font-osWald text-[#093150] text-left uppercase">
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

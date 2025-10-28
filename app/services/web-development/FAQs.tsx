"use client";

import { ColoredButton } from "@/components/shared/ColoredButton";
import faq from "@/public/animations/faq.json";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const faqs = [
  {
    question:
      "What’s the difference between a template-based and a custom website?",
    answer:
      "A template-based website is like fast food—quick, affordable, and convenient but with limited customization. A custom website, on the other hand, is like a gourmet meal—tailored to your brand, fully customizable, and scalable for future growth.",
  },
  {
    question:
      "Can I update content or add new pages after the website is delivered?",
    answer:
      "Absolutely! We provide a user-friendly Content Management System (CMS), making it easy for you to add new pages or update content without any technical knowledge.",
  },
  {
    question:
      "Will you help me choose the right technology stack for my website?",
    answer:
      "Of course! During our initial consultation, we analyze your business needs and recommend the best tech stack for your project. You make the final decision based on our expert suggestions.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of the project. A simple website may take 2-4 weeks, while a more advanced custom website can take several months. We ensure quality while keeping the process as efficient as possible.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes! We design all websites to be fully responsive, ensuring a seamless experience across all devices, including desktops, tablets, and smartphones.",
  },
  {
    question: "Do you offer website maintenance after launch?",
    answer:
      "Yes, we offer ongoing maintenance plans to keep your website secure, updated, and running smoothly. We also provide support for adding new features as needed.",
  },
  {
    question: "Can you integrate third-party tools or APIs into my website?",
    answer:
      "Absolutely! We can integrate various third-party services such as payment gateways, CRM systems, analytics, and more to enhance your website’s functionality.",
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
    <section className="bg-gray-50">
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
            <h2 className="text-2xl font-semibold font-oswald italic text-yellow-600 text-left uppercase">
              * Your Questions, Answered!?!
            </h2>
            <p className="text-4xl md:text-5xl font-bold font-oswald text-duck-bluefont text-left uppercase">
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

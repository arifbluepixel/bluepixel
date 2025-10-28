"use client";

import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import faq from "@/public/animations/faq.json";

interface FaqsProps {
  question: string;
  answer: string;
}

interface FAQComponentProps {
  faqs: FaqsProps[];
}

const FAQ = ({ faqs }: FAQComponentProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex]!.style.maxHeight =
        contentRefs.current[openIndex]!.scrollHeight + "px";
    }
  }, [openIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "0.75s" }}
        ></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div
        ref={ref}
        className="relative w-11/12 max-w-7xl mx-auto py-16 md:py-20 lg:py-24"
      >
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Section - Sticky Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full md:w-2/5 md:sticky md:top-24"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/30 dark:to-cyan-500/30 border border-blue-500/30 dark:border-blue-500/40 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                Your Questions Answered
              </span>
            </motion.div>

            <h2 className="mt-2 font-bold text-4xl md:text-5xl lg:text-6xl font-oswald uppercase text-slate-900 dark:text-white mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
              Find answers to common questions about our image editing services,
              processes, and policies.
            </p>
            <Lottie
              animationData={faq}
              loop
              className="w-full h-full rounded-lg"
            />

            {/* CTA Card */}
            <div className="p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold">
                    Still have questions?
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    We&apos;re here to help
                  </p>
                </div>
              </div>
              <a
                href="/contact-us"
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl text-center transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right Section - FAQ Accordion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full md:w-3/5 md:my-auto"
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  // @ts-expect-error - ignore
                  variants={itemVariants}
                  className="group"
                >
                  <div
                    className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden transition-all duration-500"
                    onMouseEnter={() => setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    <button className="w-full text-left p-6 flex justify-between items-center font-semibold text-slate-900 dark:text-white transition-all duration-300">
                      <span className="pr-4">{faq.question}</span>
                      <FaChevronDown
                        className={`w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      ref={(el: HTMLDivElement | null) => {
                        contentRefs.current[index] = el;
                      }}
                      className="transition-all duration-300 ease-in-out overflow-hidden"
                      style={{
                        maxHeight: openIndex === index ? "1000px" : "0px",
                      }}
                    >
                      <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-700 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                    {/* Bottom accent line */}
                    <div
                      className={`h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 ${
                        openIndex === index ? "scale-x-100" : ""
                      } transition-transform duration-300 rounded-b-xl`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

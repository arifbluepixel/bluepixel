"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, MessageCircle, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/data/mockData";

// Helper to inject the custom color styles
const BRAND_COLOR = "#00BC8E";
const BrandColorStyle = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
            .text-brand-teal { color: ${BRAND_COLOR}; }
            .border-brand-teal { border-color: ${BRAND_COLOR}; }
            .bg-brand-teal-light { background-color: #e6f6f3; }
            .bg-brand-teal-icon { background-color: rgba(0, 188, 142, 0.1); }
            .bg-gradient-to-r-brand { background-image: linear-gradient(to right, ${BRAND_COLOR}, #00A37D); }
        `,
    }}
  />
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-slate-900 font-inter min-h-screen py-16 md:py-24">
      <BrandColorStyle />

      <div className="max-w-7xl mx-auto px-6">
        {/* Global Header Section */}
        <SectionHeader
          badge="Verified Feedbacks"
          badgeIcon={MessageCircle}
          title={`What Our Customers Say`}
          highlightText={`Customers`}
          description="Don't just take our word for it! Experience speaks louder than words explore authentic feedback from customers who’ve embraced our quality and care."
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch ">
          {/* Left Side Image / Highlight */}
          <motion.div
            className="w-full h-[400px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 my-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              src="/home/hero-testimonial.jpeg"
              alt="Customer testimonial highlight"
              fill
              className="object-cover opacity-90 hover:opacity-100 transition duration-500"
              priority
            />
            <div className="absolute top-0 right-0 p-4 text-brand-teal text-6xl rotate-12 opacity-30 dark:opacity-20">
              <Quote className="w-12 h-12" />
            </div>
            {/* subtle dark gradient overlay for better contrast on dark mode */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white/5 dark:to-black/20"></div>
          </motion.div>

          {/* Right Side Testimonials List (Accordion) */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl transition-all duration-300 shadow-md ${
                  activeIndex === index
                    ? "bg-brand-teal-light dark:bg-brand-teal border border-brand-teal text-slate-900 dark:text-slate-100 shadow-lg"
                    : "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600"
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none py-1 cursor-pointer "
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p
                        className={`font-semibold text-lg ${
                          activeIndex === index
                            ? "text-gray-900 dark:text-slate-800"
                            : "text-gray-900 dark:text-slate-100"
                        }`}
                      >
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-slate-400 flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-gray-400 dark:text-slate-400" />
                        {t.designation}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 transition-colors duration-300 ${
                          i < t.rating
                            ? "fill-yellow-500 text-yellow-500"
                            : "fill-gray-300 text-gray-300 dark:fill-slate-600 dark:text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden pt-4 mt-2 "
                    >
                      <div className="flex gap-4 items-start">
                        {/* Larger profile image in expanded view */}
                        <div className="flex-shrink-0">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-teal shadow-md">
                            <Image
                              src={t.image}
                              alt={t.name}
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1 p-4 bg-gray-100/50 dark:bg-slate-700/80 border-l-4 border-brand-teal rounded-lg shadow-inner">
                          <div className="flex gap-3 items-start">
                            <Quote className="w-5 h-5 text-brand-teal flex-shrink-0 mt-1" />
                            <p className="text-base text-gray-700 dark:text-slate-200 leading-relaxed italic">
                              {t.review}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

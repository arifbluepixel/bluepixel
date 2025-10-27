"use client";
import { testimonials } from "@/lib/data/mockData";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

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

export default function Testimonials2() {
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
          description="Don't just take our word for it! Experience speaks louder than words — explore authentic feedback from customers who’ve embraced our quality and care."
        />

        {/* Main Content Grid - Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-brand-teal dark:hover:border-brand-teal flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Review Text */}
              <div className="flex-1 mb-6">
                <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                  {t.review}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 dark:bg-slate-700 mb-4"></div>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200 dark:border-slate-600">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 dark:text-slate-100 text-sm truncate">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 truncate">
                    {t.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

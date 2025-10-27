"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  CheckCircle,
  Scale,
  AlertTriangle,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

const policyHighlights = [
  {
    icon: Shield,
    title: "Immediate Action",
    description:
      "Rapid response to identified violations to uphold our ethical foundation.",
    duration: 12000,
  },
  {
    icon: CheckCircle,
    title: "Non-Negotiable Standards",
    description:
      "Enforcing zero tolerance to safeguard worker rights and business integrity.",
    duration: 12000,
  },
  {
    icon: Scale,
    title: "Full Accountability",
    description:
      "Ensuring all suppliers and partners adhere strictly to prevent violations.",
    duration: 12000,
  },
];

const ztvList = [
  "Child labor",
  "Forced labor",
  "Discrimination",
  "Harassment and Abuse",
  "Unauthorized subcontracting including Tier 2 activities regardless of brands",
  "Shared building unless approved by Head of Compliance (any other factory owned by different owner located in the same building) or factory located in building which has shops/markets",
  "Factory building approved for residential purposes",
  "Any exploitative practice, such as bribery in cash or kind to facilitate any process",
];

export default function ZeroTolerance() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % policyHighlights.length);
    }, policyHighlights[currentIndex].duration);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? policyHighlights.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % policyHighlights.length);
  };

  return (
    <div className="min-h-screen mt-16 md:mt-10 py-12 bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="py-8 md:py-8 max-w-7xl w-11/12 mx-auto">
        <div className="">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="text-sm md:text-base uppercase tracking-widest text-gray-500 mb-4">
              Our Policy
            </p>
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6 ${playfair.className}`}
            >
              Zero Tolerance Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Zero Tolerance Violations (ZTV) represent the most critical
              compliance issues, resulting in immediate termination of
              partnerships.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Side - Rotating Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full bg-white/90 backdrop-blur-lg p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-200/50 flex flex-col justify-between md:min-h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex-grow flex flex-col justify-center"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                      <motion.div
                        className="bg-gradient-to-br from-amber-500 to-red-600 p-6 rounded-2xl shadow-xl"
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {React.createElement(
                          policyHighlights[currentIndex].icon,
                          {
                            className: "w-12 h-12 text-white",
                            strokeWidth: 2,
                          }
                        )}
                      </motion.div>
                    </div>

                    {/* Title */}
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {policyHighlights[currentIndex].title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-base md:text-lg text-gray-600 text-center leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {policyHighlights[currentIndex].description}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="mt-10 flex justify-center items-center gap-4">
                  <motion.button
                    onClick={goToPrevious}
                    className="p-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Previous highlight"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>

                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                    <span className="text-sm font-semibold text-amber-600">
                      {currentIndex + 1}
                    </span>
                    <span className="text-sm text-gray-500">/</span>
                    <span className="text-sm text-gray-500">
                      {policyHighlights.length}
                    </span>
                  </div>

                  <motion.button
                    onClick={goToNext}
                    className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Next highlight"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - ZTV Issues List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-stretch"
            >
              <div className="bg-gradient-to-br from-white to-amber-50 p-8 md:p-10 rounded-2xl shadow-xl border border-amber-100 flex flex-col min-h-[600px] w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-amber-600" />
                  ZTV Compliance Issues
                </h2>
                <ul className="space-y-4 flex-grow flex flex-col justify-center">
                  {ztvList.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Enforcement Section */}
      <section className="py-8 md:py-8 max-w-7xl w-11/12 mx-auto bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-red-50 p-8 md:p-10 rounded-2xl shadow-lg border border-red-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-10 h-10 text-red-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Enforcement of Zero Tolerance
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              These issues are categorized as Zero Tolerance Violations (ZTV)
              and trigger immediate corrective actions, including potential
              termination of business relationships to maintain the highest
              standards of compliance.
            </p>
            <ul className="space-y-3">
              {[
                "Discovery through audits or reports leads to instant investigation.",
                "Confirmed violations result in partnership suspension.",
                "Ongoing monitoring prevents recurrence across all operations.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

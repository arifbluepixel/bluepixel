"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  CheckCircle,
  Users,
  FileText,
  Building,
  Scale,
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

const complianceHighlights = [
  {
    icon: Shield,
    title: "Ethics & Integrity",
    description:
      "Maintaining the highest standards of business ethics and technical expertise in our review processes.",
    duration: 12000,
  },
  {
    icon: Users,
    title: "Social Compliance",
    description:
      "Core foundation of our organization, ensuring fair labor practices and worker rights protection.",
    duration: 12000,
  },
  {
    icon: CheckCircle,
    title: "Regular Monitoring",
    description:
      "Scheduled and unannounced compliance checks across all registered suppliers.",
    duration: 12000,
  },
  {
    icon: Building,
    title: "Factory Assessment",
    description:
      "Comprehensive on-site compliance audits before order placement and production.",
    duration: 12000,
  },
  {
    icon: Scale,
    title: "Code of Conduct",
    description:
      "Strict adherence to buyers' Code of Conduct and local legal requirements.",
    duration: 12000,
  },
];

export default function ComplianceVision() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % complianceHighlights.length);
    }, complianceHighlights[currentIndex].duration);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? complianceHighlights.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % complianceHighlights.length);
  };

  return (
    <div className="min-h-screen mt-16 md:mt-10 py-12 bg-gradient-to-br from-slate-50 via-white to-teal-50 ">
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
              Our Commitment
            </p>
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-6  ${playfair.className}`}
            >
              Compliance Vision
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Social Compliance is the cornerstone of our organization&apos;s
              business operations
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
                        className="bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-2xl shadow-xl"
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {React.createElement(
                          complianceHighlights[currentIndex].icon,
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
                      {complianceHighlights[currentIndex].title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-base md:text-lg text-gray-600 text-center leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {complianceHighlights[currentIndex].description}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="mt-10 flex justify-center items-center gap-4">
                  <motion.button
                    onClick={goToPrevious}
                    className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Previous highlight"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>

                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                    <span className="text-sm font-semibold text-teal-600">
                      {currentIndex + 1}
                    </span>
                    <span className="text-sm text-gray-500">/</span>
                    <span className="text-sm text-gray-500">
                      {complianceHighlights.length}
                    </span>
                  </div>

                  <motion.button
                    onClick={goToNext}
                    className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Next highlight"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-stretch"
            >
              <div className="bg-gradient-to-br from-white to-teal-50 p-8 md:p-10 rounded-2xl shadow-xl border border-teal-100 flex flex-col min-h-[600px] w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-teal-600" />
                  Our Mission
                </h2>
                <ul className="space-y-4 flex-grow flex flex-col justify-center">
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      To maintain the standing of our Customers, Business
                      Partners and our association by guaranteeing morals,
                      uprightness and specialized ability are uncompromisingly
                      drilled in our review measures.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      To enlist the plant our consistence group from the start
                      visit the industrial facility for social consistence
                      review, on the off chance that review pass, at that point
                      we go for request arrangement. In this respects we follow
                      purchasers Code of direct and Local Law.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      We are checking consistence gives all our enrolled
                      providers on normal premise reported and un unannounced.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code of Conduct Sections */}
      <section className="py-8 md:py-8  max-w-7xl w-11/12 mx-auto bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Employees' CoC */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 md:p-10 rounded-2xl shadow-lg border border-teal-200">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-10 h-10 text-teal-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Employees&apos; CoC Covers
                </h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Pay off",
                  "Divulgence of secret reports",
                  "Misappropriation of resources",
                  "Distortion of records",
                  "Inappropriate behavior",
                  "Exercises of clashing business interest",
                  "Infringement of sourcing ZTV code",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Suppliers' CoC */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-10 rounded-2xl shadow-lg border border-emerald-200">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-10 h-10 text-emerald-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Supplier&apos;s CoC Covers
                </h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Kid work",
                  "Constrained work",
                  "Disciplinary practices",
                  "Provocation and Abuse",
                  "Lawful prerequisites",
                  "Moral norms",
                  "Working hours",
                  "Wages and Benefits",
                  "Opportunity of Association",
                  "Separation",
                  "Unapproved subcontracting",
                  "Building and fire security",
                  "Wellbeing, Safety",
                  "Climate",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

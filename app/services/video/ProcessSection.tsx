"use client";

import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { GrayContainer } from "@/components/shared/PageSections";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Import your actual animation data
import thinkanddesign from "@/public/animations/editing.json";

const steps = [
  {
    id: 1,
    title: "Strategic Consultation",
    description:
      "Comprehensive discussion of your creative vision, project objectives, and specific editing requirements.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    title: "Planning & Storyboarding",
    description:
      "Structured planning and visual storyboarding to ensure seamless execution and effective storytelling.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  {
    id: 3,
    title: "Editing & Enhancement",
    description:
      "Professional editing with precision cuts, advanced color grading, immersive sound design, and cinematic effects.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
  {
    id: 4,
    title: "Client Review & Refinement",
    description:
      "Collaborative review process with your detailed feedback incorporated for optimal results.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    id: 5,
    title: "Final Quality Assurance",
    description:
      "Meticulous fine-tuning and comprehensive quality checks to ensure flawless final output.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
  {
    id: 6,
    title: "Delivery & Support",
    description:
      "Timely delivery of high-quality final video with ongoing support for your complete satisfaction.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <GrayContainer
      gridLines={true}
      decorativeElements={
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
      }
    >
      <div
        ref={ref}
        className="relative w-11/12 mx-auto max-w-7xl py-16 md:py-20 lg:py-24"
      >
        {/* Header */}
        <PageSectionHeader
          badge="How We Work"
          title="Streamlined Production Process"
          description="Our systematic approach combines creative excellence with efficient workflows to deliver exceptional results on schedule, every time."
          darkMode={false}
        />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start ">
          {/* Animation Side - Sticky on large screens */}
          <div className="lg:col-span-1 lg:my-auto ">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative p-8 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-xl"
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-500 rounded-br-2xl"></div>

              <div className="relative z-10">
                <Lottie
                  animationData={thinkanddesign}
                  loop
                  autoplay
                  className="w-full h-auto max-w-md mx-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Stats badges */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      6 Steps
                    </span>{" "}
                    to Excellence
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id + index}
                // @ts-expect-error - ignore
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative"
              >
                {/* Card */}
                <div
                  className="relative h-full p-6 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700/50 rounded-xl
                              hover:border-transparent hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden"
                >
                  {/* Top colored border */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}
                  ></div>

                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step Number Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-xl ${step.bgColor} ${step.borderColor} border-2
                                     group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500`}
                      >
                        <span
                          className={`text-xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent 
                                       group-hover:text-white transition-all duration-500`}
                        >
                          {step.id}
                        </span>
                      </div>

                      {/* Progress indicator */}
                      <div className="flex items-center gap-1">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 w-3 rounded-full transition-all duration-500 ${
                              i < step.id
                                ? `bg-gradient-to-r ${step.color}`
                                : "bg-slate-300 dark:bg-slate-600"
                            } ${i < step.id ? "opacity-100" : "opacity-30"}`}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-white transition-colors duration-500">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-100 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom shine effect */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} 
                                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl border border-blue-200 dark:border-slate-600">
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              Ready to bring your vision to life with our proven process?
            </p>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full">
                ✓ Quality Guaranteed
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold rounded-full">
                ✓ On-Time Delivery
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </GrayContainer>
  );
};

export default ProcessSection;

"use client";

import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { GrayContainer } from "@/components/shared/PageSections";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  FaCheckCircle,
  FaFileDownload,
  FaPencilAlt,
  FaUpload,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload className="text-4xl " />,
    title: "Upload Images",
    description:
      "Easily upload your images through our secure portal with drag-and-drop functionality.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10 group-hover:bg-blue-500 dark:bg-blue-500/20",
    borderColor: "border-blue-500/20 dark:border-blue-500/30",
    number: "01",
  },
  {
    icon: <FaPencilAlt className="text-4xl" />,
    title: "Editing & Retouching",
    description:
      "Our experts enhance and edit your images to perfection with meticulous attention to detail.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10 group-hover:bg-amber-500 dark:bg-amber-500/20",
    borderColor: "border-amber-500/20 dark:border-amber-500/30",
    number: "02",
  },
  {
    icon: <FaCheckCircle className="text-4xl" />,
    title: "Review & Revisions",
    description:
      "We provide comprehensive previews, and you can request unlimited revisions if needed.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10 group-hover:bg-green-500 dark:bg-green-500/20",
    borderColor: "border-green-500/20 dark:border-green-500/30",
    number: "03",
  },
  {
    icon: <FaFileDownload className="text-4xl" />,
    title: "Final Delivery",
    description:
      "Download your professionally edited images in high quality with multiple format options.",
    color: "from-purple-500 to-sky-500",
    bgColor: "bg-purple-500/10 group-hover:bg-purple-500 dark:bg-purple-500/20",
    borderColor: "border-purple-500/20 dark:border-purple-500/30",
    number: "04",
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
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
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "0.75s" }}
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
          badge="Our Process"
          title="Streamlined Workflow"
          description="A seamless, professional image processing experience designed to deliver exceptional results efficiently and reliably."
        />

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                // @ts-expect-error - ignore
                variants={itemVariants}
                className="group relative "
              >
                {/* Card */}
                <div className="relative h-full flex flex-col ">
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="absolute top-0 left-4 z-20"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                    >
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Icon Container */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative inline-block">
                      {/* Icon box */}
                      <div
                        className={`relative ${step.bgColor} ${step.borderColor} border-2 rounded-3xl p-6 
                                    transition-all duration-500 backdrop-blur-sm`}
                      >
                        <div
                          className={`bg-gradient-to-br ${step.color} bg-clip-text text-white`}
                        >
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className="flex-1 p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl
                                transition-all duration-500 overflow-hidden"
                  >
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-all duration-500">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">
                      {step.description}
                    </p>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} 
                                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-slate-900 dark:text-white font-semibold">
                  Ready to get started?
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Experience our streamlined process today
                </p>
              </div>
            </div>
            <Link
              href={"/contact-us"}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </GrayContainer>
  );
};

export default ProcessSection;

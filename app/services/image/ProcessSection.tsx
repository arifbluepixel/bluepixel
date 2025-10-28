"use client";

import {
  FaUpload,
  FaPencilAlt,
  FaCheckCircle,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaUpload className="text-blue-500 text-5xl" />,
    title: "Upload Images",
    description: "Easily upload your images through our secure portal.",
  },
  {
    icon: <FaPencilAlt className="text-yellow-500 text-5xl" />,
    title: "Editing & Retouching",
    description: "Our experts enhance and edit your images to perfection.",
  },
  {
    icon: <FaCheckCircle className="text-green-500 text-5xl" />,
    title: "Review & Revisions",
    description:
      "We provide previews, and you can request revisions if needed.",
  },
  {
    icon: <FaFileDownload className="text-purple-500 text-5xl" />,
    title: "Final Delivery",
    description: "Download your professionally edited images in high quality.",
  },
];

const ProcessSection = () => {
  return (
    <div className="bg-gray-300">
      <section className="text-black py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="relative z-10 w-11/12 mx-auto max-w-7xl text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-oswald font-bold uppercase text-black tracking-wide"
          >
            Our Workflow
          </motion.h2>
          <p className="mt-3 text-lg text-black max-w-2xl mx-auto">
            A seamless, hassle-free image processing experience tailored for
            you.
          </p>

          {/* Workflow Steps */}
          <div className="relative mt-12 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative flex flex-col items-center w-full md:w-1/4"
              >
                {/* Icon Container */}
                <div className="relative w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full border-2 border-gray-600 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-40 rounded-full transition-opacity duration-300"></div>
                </div>

                {/* Step Details */}
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-black mt-2 text-sm max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Animated Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-[-35px] w-[80px] h-[3px] bg-gray-600 group-hover:bg-blue-500 transition-all duration-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessSection;

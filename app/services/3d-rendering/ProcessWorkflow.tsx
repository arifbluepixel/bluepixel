"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCube,
  FaPaintBrush,
  FaCamera,
  FaBoxOpen,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Concept & Consultation",
    description:
      "We start by understanding your vision and requirements through detailed discussions and brainstorming.",
    icon: <FaLightbulb className="text-6xl text-duck-cardblue" />,
  },
  {
    id: 2,
    title: "3D Modeling",
    description:
      "Our artists create detailed 3D models based on the agreed concept, ensuring accuracy and precision.",
    icon: <FaCube className="text-6xl text-duck-bgblue" />,
  },
  {
    id: 3,
    title: "Texturing & Materials",
    description:
      "We apply high-quality textures and materials to bring realism and depth to the 3D models.",
    icon: <FaPaintBrush className="text-6xl text-duck-cardblue" />,
  },
  {
    id: 4,
    title: "Rendering",
    description:
      "Using advanced rendering techniques, we produce photorealistic images and animations.",
    icon: <FaCamera className="text-6xl text-duck-bgblue" />,
  },
  {
    id: 5,
    title: "Delivery & Feedback",
    description:
      "We deliver the final output and incorporate your feedback to ensure complete satisfaction.",
    icon: <FaBoxOpen className="text-6xl text-duck-cardblue" />,
  },
];

export default function ProcessWorkflow() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-300 overflow-hidden">
      <div className="w-11/12 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-oswald font-bold text-center mb-6 text-black bg-clip-text "
        >
          Our Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false }}
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          From concept to delivery, our workflow ensures high-quality results at
          every step.
        </motion.p>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 h-[90%] w-1 bg-gray-500 transform -translate-x-1/2 hidden md:block z-0"></div>
          {/* Steps */}
          <div className="space-y-1 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
                className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-x-3 gap-y-3 "
              >
                {/* Left Side (Even Steps) */}
                {index % 2 === 0 && (
                  <>
                    <div className="md:w-1/2 md:pr-8 text-right pb-0 md:pb-4">
                      <h3 className="text-2xl font-medium font-oswald text-duck-cardblue mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="w-20 h-20 rounded-full bg-yellow-50 flex items-center justify-center mx-4 z-10">
                      {step.icon}
                    </div>
                    <div className="md:w-1/2 hidden md:flex"></div>
                  </>
                )}
                {/* Right Side (Odd Steps) */}
                {index % 2 !== 0 && (
                  <>
                    <div className="md:w-1/2"></div>
                    <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mx-4 z-10">
                      {step.icon}
                    </div>
                    <div className="md:w-1/2 md:pl-8 text-left pb-0 md:pb-4">
                      <h3 className="text-2xl font-medium font-oswald text-duck-bgblue mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    description: "We start by understanding your vision and requirements through detailed discussions and brainstorming.",
    icon: <FaLightbulb className="text-4xl" />,
  },
  {
    id: 2,
    title: "3D Modeling",
    description: "Our artists create detailed 3D models based on the agreed concept, ensuring accuracy and precision.",
    icon: <FaCube className="text-4xl" />,
  },
  {
    id: 3,
    title: "Texturing & Materials",
    description: "We apply high-quality textures and materials to bring realism and depth to the 3D models.",
    icon: <FaPaintBrush className="text-4xl" />,
  },
  {
    id: 4,
    title: "Rendering",
    description: "Using advanced rendering techniques, we produce photorealistic images and animations.",
    icon: <FaCamera className="text-4xl" />,
  },
  {
    id: 5,
    title: "Delivery & Feedback",
    description: "We deliver the final output and incorporate your feedback to ensure complete satisfaction.",
    icon: <FaBoxOpen className="text-4xl" />,
  },
];

export default function ProcessWorkflow() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 overflow-hidden">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 mb-8">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-[#1A89C7] font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-300"></div>
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Our Creative{" "}
            <span className="bg-gradient-to-r from-[#1A89C7] to-blue-600 bg-clip-text text-transparent">
              Process
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            From concept to delivery, our structured workflow ensures exceptional quality and stunning results at every step.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 h-[85%] w-1 bg-gradient-to-b from-[#1A89C7] to-blue-600 transform -translate-x-1/2 hidden md:block z-0"></div>
          
          {/* Steps */}
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8"
              >
                {/* Left Side (Even Steps) */}
                {index % 2 === 0 && (
                  <>
                    <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                      <motion.h3 
                        className="text-2xl font-bold text-[#1A89C7] mb-3"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 leading-relaxed"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        {step.description}
                      </motion.p>
                    </div>
                    
                    {/* Icon Circle */}
                    <motion.div 
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-white shadow-lg border border-blue-100 flex items-center justify-center group hover:bg-[#1A89C7] transition-all duration-500">
                        <motion.div
                          className="text-[#1A89C7] group-hover:text-white transition-colors duration-500"
                          whileInView={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          {step.icon}
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    <div className="md:w-1/2 hidden md:block"></div>
                  </>
                )}

                {/* Right Side (Odd Steps) */}
                {index % 2 !== 0 && (
                  <>
                    <div className="md:w-1/2 hidden md:block"></div>
                    
                    {/* Icon Circle */}
                    <motion.div 
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-white shadow-lg border border-blue-100 flex items-center justify-center group hover:bg-[#1A89C7] transition-all duration-500">
                        <motion.div
                          className="text-[#1A89C7] group-hover:text-white transition-colors duration-500"
                          whileInView={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, -5, 0]
                          }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          {step.icon}
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                      <motion.h3 
                        className="text-2xl font-bold text-[#1A89C7] mb-3"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 leading-relaxed"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        {step.description}
                      </motion.p>
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
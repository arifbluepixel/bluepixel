"use client";

import { motion } from "framer-motion";
import { FaCubes, FaDraftingCompass, FaMagic, FaBuilding, FaHome, FaBox } from "react-icons/fa";

const services = [
  {
    title: "Architectural Visualization",
    description: "Breathtaking photorealistic 3D renders that bring architectural designs to life with realistic lighting and materials.",
    icon: <FaBuilding className="text-4xl text-[#1A89C7]" />,
  },
  {
    title: "Product Rendering",
    description: "High-quality 3D product visualizations that showcase your products with stunning detail and professional presentation.",
    icon: <FaBox className="text-4xl text-[#1A89C7]" />,
  },
  {
    title: "Interior Design",
    description: "Realistic interior renders that transform spaces with accurate lighting, textures, and furniture placement.",
    icon: <FaHome className="text-4xl text-[#1A89C7]" />,
  },
  {
    title: "3D Animation",
    description: "Dynamic 3D animations that showcase movement, functionality, and storytelling for your products and spaces.",
    icon: <FaMagic className="text-4xl text-[#1A89C7]" />,
  },
  {
    title: "Concept Visualization",
    description: "Transform abstract concepts into tangible 3D visuals that help communicate and develop your ideas effectively.",
    icon: <FaDraftingCompass className="text-4xl text-[#1A89C7]" />,
  },
  {
    title: "3D Modeling",
    description: "Precise 3D modeling services that create detailed digital assets ready for rendering and animation.",
    icon: <FaCubes className="text-4xl text-[#1A89C7]" />,
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="w-11/12 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 mb-8">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-300"></div>
          </div>
          <span className="text-[#1A89C7] font-semibold text-sm uppercase tracking-wider">
            Services
          </span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        <h2 className="font-bold mb-6 text-gray-900 text-4xl md:text-5xl lg:text-6xl">
          3D Rendering{" "}
          <span className="bg-gradient-to-r from-[#1A89C7] to-blue-600 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
          Transform your concepts into stunning 3D visualizations with our professional rendering solutions.
          From architecture to products, we bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group hover:-translate-y-2 border border-gray-100"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
          >
            <div className="mb-6 p-4 bg-blue-50 rounded-2xl group-hover:bg-[#1A89C7]/10 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#1A89C7] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>

            {/* Hover Indicator */}
            <div className="mt-6 w-12 h-1 bg-gradient-to-r from-[#1A89C7] to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
"use client";

import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { DarkContainer } from "@/components/shared/PageSections";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiDavinciresolve,
} from "react-icons/si";
import { FaFilm } from "react-icons/fa";

const tools = [
  {
    id: 1,
    name: "Adobe After Effects",
    description:
      "Advanced motion graphics and cinematic visual effects for professional-grade post-production excellence.",
    icon: <SiAdobeaftereffects className="text-5xl" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    iconColor: "text-[#D291FF]",
    category: "Motion Graphics",
  },
  {
    id: 2,
    name: "Adobe Premiere Pro",
    description:
      "Industry-standard video editing platform delivering seamless workflows and professional precision.",
    icon: <SiAdobepremierepro className="text-5xl" />,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    iconColor: "text-[#EA77FF]",
    category: "Video Editing",
  },
  {
    id: 3,
    name: "Final Cut Pro",
    description:
      "Apple's flagship editing suite combining magnetic timeline innovation with unmatched performance optimization.",
    icon: <FaFilm className="text-5xl" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    iconColor: "text-[#FF5C00]",
    category: "Video Editing",
  },
  {
    id: 4,
    name: "DaVinci Resolve",
    description:
      "Comprehensive post-production powerhouse for advanced color grading, editing, and visual effects integration.",
    icon: <SiDavinciresolve className="text-5xl" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    iconColor: "text-[#1E90FF]",
    category: "Color Grading",
  },
];

const ToolsSoftware = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <DarkContainer
      gridLines={true}
      decorativeElements={
        <div className="absolute inset-0 opacity-10 -z-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl animate-pulse"
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
          badge="Our Trusted Toolkit"
          title="Tools and Software"
          description="Powered by professional-grade software and cutting-edge tools that enable us to deliver exceptional video editing and design solutions that exceed industry standards."
          darkMode={true}
        />

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              // @ts-expect-error - ignore
              variants={itemVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="relative h-full p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl
                            hover:bg-gradient-to-br hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${tool.bgColor} ${tool.borderColor} border
                                   text-slate-300 group-hover:text-white group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500`}
                    >
                      {tool.category}
                    </span>
                  </div>

                  {/* Icon container with animated background */}
                  <div className="relative inline-block mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tool.color} rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500`}
                    ></div>
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className={`relative ${tool.bgColor} ${tool.borderColor} border rounded-2xl p-5 
                                  group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500`}
                    >
                      <div
                        className={`${tool.iconColor} group-hover:text-white transition-all duration-500 flex items-center justify-center`}
                      >
                        {tool.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-500">
                    {tool.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                    {tool.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color} 
                              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}
                ></div>

                {/* Corner decoration */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}
                ></div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-slate-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-slate-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-slate-800"></div>
            </div>
            <p className="text-slate-300 font-medium">
              <span className="text-white font-semibold">
                Professional Grade
              </span>{" "}
              · Trusted by industry leaders worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </DarkContainer>
  );
};

export default ToolsSoftware;

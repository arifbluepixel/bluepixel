"use client";

import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { DarkContainer } from "@/components/shared/PageSections";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import {
  SiAdobelightroom,
  SiAffinityphoto,
  SiCoreldraw,
  SiGimp,
} from "react-icons/si";

const tools = [
  {
    id: 1,
    name: "Adobe Photoshop",
    description:
      "For advanced photo retouching, compositing, and graphic design.",
    icon: <DiPhotoshop className="text-6xl text-blue-600 dark:text-blue-300" />,
    color: "from-[#0f4c75] to-[#31A8FF]",
    bgColor: "bg-[#31A8FF]/10 dark:bg-[#31A8FF]/20",
    borderColor: "border-[#31A8FF]/20 dark:border-[#31A8FF]/30",
  },
  {
    id: 2,
    name: "Adobe Lightroom",
    description:
      "For professional color correction, batch editing, and photo organization.",
    icon: (
      <SiAdobelightroom className="text-6xl text-purple-600 dark:text-purple-300" />
    ),
    color: "from-[#3E396B] to-[#AEB8FE]",
    bgColor: "bg-[#AEB8FE]/10 dark:bg-[#AEB8FE]/20",
    borderColor: "border-[#AEB8FE]/20 dark:border-[#AEB8FE]/30",
  },
  {
    id: 3,
    name: "GIMP",
    description:
      "A free and open-source image editor for photo retouching and image composition.",
    icon: (
      <SiGimp className="text-6xl text-emerald-600 dark:text-emerald-300" />
    ),
    color: "from-[#6B5E4F] to-[#b19e79]",
    bgColor: "bg-[#b19e79]/10 dark:bg-[#b19e79]/20",
    borderColor: "border-[#b19e79]/20 dark:border-[#b19e79]/30",
  },
  {
    id: 4,
    name: "Affinity Photo",
    description:
      "A powerful alternative to Photoshop for photo editing and retouching.",
    icon: (
      <SiAffinityphoto className="text-6xl text-amber-600 dark:text-amber-300" />
    ),
    color: "from-[#39215E] to-[#7E4DD2]",
    bgColor: "bg-[#7E4DD2]/10 dark:bg-[#7E4DD2]/20",
    borderColor: "border-[#7E4DD2]/20 dark:border-[#7E4DD2]/30",
  },
  {
    id: 5,
    name: "CorelDRAW",
    description: "For vector graphic design and illustration.",
    icon: <SiCoreldraw className="text-6xl text-pink-600 dark:text-pink-300" />,
    color: "from-[#7A3B0E] to-[#F68F1F]",
    bgColor: "bg-[#F68F1F]/10 dark:bg-[#F68F1F]/20",
    borderColor: "border-[#F68F1F]/20 dark:border-[#F68F1F]/30",
  },
  {
    id: 6,
    name: "Adobe Illustrator",
    description: "For creating vector graphics, logos, and illustrations.",
    icon: (
      <DiIllustrator className="text-6xl text-orange-500 dark:text-orange-300" />
    ),
    color: "from-[#4a2c00] to-[#FF9A00]",
    bgColor: "bg-[#FF9A00]/10 dark:bg-[#FF9A00]/20",
    borderColor: "border-[#FF9A00]/20 dark:border-[#FF9A00]/30",
  },
];

export default function ToolsSoftware() {
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
    <DarkContainer
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
          badge="Tools & Software"
          title="Professional Toolkit"
          description="We utilize industry leading software and tools to ensure precision, efficiency, and superior quality in every project."
          darkMode={true}
        />

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id + index}
              // @ts-expect-error - ignore
              variants={itemVariants}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Card */}
              <div className="relative w-full h-full flex flex-col p-8 bg-slate-800/30 dark:bg-slate-700/40 backdrop-blur-sm border border-slate-700/50 dark:border-slate-600/50 rounded-2xl transition-all duration-500 overflow-hidden">
                {/* Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative inline-block">
                    {/* Icon box */}
                    <div
                      className={`relative ${tool.bgColor} ${tool.borderColor} border-2 rounded-3xl p-6 transition-all duration-500 backdrop-blur-sm`}
                    >
                      <div
                        className={`bg-gradient-to-br ${tool.color} bg-clip-text text-transparent`}
                      >
                        {tool.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-50 mb-3 transition-all duration-500 font-oswald">
                  {tool.name}
                </h3>
                <p className="text-sm text-slate-300 dark:text-slate-200 leading-relaxed transition-colors duration-500">
                  {tool.description}
                </p>
                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DarkContainer>
  );
}

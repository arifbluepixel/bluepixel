"use client";

import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { DarkContainer } from "@/components/shared/PageSections";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  BsDropletHalf,
  BsFillImageFill,
  BsFilter,
  BsLayers,
  BsStars,
} from "react-icons/bs";
import {
  FaAdjust,
  FaCloudUploadAlt,
  FaEraser,
  FaFileImage,
} from "react-icons/fa";
import { GiMagicBroom, GiResize } from "react-icons/gi";
import { IoIosImages } from "react-icons/io";
import {
  MdColorLens,
  MdOutlineLayers,
  MdOutlinePhotoSizeSelectLarge,
} from "react-icons/md";
import { RiImageAddFill, RiImageEditFill } from "react-icons/ri";
import { TbBrightnessUp, TbCrop, TbVectorBezier } from "react-icons/tb";

const services = [
  {
    icon: <FaEraser />,
    title: "Background Removal",
    description: "Clean, precise background extraction",
  },
  {
    icon: <TbVectorBezier />,
    title: "Clipping Path",
    description: "Perfect edge definition",
  },
  {
    icon: <MdColorLens />,
    title: "Color Correction",
    description: "Accurate color balance",
  },
  {
    icon: <BsStars />,
    title: "Image Masking",
    description: "Complex selection mastery",
  },
  {
    icon: <RiImageEditFill />,
    title: "Image Retouching",
    description: "Flawless finishing touches",
  },
  {
    icon: <GiMagicBroom />,
    title: "Image Manipulation",
    description: "Creative transformations",
  },
  {
    icon: <TbCrop />,
    title: "Image Cropping",
    description: "Optimal composition",
  },
  {
    icon: <MdOutlinePhotoSizeSelectLarge />,
    title: "Image Resizing",
    description: "Scale without quality loss",
  },
  {
    icon: <FaAdjust />,
    title: "Brightness & Contrast",
    description: "Perfect tonal balance",
  },
  {
    icon: <MdOutlineLayers />,
    title: "Layer Masking",
    description: "Advanced layer control",
  },
  {
    icon: <BsFillImageFill />,
    title: "Photo Restoration",
    description: "Revive old memories",
  },
  {
    icon: <BsLayers />,
    title: "Multi-Layer Editing",
    description: "Complex compositing",
  },
  {
    icon: <RiImageAddFill />,
    title: "Image Enhancement",
    description: "Professional refinement",
  },
  {
    icon: <IoIosImages />,
    title: "Photo Merging",
    description: "Seamless combinations",
  },
  {
    icon: <FaFileImage />,
    title: "Vector Conversion",
    description: "Scalable graphics",
  },
  {
    icon: <GiResize />,
    title: "Aspect Ratio Adjustment",
    description: "Perfect proportions",
  },
  {
    icon: <BsDropletHalf />,
    title: "Color Grading",
    description: "Cinematic color effects",
  },
  {
    icon: <TbBrightnessUp />,
    title: "HDR Processing",
    description: "Dynamic range mastery",
  },
  {
    icon: <BsFilter />,
    title: "Advanced Filters",
    description: "Creative effects suite",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Bulk Processing",
    description: "Efficient batch editing",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>
      }
    >
      <section
        ref={ref}
        className="relative w-11/12 max-w-7xl mx-auto py-16 md:py-20 lg:py-24"
      >
        {/* Heading */}
        <PageSectionHeader
          badge="Our Services"
          title="Professional Image Editing"
          description="Transform your images with our comprehensive suite of professional editing services. From basic adjustments to advanced manipulations, we deliver excellence."
          darkMode={true}
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                // @ts-expect-error - ignore
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 
                         hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600 
                         hover:border-transparent hover:shadow-xl hover:shadow-blue-500/20
                         transition-all duration-300 ease-out cursor-pointer overflow-hidden"
              >
                {/* Icon container with glow effect */}
                <div className="relative mb-4 inline-block">
                  <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                  <div className="relative text-5xl text-blue-400 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 group-hover:text-blue-50 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 
                              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 text-lg mb-6">
            Ready to elevate your images?
          </p>
          <Link
            href={"/contact-us"}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg
                           hover:from-blue-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300
                           shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
          >
            Get Started Today
          </Link>
        </motion.div>
      </section>
    </DarkContainer>
  );
};

export default ServicesSection;

"use client";

import CTASection from "@/components/shared/CTASection";
import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { DarkContainer } from "@/components/shared/PageSections";
import ServiceCard from "@/components/shared/ServiceCard";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
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

  return (
    <DarkContainer
      gridLines={true}
      decorativeElements={
        <div className="absolute inset-0 opacity-10 -z-50">
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
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                size="default"
                variant="blue"
              />
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <CTASection
          message="Ready to elevate your images?"
          buttonText="Get Started Today"
          href="/contact-us"
          variant="blue"
          icon={<TrendingUp className="w-5 h-5" />}
          delay={0.1}
        />
      </section>
    </DarkContainer>
  );
};

export default ServicesSection;

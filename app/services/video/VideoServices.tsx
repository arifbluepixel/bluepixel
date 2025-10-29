"use client";

import CTASection from "@/components/shared/CTASection";
import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { DarkContainer } from "@/components/shared/PageSections";
import ServiceCard from "@/components/shared/ServiceCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaChartLine,
  FaFilm,
  FaMagic,
  FaMusic,
  FaPalette,
  FaTextHeight,
  FaVideo,
} from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { MdMovieEdit } from "react-icons/md";

const services = [
  {
    icon: <FaVideo />,
    title: "Video Editing",
    description: "Professional editing excellence",
  },
  {
    icon: <FaPalette />,
    title: "Color Grading",
    description: "Cinematic color mastery",
  },
  {
    icon: <FaChartLine />,
    title: "Motion Graphics",
    description: "Dynamic visual storytelling",
  },
  {
    icon: <FaMagic />,
    title: "VFX & Special Effects",
    description: "Stunning visual transformations",
  },
  {
    icon: <FaMusic />,
    title: "Audio Enhancement",
    description: "Crystal clear sound design",
  },
  {
    icon: <FaScissors />,
    title: "Cutting & Trimming",
    description: "Precision video crafting",
  },
  {
    icon: <FaFilm />,
    title: "Cinematic Transitions",
    description: "Seamless scene flow",
  },
  {
    icon: <FaTextHeight />,
    title: "Subtitle & Captioning",
    description: "Accessible content creation",
  },
  {
    icon: <FaVideo />,
    title: "Multi-Camera Editing",
    description: "Complex project mastery",
  },
  {
    icon: <FaChartLine />,
    title: "Social Media Optimization",
    description: "Platform-perfect formatting",
  },
];

const VideoServices = () => {
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
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
          title="Professional Video Production"
          description="Elevate your content with our comprehensive suite of video editing services. From concept to final cut, we deliver cinematic excellence."
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
                variant="purple"
              />
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <CTASection
          message="Ready to bring your vision to life?"
          buttonText="Get Started Today"
          href="/contact-us"
          variant="purple"
          icon={<MdMovieEdit className="w-5 h-5" />}
          delay={0.1}
        />
      </section>
    </DarkContainer>
  );
};

export default VideoServices;

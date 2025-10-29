"use client";

import { IndustryButton } from "@/components/shared/IndustryButton";
import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { GrayContainer } from "@/components/shared/PageSections";
import { Industry } from "@/lib/types";
import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import React, { useRef } from "react";

const containerMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Central industry buttons
const centralIndustries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    description:
      "Advanced medical platforms, telehealth solutions, and integrated health management systems that enhance patient care delivery.",
    link: "/industries/healthcare",
  },
  {
    id: "fintech",
    name: "Fintech",
    description:
      "Secure digital banking infrastructure, seamless payment gateways, and comprehensive financial analytics for modern enterprises.",
    link: "/industries/fintech",
  },
  {
    id: "elearning",
    name: "E-Learning",
    description:
      "Interactive educational platforms, virtual learning environments, and adaptive course delivery systems that transform education.",
    link: "/industries/e-learning",
  },
  {
    id: "social",
    name: "Social Platforms",
    description:
      "Dynamic community ecosystems, social networking infrastructure, and content-driven engagement platforms that connect audiences.",
    link: "/industries/social-platforms",
  },
  {
    id: "saas",
    name: "SaaS",
    description:
      "Scalable cloud solutions, subscription-based platforms, and enterprise software services designed for rapid deployment.",
    link: "/industries/saas",
  },
  {
    id: "web3",
    name: "Web3",
    description:
      "Blockchain-powered applications, decentralized platforms, and cryptocurrency solutions that redefine digital ownership.",
    link: "/industries/web3",
  },
];

// Side industry buttons
const sideIndustries: Industry[] = [
  {
    id: "transportation",
    name: "Transportation",
    description:
      "Intelligent mobility solutions, fleet optimization systems, and logistics platforms that streamline transportation operations.",
    link: "",
  },
  {
    id: "telematics",
    name: "Telematics",
    description:
      "Real-time vehicle monitoring, GPS tracking infrastructure, and IoT-enabled diagnostics for connected fleet management.",
    link: "",
  },
  {
    id: "gaming",
    name: "Gaming",
    description:
      "Immersive multiplayer experiences, VR/AR game engines, and cross-platform gaming solutions built by passionate developers.",
    link: "/industries/gaming",
  },
  {
    id: "realestate",
    name: "Real Estate",
    description:
      "Comprehensive property management platforms, MLS integration systems, and CRM solutions for real estate professionals.",
    link: "/industries/real-estate",
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    description:
      "High-performance online storefronts, marketplace platforms, and omnichannel retail solutions that drive conversions.",
    link: "/industries/e-commerce",
  },
  {
    id: "ai",
    name: "AI",
    description:
      "Machine learning integration, intelligent automation frameworks, and predictive analytics that optimize business processes.",
    link: "",
  },
];

const IndustriesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <GrayContainer
      className="py-16 md:py-20 lg:py-24"
      gridLines={true}
      decorativeElements={
        <>
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </>
      }
    >
      <PageSectionHeader
        badge="Our Expertise"
        title="Industries We Serve"
        description="Our diverse expertise spans multiple industries, delivering tailored solutions that meet your unique requirements and captivate your users."
        darkMode={false}
      />
      <motion.div
        // @ts-expect-error - ignore
        variants={containerMotion}
        className="relative z-10 max-w-7xl mx-auto w-11/12"
      >
        <motion.div
          // @ts-expect-error - ignore
          variants={containerMotion}
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center justify-between gap-4 my-5 md:gap-14 lg:gap-28"
        >
          {/* TODO !Show in mobile */}
          <div
            className="absolute md:hidden flex -inset-37 md:inset-2 lg:inset-7 rotate-90 md:rotate-0 z-10 "
            id="outer"
            //   className="absolute inset-20 md:inset-2 lg:inset-7 z-10 bg-amber-400"
            style={{
              backgroundImage: `url('/webdev/circle.svg')`,
              backgroundSize: "",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="absolute hidden md:flex md:inset-2 lg:inset-7 rotate-90 md:rotate-0 z-10 "
            id="outer"
            //   className="absolute inset-20 md:inset-2 lg:inset-7 z-10 bg-amber-400"
            style={{
              backgroundImage: `url('/webdev/circle.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* Left Side Industries */}
          <motion.div
            // @ts-expect-error - ignore
            variants={itemVariants}
            className="flex flex-wrap gap-5 w-full md:w-1/3 justify-center items-center md:flex-col md:items-end"
            // className="flex justify-evenly items-center mx-auto flex-wrap gap-3 flex-row  md:items-end"
          >
            <div className="w-48 h-5"></div> {/* Spacer for alignment */}
            {sideIndustries.slice(0, 3).map((industry) => (
              <IndustryButton
                key={industry.id}
                industry={industry}
                isPrimary={false}
              />
            ))}
          </motion.div>

          {/* Center Industries */}
          <motion.div
            // @ts-expect-error - ignore
            variants={itemVariants}
            className="relative grid grid-cols-2 gap-x-20 md:gap-x-36 lg:gap-x-40 gap-y-5 w-full md:w-2/3 place-items-center p-10 md:mt-10 lg:mb-10 lg:mt-20 md:my-0"
          >
            <div
              className="absolute inset-9 md:-inset-4 lg:-inset-16 rotate-90 md:rotate-0 z-0"
              id="inner"
              style={{
                backgroundImage: `url('/webdev/circle.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            {/* Industry Buttons */}
            {centralIndustries.map((industry) => (
              <IndustryButton
                key={industry.id}
                industry={industry}
                isPrimary={true}
              />
            ))}
          </motion.div>

          {/* Right Side Industries */}
          <motion.div
            // @ts-expect-error - ignore
            variants={itemVariants}
            className="flex gap-5 flex-wrap w-full md:w-1/3 justify-center items-center md:flex-col md:items-start"
          >
            <div className="w-48 h-5"></div> {/* Spacer for alignment */}
            {sideIndustries.slice(3).map((industry) => (
              <IndustryButton
                key={industry.id}
                industry={industry}
                isPrimary={false}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </GrayContainer>
  );
};

export default IndustriesSection;

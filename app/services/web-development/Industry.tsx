"use client";

import { Industry } from "@/lib/types";
import { IndustryButton } from "@/components/shared/IndustryButton";
import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import React, { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};
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
      "Medical software solutions, telemedicine platforms, and health record systems that help you treat patients.",
    link: "/industries/healthcare",
  },
  {
    id: "fintech",
    name: "Fintech",
    description:
      "Reliable digital banking systems, payment processing apps, and financial tracking tools for growing operations.",
    link: "/industries/fintech",
  },
  {
    id: "elearning",
    name: "E-Learning",
    description:
      "Personalized, immersive online course platforms and virtual classroom solutions that engage students.",
    link: "/industries/e-learning",
  },
  {
    id: "social",
    name: "Social Platforms",
    description:
      "Robust, engaging social media apps and community networking sites with user-generated content.",
    link: "/industries/social-platforms",
  },
  {
    id: "saas",
    name: "SaaS",
    description:
      "Cost-efficient, flexible cloud-hosted applications, and on-demand service platforms that are easy to scale.",
    link: "/industries/saas",
  },
  {
    id: "web3",
    name: "Web3",
    description:
      "Decentralized web apps and crypto wallet services aimed at financial growth with tools for newbies & pros.",
    link: "/industries/web3",
  },
];

// Side industry buttons
const sideIndustries: Industry[] = [
  {
    id: "transportation",
    name: "Transportation",
    description:
      "Convenient ride-sharing solutions and complex fleet management software to strengthen your services",
    link: "",
  },
  {
    id: "telematics",
    name: "Telematics",
    description:
      "Complex vehicle tracking systems and precise remote diagnostics to widen your transport network.",
    link: "",
  },
  {
    id: "gaming",
    name: "Gaming",
    description:
      "Gamers for gamers: dependable multiplayer game platforms and immersive AR/VR gaming experiences.",
    link: "/industries/gaming",
  },
  {
    id: "realestate",
    name: "Real Estate",
    description:
      "Property listing websites and real estate CRM systems with intuitive design for clear data management.",
    link: "/industries/real-estate",
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    description:
      "Easy-to-manage and load-resilient online shopping portals and e-marketplace platforms.",
    link: "/industries/e-commerce",
  },
  {
    id: "ai",
    name: "AI",
    description:
      "Smart automation tools and predictive analytics systems integrated to speed up complex operations.",
    link: "",
  },
];

const IndustriesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="relative py-8 md:py-12 lg:py-16 px-6 overflow-hidden w-11/12 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        // @ts-expect-error - ignore
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full mx-auto py-8 md:py-12 lg:py-16 z-10 bg-white"
      >
        <motion.h2
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="text-center font-oswald text-4xl md:text-5xl text-duck-bluefontlight font-extrabold z-10 mb-6 uppercase"
        >
          Industry We Work
        </motion.h2>{" "}
        <motion.p
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="text-center text-lg md:text-xl text-duck-bluefontlight font-semibold w-11/12 md:w-2/3 mx-auto "
        >
          Our many-sided expertise spans different industries, so we deliver
          reliable products that meet your requirements and captivate users.
        </motion.p>
      </motion.div>
      <motion.div
        // @ts-expect-error - ignore
        variants={containerMotion}
        className="relative z-10 "
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
          {/* TODO Ends !Show in mobile */}
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
    </div>
  );
};

export default IndustriesSection;

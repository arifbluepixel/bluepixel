"use client";

import { motion } from "framer-motion";
import React from "react";
import { GrayContainer } from "./PageSections";

interface HeroSectionProps {
  title: string;
  highlightTitle: string;
  description: string;
  visualContent?: React.ReactNode;
  isInView: boolean;
}

const ServicesHero: React.FC<HeroSectionProps> = ({
  title,
  highlightTitle,
  description,
  visualContent,
  isInView,
}) => {
  // Split the title based on highlightTitle
  const parts = title.split(highlightTitle);

  return (
    <GrayContainer className="pt-28 md:pt-32 lg:pt-36 pb-20">
      <div className="w-11/12 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center">
        {/* Left Section */}
        <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
          {title && (
            <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[1.3] mb-6">
              {/* First Part */}
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="text-black dark:text-white"
              >
                {parts[0]}
              </motion.span>
              <br />

              {/* Highlighted Middle */}
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-sky-600"
              >
                {highlightTitle}
              </motion.span>
              <br />

              {/* Last Part */}
              {parts[1] && (
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-black dark:text-white"
                >
                  {parts[1]}
                </motion.span>
              )}
            </h1>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-2 text-gray-600 max-w-xl dark:text-gray-100 text-justify md:text-left"
          >
            {description}
          </motion.p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <div className="w-full max-w-[400px]">
            {visualContent && visualContent}
          </div>
        </div>
      </div>
    </GrayContainer>
  );
};

export default ServicesHero;

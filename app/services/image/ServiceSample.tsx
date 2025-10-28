"use client";

import React from "react";
import "react-before-after-slider-component/dist/build.css"; // Import styles
import { motion } from "framer-motion";
import BeforeAfterSliderComponent from "./BeforeAfterSection";
import { StaticImageData } from "next/image";

export default function ServiceSample({
  bgcolor,
  title,
  description,
  left,
  beforeImage,
  afterImage,
  widthData,
  heightData,
}: {
  bgcolor: string;
  title: string;
  description: string;
  left: boolean;
  beforeImage?: string | StaticImageData;
  afterImage?: string | StaticImageData;
  widthData?: string | number;
  heightData?: string | number;
}) {
  return (
    <div className={`${bgcolor} flex items-center overflow-hidden`}>
      <div
        className={`w-full mx-auto flex flex-col ${
          left ? " md:flex-row " : " md:flex-row-reverse "
        } gap-5 justify-between items-center`}
      >
        {/* Left Section - Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-2/3"
        >
          <h1
            className={`text-4xl md:text-5xl font-oswald font-normal text-gray-900 mb-6 leading-16 ${
              left ? " pr-10" : " pl-10"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-xl text-gray-600 mb-6 text-justify leading-8 ${
              left ? " md:text-left pr-10" : " md:flex-row-reverse pl-10"
            }`}
          >
            {description}
          </p>
        </motion.div>

        {/* Right Section - Before/After Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/3 flex justify-center transition-all "
        >
          <BeforeAfterSliderComponent
            beforeImage={beforeImage ? beforeImage : "/services/before.jpg"}
            afterImage={afterImage ? afterImage : "/services/after.jpg"}
            width={widthData ? widthData : "90%"}
            height={heightData ? heightData : 250}
          />
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import bingeWatch from "@/public/animations/bingewatch.json";
import { useInView } from "motion/react";
import * as motion from "motion/react-client";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const LetsCraft: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full bg-duck-bgblue py-10 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-center text-white gap-2 md:gap-10 lg:gap-32 overflow-hidden"
      style={{
        backgroundImage: "url('/3danimation/backiconsbg.png')",
        backgroundSize: "contain",
        backgroundBlendMode: "multiply",
      }}
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-4 items-center md:items-start justify-center"
      >
        <h2 className="text-3xl md:text-5xl font-oswald font-bold">
          <span className="text-yellow-500">Crafted With Precision</span>
        </h2>
        <h3 className="text-xl lg:text-2xl font-semibold font-pacifico">
          Delivered with Impact
        </h3>
        <button className="mt-4 bg-white text-yellow-500 border border-yellow-500 px-5 py-2 rounded-md text-lg font-medium hover:bg-yellow-500 hover:text-white transition cursor-pointer">
          Let&apos;s Estimate The Cost ?
        </button>
      </motion.div>
      <motion.div variants={itemVariants} className="lg:px-6">
        <Lottie
          animationData={bingeWatch}
          loop
          className="w-full h-64 md:h-72 lg:h-80 rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default LetsCraft;

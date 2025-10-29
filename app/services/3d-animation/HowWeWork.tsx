"use client";
import React, { useRef } from "react";
import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import spreadinmarket from "@/public/animations/spreadinmarket.json";
import dynamic from "next/dynamic";
import { DarkContainer } from "@/components/shared/PageSections";
import { jaroFont, pixelFont } from "@/lib/helper/fontHelper";

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
const LeftToRight = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const RightToLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
export default function HowWeWork() {
  const HowWeWorkRef = useRef(null);
  const isInView = useInView(HowWeWorkRef, { once: false });
  return (
    <DarkContainer>
      <motion.div
        ref={HowWeWorkRef}
        // @ts-expect-error - ignore
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl w-11/12 mx-auto py-12 md:py-16 lg:py-20"
      >
        <>
          <motion.div
            // @ts-expect-error - ignore
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 justify-between items-center"
          >
            <motion.div
              // @ts-expect-error - ignore
              variants={LeftToRight}
              className="space-y-3 col-span-1"
            >
              <h2
                className={`text-sky-600 text-4xl md:text-5xl font-bold mt-1 ${jaroFont.className}`}
              >
                Elevating Visions
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-white">
                into Captivating 3D Realities
              </h3>
              <p className="text-lg text-gray-400 text-justify">
                As a premier 3D animation studio, we excel in crafting
                mesmerizing animations that captivate audiences and ignite
                imagination. Driven by unparalleled creativity, meticulous
                precision, and groundbreaking innovation, we deliver bespoke 3D
                masterpieces that amplify your brand&#39;s presence and narrate
                your unique story with unparalleled impact. Partner with us to
                transcend boundaries and realize your aspirations through state
                of the art animation that truly distinguishes itself in
                today&#39;s dynamic landscape.
              </p>
            </motion.div>
            <motion.div
              // @ts-expect-error - ignore
              variants={RightToLeft}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative p-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-xl"
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-blue-500 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-cyan-500 rounded-br-2xl"></div>

              <div className="relative z-10">
                <Lottie
                  animationData={spreadinmarket}
                  loop
                  className="w-full h-full rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
          <div>{/* Add A Slider */}</div>
        </>
      </motion.div>
    </DarkContainer>
  );
}

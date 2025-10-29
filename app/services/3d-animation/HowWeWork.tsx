"use client";
import React, { useRef } from "react";
import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import spreadinmarket from "@/public/animations/spreadinmarket.json";
import dynamic from "next/dynamic";

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
    <section className=" overflow-hidden">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center"
          >
            <motion.div
              // @ts-expect-error - ignore
              variants={LeftToRight}
              className="space-y-3 col-span-1"
            >
              <h2 className="text-yellow-500 text-4xl md:text-5xl font-bold mt-1 ">
                Transforming Ideas
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-duck-bluefontlight">
                into Stunning 3D Animations
              </h3>
              <p className="text-lg text-gray-600 text-justify">
                At our leading 3D animation studio, we specialize in creating
                visually striking animations that engage and inspire. With a
                focus on creativity, precision, and innovation, we craft
                exceptional 3D animations that elevate your brand and tell your
                story in the most impactful way. Let us bring your vision to
                life with cutting-edge animation that stands out.
              </p>
            </motion.div>
            <motion.div
              // @ts-expect-error - ignore
              variants={RightToLeft}
              className="space-y-3"
            >
              <Lottie
                animationData={spreadinmarket}
                loop
                className="w-full h-full rounded-lg"
              />
            </motion.div>
          </motion.div>
          <div>{/* Add A Slider */}</div>
        </>
      </motion.div>
    </section>
  );
}

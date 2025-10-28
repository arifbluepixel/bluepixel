"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import ServiceHero from "@/components/shared/ServiceHero";
import threeDHeroRenderingAnimation from "@/public/animations/3d-rendering-hero.json";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ThreeDRenderingHero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <ServiceHero
        title={
          <>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1F2937]"
            >
              Transform Your Ideas <br /> with Stunning
            </motion.span>{" "}
            <br />{" "}
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[#FBCE3A]"
            >
              3D Rendering
            </motion.span>{" "}
          </>
        }
        description={
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-2 text-gray-600 max-w-xl "
          >
            Experience high-quality 3D visuals that bring your concepts to life
            with precision, realism, and creativity.
          </motion.p>
        }
        bgColor="#F9FAFB"
        visualContent={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[400px] h-auto"
          >
            {/* Lottie Animation */}
            <Lottie
              animationData={threeDHeroRenderingAnimation}
              loop
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        }
      />
    </div>
  );
};

export default ThreeDRenderingHero;

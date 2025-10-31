"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import ServicesHero from "@/components/shared/ServicesHero";
import threeDHeroAnimation from "@/public/animations/3d-hero.json";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ThreeDHero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref}>
      <ServicesHero
        isInView={isInView}
        title={`Elevate Your Vision with 3D Animation`}
        highlightTitle="3D Animation"
        description={`High-quality 3D animations that bring your ideas to life with
            precision and creativity.`}
        visualContent={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[400px] h-auto"
          >
            {/* Lottie Animation */}
            <Lottie
              animationData={threeDHeroAnimation}
              loop
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        }
      />
    </div>
  );
};

export default ThreeDHero;

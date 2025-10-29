"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import ServicesHero from "@/components/shared/ServicesHero";
import threeDHeroRenderingAnimation from "@/public/animations/3d-rendering-hero.json";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ThreeDRenderingHero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" }); // Reduced margin for mobile

  return (
    <div ref={ref}>
      <ServicesHero
        isInView={isInView}
        title={`Transform Your Ideas with Stunning 3D Rendering`}
        highlightTitle="with Stunning"
        description={`Experience high-quality 3D visuals that bring your concepts to life
            with precision, realism, and creativity.`}
        visualContent={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto"
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

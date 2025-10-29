"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import ServicesHero from "@/components/shared/ServicesHero";
import videoHeroAnimation from "@/public/animations/video-hero.json";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const VideoHero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <ServicesHero
        isInView={isInView}
        title={` Professional Video Editing Services`}
        highlightTitle="Video Editing"
        description={`Give your raw footage new life. With fluid editing, dynamic
            transitions, and cinematic color tones, we shape visuals that truly
            speak your brand's story`}
        visualContent={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[400px] h-auto"
          >
            {/* Lottie Animation */}
            <Lottie
              animationData={videoHeroAnimation}
              loop
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        }
      />
    </div>
  );
};

export default VideoHero;

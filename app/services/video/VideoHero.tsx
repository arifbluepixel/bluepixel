"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import ServiceHero from "@/components/shared/ServiceHero";
import videoHeroAnimation from "@/public/animations/video-hero.json";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const VideoHero: React.FC = () => {
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
              Professional
            </motion.span>{" "}
            <br />{" "}
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-yellow-500"
            >
              Video Editing
            </motion.span>{" "}
            Services
          </>
        }
        description={
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-2 text-gray-600 max-w-xl"
          >
            Turn your raw footage into captivating, high-quality videos. Our
            skilled team delivers seamless edits, dynamic transitions, and
            expertly color-graded visuals to enhance your brand’s storytelling.
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

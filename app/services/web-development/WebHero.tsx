"use client";

import ServicesHero from "@/components/shared/ServicesHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./web.css";
import dynamic from "next/dynamic";
import thinkanddesign from "@/public/animations/thinkanddesign.json";
// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function WebHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div ref={ref}>
      <ServicesHero
        isInView={isInView}
        title={`Transform Your Ideas Into Exceptional Websites`}
        highlightTitle="Your Ideas"
        description={`Get cutting-edge web development services that are both high-quality
            and cost-effective. Try a free demo of our services before making
            any commitment!`}
        visualContent={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full overflow-hidden"
          >
            <Lottie
              animationData={thinkanddesign}
              loop
              className="w-full h-full rounded-lg"
            />
          </motion.div>
        }
      />
    </div>
  );
}

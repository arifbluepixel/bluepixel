"use client";

import ServiceHero from "@/components/shared/ServiceHero";
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
    <div ref={ref} className="py-16 bg-[#F9FAFB] ">
      <ServiceHero
        title={
          <>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1F2937]"
            >
              Transform
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[#FBCE3A]"
            >
              Your Ideas
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-[#1F2937]"
            >
              Into Exceptional Websites
            </motion.span>
          </>
        }
        description={
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-2 text-gray-600 max-w-xl "
          >
            Get cutting-edge web development services that are both high-quality
            and cost-effective. Try a free demo of our services before making
            any commitment!
          </motion.p>
        }
        bgColor="#F9FAFB"
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

      {/* Other page content */}
    </div>
  );
}

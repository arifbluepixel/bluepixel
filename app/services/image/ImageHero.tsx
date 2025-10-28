"use client";

import ServiceHero from "@/components/shared/ServiceHero";
import {
  ImageHero1,
  ImageHero2,
  ImageHero3,
} from "@/lib/constants/images";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ImageHero() {
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
              Ultimate
            </motion.span>{" "}
            <br />{" "}
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[#FBCE3A]"
            >
              Image Post Production
            </motion.span>{" "}
            <br />{" "}
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-[#1F2937]"
            >
              For Your Business
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
            Get professional-grade image post-production without breaking the
            bank. Get a trial of any services before you decide, completely free
            of charge!
          </motion.p>
        }
        bgColor="#F9FAFB"
        visualContent={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 gap-3 w-full h-full"
          >
            {/* Left Column - Two Images */}
            <div className="grid grid-rows-2 gap-3 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              >
                <Image
                  src={ImageHero1}
                  alt="Image 1"
                  className="w-full h-full object-cover rounded-lg"
                  width={200}
                  height={200}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              >
                <Image
                  src={ImageHero2}
                  alt="Image 2"
                  className="w-full h-full object-cover rounded-lg"
                  width={200}
                  height={200}
                />
              </motion.div>
            </div>

            {/* Right Column - One Image */}
            <div className="grid grid-rows-1 gap-3 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
              >
                <Image
                  src={ImageHero3}
                  alt="Image 3"
                  className="w-full h-full object-cover rounded-lg"
                  width={650}
                  height={650}
                />
              </motion.div>
            </div>
          </motion.div>
        }
      />
    </div>
  );
}

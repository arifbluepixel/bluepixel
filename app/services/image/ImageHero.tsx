"use client";

import ServiceHero from "@/components/shared/ServiceHero";
import ServicesHero from "@/components/shared/ServicesHero";
import { ImageHero1, ImageHero2, ImageHero3 } from "@/lib/constants/images";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ImageHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <ServicesHero
        isInView={isInView}
        highlightTitle={`Image Post Production`}
        title={`Professional Image Post Production For Your Business`}
        description={`Enhance your brand's visuals with expert image
                        post-production tailored to your needs. Try any service free with
                        a complimentary trial before you commit.`}
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

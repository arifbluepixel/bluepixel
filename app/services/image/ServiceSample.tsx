"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ServiceSample({
  title,
  subtitle,
  description,
  left,
  beforeImage,
  afterImage,
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  left: boolean;
  beforeImage: string;
  afterImage: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px", once: false });

  return (
    <div ref={ref} className="relative">
      {/* Decorative number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className={`absolute -top-8 ${
          left ? `left-0` : `right-0`
        } text-8xl font-bold text-sky-600 dark:text-cyan-50  pointer-events-none select-none`}
      >
        0{index + 1}
      </motion.div>

      <div
        className={`flex flex-col ${
          left ? "md:flex-row" : "md:flex-row-reverse"
        } gap-12 items-center relative z-10`}
      >
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: left ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex ${
              !left ? "md:justify-end pt-6" : "md:justify-start"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-md ">
              {title}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl  font-bold text-slate-900 dark:text-slate-100 leading-tight"
          >
            {subtitle}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: left ? 60 : -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2"
        >
          <div className="relative group">
            {/* Before/After Container with enhanced styling */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Gradient overlay on hover */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div> */}

              {/* Simple before/after display */}
              <div className="relative aspect-[4/3] bg-slate-200">
                <div className="absolute inset-0 grid grid-cols-2">
                  {/* Before */}
                  <div className="relative overflow-hidden border-r-2 border-white">
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      BEFORE
                    </div>
                    <Image
                      width={500}
                      height={500}
                      src={beforeImage}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* After */}
                  <div className="relative overflow-hidden">
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                      AFTER
                    </div>
                    <Image
                      width={500}
                      height={500}
                      src={afterImage}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      {index < 2 && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
        ></motion.div>
      )}
    </div>
  );
}

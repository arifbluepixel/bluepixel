"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServiceSample from "./ServiceSample";
import {
  After1,
  After2,
  After3,
  Before1,
  Before2,
  Before3,
} from "@/lib/constants/images";

// ServiceExamples Component
export default function ServiceExamples() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const examples = [
    {
      title: "Artistic Color Grading & Creative Manipulation",
      subtitle: "Bring Your Images to Life",
      description:
        "Transform your visuals into stunning works of art with our expert color grading and creative enhancement. Whether you're curating a stylish Instagram feed or producing captivating brand content, we fine-tune tones, moods, and aesthetics to match your vision. From elegant retouching to dramatic transformations, we craft imagery that grabs attention and defines your unique style.",
      left: false,
      beforeImage: Before3.src,
      afterImage: After3.src,
    },
    {
      title: "Photo Restoration Excellence",
      subtitle: "Revive and Restore Your Cherished Memories",
      description:
        "Give your old, damaged, or faded photos a new life. Our skilled restoration specialists carefully repair and enhance every detail  preserving the original essence while improving clarity, tone, and vibrancy. Relive your most treasured moments with restored photos that feel timeless once again.",
      left: true,
      beforeImage: Before1.src,
      afterImage: After1.src,
    },
    {
      title: "Professional Image Enhancement",
      subtitle: "Elevate Every Detail with Precision",
      description:
        "Experience flawless visuals through advanced enhancement and manipulation techniques. We refine colors, adjust saturation and lighting, and optimize every pixel to create sharp, balanced, and visually captivating images. With expert masking and precision adjustments, your visuals will stand out with unmatched clarity and style.",
      left: false,
      beforeImage: Before2.src,
      afterImage: After2.src,
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-gray-400 relative overflow-hidden">
      {" "}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 to-transparent pointer-events-none"></div>
      <div
        ref={ref}
        className="relative w-11/12 max-w-7xl mx-auto py-16 md:py-20 lg:py-24"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-semibold tracking-wider uppercase">
              Our Work
            </span>
          </motion.div>

          <h2 className="mt-2 font-bold text-4xl md:text-5xl lg:text-6xl font-oswald uppercase text-slate-900 mb-4 tracking-tight">
            See The Difference
          </h2>

          <p className="mt-4 text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Witness the transformation. From concept to completion, we bring
            your vision to life.
          </p>
        </motion.div>

        {/* Examples */}
        <div className="space-y-24">
          {examples.map((example, index) => (
            <ServiceSample
              key={index}
              title={example.title}
              subtitle={example.subtitle}
              description={example.description}
              left={example.left}
              beforeImage={example.beforeImage}
              afterImage={example.afterImage}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

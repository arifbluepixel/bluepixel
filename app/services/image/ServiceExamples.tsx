"use client";

import PageSectionHeader from "@/components/shared/PageSectionHeader";
import {
  After1,
  After2,
  After3,
  Before1,
  Before2,
  Before3,
} from "@/lib/constants/images";
import { useRef } from "react";
import ServiceSample from "./ServiceSample";
import { GrayContainer } from "@/components/shared/PageSections";

// ServiceExamples Component
export default function ServiceExamples() {
  const ref = useRef(null);

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
    <GrayContainer gridLines={true}>
      <div
        ref={ref}
        className="relative w-11/12 max-w-7xl mx-auto py-16 md:py-20 lg:py-24"
      >
        {/* Section Header */}
        <PageSectionHeader
          badge="Our Work"
          title="See The Difference"
          description="Witness the transformation. From concept to completion, we bring your vision to life."
          darkMode={false}
        />

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
    </GrayContainer>
  );
}

"use client";
import { ColoredButton } from "@/components/shared/ColoredButton";
import ProcessSlider from "@/components/shared/ProcessSlider";
import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 1, duration: 0.5, ease: "easeInOut" },
  },
};
const startYourProject = {
  id: "startYourProject1",
  name: "Start Your Project",
  link: "/contact-us",
};
export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="overflow-hidden bg-[#0A314F] px-5 w-full py-12 md:py-16 lg:py-20 mt-2">
      <motion.div
        // @ts-expect-error - ignore
        variants={containerVariants}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-11/12 max-w-7xl mx-auto py-4 space-y-5 z-10 "
      >
        <motion.h2
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="text-center font-oswald text-4xl md:text-5xl text-white font-extrabold z-10 leading-14 uppercase"
        >
          Teams Workflow
        </motion.h2>{" "}
        <motion.p
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="text-center text-lg md:text-xl text-gray-200 font-semibold w-full md:w-2/3 mx-auto"
        >
          We transform your ideas into a cutting-edge digital experience with
          our expert web development skills.
        </motion.p>
        <div className="flex justify-center">
          <ColoredButton
            ColoringButton={startYourProject}
            isPrimary={true}
            isFullWidth={false}
          />
        </div>
        <ProcessSlider />
      </motion.div>
    </section>
  );
}

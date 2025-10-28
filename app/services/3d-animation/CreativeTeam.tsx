"use client";

import React, { useRef } from "react";
import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import {
  FaUser,
  FaPaintBrush,
  FaCubes,
  FaLink,
  FaFilm,
  FaLightbulb,
  FaVolumeUp,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    title: "Creative Director",
    description:
      "The creative director leads the artistic vision, ensuring projects align with client expectations. They oversee teams, provide direction, and manage the entire creative process to guarantee success.",
    icon: (
      <FaUser className="text-4xl group-hover:text-yellow-400 transition duration-500 ease-in-out" />
    ),
  },
  {
    id: 2,
    title: "2D Concept Artist",
    description:
      "Concept artists define the project's visual identity, creating sketches and illustrations that guide modelers and animators. Their designs shape the overall aesthetic and creative direction.",
    icon: (
      <FaPaintBrush className="text-4xl group-hover:text-yellow-400 transition duration-500 ease-in-out" />
    ),
  },
  {
    id: 3,
    title: "2D Environment & Character Modeler",
    description:
      "These artists convert 2D designs into 3D models, crafting characters and environments with precision. Their work forms the foundation for realistic and immersive animations.",
    icon: (
      <FaCubes className="text-4xl group-hover:text-yellow-400 transition duration-500 ease-in-out" />
    ),
  },
  {
    id: 4,
    title: "Rigger",
    description:
      "Riggers build character skeletons and movement systems, ensuring smooth and realistic animation. Their role is key to making characters move naturally in a 3D space.",
    icon: (
      <FaLink className="text-4xl group-hover:text-yellow-400 transition duration-500 ease-in-out" />
    ),
  },
  {
    id: 5,
    title: "3D Animator",
    description:
      "3D animators bring static models to life by crafting expressive movements and fluid actions. They choreograph everything from subtle gestures to high-energy sequences.",
    icon: (
      <FaFilm className="text-4xl group-hover:text-yellow-400 transition duration-500 ease-in-out" />
    ),
  },
  {
    id: 6,
    title: "Render Artist",
    description:
      "Render artists refine visuals by perfecting lighting, textures, and camera angles. Their expertise ensures that every frame is polished, immersive, and visually stunning.",
    icon: (
      <FaLightbulb className="text-4xl group-hover:text-yellow-400 transition duration-500 ease-in-out" />
    ),
  },
  {
    id: 7,
    title: "Foley and SFX Experts",
    description:
      "Foley and SFX specialists enhance the audio experience by adding immersive sound effects. Their work blends seamlessly with visuals to enrich storytelling and atmosphere.",
    icon: (
      <FaVolumeUp className="text-4xl group-hover:text-yellow-400 transition duration-500 ease-in-out" />
    ),
  },
  {
    id: 8,
    title: "Compositor Experts",
    description:
      "Compositors merge various visual elements to create a cohesive and polished final look. They enhance the animation with effects and seamless scene transitions.",
    icon: (
      <FaLayerGroup className="text-4xl group-hover:text-yellow-400 transition duration-500 ease-in-out" />
    ),
  },
  {
    id: 9,
    title: "QA Specialists",
    description:
      "QA specialists ensure animations meet the highest standards by checking for consistency, performance, and seamless audio-visual integration before final delivery.",
    icon: (
      <FaCheckCircle className="text-4xl group-hover:text-yellow-400 transition duration-500 ease-in-out" />
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};
const BottomToTop = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
const popScale = {
  hidden: { opacity: 0.8, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export default function CreativeTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section className="bg-gray-50">
      <motion.div
        ref={ref}
        // @ts-expect-error - ignore
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl w-11/12 mx-auto pb-12 md:pb-16 lg:pb-20"
      >
        <motion.div
          // @ts-expect-error - ignore
          variants={popScale}
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <h3 className="text-xl md:text-2xl font-medium text-duck-bluefontlight">
            The Creative Team Driving Your
          </h3>
          <h2 className="text-yellow-500 text-4xl md:text-5xl font-bold mt-1 font-oswald">
            3D Animation Project Forward
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          // @ts-expect-error - ignore
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {teamMembers.map((team, index) => (
            <motion.div
              key={index}
              // @ts-expect-error - ignore
              variants={BottomToTop}
              className="bg-[#0a1744] rounded-lg px-6 pt-6 pb-20 text-white flex flex-col gap-2 relative group"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-yellow-500 text-2xl font-medium font-oswald pr-2">
                  {team.title}
                </h2>
                <div className="w-6 h-6 text-white">{team.icon}</div>
              </div>
              <p className="text-lg text-left pr-2">{team.description}</p>
              <div
                id="teamid"
                className="absolute bottom-4 right-4 text-9xl font-bold text-gray-500 opacity-50 group-hover:text-white group-hover:opacity-90 transition duration-400 ease-in-out"
              >
                {team.id}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

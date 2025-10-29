"use client";

import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { GrayContainer } from "@/components/shared/PageSections";
import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import { useRef } from "react";
import {
  FaCheckCircle,
  FaCubes,
  FaFilm,
  FaLayerGroup,
  FaLightbulb,
  FaLink,
  FaPaintBrush,
  FaUser,
  FaVolumeUp,
} from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    title: "Creative Director",
    description:
      "The Creative Director shapes the artistic vision of every project, aligning creativity with client goals. They guide the team through each stage of production to deliver a compelling final result.",
    icon: FaUser,
    gradient: "from-blue-500/60 via-blue-600 to-indigo-600",
  },
  {
    id: 2,
    title: "2D Concept Artist",
    description:
      "Concept artists establish the visual foundation of the project through detailed sketches and illustrations. Their creative direction influences every element that follows in the production pipeline.",
    icon: FaPaintBrush,
    gradient: "from-purple-500/60 via-purple-600 to-pink-600",
  },
  {
    id: 3,
    title: "3D Modeler (Characters & Environments)",
    description:
      "Modelers transform concept art into fully realized 3D characters and worlds. Their craftsmanship builds the structure for realistic and visually engaging animations.",
    icon: FaCubes,
    gradient: "from-cyan-500/60 via-blue-500/60 to-blue-600",
  },
  {
    id: 4,
    title: "Rigger",
    description:
      "Riggers create the underlying movement systems that allow characters to pose and interact naturally. Their technical expertise enables smooth and lifelike animations.",
    icon: FaLink,
    gradient: "from-emerald-500/60 via-teal-600 to-cyan-600",
  },
  {
    id: 5,
    title: "3D Animator",
    description:
      "3D Animators bring characters and objects to life with expressive motion and dynamic action. They breathe personality and emotion into each scene.",
    icon: FaFilm,
    gradient: "from-orange-500/60 via-red-500/60 to-pink-600",
  },
  {
    id: 6,
    title: "Render Artist",
    description:
      "Render Artists elevate visuals with expert lighting, textures, and cinematic camera work. They ensure each frame is polished, impactful, and visually stunning.",
    icon: FaLightbulb,
    gradient: "from-yellow-500/60 via-orange-500/60 to-red-500/60",
  },
  {
    id: 7,
    title: "Foley & SFX Specialist",
    description:
      "Foley and sound effects professionals craft immersive audio layers that enhance storytelling and atmosphere, ensuring a rich sensory experience.",
    icon: FaVolumeUp,
    gradient: "from-indigo-500/60 via-purple-500/60 to-pink-500/60",
  },
  {
    id: 8,
    title: "Compositor",
    description:
      "Compositors blend rendered elements, effects, and enhancements to produce seamless and polished final shots that look cinematic and cohesive.",
    icon: FaLayerGroup,
    gradient: "from-teal-500/60 via-cyan-500/60 to-blue-500/60",
  },
  {
    id: 9,
    title: "QA Specialist",
    description:
      "QA specialists review every detail to ensure quality, consistency, and smooth performance before final delivery — guaranteeing excellence in the finished product.",
    icon: FaCheckCircle,
    gradient: "from-green-500/60 via-emerald-600 to-teal-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CreativeTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <GrayContainer>
      <motion.div
        ref={ref}
        // @ts-expect-error - ignore
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl w-11/12 mx-auto py-12 md:py-16 lg:py-20"
      >
        <PageSectionHeader
          badge="Our Creative Team"
          title="Driving Your 3D Animation Project"
          description="Meet the minds behind compelling visuals and innovative 3D storytelling"
        />

        <motion.div
          // @ts-expect-error - ignore
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {teamMembers.map((team) => {
            const Icon = team.icon;
            return (
              <motion.div
                key={team.id}
                // @ts-expect-error - ignore
                variants={BottomToTop}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-[#0a1744] to-[#0d1d5c] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Animated gradient overlay - subtle pulse */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full" />

                {/* Glowing border effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${team.gradient} blur-xl -z-10`}
                />

                {/* Content wrapper */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Header section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300 mb-3">
                        {team.title}
                      </h3>
                      <div
                        className={`h-1 w-16 bg-gradient-to-r ${team.gradient} rounded-full group-hover:w-full transition-all duration-500`}
                      />
                    </div>

                    {/* Icon with animated background */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${team.gradient} flex items-center justify-center shadow-lg ml-4 relative`}
                    >
                      {/* Glow effect behind icon */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${team.gradient} blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                      />
                      <Icon className="relative text-2xl text-white" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow group-hover:text-white transition-colors duration-300">
                    {team.description}
                  </p>

                  {/* Large number watermark */}
                  <div className="absolute bottom-4 right-4 text-8xl font-black bg-gradient-to-br from-white/10 to-white/5 bg-clip-text text-transparent group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500 select-none pointer-events-none">
                    {team.id.toString().padStart(2, "0")}
                  </div>

                  {/* Accent line at bottom */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${team.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </GrayContainer>
  );
}

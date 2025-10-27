"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Globe,
  ShieldCheck,
  Award,
  Leaf,
  Users,
  ArrowRight,
} from "lucide-react";

const MissionVisionValues = () => {
  const missionVisionContent = {
    title: "Our Mission & Vision",
    mission:
      "Setting up an ethical business standard by providing a safe and rewarding work environment. Implementing eco-friendly technologies through trained and knowledgeable workforce to offer highest level of customer satisfaction. Ensuring sustainable growth through innovation, talents and operational efficiencies.",
    vision:
      "To become a reliable global organization that provides excellence and quality through innovation with a forward-looking approach.",
    image: "/home/mission.jpg",
  };

  const values = [
    {
      title: "Ownership",
      description:
        "We believe in ownership. We are all owners in the business and think of our employment at the company as a two-way street.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Excellence",
      description:
        "We go all-out to excel in every aspect of our business and approach every challenge with a determination to succeed.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
    },
    {
      title: "Social Responsibility",
      description:
        "We care for future generations of our beloved country. Our environment care is always ensured by green technology and management.",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
    {
      title: "Recognition and Reward",
      description:
        "Appreciated efforts will increase the self-esteem and satisfaction of our employees. Employees' improved attitude towards their job will lead towards excellence.",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Purpose
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Driving excellence through innovation, responsibility, and
            unwavering commitment to quality
          </p>
        </motion.div>

        {/* Mission & Vision Section - Equal Height Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Mission Card */}
          <motion.div
            className="relative group h-full"
            // @ts-expect-error - ignore this
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col">
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white shadow-lg flex-shrink-0"
                  whileHover="hover"
                  variants={iconHoverVariants}
                >
                  <Target size={28} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Our Mission
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed flex-grow">
                {missionVisionContent.mission}
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="relative group h-full"
            // @ts-expect-error - ignore this
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col">
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl text-white shadow-lg flex-shrink-0"
                  whileHover="hover"
                  variants={iconHoverVariants}
                >
                  <Globe size={28} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Our Vision
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed flex-grow">
                {missionVisionContent.vision}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            // @ts-expect-error - ignore this
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and action we take
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  // @ts-expect-error - ignore this
                  variants={itemVariants}
                  className={`relative group p-8 rounded-2xl border-2 ${value.borderColor} ${value.bgColor} backdrop-blur-sm h-full`}
                  whileHover="hover"
                >
                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl opacity-0 group-hover:opacity-5 transition duration-300`}
                  />

                  {/* Icon */}
                  <motion.div
                    variants={iconHoverVariants}
                    className={`p-4 bg-gradient-to-r ${value.color} rounded-2xl text-white shadow-lg w-fit mb-6`}
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm flex-grow">
                      {value.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight
                      size={20}
                      className={`text-gradient ${value.color
                        .replace("from-", "text-")
                        .replace(" to-", "-")}`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Visual Showcase Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Bringing Our Values to Life
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through innovative practices, sustainable operations, and a
              commitment to excellence, we transform our core values into
              tangible results that benefit our clients, employees, and
              community.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex-1 text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-blue-700">Years Experience</div>
              </div>
              <div className="flex-1 text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-emerald-700">Team Members</div>
              </div>
              <div className="flex-1 text-center p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                <div className="text-2xl font-bold text-cyan-600">50+</div>
                <div className="text-sm text-cyan-700">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Right Image Grid - Smaller Width */}
          <div className="grid grid-cols-1 gap-4 w-4/5 mx-auto">
            <div className="space-y-4">
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/home/mission.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/home/value.jpg"
                  alt="Sustainability"
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionValues;

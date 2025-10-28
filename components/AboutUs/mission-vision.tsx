"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Globe,
  Award,
  Palette,
  Users,
  ArrowRight,
  Code,
  Video,
} from "lucide-react";

const MissionVisionValues = () => {
  const missionVisionContent = {
    title: "Our Mission & Vision",
    mission:
      "To transform creative visions into stunning digital realities through cutting-edge technology and artistic excellence. We empower brands with pixel-perfect visuals, immersive animations, and robust digital solutions that drive engagement and deliver exceptional results.",
    vision:
      "To be the world's most trusted creative technology partner, pioneering the future of digital experiences through innovation, quality, and unparalleled client satisfaction.",
    image: "/home/mission.jpg",
  };

  const values = [
    {
      title: "Creativity First",
      description:
        "We believe in pushing creative boundaries and delivering innovative solutions that captivate audiences and exceed expectations.",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Technical Excellence",
      description:
        "We combine artistic vision with technical precision to deliver flawless, high-performance digital solutions that stand the test of time.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Client Partnership",
      description:
        "We build lasting relationships by understanding our clients' unique needs and delivering solutions that drive their business forward.",
      icon: Users,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
    },
    {
      title: "Quality Commitment",
      description:
        "Every pixel, every frame, every line of code is crafted with meticulous attention to detail and uncompromising quality standards.",
      icon: Award,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Our Creative
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Philosophy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where artistic vision meets technical excellence to create unforgettable digital experiences
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
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col">
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg flex-shrink-0"
                  whileHover="hover"
                  variants={iconHoverVariants}
                >
                  <Target size={28} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Our Mission
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
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
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col">
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white shadow-lg flex-shrink-0"
                  whileHover="hover"
                  variants={iconHoverVariants}
                >
                  <Globe size={28} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Our Vision
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
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
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every pixel, every frame, and every line of code we create
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
              Bringing Creativity to Life
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through cutting-edge technology and artistic innovation, we transform ideas into stunning visual experiences that captivate audiences and drive results across all digital platforms.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-blue-700">Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-purple-700">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-xl border border-pink-200">
                <div className="text-2xl font-bold text-pink-600">5</div>
                <div className="text-sm text-pink-700">Creative Services</div>
              </div>
            </div>
          </div>

          {/* Right Image Column - Single Column with Two Images */}
          <div className="flex flex-col gap-6">
            {/* Top Image */}
            <motion.div
              className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/home/mission.jpg"
                alt="Creative Design Process at Blue Pixel"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h4 className="font-bold text-lg">Creative Excellence</h4>
                <p className="text-sm">Transforming visions into reality</p>
              </div>
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/home/value.jpg"
                alt="Team Collaboration at Blue Pixel Studio"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h4 className="font-bold text-lg">Innovation Hub</h4>
                <p className="text-sm">Where ideas come to life</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
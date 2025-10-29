"use client";

import { motion } from "framer-motion";
import {
  FaVideo,
  FaPalette,
  FaChartLine,
  FaMagic,
  FaMusic,
  FaFilm,
  FaTextHeight,
} from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

const services = [
  {
    icon: <FaVideo />,
    title: "Video Editing",
    description:
      "Professional editing for commercials, social media, and more.",
  },
  {
    icon: <FaPalette />,
    title: "Color Grading",
    description: "Enhance your footage with cinematic color grading.",
  },
  {
    icon: <FaChartLine />,
    title: "Motion Graphics",
    description: "Add dynamic animations to your videos.",
  },
  {
    icon: <FaMagic />,
    title: "VFX & Special Effects",
    description: "Transform your videos with high-quality visual effects.",
  },
  {
    icon: <FaMusic />,
    title: "Audio Enhancement",
    description: "Improve sound quality with professional audio editing.",
  },
  {
    icon: <FaScissors />,
    title: "Cutting & Trimming",
    description: "Precisely cut, trim, and arrange video clips seamlessly.",
  },
  {
    icon: <FaFilm />,
    title: "Cinematic Transitions",
    description: "Smooth transitions that elevate your video storytelling.",
  },
  {
    icon: <FaTextHeight />,
    title: "Subtitle & Captioning",
    description: "Add accurate subtitles and captions for accessibility.",
  },
];

const VideoServices = () => {
  return (
    <section className=" bg-gray-400">
      <div className="w-11/12 max-w-7xl mx-auto py-12 md:py-16 lg:py-20">
        {/* Section Heading */}
        <motion.h2
          className="font-bold text-center mb-12  uppercase text-4xl md:text-5xl text-[#093150]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} // Adjust `amount` to control when the animation triggers
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-100 hover:bg-yellow-200 transition-all ease-in-out duration-300 rounded-lg shadow-md flex flex-col items-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.5 }} // Adjust `amount` to control when the animation triggers
            >
              <div className="text-5xl text-yellow-500 group-hover:text-duck-cardblue mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-normal mb-2 ">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoServices;

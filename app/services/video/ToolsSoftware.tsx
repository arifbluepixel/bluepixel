"use client";

import { motion } from "framer-motion";
import {
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiDavinciresolve,
} from "react-icons/si";
import { FaFilm } from "react-icons/fa"; // Placeholder for Final Cut Pro

const tools = [
  {
    id: 1,
    name: "Adobe After Effects",
    description: "For motion graphics and visual effects in post-production.",
    icon: <SiAdobeaftereffects className="text-6xl text-[#D291FF]" />, // Adobe After Effects color
  },
  {
    id: 2,
    name: "Adobe Premiere Pro",
    description:
      "For professional video editing and seamless workflow integration.",
    icon: <SiAdobepremierepro className="text-6xl text-[#EA77FF]" />, // Adobe Premiere Pro color
  },
  {
    id: 3,
    name: "Final Cut Pro",
    description:
      "For high-quality video editing on macOS with advanced features.",
    icon: <FaFilm className="text-6xl text-[#FF5C00]" />, // Placeholder for Final Cut Pro
  },
  {
    id: 4,
    name: "DaVinci Resolve",
    description:
      "For color grading, editing, and visual effects in one powerful tool.",
    icon: <SiDavinciresolve className="text-6xl text-[#1E90FF]" />, // DaVinci Resolve color
  },
];

export default function ToolsSoftware() {
  return (
    <section className=" bg-gray-400">
      <div className="max-w-7xl w-11/12 mx-auto py-12 md:py-16 lg:py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-900 bg-clip-text uppercase"
        >
          Our Trusted Toolkit
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-gray-600  text-center mb-10 max-w-2xl mx-auto"
        >
          We use industry-leading tools and software to <br />
          deliver high-quality video editing and design solutions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 hover:bg-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <motion.div
                animate={{ x: [0, -10, 0] }} // Move up and down
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-6"
              >
                {tool.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {tool.name}
              </h3>
              <p className="text-gray-600">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

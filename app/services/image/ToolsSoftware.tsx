"use client";

import { motion } from "framer-motion";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { SiAdobelightroom } from "react-icons/si";
import { SiAffinityphoto, SiCoreldraw, SiGimp } from "react-icons/si";

const tools = [
  {
    id: 1,
    name: "Adobe Photoshop",
    description:
      "For advanced photo retouching, compositing, and graphic design.",
    icon: <DiPhotoshop className="text-6xl text-[#31A8FF]" />, // Photoshop blue
  },
  {
    id: 2,
    name: "Adobe Lightroom",
    description:
      "For professional color correction, batch editing, and photo organization.",
    icon: <SiAdobelightroom className="text-6xl text-[#AEB8FE]" />, // Lightroom purple
  },
  {
    id: 3,
    name: "GIMP",
    description:
      "A free and open-source image editor for photo retouching and image composition.",
    icon: <SiGimp className="text-6xl text-[#b19e79]" />, // GIMP gray
  },
  {
    id: 4,
    name: "Affinity Photo",
    description:
      "A powerful alternative to Photoshop for photo editing and retouching.",
    icon: <SiAffinityphoto className="text-6xl text-[#7E4DD2]" />, // Affinity Photo purple
  },
  {
    id: 5,
    name: "CorelDRAW",
    description: "For vector graphic design and illustration.",
    icon: <SiCoreldraw className="text-6xl text-[#F68F1F]" />, // CorelDRAW orange
  },
  {
    id: 6,
    name: "Adobe Illustrator",
    description: "For creating vector graphics, logos, and illustrations.",
    icon: <DiIllustrator className="text-6xl text-[#FF9A00]" />, // Illustrator orange
  },
];

export default function ToolsSoftware() {
  return (
    <section className="py-20 bg-[#0a0f2f]">
      <div className="w-11/12 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-oswald font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC107]"
        >
          Tools & Software
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-[#EAEAEA] text-center mb-6 max-w-2xl mx-auto"
        >
          We use industry-leading tools and software to deliver high-quality
          image editing and design solutions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-[#1A1A2E] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:scale-95"
            >
              <div className="mb-6">{tool.icon}</div>
              <h3 className="text-2xl font-medium font-oswald text-[#FFD700] mb-4">
                {tool.name}
              </h3>
              <p className="text-[#EAEAEA]">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

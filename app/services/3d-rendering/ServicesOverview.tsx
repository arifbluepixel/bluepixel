"use client";

import { motion } from "framer-motion";
import { FaCubes, FaDraftingCompass, FaMagic } from "react-icons/fa";

const services = [
  {
    title: "Architectural Visualization",
    description:
      "Breathtaking photorealistic 3D renders that bring your designs to life.",
    icon: <FaCubes className="text-4xl text-[var(--color-duck-primary)]" />,
  },
  {
    title: "Product Rendering",
    description:
      "Showcase your products in high detail with stunning 3D renders.",
    icon: (
      <FaDraftingCompass className="text-4xl text-[var(--color-duck-secondary)]" />
    ),
  },
  {
    title: "VFX & Animation",
    description:
      "Engaging animations and visual effects that captivate your audience.",
    icon: <FaMagic className="text-4xl text-[var(--color-duck-accent-blue)]" />,
  },
];

export default function ServicesOverview() {
  return (
    <section className=" bg-gray-300 py-12 md:py-16 lg:py-20">
      <div className="w-11/12 max-w-7xl mx-auto text-center ">
        <motion.h2
          className="font-bold mb-6 text-black bg-clip-text bg-gradient-to-r from-[var(--color-duck-primary)] to-[var(--color-duck-secondary)]  text-4xl md:text-5xl "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          3D Rendering Services
        </motion.h2>
        <motion.p
          className="text-lg text-[var(--color-duck-text-light)] mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Transform your ideas into stunning visuals with our professional
          rendering solutions.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-11/12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl shadow-lg bg-[var(--color-duck-secondary-dark)] hover:bg-[var(--color-duck-primary-dark)] transition-all duration-300 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.1 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-duck-primary)]">
              {service.title}
            </h3>
            <p className="text-[var(--color-duck-text-light)]">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

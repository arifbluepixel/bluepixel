"use client";

import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaTools, FaStar } from "react-icons/fa";

const reasons = [
  {
    id: 1,
    title: "Fast Turnaround",
    description:
      "We deliver high-quality video edits quickly, ensuring your projects are completed on time.",
    icon: (
      <FaRocket className="text-6xl text-[#83c5be] group-hover:text-white" />
    ),
  },
  {
    id: 2,
    title: "Client-Centric Approach",
    description:
      "Your vision is our priority. We work closely with you to bring your ideas to life.",
    icon: (
      <FaHandshake className="text-6xl text-[#83c5be] group-hover:text-white" />
    ),
  },
  {
    id: 3,
    title: "Advanced Tools",
    description:
      "We use industry-leading software to create stunning, professional-grade videos.",
    icon: (
      <FaTools className="text-6xl text-[#83c5be] group-hover:text-white" />
    ),
  },
  {
    id: 4,
    title: "Proven Expertise",
    description:
      "With years of experience, we’ve mastered the art of video editing and storytelling.",
    icon: <FaStar className="text-6xl text-[#83c5be] group-hover:text-white" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="" style={{ backgroundColor: "#0a0f2f" }}>
      <div className="max-w-7xl w-11/12 mx-auto py-12 md:py-16 lg:py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white bg-clip-text bg-gradient-to-r from-[#83c5be] to-[#ffddd2] uppercase"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between gap-1 group ease-in-out"
              style={{ backgroundColor: "#005f73" }}
            >
              <div className="mb-6  ">{reason.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-[#83c5be] group-hover:text-white">
                {reason.title}
              </h3>
              <p className="text-[#e0fbfc] text-justify">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

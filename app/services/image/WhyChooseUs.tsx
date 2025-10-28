"use client";

import { FaBolt, FaDollarSign, FaUsers, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBolt className="text-yellow-400 text-5xl" />,
    title: "Fast Turnaround",
    description:
      "We deliver high-quality work quickly, ensuring your deadlines are met.",
  },
  {
    icon: <FaDollarSign className="text-green-400 text-5xl" />,
    title: "Affordable Pricing",
    description:
      "Premium quality at competitive prices—great value for every project.",
  },
  {
    icon: <FaUsers className="text-blue-400 text-5xl" />,
    title: "Experienced Team",
    description:
      "Skilled professionals with years of expertise in the industry.",
  },
  {
    icon: <FaStar className="text-purple-400 text-5xl" />,
    title: "Proven Track Record",
    description: "Trusted by hundreds of happy clients worldwide.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-duck-bgblue">
      <div className="w-11/12 mx-auto max-w-7xl text-center space-y-6 py-12 md:py-16 lg:py-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-oswald font-bold uppercase text-white "
        >
          Why Us ?
        </motion.h2>
        <p className="mt-3 text-lg text-white capitalize">
          We deliver excellence with every project.
        </p>

        {/* Feature Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 bg-duck-cardblue shadow-lg rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-white">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

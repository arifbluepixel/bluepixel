"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Award, Heart, Star } from "lucide-react";

const Values = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const values = [
    {
      icon: Shield,
      title: "Ownership",
      description:
        "We believe in ownership. We are all owners in the business and think of our employment at the company as a two-way street.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We go all-out to excel in every aspect of our business and approach every challenge with a determination to succeed.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description:
        "We care for future generation of our beloved country. Our Environment care is always ensured by green technology and management.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Star,
      title: "Recognition and Reward",
      description:
        "Appreciated efforts will increase the self-esteem and satisfaction of our employees. Employees' improved attitude towards their job will lead towards excellence.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            // @ts-expect-error - ignore this
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our Values
          </motion.h2>
          <motion.div
            // @ts-expect-error - ignore this
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            // @ts-expect-error - ignore this
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            The principles that guide our actions and define our culture
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title + index}
              // @ts-expect-error - ignore this
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon size={32} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>

              {/* Hover Effect Background */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Image */}
        <motion.div
          // @ts-expect-error - ignore this
          variants={itemVariants}
          className="mt-16 relative h-64 lg:h-80 rounded-2xl overflow-hidden"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/about/values-image.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Living Our Values</h3>
              <p className="text-gray-200">Every day, in every decision</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;

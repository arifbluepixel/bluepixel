"use client";

import { motion } from "framer-motion";
import { Code, Palette, Users, Video } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ value, inView }: { value: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
      {count}%
    </span>
  );
};

const AboutStatsSimple = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: Palette,
      title: "Creative Excellence",
      value: 98,
      description: "Pixel-perfect designs that exceed client expectations",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Technical Precision",
      value: 96,
      description: "Flawless code and robust digital solutions",
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      icon: Video,
      title: "Project Delivery",
      value: 95,
      description: "On-time delivery for all creative projects",
      bgColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      value: 97,
      description: "Happy clients across 20+ countries worldwide",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (value: number) => ({
      width: `${value}%`,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Commitment to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We measure our success by the quality of our work and the
            satisfaction of our clients. Every pixel, every frame, every line of
            code is crafted with precision and passion.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              // @ts-expect-error - ignore this
              variants={itemVariants}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl ${stat.bgColor} text-white shadow-lg`}
                  >
                    <stat.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {stat.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      {stat.description}
                    </p>
                  </div>
                </div>

                <Counter value={stat.value} inView={inView} />
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    custom={stat.value}
                    // @ts-expect-error - ignore this
                    variants={progressVariants}
                    className={`h-full rounded-full ${stat.bgColor} relative`}
                  >
                    <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                  </motion.div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                  <span>0%</span>
                  <span className="font-semibold">
                    {stat.value}% Success Rate
                  </span>
                  <span>100%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStatsSimple;

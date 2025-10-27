"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Ship, Globe, Repeat } from "lucide-react";
import { useState, useEffect } from "react";
import { FaTshirt } from "react-icons/fa";

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
      icon: FaTshirt,
      title: "Fabric Quality Assurance",
      value: 95,
      description: "Premium material quality with rigorous testing",
      bgColor: "bg-gradient-to-r from-cyan-500 to-blue-600",
    },
    {
      icon: Ship,
      title: "On-Time Shipment",
      value: 98,
      description: "Reliable delivery meeting client deadlines",
      bgColor: "bg-gradient-to-r from-emerald-500 to-green-600",
    },
    {
      icon: Globe,
      title: "Global Client Satisfaction",
      value: 92,
      description: "Positive feedback from international clients",
      bgColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    },
    {
      icon: Repeat,
      title: "Repeat Orders Rate",
      value: 87,
      description: "Client loyalty and continued partnerships",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Driven by{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Quality and Precision
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in every aspect of our
            operations, ensuring consistent quality and reliable performance for
            global clients.
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
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor} text-white`}>
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStatsSimple;

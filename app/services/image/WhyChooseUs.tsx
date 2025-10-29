"use client";

import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { DarkContainer } from "@/components/shared/PageSections";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaBolt, FaDollarSign, FaStar, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-5xl" />,
    title: "Rapid Turnaround Excellence",
    description:
      "Our streamlined workflow ensures exceptional quality delivery within tight timelines, combining efficiency with uncompromising attention to detail.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    hoverBg: "hover:from-yellow-500 hover:to-orange-500",
    stat: "24-48hrs",
    statLabel: "Average Delivery",
  },
  {
    icon: <FaDollarSign className="text-5xl" />,
    title: "Competitive Pricing Structure",
    description:
      "Industry-leading quality at transparent, competitive rates. We deliver exceptional value with straightforward pricing and no hidden costs.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    hoverBg: "hover:from-green-500 hover:to-emerald-500",
    stat: "40%",
    statLabel: "Cost Savings",
  },
  {
    icon: <FaUsers className="text-5xl" />,
    title: "Seasoned Professionals",
    description:
      "Our accomplished team brings decades of collective experience and technical mastery, committed to transforming your creative vision into reality.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverBg: "hover:from-blue-500 hover:to-cyan-500",
    stat: "45+",
    statLabel: "Specialists",
  },
  {
    icon: <FaStar className="text-5xl" />,
    title: "Demonstrated Track Record",
    description:
      "Built on a foundation of client satisfaction, we maintain consistent excellence through proven methodologies and unwavering quality standards.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    hoverBg: "hover:from-purple-500 hover:to-pink-500",
    stat: "350+",
    statLabel: "Happy Clients",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <DarkContainer
      gridLines={true}
      decorativeElements={
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      }
    >
      <div
        ref={ref}
        className="relative w-11/12 mx-auto max-w-7xl py-16 md:py-20 lg:py-24"
      >
        {/* Header */}
        <PageSectionHeader
          badge="Why Choose Us"
          title="Excellence Delivered Consistently"
          description="We integrate precision, expertise, and competitive value to deliver exceptional results that consistently surpass client expectations."
          darkMode={true}
        />

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              // @ts-expect-error - ignore
              variants={itemVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="relative h-full p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl
                            hover:bg-gradient-to-br hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container with animated background */}
                  <div className="relative inline-block mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500`}
                    ></div>
                    <div
                      className={`relative ${feature.bgColor} ${feature.borderColor} border rounded-2xl p-4 
                                  group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500`}
                    >
                      <div
                        className={`bg-gradient-to-br ${feature.color} bg-clip-text text-white/50 group-hover:text-white transition-all duration-500`}
                      >
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="mb-4">
                    <div
                      className={`inline-flex items-baseline gap-1 px-3 py-1 rounded-full ${feature.bgColor} ${feature.borderColor} border
                                   group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500`}
                    >
                      <span
                        className={`text-lg font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent group-hover:text-white transition-all duration-500`}
                      >
                        {feature.stat}
                      </span>
                      <span className="text-xs text-slate-400 group-hover:text-white/80 transition-colors duration-500">
                        {feature.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-500">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} 
                              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}
                ></div>

                {/* Corner decoration */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 text-lg mb-6">
            Partner with a trusted industry leader serving clients worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={"/contact-us"}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg
                             hover:from-blue-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300
                             shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 flex items-center gap-2"
            >
              Initiate Your Project
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </DarkContainer>
  );
};

export default WhyChooseUs;

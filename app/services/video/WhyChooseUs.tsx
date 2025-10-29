"use client";

import CTASection from "@/components/shared/CTASection";
import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { GrayContainer } from "@/components/shared/PageSections";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHandshake, FaRocket, FaStar, FaTools } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-5xl" />,
    title: "Rapid Turnaround Excellence",
    description:
      "Our streamlined production process delivers exceptional video edits within accelerated timelines, ensuring your projects launch on schedule without compromising quality.",
    color: "from-[#83c5be] to-[#006d77]",
    bgColor: "bg-[#83c5be]/10",
    borderColor: "border-[#83c5be]/20",
    stat: "24-48hrs",
    statLabel: "Average Delivery",
  },
  {
    icon: <FaHandshake className="text-5xl" />,
    title: "Client-Centric Partnership",
    description:
      "Your creative vision drives every decision we make. Through collaborative consultation and transparent communication, we transform your ideas into compelling visual narratives.",
    color: "from-blue-500 to-sky-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    stat: "100%",
    statLabel: "Client Satisfaction",
  },
  {
    icon: <FaTools className="text-5xl" />,
    title: "Industry-Leading Technology",
    description:
      "We harness cutting-edge editing software and advanced production tools to craft stunning, broadcast-quality videos that captivate audiences and elevate your brand.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    stat: "Pro Grade",
    statLabel: "Equipment",
  },
  {
    icon: <FaStar className="text-5xl" />,
    title: "Demonstrated Mastery",
    description:
      "Backed by extensive industry experience and a portfolio of successful projects, we've perfected the craft of visual storytelling that resonates and engages.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    stat: "8+ Years",
    statLabel: "Experience",
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
    <GrayContainer
      gridLines={true}
      decorativeElements={
        <div className="absolute inset-0 opacity-10 dark:opacity-20 -z-50">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#83c5be] rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#ffddd2] rounded-full filter blur-3xl animate-pulse"
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
          description="We integrate precision, expertise, and competitive value to deliver exceptional video editing results that consistently surpass client expectations."
          darkMode={false}
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
                className="relative h-full p-8 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl
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
                        className={`bg-gradient-to-br ${feature.color} bg-clip-text text-slate-600 dark:text-white/90 group-hover:text-white transition-all duration-500`}
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
                      <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-white/80 transition-colors duration-500">
                        {feature.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-white transition-colors duration-500">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-200 dark:group-hover:text-slate-50 leading-relaxed group-hover:text-white/95 transition-colors duration-500">
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
        <CTASection
          mode="card"
          message="Ready to get started?"
          subMessage="Partner with trusted video editing experts"
          buttonText=" Start Your Project"
          href="/contact-us"
          variant="purple"
          icon={
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          }
          delay={0.1}
        />
      </div>
    </GrayContainer>
  );
};

export default WhyChooseUs;

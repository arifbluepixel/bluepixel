"use client";

import { motion, useInView } from "framer-motion";
import {
  Award,
  BarChart3,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/shared/home/SectionHeader";

// --- AnimatedNumber Component for Count Up Effect ---
// @ts-expect-error - Accept it
const AnimatedNumber = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% in view

  // Duration in milliseconds
  const duration = 1500;
  // Frame rate approximation (60fps)
  const stepTime = Math.max(1, Math.floor(duration / 60));
  const steps = duration / stepTime;
  const increment = end / steps;

  useEffect(() => {
    if (isInView) {
      // @ts-expect-error - Accept it
      let startTimestamp = null;
      // @ts-expect-error - Accept it
      const animateCount = (timestamp) => {
        // @ts-expect-error - Accept it
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;

        const currentCount = Math.min(
          end,
          Math.ceil(increment * (progress / stepTime))
        );
        setCount(currentCount);

        if (progress < duration) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end); // Ensure it stops exactly at the end value
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, stepTime, increment, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
        {new Intl.NumberFormat().format(count)}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1 md:mt-2">
        {label}
      </div>
    </motion.div>
  );
};

const OurStrengths = () => {
  const strengths = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Guarantee",
      description:
        "Every garment undergoes rigorous quality checks with our 200-point inspection system ensuring premium craftsmanship and durability.",
      features: [
        "200-point quality inspection",
        "Premium craftsmanship",
        "Lifetime quality assurance",
        "ISO 9001 certified",
      ],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      stats: "99.8% Quality Score",
      delay: 0.1,
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Order Management",
      description:
        "Seamless order tracking and management with real-time updates, ensuring complete transparency throughout production.",
      features: [
        "Real-time order tracking",
        "Digital dashboard access",
        "Dedicated account manager",
        "Monthly performance reports",
      ],
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      stats: "24/7 Order Tracking",
      delay: 0.2,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Product Development",
      description:
        "Innovative design-to-production process with rapid prototyping and market trend analysis for competitive edge.",
      features: [
        "Rapid prototyping",
        "Trend forecasting",
        "Custom design services",
        "Material innovation",
      ],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      stats: "48hr Prototype Turnaround",
      delay: 0.3,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-time Delivery",
      description:
        "Precision scheduling and logistics expertise guaranteeing 98% on-time delivery across global markets.",
      features: [
        "Advanced logistics planning",
        "Global shipping partners",
        "Customs clearance support",
        "Express delivery options",
      ],
      color: "from-cyan-500 to-teal-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      stats: "98% On-Time Delivery",
      delay: 0.4,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fabric Quality & Durability",
      description:
        "Premium fabric sourcing with rigorous testing for color fastness, shrinkage control, and long-lasting durability.",
      features: [
        "OEKO-TEX certified fabrics",
        "Color fastness testing",
        "Shrinkage control",
        "Sustainable materials",
      ],
      color: "from-amber-500 to-yellow-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-800",
      stats: "100% Quality Tested Fabrics",
      delay: 0.5,
    },
  ];

  // Data structured for the AnimatedNumber component
  const statsData = [
    { number: 500, suffix: "+", label: "Brands Trust Us" },
    // Use 50000 for the actual count, then format with K in the suffix logic (or just show 50 and K+)
    { number: 50, suffix: "K+", label: "Products Monthly" },
    { number: 98, suffix: "%", label: "Client Retention" },
    { number: 15, suffix: "+", label: "Years Experience" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const iconVariants = {
    normal: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    // @ts-expect-error - Accept it
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05, // Slightly faster staggered delay
        duration: 0.3,
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950/50 overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Why Choose Us"
          badgeIcon={Sparkles}
          title="Our Core Strengths"
          highlightText="Core Strengths"
          description="Built on a foundation of excellence ,innovation , and unwavering commitment to client success. Trusted by 250+ brands worldwide."
        />

        {/* Stats Bar - Uses AnimatedNumber Component */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {statsData.map((stat, index) => (
            <AnimatedNumber
              key={index}
              end={stat.number}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>

        {/* Strengths Grid - 3-2 Centered Layout on Large Screens */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="group relative w-full sm:w-[calc(50%-1.5rem)] lg:w-[31%] max-w-md"
              // @ts-expect-error - Accept it
              variants={cardVariants}
              whileHover="hover"
              custom={strength.delay}
            >
              {/* Background Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${strength.color} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}
                whileHover={{ opacity: 0.1 }}
              />

              {/* Main Card */}
              <div
                className={`relative ${strength.bgColor} p-6 lg:p-8 rounded-2xl lg:rounded-3xl border-2 ${strength.borderColor} shadow-sm group-hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col`}
              >
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r ${strength.color} opacity-0 group-hover:opacity-100`}
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "3px",
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Icon Section */}
                <div className="relative z-10 mb-4 lg:mb-6">
                  <motion.div
                    className={`inline-flex p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-gradient-to-br ${strength.color} text-white shadow-lg`}
                    // @ts-expect-error - Accept it
                    variants={iconVariants}
                  >
                    {strength.icon}
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 px-2 lg:px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: strength.delay + 0.3,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-xs font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-50 bg-clip-text text-transparent whitespace-nowrap">
                      {strength.stats}
                    </span>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <motion.h3
                    className="text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 lg:mb-3 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300 line-clamp-2"
                    whileHover={{ x: 2 }}
                  >
                    {strength.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 lg:mb-6 flex-1 line-clamp-3"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {strength.description}
                  </motion.p>

                  {/* Features List */}
                  <motion.ul className="space-y-2 lg:space-y-3">
                    {strength.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm text-gray-700 dark:text-gray-300"
                        custom={featureIndex}
                        variants={featureVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br ${strength.color} text-white flex items-center justify-center`}
                          whileHover={{ scale: 1.2 }}
                        >
                          <CheckCircle className="w-2 h-2 lg:w-3 lg:h-3" />
                        </motion.div>
                        <span className="line-clamp-1">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>

              {/* Connection Dots for Desktop - Only visible between cards 1-4 */}
              {index < strengths.length - 1 && (
                <motion.div
                  className="hidden xl:block absolute -right-4 top-1/2 transform -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: strength.delay + 0.5 }}
                >
                  {/* This is a placeholder for the connection dots, visually it doesn't align perfectly 
                                        with the 3-2 grid wrap, but it adds a nice animated touch to the flow. */}
                  {/* <div className="flex flex-col gap-1">
                                        {[0, 1, 2].map(dot => (
                                            <motion.div
                                                key={dot}
                                                className={`w-2 h-2 rounded-full bg-gradient-to-br ${strength.color}`}
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 1, 0.5]
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    delay: dot * 0.2
                                                }}
                                            />
                                        ))}
                                    </div> */}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge Section - Responsive */}
        <motion.div
          className="mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 px-6 py-4 lg:px-8 lg:py-4 bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 lg:gap-4">
              <Users className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400" />
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-gray-100 text-sm lg:text-base">
                  Trusted Partner
                </div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                  15+ years of manufacturing excellence
                </div>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-3 lg:gap-4">
              <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-green-600 dark:text-green-400" />
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-gray-100 text-sm lg:text-base">
                  Certified Quality
                </div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                  ISO 9001 & OEKO-TEX Certified
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStrengths;

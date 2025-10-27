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
import SectionHeader from "./SectionHeader";

// --- AnimatedNumber Component for Count Up Effect ---
const AnimatedNumber = ({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const duration = 1500;
  const stepTime = Math.max(1, Math.floor(duration / 60));
  const steps = duration / stepTime;
  const increment = end / steps;

  useEffect(() => {
    if (isInView) {
      // @ts-expect-error - ignore
      let startTimestamp = null;
      // @ts-expect-error - ignore
      const animateCount = (timestamp) => {
        // @ts-expect-error - ignore
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
          setCount(end);
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

const OurStrengths2 = () => {
  const strengths = [
    {
      icon: <Award className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Quality Guarantee",
      description:
        // double of index 1 description (Order Management)
        "Seamless order tracking and management with real-time updates, providing full transparency throughout production and delivery. " +
        "Seamless order tracking and management with real-time updates, providing full transparency throughout production and delivery.",
      features: [
        // duplicated features from index 1
        "Real-time order tracking",
        "Digital dashboard access",
        "Dedicated account manager",
        "Monthly performance reports",
        "Real-time order tracking",
        "Digital dashboard access",
        "Dedicated account manager",
        "Monthly performance reports",
      ],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      stats: "99.8% Quality Score",
      delay: 0.1,
      position: 1,
    },
    {
      icon: <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Order Management",
      description:
        "Seamless order tracking and management with real-time updates, providing full transparency throughout production and delivery.",
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
      position: 2,
    },
    {
      icon: <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Product Development",
      description:
        "Innovative design-to-production workflow with rapid prototyping and market trend analysis to give your brand a competitive edge.",
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
      position: 3,
    },
    {
      icon: <Clock className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "On-time Delivery",
      description:
        // double of index 2 description (Product Development)
        "Innovative design-to-production workflow with rapid prototyping and market trend analysis to give your brand a competitive edge. " +
        "Innovative design-to-production workflow with rapid prototyping and market trend analysis to give your brand a competitive edge.",
      features: [
        // duplicated features from index 2
        "Rapid prototyping",
        "Trend forecasting",
        "Custom design services",
        "Material innovation",
        "Rapid prototyping",
        "Trend forecasting",
        "Custom design services",
        "Material innovation",
      ],
      color: "from-cyan-500 to-teal-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      stats: "98% On-Time Delivery",
      delay: 0.4,
      position: 4,
    },
  ];

  const statsData = [
    { number: 500, suffix: "+", label: "Brands Trust Us" },
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
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950/50 overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionHeader
          badge="Why Choose Us"
          badgeIcon={Sparkles}
          title="Our Core Strengths"
          highlightText="Core Strengths"
          description="Built on a foundation of excellence ,innovation , and unwavering commitment to client success. Trusted by 250+ brands worldwide."
        />

        {/* Stats Bar */}
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

        {/* Flow-based Layout Container */}
        <motion.div
          className="max-w-7xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Desktop/Tablet Layout (md and above) - Follow arrow flow */}
          <div className="hidden md:grid md:grid-cols-5 md:auto-rows-fr gap-6 md:gap-8">
            {/* Position 1 - Top Left (large) */}
            <motion.div
              className="col-span-3 row-span-1"
              // @ts-expect-error - ignore
              variants={cardVariants}
              whileHover="hover"
            >
              <StrengthCard
                strength={strengths[0]}
                iconVariants={iconVariants}
                featureVariants={featureVariants}
                index={1}
              />
            </motion.div>

            {/* Position 2 - Top Right (small) */}
            <motion.div
              className="col-span-2 row-span-1"
              // @ts-expect-error - ignore
              variants={cardVariants}
              whileHover="hover"
            >
              <StrengthCard
                strength={strengths[1]}
                iconVariants={iconVariants}
                featureVariants={featureVariants}
                index={2}
              />
            </motion.div>

            {/* Position 4 - Bottom Left (small) */}
            <motion.div
              className="col-span-2 row-span-1"
              // @ts-expect-error - ignore
              variants={cardVariants}
              whileHover="hover"
            >
              <StrengthCard
                strength={strengths[2]}
                iconVariants={iconVariants}
                featureVariants={featureVariants}
                index={3}
              />
            </motion.div>

            {/* Position 3 - Bottom Right (large) */}
            <motion.div
              className="col-span-3 row-span-1"
              // @ts-expect-error - ignore
              variants={cardVariants}
              whileHover="hover"
            >
              <StrengthCard
                strength={strengths[3]}
                iconVariants={iconVariants}
                featureVariants={featureVariants}
                index={4}
              />
            </motion.div>
          </div>

          {/* Mobile Layout (below md) - Simple vertical stack */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                // @ts-expect-error - ignore
                variants={cardVariants}
                whileHover="hover"
              >
                <StrengthCard
                  strength={strength}
                  iconVariants={iconVariants}
                  featureVariants={featureVariants}
                  index={4}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge Section */}
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

// Extracted Card Component for cleaner code
const StrengthCard = ({
  strength,
  iconVariants,
  featureVariants,
  index,
}: {
  strength: {
    icon: React.JSX.Element;
    title: string;
    description: string;
    features: string[];
    color: string;
    bgColor: string;
    borderColor: string;
    stats: string;
    delay: number;
    position: number;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconVariants: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  featureVariants: any;
  index: number;
}) => {
  const isRow = index === 1 || index === 4;

  return (
    <div className="group relative h-full">
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
        <div
          className={`relative z-10 ${
            isRow ? "mb-4 lg:mb-0 lg:mr-6 flex-shrink-0" : "mb-4 lg:mb-6"
          } flex items-start lg:items-center`}
          style={isRow ? { minWidth: 72 } : undefined}
        >
          <motion.div
            className={`inline-flex p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-gradient-to-br ${strength.color} text-white shadow-lg`}
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
        <div
          className={`relative z-10 flex-1 flex  ${
            isRow ? "flex-col md:flex-row " : "flex-col"
          }`}
        >
          <div
            className={` ${isRow ? "w-full md:w-1/2 pt-5 md:pr-5" : "w-full"}`}
          >
            <motion.h3
              className="text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 lg:mb-3 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300"
              whileHover={{ x: 2 }}
            >
              {strength.title}
            </motion.h3>

            <motion.p
              className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 lg:mb-6 flex-1"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {strength.description}
            </motion.p>
          </div>

          {/* Features List */}
          <motion.ul className={`space-y-2 lg:space-y-3 ${isRow && "pt-5"}`}>
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
                  <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                </motion.div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default OurStrengths2;

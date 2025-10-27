"use client";
import { manHook } from "@/lib/constants/images";
import { motion, useInView } from "framer-motion";
import {
  CheckSquare,
  LucideIcon,
  Palette,
  Ruler,
  Scissors,
  Shirt,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/shared/home/SectionHeader";
import Lottie from "lottie-react";

interface ManufacturingFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
  isInView: boolean;
  hoveredFeature: string | null;
  setHoveredFeature: (id: string | null) => void;
}

interface FeatureCardProps {
  feature: ManufacturingFeature;
  index: number;
  isInView: boolean;
  hoveredFeature: string | null;
  setHoveredFeature: (id: string | null) => void;
}

const MANUFACTURING_FEATURES: ManufacturingFeature[] = [
  {
    id: "feature-1",
    title: "Fashion Sourcing",
    description: "Complete end-to-end sourcing management",
    icon: "🔍",
  },
  {
    id: "feature-2",
    title: "Production Management",
    description: "Seamless coordination of your clothing lines",
    icon: "⚙️",
  },
  {
    id: "feature-3",
    title: "Ethical Facilities",
    description: "Verified ethical manufacturing facilities",
    icon: "✓",
  },
  {
    id: "feature-4",
    title: "Certified Networks",
    description: "Trusted certified supplier networks",
    icon: "🏭",
  },
];

const PROCESS_STEPS: ProcessStep[] = [
  { id: "process-1", name: "Design & Concept", icon: Palette },
  { id: "process-2", name: "Fabric Selection", icon: ShoppingBag },
  { id: "process-3", name: "Pattern Making", icon: Ruler },
  { id: "process-4", name: "Cutting", icon: Scissors },
  { id: "process-5", name: "Sewing & Assembly", icon: Shirt },
  { id: "process-6", name: "Quality Check", icon: CheckSquare },
  { id: "process-7", name: "Finishing & Packaging", icon: Sparkles },
  { id: "process-8", name: "Delivery", icon: Truck },
];

const ProcessCard = memo<ProcessCardProps>(
  ({ step, index, isInView, hoveredFeature, setHoveredFeature }) => {
    const isHovered = hoveredFeature === step.id;
    const Icon = step.icon;

    return (
      <motion.div
        className="relative flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        onHoverStart={() => setHoveredFeature(step.id)}
        onHoverEnd={() => setHoveredFeature(null)}
      >
        <div className="w-full md:w-48 lg:w-52"> {/* Reduced width */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 via-emerald-400 to-teal-400 blur-lg" // Reduced blur
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 0.6 : 0,
              scale: isHovered ? 1.1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="relative aspect-square bg-slate-50 dark:bg-slate-900 rounded-lg md:rounded-xl border-2 border-slate-700 dark:border-slate-800 shadow-md dark:shadow-lg flex flex-col items-center justify-center p-2 overflow-hidden min-h-20 group" // Reduced padding and border
            animate={{
              scale: isHovered ? 1.05 : 1,
              borderColor: isHovered ? "#14b8a6" : "#334155",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-teal-500/10"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-1 right-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-[8px] md:text-[10px] font-bold shadow-sm z-10" // Smaller number badge
              animate={{ scale: isHovered ? 1.2 : 1 }}
            >
              {index + 1}
            </motion.div>
            <motion.div
              className="relative z-10 text-teal-500 mb-1" // Reduced margin
              animate={{
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <Icon
                size={16} // Smaller icon
                className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" // Reduced icon sizes
              />
            </motion.div>
            <h4 className="relative z-10 text-xs sm:text-sm md:text-base font-semibold text-teal-950 group-hover:text-[#10b981] dark:text-white text-center leading-tight px-0.5 transition-colors duration-500"> {/* Smaller text */}
              {step.name}
            </h4>
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

ProcessCard.displayName = "ProcessCard";

const FeatureCard = memo<FeatureCardProps>(
  ({ feature, index, isInView, hoveredFeature, setHoveredFeature }) => {
    const isHovered = hoveredFeature === feature.id;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
        onHoverStart={() => setHoveredFeature(feature.id)}
        onHoverEnd={() => setHoveredFeature(null)}
        whileHover={{ scale: 1.05, y: -8 }}
        className="relative"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
          className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <motion.div
            animate={{
              scale: isHovered ? 1.5 : 1,
              boxShadow: isHovered
                ? "0 0 20px rgba(6, 182, 212, 0.6)"
                : "0 0 0px rgba(6, 182, 212, 0)",
            }}
            className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 border-2 border-white dark:border-slate-900"
          />
        </motion.div>
        <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-lg hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 rounded-2xl border-2 border-cyan-400 dark:border-cyan-500"
          />
          <div className="relative z-10 text-center">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              className="text-4xl md:text-5xl mb-4"
            >
              {feature.icon}
            </motion.div>
            <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
              {feature.title}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {feature.description}
            </p>
          </div>
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">
            {index + 1}
          </div>
        </div>
      </motion.div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export default function Quality() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [animationData, setAnimationData] = useState(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSetHoveredFeature = useCallback(
    (id: string | null) => setHoveredFeature(id),
    []
  );

  useEffect(() => {
    fetch("/lottie/Production.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((error) => console.error("Failed to load Lottie animation:", error));
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-100 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 md:space-y-24">
          <div className="relative">
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                badge="Our Process"
                title="Clothing Manufacturing Process"
                highlightText="Manufacturing Process"
                description="We follow Easiest Clothing Manufacturing Process that is trusted by Fashion Brands. We do all of the work of Fashion Sourcing. We handle the entire end-to-end sourcing and production management for you clothing lines."
              />

              <div className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-200 via-emerald-200 to-teal-200 dark:from-cyan-800 dark:via-emerald-800 dark:to-teal-800 -translate-y-1/2" />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative max-w-6xl mx-auto">
                  {MANUFACTURING_FEATURES.map((feature, index) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      index={index}
                      isInView={isInView}
                      hoveredFeature={hoveredFeature}
                      setHoveredFeature={handleSetHoveredFeature}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="py-6 md:py-16 max-w-7xl w-11/12 mx-auto md:px-16"
      >
        <div className="relative w-auto h-64 md:h-96 mx-auto bg-transparent rounded-2xl shadow-xl overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src={manHook} height={640} width={640} alt="Man" />
          </div>
        </div>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Inner Process"
          title="How We Make It"
          highlightText="Make"
          description="We take your clothing lines from design and fabric selection to pattern making, cutting, sewing, quality checks, finishing, and packaging."
        />

        <div className="relative max-w-7xl mx-auto">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="flowGrad">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0">
                  <animate
                    attributeName="offset"
                    values="0;1;0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.9">
                  <animate
                    attributeName="offset"
                    values="0;1;0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0">
                  <animate
                    attributeName="offset"
                    values="0;1;0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            <motion.path
              d="M 16 16 L 50 16 L 84 16 L 84 50 L 84 84 L 50 84 L 16 84 L 16 50 Z"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />

            <motion.path
              d="M 16 16 L 50 16 L 84 16 L 84 50 L 84 84 L 50 84 L 16 84 L 16 50 Z"
              fill="none"
              stroke="url(#flowGrad)"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 1 }}
            />

            {[
              { x: 16, y: 16 },
              { x: 50, y: 16 },
              { x: 84, y: 16 },
              { x: 84, y: 50 },
              { x: 84, y: 84 },
              { x: 50, y: 84 },
              { x: 16, y: 84 },
              { x: 16, y: 50 },
            ].map((pos, i) => (
              <motion.circle
                key={i}
                cx={pos.x}
                cy={pos.y}
                r="1"
                className="fill-cyan-400 dark:fill-cyan-300"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
              />
            ))}
          </svg>

          <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4 relative z-10 md:place-items-center"> {/* Reduced gaps */}
            {PROCESS_STEPS.slice(0, 3).map((step, idx) => (
              <ProcessCard
                key={step.id}
                step={step}
                index={idx}
                isInView={isInView}
                hoveredFeature={hoveredFeature}
                setHoveredFeature={handleSetHoveredFeature}
              />
            ))}

            <ProcessCard
              step={PROCESS_STEPS[7]}
              index={7}
              isInView={isInView}
              hoveredFeature={hoveredFeature}
              setHoveredFeature={handleSetHoveredFeature}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative aspect-square bg-transparent rounded-lg md:rounded-xl flex flex-col items-center justify-center overflow-hidden md:col-span-1" // Reduced border radius
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-transparent"
              />

              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                {animationData ? (
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative">
                      <div className="w- h-16 md:w-20 md:h-20 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-teal-600 rounded-full animate-ping"></div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <ProcessCard
              step={PROCESS_STEPS[3]}
              index={3}
              isInView={isInView}
              hoveredFeature={hoveredFeature}
              setHoveredFeature={handleSetHoveredFeature}
            />

            {[6, 5, 4].map((stepIdx) => (
              <ProcessCard
                key={PROCESS_STEPS[stepIdx].id}
                step={PROCESS_STEPS[stepIdx]}
                index={stepIdx}
                isInView={isInView}
                hoveredFeature={hoveredFeature}
                setHoveredFeature={handleSetHoveredFeature}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import {
  FeatureCardProps,
  ProcessCardProps,
  SERVICE_FEATURES,
  SERVICE_PROCESSES,
} from "@/lib/data/mockData";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Monitor } from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import AnimatedButton from "../AnimatedButton";

// Components
const ProcessCard = memo<ProcessCardProps>(
  ({ step, index, isInView, hoveredFeature, setHoveredFeature, isActive }) => {
    const isHovered = hoveredFeature === step.id;
    const Icon = step.icon;

    return (
      <div
        className="relative flex justify-center"
        onMouseEnter={() => setHoveredFeature(step.id)}
        onMouseLeave={() => setHoveredFeature(null)}
      >
        <div className="w-full md:w-48 lg:w-52">
          {/* Hover glow effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-xl blur-xl pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${step.color}66, ${step.color}33)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative aspect-square bg-white dark:bg-slate-900 rounded-xl border-2 shadow-lg flex flex-col items-center justify-center p-3 overflow-hidden min-h-20"
            style={{
              borderColor: isHovered || isActive ? step.color : "#e2e8f0",
              transition: "border-color 0.2s ease",
            }}
          >
            {/* Background tint */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-200"
              style={{
                background: `linear-gradient(135deg, ${step.color}15, transparent)`,
                opacity: isHovered || isActive ? 1 : 0,
              }}
            />

            {/* Step number */}
            <div
              className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md z-10 transition-transform duration-200"
              style={{
                backgroundColor: step.color,
                transform: isHovered || isActive ? "scale(1.15)" : "scale(1)",
              }}
            >
              {index + 1}
            </div>

            {/* Icon */}
            <div
              className="relative z-10 mb-2 transition-transform duration-200"
              style={{
                color: step.color,
                transform: isHovered || isActive ? "scale(1.15)" : "scale(1)",
              }}
            >
              <Icon size={20} className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            {/* Title */}
            <h4
              className="relative z-10 text-xs sm:text-sm md:text-base font-semibold text-slate-800 dark:text-white text-center leading-tight px-1 transition-colors duration-200"
              style={{
                color: isHovered || isActive ? step.color : undefined,
              }}
            >
              {step.name}
            </h4>

            {/* Active glow indicator */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  boxShadow: `0 0 0 3px ${step.color}`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            )}
          </motion.div>
        </div>
      </div>
    );
  }
);

ProcessCard.displayName = "ProcessCard";

const FeatureCard = memo<FeatureCardProps>(
  ({
    feature,
    index,
    isInView,
    hoveredFeature,
    setHoveredFeature,
    isSelected,
    onSelect,
  }) => {
    const isHovered = hoveredFeature === feature.id;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ delay: 0.6 + index * 0.08, duration: 0.3 }}
        onMouseEnter={() => setHoveredFeature(feature.id)}
        onMouseLeave={() => setHoveredFeature(null)}
        onClick={onSelect}
        className="relative cursor-pointer"
        style={{
          transform: isHovered
            ? "translateY(-4px) scale(1.02)"
            : "translateY(0) scale(1)",
          transition: "transform 0.2s ease",
        }}
      >
        {/* Top connection dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            delay: 0.8 + index * 0.08,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div
            className={`w-4 h-4 rounded-full bg-gradient-to-r ${feature.gradient} border-2 border-white dark:border-slate-900 transition-all duration-200`}
            style={{
              transform: isHovered || isSelected ? "scale(1.3)" : "scale(1)",
              boxShadow:
                isHovered || isSelected
                  ? "0 0 12px rgba(139, 92, 246, 0.5)"
                  : "none",
            }}
          />
        </motion.div>

        <div
          className={`relative h-full p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 shadow-lg overflow-hidden transition-all duration-200`}
          style={{
            borderColor: isSelected ? "#a855f7" : "#e2e8f0",
            boxShadow: isHovered
              ? "0 10px 30px -10px rgba(0,0,0,0.2)"
              : "0 4px 6px -1px rgba(0,0,0,0.1)",
          }}
        >
          {/* Background gradient */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} pointer-events-none transition-opacity duration-200`}
            style={{ opacity: isHovered || isSelected ? 0.05 : 0 }}
          />

          <div className="relative z-10 text-center">
            <div
              className="text-4xl md:text-5xl mb-4 transition-transform duration-200"
              style={{
                transform: isHovered || isSelected ? "scale(1.1)" : "scale(1)",
              }}
            >
              {feature.icon}
            </div>
            <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
              {feature.title}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {feature.description}
            </p>
          </div>

          {/* Index badge */}
          <div
            className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white text-sm font-bold shadow-lg`}
          >
            {index + 1}
          </div>

          {/* Selected checkmark */}
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="absolute top-3 left-3 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
            >
              <CheckCircle className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

// Main Component
export default function DigitalServices() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<string>("web-design");
  const [animationKey, setAnimationKey] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSetHoveredFeature = useCallback(
    (id: string | null) => setHoveredFeature(id),
    []
  );

  const currentProcesses = SERVICE_PROCESSES[selectedService];
  const currentService = SERVICE_FEATURES.find((s) => s.id === selectedService);
  const ServiceIcon = currentService?.serviceIcon || Monitor;

  // Reset animation when service changes
  useEffect(() => {
    setActiveStep(0);
    setAnimationKey((prev) => prev + 1);
  }, [selectedService]);
  useEffect(() => {
    setActiveStep(0);
    setAnimationKey((prev) => prev + 1);
  }, []);

  // Synchronized step progression - 2 seconds per step
  useEffect(() => {
    if (!isInView) return;

    const stepInterval = 2000; // Each step takes exactly 2 seconds
    const totalSteps = 8;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, stepInterval);

    return () => clearInterval(interval);
  }, [isInView, animationKey]);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Static background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 md:space-y-24">
          {/* Services Section */}
          <div className="relative">
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                badge="Our Services"
                title="Digital Solutions That Transform"
                highlightText="Solutions ,Transform"
                description="We deliver comprehensive digital services from web design and video production to image editing and strategic marketing campaigns that elevate your brand."
              />

              <div className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 dark:from-cyan-800 dark:via-teal-800 dark:to-blue-800 -translate-y-1/2" />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative max-w-6xl mx-auto">
                  {SERVICE_FEATURES.map((feature, index) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      index={index}
                      isInView={isInView}
                      hoveredFeature={hoveredFeature}
                      setHoveredFeature={handleSetHoveredFeature}
                      isSelected={selectedService === feature.id}
                      onSelect={() => setSelectedService(feature.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="relative">
            <SectionHeader
              badge="Our Process"
              title={`${currentService?.title} Process`}
              highlightText={currentService?.title}
              description={`From concept to completion, we follow a proven ${currentService?.title.toLowerCase()} process that ensures outstanding results every time.`}
            />

            <div className="relative max-w-7xl mx-auto">
              {/* SVG Path Animation */}
              <svg
                key={`svg-${animationKey}`}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="baseLine"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient
                    id="activeLine"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* Base path */}
                <path
                  d="M 16 16 L 50 16 L 84 16 L 84 50 L 84 84 L 50 84 L 16 84 L 16 50 Z"
                  fill="none"
                  stroke="url(#baseLine)"
                  strokeWidth="0.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Animated traveling line segment */}
                <motion.path
                  d="M 16 16 L 50 16 L 84 16 L 84 50 L 84 84 L 50 84 L 16 84 L 16 50 Z"
                  fill="none"
                  stroke="url(#activeLine)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0.02, pathOffset: 0 }}
                  animate={{ pathOffset: 1 }}
                  style={{ pathLength: 0.07 }}
                  transition={{
                    pathOffset: {
                      duration: 16.5,
                      ease: "linear",
                      repeat: Infinity,
                    },
                  }}
                />

                {/* Node circles - 8 positions */}
                {[
                  { x: 16, y: 16, idx: 0 },
                  { x: 50, y: 16, idx: 1 },
                  { x: 84, y: 16, idx: 2 },
                  { x: 84, y: 50, idx: 3 },
                  { x: 84, y: 84, idx: 4 },
                  { x: 50, y: 84, idx: 5 },
                  { x: 16, y: 84, idx: 6 },
                  { x: 16, y: 50, idx: 7 },
                ].map((pos) => (
                  <circle
                    key={pos.idx}
                    cx={pos.x}
                    cy={pos.y}
                    r={activeStep === pos.idx ? "1.8" : "1"}
                    className="fill-cyan-500 dark:fill-sky-700 transition-all duration-150"
                    style={{
                      opacity: activeStep === pos.idx ? 1 : 0.6,
                    }}
                  />
                ))}
              </svg>

              {/* Process Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative z-10 md:place-items-center">
                {/* Top row: 0, 1, 2 */}
                {currentProcesses.slice(0, 3).map((step, idx) => (
                  <ProcessCard
                    key={`${selectedService}-${step.id}`}
                    step={step}
                    index={idx}
                    isInView={isInView}
                    hoveredFeature={hoveredFeature}
                    setHoveredFeature={handleSetHoveredFeature}
                    isActive={activeStep === idx}
                  />
                ))}

                {/* Middle row: 7, center icon, 3 */}
                <ProcessCard
                  key={`${selectedService}-${currentProcesses[7].id}`}
                  step={currentProcesses[7]}
                  index={7}
                  isInView={isInView}
                  hoveredFeature={hoveredFeature}
                  setHoveredFeature={handleSetHoveredFeature}
                  isActive={activeStep === 7}
                />

                {/* Center Service Icon */}
                <motion.div
                  key={`icon-${selectedService}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className={`relative aspect-square bg-gradient-to-br ${currentService?.gradient} rounded-xl flex items-center justify-center overflow-hidden shadow-2xl`}
                >
                  <div className="relative z-10">
                    <ServiceIcon className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" />
                  </div>
                </motion.div>

                <ProcessCard
                  key={`${selectedService}-${currentProcesses[3].id}`}
                  step={currentProcesses[3]}
                  index={3}
                  isInView={isInView}
                  hoveredFeature={hoveredFeature}
                  setHoveredFeature={handleSetHoveredFeature}
                  isActive={activeStep === 3}
                />

                {/* Bottom row: 6, 5, 4 */}
                {[6, 5, 4].map((stepIdx) => (
                  <ProcessCard
                    key={`${selectedService}-${currentProcesses[stepIdx].id}`}
                    step={currentProcesses[stepIdx]}
                    index={stepIdx}
                    isInView={isInView}
                    hoveredFeature={hoveredFeature}
                    setHoveredFeature={handleSetHoveredFeature}
                    isActive={activeStep === stepIdx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AnimatedButton
          text="Explore All Services"
          icon={ArrowRight}
          className="px-20 mt-10 md:mt-20"
          href="/services"
          // href="https://BluePixel.vercel.app/"
        />
      </div>
    </section>
  );
}

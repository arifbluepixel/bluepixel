"use client";

import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import { useRef, useState, useEffect } from "react";
import {
  FaFilm,
  FaBullhorn,
  FaHandHoldingHeart,
  FaHeartbeat,
  FaGraduationCap,
  FaChild,
} from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { GrayContainer } from "@/components/shared/PageSections";

const industries = [
  {
    id: 1,
    category: "Entertainment",
    icon: FaFilm,
    color: "from-sky-500 to-blue-500",
    description: "Films, TV & Streaming",
  },
  {
    id: 2,
    category: "Commercial",
    icon: FaBullhorn,
    color: "from-blue-500 to-cyan-500",
    description: "Marketing & Advertising",
  },
  {
    id: 3,
    category: "Non Profit",
    icon: FaHandHoldingHeart,
    color: "from-cyan-500 to-sky-500",
    description: "Social Impact Stories",
  },
  {
    id: 4,
    category: "Healthcare",
    icon: FaHeartbeat,
    color: "from-blue-600 to-indigo-500",
    description: "Medical & Wellness",
  },
  {
    id: 5,
    category: "Educational",
    icon: FaGraduationCap,
    color: "from-sky-400 to-blue-600",
    description: "Learning & Training",
  },
  {
    id: 6,
    category: "Kids",
    icon: FaChild,
    color: "from-indigo-500 to-blue-500",
    description: "Children's Content",
  },
];

const IndustriesWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 5;
    if (window.innerWidth >= 1280) return 5;
    if (window.innerWidth >= 768) return 3;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + industries.length) % industries.length
    );
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesPerView; i++) {
      const index = (currentIndex + i) % industries.length;
      slides.push({
        ...industries[index],
        displayIndex: i,
        actualIndex: index,
      });
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();
  const centerIndex = Math.floor(slidesPerView / 2);

  return (
    <GrayContainer>
      <div className="w-11/12 max-w-7xl mx-auto py-12 md:py-16 ">
        {/* Header */}
        <PageSectionHeader
          badge="Our Expertise"
          title="Industries We Specialize In"
          description="Bringing creativity and innovation across diverse sectors"
        />

        {/* Custom Slider */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative mt-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Film strip decoration top with light effect */}
          <div className="absolute -top-8 left-0 right-0 h-6 bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-20 overflow-hidden">
            <div className="flex justify-around h-full items-center px-4 relative">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-3 h-4 bg-slate-700 rounded-sm" />
              ))}
              {/* Animated light sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                }}
              />
            </div>
          </div>

          {/* Film strip decoration bottom with light effect */}
          <div className="absolute -bottom-8 left-0 right-0 h-6 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-20 overflow-hidden">
            <div className="flex justify-around h-full items-center px-4 relative">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-3 h-4 bg-slate-700 rounded-sm" />
              ))}
              {/* Animated light sweep (delayed) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                  delay: 1.5,
                }}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-sky-500 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-sky-500 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden py-8 px-12">
            <div className="flex gap-6 justify-center items-center">
              {visibleSlides.map((industry, idx) => {
                const Icon = industry.icon;
                const isCenter = idx === centerIndex;

                return (
                  <motion.div
                    key={`${industry.actualIndex}-${idx}`}
                    layout
                    animate={{
                      opacity: isCenter ? 1 : 0.6,
                      scale: isCenter ? 1.05 : 0.9,
                      y: isCenter ? -8 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      layout: { duration: 0.4 },
                    }}
                    className={`flex-shrink-0 ${
                      slidesPerView === 5
                        ? "w-[18%]"
                        : slidesPerView === 3
                        ? "w-[30%]"
                        : "w-[85%]"
                    } ${isCenter ? "z-10" : "z-0"}`}
                  >
                    {/* Card */}
                    <div
                      className={`relative bg-white rounded-2xl p-8 h-80 flex flex-col items-center justify-center transition-all duration-400 overflow-hidden ${
                        isCenter
                          ? "shadow-2xl border-2 border-slate-200"
                          : "shadow-lg border border-slate-100"
                      }`}
                    >
                      {/* Background gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          industry.color
                        } ${
                          isCenter ? "opacity-10" : "opacity-5"
                        } transition-opacity duration-400`}
                      />

                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-bl-full opacity-50" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-100 to-transparent rounded-tr-full opacity-50" />

                      {/* Icon container with gradient */}
                      <motion.div
                        animate={{
                          rotate: isCenter ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isCenter ? Infinity : 0,
                          repeatType: "reverse",
                        }}
                        className={`relative mb-6 p-6 rounded-2xl bg-gradient-to-br ${
                          industry.color
                        } ${
                          isCenter
                            ? "shadow-xl scale-110"
                            : "shadow-md scale-100"
                        } transition-all duration-400`}
                      >
                        {/* Glow effect */}
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                            industry.color
                          } blur-xl ${
                            isCenter ? "opacity-75" : "opacity-50"
                          } transition-opacity duration-300`}
                        />
                        <Icon className="relative text-white w-16 h-16" />
                      </motion.div>

                      {/* Text content */}
                      <div className="relative text-center space-y-2">
                        <h3
                          className={`text-2xl font-bold bg-gradient-to-br ${
                            industry.color
                          } bg-clip-text text-transparent ${
                            isCenter ? "scale-105" : "scale-100"
                          } transition-transform duration-300`}
                        >
                          {industry.category}
                        </h3>
                        <p
                          className={`text-sm text-slate-600 ${
                            isCenter
                              ? "opacity-100 font-medium"
                              : "opacity-60 font-normal"
                          } transition-all duration-300`}
                        >
                          {industry.description}
                        </p>
                      </div>

                      {/* Bottom accent line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                          industry.color
                        } ${
                          isCenter
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0"
                        } transition-all duration-400`}
                      />
                    </div>

                    {/* Film frame effect */}
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -inset-2 border-4 border-slate-300 rounded-2xl pointer-events-none"
                      >
                        {/* Corner details */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 bg-slate-400 rounded-full" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-slate-400 rounded-full" />
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-slate-400 rounded-full" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-slate-400 rounded-full" />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {industries.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-sky-500"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-slate-200 text-lg">
            Trusted by{" "}
            <span className="font-bold text-slate-900 dark:text-emerald-400">
              500+ clients
            </span>{" "}
            across multiple industries worldwide
          </p>
        </motion.div>
      </div>
    </GrayContainer>
  );
};

export default IndustriesWeWork;

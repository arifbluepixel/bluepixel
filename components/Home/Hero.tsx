"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TITLES } from "@/lib/data/mockData";
import {
  bgLeftVariants,
  bgMobileVariants,
  bgRightVariants,
  heroContentVariants,
} from "@/lib/constants/animation";

// Fallback gradient if image fails to load
const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
];

export default function Hero() {
  const [slides, setSlides] = useState(TITLES);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageErrors] = useState(new Set());

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlides((prev) => {
      const newSlides = [...prev];
      const first = newSlides.shift();
      // @ts-expect-error - ignore for now
      newSlides.push(first);
      return newSlides;
    });
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlides((prev) => {
      const newSlides = [...prev];
      const last = newSlides.pop();
      // @ts-expect-error - ignore for now
      newSlides.unshift(last);
      return newSlides;
    });
    setTimeout(() => setIsAnimating(false), 800);
  };

  // @ts-expect-error - ignore for now
  const handleSlideClick = (index) => {
    if (isAnimating || index === 1) return;

    if (index === 0) {
      handlePrev();
    } else if (index === 2) {
      handleNext();
    }
  };

  // @ts-expect-error - ignore for now
  const getSlidePosition = (index) => {
    if (index === 0) {
      return {
        left: "5%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "280px",
        height: "400px",
        zIndex: 2,
      };
    }
    if (index === 1) {
      return {
        left: "50%",
        top: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        width: "350px",
        height: "450px",
        zIndex: 3,
      };
    }
    if (index === 2) {
      return {
        right: "5%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "280px",
        height: "400px",
        zIndex: 2,
      };
    }
    return null;
  };

  const currentSlide = slides[1];
  const bgImage = currentSlide.bgImage || currentSlide.image;
  const bgFallback =
    FALLBACK_GRADIENTS[TITLES.findIndex((t) => t.id === currentSlide.id)];
  const finalBgImage = imageErrors.has(currentSlide.id)
    ? bgFallback
    : `url(${bgImage})`;

  return (
    <section className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-500 z-10">
      {/* Background Images - Split Screen */}
      <div className="absolute inset-0 z-0">
        {/* Desktop/Tablet: Left & Right Split */}
        <div className="hidden md:block absolute inset-0">
          {/* Left Background */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${currentSlide.id}`}
              // @ts-expect-error - ignore for now
              variants={bgLeftVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
              style={{
                backgroundImage: finalBgImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent dark:from-black/60 dark:via-black/40" />
            </motion.div>
          </AnimatePresence>

          {/* Right Background */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${currentSlide.id}`}
              // @ts-expect-error - ignore for now
              variants={bgRightVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
              style={{
                backgroundImage: finalBgImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/30 to-transparent dark:from-black/60 dark:via-black/40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Full Height Expansion with Enhanced Blur */}
        <div className="md:hidden absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${currentSlide.id}`}
              // @ts-expect-error - ignore for now
              variants={bgMobileVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
              style={{
                backgroundImage: finalBgImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "blur(8px)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 dark:from-black/90 dark:via-black/60 dark:to-black/40" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-lg"
              >
                <motion.h1
                  custom={0}
                  // @ts-expect-error - ignore for now
                  variants={heroContentVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-tight leading-tight"
                >
                  {currentSlide.title}
                </motion.h1>

                <motion.p
                  custom={1}
                  // @ts-expect-error - ignore for now
                  variants={heroContentVariants}
                  className="text-base sm:text-lg lg:text-xl text-gray-100 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed"
                >
                  {currentSlide.card?.description}
                </motion.p>

                <motion.div
                  custom={2}
                  // @ts-expect-error - ignore for now
                  variants={heroContentVariants}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/80 dark:bg-gray-100 backdrop-blur-sm text-gray-900 dark:text-gray-950 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-sm sm:text-base"
                  >
                    {currentSlide.card.cta}
                  </motion.button>
                </motion.div>

                {/* Indicator Dots - Mobile */}
                <motion.div
                  custom={3}
                  // @ts-expect-error - ignore for now
                  variants={heroContentVariants}
                  className="flex gap-2 mt-6 sm:mt-8 lg:hidden"
                >
                  {slides.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 rounded-full transition-all ${
                        idx === 1 ? "w-6 bg-white" : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Slide Stack - Desktop Only */}
          <div className="relative h-96 sm:h-[500px] lg:h-[550px] pb-20 order-1 lg:order-2 hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {slides.map((slide, index) => {
                const position = getSlidePosition(index);

                if (!position) return null;

                const cardImage = slide.image;
                const hasError = imageErrors.has(slide.id);
                const cardFallback =
                  FALLBACK_GRADIENTS[
                    TITLES.findIndex((t) => t.id === slide.id)
                  ];
                const finalCardBg = hasError
                  ? cardFallback
                  : `url(${cardImage})`;

                return (
                  <motion.div
                    key={slide.id}
                    initial={false}
                    animate={position}
                    transition={{
                      duration: 0.8,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    onClick={() => handleSlideClick(index)}
                    className={`absolute overflow-hidden shadow-2xl rounded-xl lg:rounded-2xl border border-white/10 dark:border-gray-800 ${
                      index !== 1
                        ? "cursor-pointer hover:shadow-3xl"
                        : "shadow-2xl"
                    } transition-shadow duration-300`}
                    whileHover={index !== 1 ? { scale: 1.05 } : {}}
                    style={{
                      backgroundImage: finalCardBg,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {index === 1 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent dark:from-black/80" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 lg:gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                disabled={isAnimating}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-white/15 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 flex items-center justify-center hover:bg-white/25 dark:hover:bg-white/15 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={isAnimating}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-white/15 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 flex items-center justify-center hover:bg-white/25 dark:hover:bg-white/15 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Mobile Carousel - Simplified */}
          <div className="relative h-64 sm:h-80 lg:hidden order-1 w-full pb-16">
            <div className="relative w-full h-full flex items-center justify-center">
              {slides.map((slide, index) => {
                if (index !== 1) return null;

                const cardImage = slide.image;
                const hasError = imageErrors.has(slide.id);
                const cardFallback =
                  FALLBACK_GRADIENTS[
                    TITLES.findIndex((t) => t.id === slide.id)
                  ];
                const finalCardBg = hasError
                  ? cardFallback
                  : `url(${cardImage})`;

                return (
                  <motion.div
                    key={slide.id}
                    initial={false}
                    className="absolute inset-0 overflow-hidden rounded-xl shadow-xl"
                    style={{
                      backgroundImage: finalCardBg,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent dark:from-black/70 dark:via-black/40" />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                disabled={isAnimating}
                className="w-10 h-10 rounded-lg bg-white/20 dark:bg-white/15 backdrop-blur-sm border border-white/30 dark:border-white/20 flex items-center justify-center hover:bg-white/30 dark:hover:bg-white/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={isAnimating}
                className="w-10 h-10 rounded-lg bg-white/20 dark:bg-white/15 backdrop-blur-sm border border-white/30 dark:border-white/20 flex items-center justify-center hover:bg-white/30 dark:hover:bg-white/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

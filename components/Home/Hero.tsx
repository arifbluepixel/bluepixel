"use client";

import {
  appearFromNothing,
  appearFromNothingToY,
  showAndVanish,
} from "@/lib/constants/animation";
import { heroVideo } from "@/lib/constants/files";
import { TITLES } from "@/lib/data/mockData";
import { HeroCard } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Fixed offsets to prevent hydration mismatch
const TITLE_OFFSETS = [
  { offsetX: -4, offsetY: -0.5 },
  { offsetX: 3, offsetY: 0.8 },
  { offsetX: -2, offsetY: -0.3 },
  { offsetX: 5, offsetY: 0.5 },
  { offsetX: -3.5, offsetY: 0.2 },
];

// Animation variants

const titleItemVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    y: [80, 0, -60],
    opacity: [0, 1, 0.1],
    scale: [0.8, 1.8, 1.9],
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.95 },
};

const floatingTitleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (isActive: boolean) => ({
    opacity: isActive ? 1 : 0.7,
    y: 0,
    scale: isActive ? 1 : 0.96,
  }),
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setShowVideo(true);
      setAnimationComplete(true);
    }
  }, []);

  // Auto-rotate titles every 5s
  useEffect(() => {
    if (!animationComplete) return;

    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % TITLES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [animationComplete]);

  const activeCard: HeroCard = TITLES[activeIndex].card;

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 dark:bg-gray-900 mt-16">
      {/* Initial greenish-blue overlay with title animation */}
      <AnimatePresence>
        {!animationComplete && (
          <motion.div
            variants={showAndVanish}
            initial="initial"
            exit="exit"
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-teal-400 via-cyan-500 to-sky-600 dark:from-teal-500 dark:via-cyan-600 dark:to-sky-700"
          >
            <div className="max-w-5xl px-6 text-center">
              <motion.ul className="space-y-6">
                {TITLES.map((t, i) => (
                  <motion.li
                    key={t.id}
                    variants={titleItemVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                      duration: 1.5,
                      delay: i * 0.3,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    onAnimationComplete={() => {
                      if (i === TITLES.length - 1) {
                        setTimeout(() => {
                          setShowVideo(true);
                          setTimeout(() => setAnimationComplete(true), 20);
                        }, 200);
                      }
                    }}
                    className="text-white font-extrabold drop-shadow-2xl"
                  >
                    <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                      {t.title}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video background */}
      <div className="relative h-[65vh] md:h-[100vh] w-full">
        {showVideo && (
          <motion.video
            variants={appearFromNothing}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideo}
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        )}

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Main content */}
        <AnimatePresence>
          {animationComplete && (
            <motion.div
              variants={appearFromNothing}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 h-full"
            >
              <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8 md:pb-12 lg:pb-28 xl:pb-32">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end">
                  {/* Left: Floating titles */}
                  <div className="flex items-end">
                    <ul className="space-y-2 md:space-y-3 w-full">
                      {TITLES.map((t, i) => {
                        const isActive = i === activeIndex;
                        const offset = TITLE_OFFSETS[i];

                        return (
                          <motion.li
                            key={t.id}
                            variants={floatingTitleVariants}
                            initial="initial"
                            animate="animate"
                            custom={isActive}
                            transition={{
                              duration: 0.5,
                              delay: i * 0.06,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className={`cursor-pointer select-none transition-all duration-300 w-fit ${
                              isActive
                                ? "text-2xl sm:text-3xl md:text-4xl font-bold"
                                : "text-xl sm:text-2xl md:text-3xl font-semibold"
                            }`}
                            onClick={() => setActiveIndex(i)}
                            whileHover={{ scale: 1.03, x: 8 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                              transform: `translate(${offset.offsetX}rem, ${offset.offsetY}rem)`,
                              textShadow: "0 4px 16px rgba(0,0,0,0.7)",
                            }}
                          >
                            <span
                              className={
                                isActive
                                  ? "bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-300 shadow-xs bg-clip-text text-transparent"
                                  : "text-white"
                              }
                            >
                              {t.title}
                            </span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right: Interactive card */}
                  <div className="hidden md:flex justify-center md:justify-end ">
                    <div className="w-full sm:w-96">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeCard.header}
                          variants={cardVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={{
                            duration: 0.45,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="backdrop-blur-lg bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/40 rounded-2xl p-6 shadow-2xl"
                        >
                          <motion.h3
                            variants={appearFromNothingToY}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="text-slate-900 dark:text-white text-xl md:text-2xl font-bold mb-3 leading-tight"
                          >
                            {activeCard.header}
                          </motion.h3>

                          <motion.p
                            variants={appearFromNothingToY}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.15, duration: 0.3 }}
                            className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-5"
                          >
                            {activeCard.description}
                          </motion.p>

                          <motion.div
                            variants={appearFromNothingToY}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className="flex justify-end"
                          >
                            <motion.button
                              whileHover={{ scale: 1.04, y: -2 }}
                              whileTap={{ scale: 0.96 }}
                              className="px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-500 text-white shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 cursor-pointer"
                              aria-label={activeCard.cta}
                            >
                              {activeCard.cta}
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

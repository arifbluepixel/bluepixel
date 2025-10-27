"use client";
import { fashionQuotes } from "@/lib/data/mockData";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export default function GalleryHero() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % fashionQuotes.length);
    }, fashionQuotes[currentQuoteIndex].duration);

    return () => clearTimeout(timer);
  }, [currentQuoteIndex]);

  return (
    <section className="bg-gradient-to-t from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-12 md:py-20 mt-16 md:mt-10">
      <div className=" max-w-7xl w-11/12 mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-2 text-center md:text-left ">
              <p className="text-sm md:text-base uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                Gallery
              </p>
              <h3
                className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent ${playfair.className} pb-2`}
              >
                Our Visual Diary
              </h3>
            </div>
          </motion.div>

          {/* Right Side - Rotating Quotes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-xl">
              {/* Large Quote Icon Background */}
              <Quote className="absolute -top-8 -left-4 md:-left-8 w-16 h-16 text-cyan-500/10 dark:text-cyan-400/10 -z-10" />

              {/* Quote Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-teal-400 to-cyan-600 p-4 rounded-full shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Animated Quote Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuoteIndex}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {/* Quote Text */}
                    <blockquote className="text-xl md:text-2xl font-serif text-gray-800 dark:text-gray-100 text-center leading-relaxed mb-6">
                      &quot;{fashionQuotes[currentQuoteIndex].text}&quot;
                    </blockquote>

                    {/* Author */}
                    <p className=" text-right text-cyan-600 dark:text-cyan-400 font-semibold">
                      — {fashionQuotes[currentQuoteIndex].author}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicator */}
                <div className="mt-8 flex justify-center gap-2">
                  {fashionQuotes.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentQuoteIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-none outline-none ${
                        index === currentQuoteIndex
                          ? "w-8 bg-gradient-to-r from-teal-400 to-cyan-600"
                          : "w-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                      initial={{ scale: 0.8 }}
                      animate={{
                        scale: index === currentQuoteIndex ? 1 : 0.8,
                      }}
                      whileHover={{ scale: 1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Go to quote ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Decorative floating elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-6 -top-6 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 dark:from-cyan-500/20 dark:to-teal-500/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -left-8 -bottom-8 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 dark:from-teal-500/20 dark:to-cyan-500/20 rounded-full blur-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16  h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"
        />
      </div>
    </section>
  );
}

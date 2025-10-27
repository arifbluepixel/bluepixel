"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

const ProductsHero = () => {
  return (
    <section className="py-8 md:py-8 max-w-7xl w-11/12 mx-auto">
      <div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm md:text-base uppercase tracking-widest text-gray-500 dark:text-gray-200 mb-4">
            Crafted with Care
          </p>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 dark:from-teal-200 dark:via-cyan-200 dark:to-emerald-200 bg-clip-text text-transparent mb-6 ${playfair.className}`}
          >
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our wide range of ethically made apparel blending comfort,
            quality, and sustainability to redefine modern fashion with a
            conscience.
          </p>
        </motion.div>
        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16  h-1 bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-400 to-transparent rounded-full"
        />
      </div>
    </section>
  );
};

export default ProductsHero;

"use client";

import { motion } from "framer-motion";
import AnimatedButton from "../shared/AnimatedButton";
import { ArrowRight } from "lucide-react";
import ScrollIndicator from "../ScrollIndicator";
import { useRef } from "react";

const AboutHero = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen w-full overflow-hidden flex items-center pt-16 md:pt-0" // Added padding top for mobile
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/home/about-hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20 md:opacity-30">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-xl opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl opacity-60 animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 text-center text-white py-8 md:py-0">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-6xl space-y-6 md:space-y-8 w-full"
          >
            {/* Main Heading */}
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:leading-tight lg:leading-tight xl:leading-tight mt-4 md:mt-20">
              Where Creativity Meets{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block mt-2 md:mt-0 md:inline">
                Technology
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed px-2 sm:px-0"
            >
              BluePixel transforms visions into stunning visual experiences. We
              specialize in professional image editing, cinematic video
              production, immersive 3D animation, and cutting-edge web
              development.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto pt-6 md:pt-8 px-2 sm:px-0"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
                  5000+
                </div>
                <div className="text-xs sm:text-sm text-gray-200 mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">
                  8+
                </div>
                <div className="text-xs sm:text-sm text-gray-200 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-gray-200 mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
                  5
                </div>
                <div className="text-xs sm:text-sm text-gray-200 mt-1">Creative Services</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center py-6 md:py-10 my-5"
            >
              <AnimatedButton
                text="View Our Services"
                icon={ArrowRight}
                className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 w-full sm:w-auto"
                color="white"
                onClick={scrollToServices}
              />
            </motion.div>
          </motion.div>

          {/* Scroll Indicator - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block mt-8">
            <ScrollIndicator />
          </div>
        </div>
      </motion.section>

      {/* Next Section Anchor */}
      <div ref={nextSectionRef} className="h-0 w-full"></div>
    </>
  );
};

export default AboutHero;
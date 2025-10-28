"use client";

import { motion } from "framer-motion";
import AnimatedButton from "../shared/AnimatedButton";
import { ArrowRight } from "lucide-react";
import ScrollIndicator from "../ScrollIndicator";
import { useRef } from "react";

const AboutHero = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    // Scroll to services section on the same page
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen w-full overflow-hidden"
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
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-xl opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl opacity-60 animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-6xl space-y-8"
          >
            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight">
              Where Creativity Meets{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mx-auto max-w-3xl text-xl md:text-2xl text-gray-200 leading-relaxed"
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
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pt-8"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">
                  5000+
                </div>
                <div className="text-sm text-gray-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">
                  8+
                </div>
                <div className="text-sm text-gray-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400">
                  1000+
                </div>
                <div className="text-sm text-gray-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">
                  5
                </div>
                <div className="text-sm text-gray-200">Creative Services</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <AnimatedButton
                text="View Our Services"
                icon={ArrowRight}
                className="px-8 py-4 text-lg bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30"
                color="white"
                onClick={scrollToServices}
              />
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </div>
      </motion.section>

      {/* Next Section Anchor */}
      <div ref={nextSectionRef} className="h-0 w-full"></div>
    </>
  );
};

export default AboutHero;

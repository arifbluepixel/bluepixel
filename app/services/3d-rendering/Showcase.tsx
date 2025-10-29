"use client";

import { RenderingItem } from "@/lib/types";
import TiltCard from "@/components/shared/Tiltcard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Showcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderings: RenderingItem[] = [
    {
      id: 1,
      imageUrl: "/services/3d-rendering-1.jpg",
      text: "Stunning Product Visualization",
    },
    {
      id: 2,
      imageUrl: "/services/3d-rendering-2.jpg",
      text: "Realistic Architectural Rendering",
    },
    {
      id: 3,
      imageUrl: "/services/3d-rendering-3.jpg",
      text: "High-Quality Interior Design",
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 to-blue-50/30 py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          ref={ref}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 mb-8"
          >
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-[#1A89C7] font-semibold text-sm uppercase tracking-wider">
              Our Portfolio
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-[#1A89C7] rounded-full animate-pulse delay-300"></div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Creative{" "}
            <span 
              className="bg-gradient-to-r from-[#1A89C7] to-blue-600 bg-clip-text text-transparent"
              style={{ color: 'transparent' }}
            >
              Showcase
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our diverse portfolio of digital creations - from stunning 3D visualizations 
            to professional image editing and cutting-edge web development.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderings.map((render, index) => (
            <motion.div
              key={render.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="transition-all duration-300"
            >
              <TiltCard 
                render={render} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{render.text}</h3>
                    <button className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors">
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#1A89C7] to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Bring Your Vision to Life?
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Let&apos;s collaborate on your next creative project. From concept to delivery, 
              we ensure exceptional quality and stunning results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={'/contact-us'} className="px-8 py-3 bg-white text-[#1A89C7] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Start Your Project
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
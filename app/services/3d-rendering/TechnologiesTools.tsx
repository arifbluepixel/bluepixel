"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const tools = [
  {
    id: 1,
    name: "Blender",
    logo: "/services/blender.png",
  },
  {
    id: 2,
    name: "3ds Max",
    logo: "/services/3dsmax.png",
  },
  {
    id: 3,
    name: "Unreal Engine",
    logo: "/services/UnrealEngine.png",
  },
  {
    id: 4,
    name: "Substance Painter",
    logo: "/services/SubstancePainter.png",
  },
  {
    id: 5,
    name: "ZBrush",
    logo: "/services/ZBrushed.png",
  },
  {
    id: 6,
    name: "Maya",
    logo: "/services/mayaed.png",
  },
];

export default function TechnologiesTools() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#1A89C7] to-blue-600">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Our Toolkit
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Technologies &{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Tools
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
          >
            We leverage industry-leading software and cutting-edge tools to deliver exceptional 3D renders and animations.
          </motion.p>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          pagination={false}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            320: { 
              slidesPerView: 2,
              spaceBetween: 20 
            },
            480: { 
              slidesPerView: 2,
              spaceBetween: 20 
            },
            640: { 
              slidesPerView: 3,
              spaceBetween: 25 
            },
            768: { 
              slidesPerView: 4,
              spaceBetween: 25 
            },
            1024: { 
              slidesPerView: 5,
              spaceBetween: 30 
            },
            1280: { 
              slidesPerView: 6,
              spaceBetween: 30 
            },
          }}
          className="pb-16"
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={tool.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-500 group cursor-pointer flex flex-col items-center justify-center w-full h-[200px]" // Fixed height and width
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 mb-4 flex items-center justify-center relative" // Consistent icon size
                  whileHover={{ 
                    rotate: [0, -3, 3, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  {/* Pulsing background effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback text if image fails to load */}
                  <div className="hidden absolute inset-0 flex items-center justify-center text-white font-bold text-xs bg-blue-500/30 rounded-lg backdrop-blur-sm">
                    {tool.name}
                  </div>
                </motion.div>
                
                <div className="flex flex-col items-center justify-center flex-1 min-h-[60px]"> {/* Consistent text container height */}
                  <motion.h3 
                    className="text-lg font-semibold text-white text-center group-hover:text-blue-200 transition-colors duration-300 leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {tool.name}
                  </motion.h3>
                </div>

                {/* Hover Effect Line */}
                <motion.div 
                  className="w-0 h-1 bg-gradient-to-r from-white to-blue-200 rounded-full mt-2 group-hover:w-8 transition-all duration-300"
                  whileHover={{ width: 32 }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="swiper-button-prev w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors duration-300 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors duration-300 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-blue-100 text-lg">
            And many more tools to bring your vision to life
          </p>
        </motion.div>
      </div>
    </section>
  );
}
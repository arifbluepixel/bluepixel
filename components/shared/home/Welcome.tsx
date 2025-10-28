"use client";

import {
  welcomeContainerVariants,
  welcomeItemVariants,
} from "@/lib/constants/animation";
import { SERVICE_IMAGES } from "@/lib/data/mockData";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedButton from "../AnimatedButton";
import SlidingStarWithText from "./SlidingStarWithText";
import { pixelFont } from "@/lib/helper/fontHelper";

export default function Welcome() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b to-gray-50 from-cyan-50 dark:from-gray-900 dark:to-slate-900 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-500 to-emerald-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={welcomeContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 md:space-y-16"
        >
          {/* Welcome Header */}
          <motion.div
            // @ts-expect-error - Accept it
            variants={welcomeItemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-semibold">
                Dhaka, Bangladesh
              </span>
            </motion.div>

            <h2 className="py-4 ">
              <SlidingStarWithText />
            </h2>

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed ">
              A creative digital agency specializing in web development, web
              design, graphics, clipping, video editing, and professional photo
              retouching. We deliver high-quality solutions tailored to your
              brand — from modern websites to visually stunning media assets.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative w-full mx-auto ">
        <motion.div
          variants={welcomeContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 md:space-y-16"
        >
          {" "}
          {/* Product Image Slider */}
          <motion.div
            // @ts-expect-error - Accept it
            variants={welcomeItemVariants}
            className="relative"
          >
            <h3
              className={`text-5xl font-bold text-slate-900 dark:text-white pt-10 pb-5 my-8 text-center `}
            >
              Things We Do
            </h3>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              grabCursor={true}
              loop={true}
              slidesPerView={1.2}
              spaceBetween={0}
              centeredSlides={false}
              breakpoints={{
                480: {
                  slidesPerView: 1.1,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: 1.8,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 2.8,
                  spaceBetween: 0,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1536: {
                  slidesPerView: 3.5,
                  spaceBetween: 0,
                },
              }}
              className="w-full"
            >
              {SERVICE_IMAGES.map((product, index) => (
                <SwiperSlide key={`${product.title}-${index}`} className="">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.4 + (index % 6) * 0.05,
                      duration: 0.5,
                    }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative h-[450px] overflow-hidden cursor-pointer group space-x-0.5 bg-cyan-800 "
                  >
                    {/* Image placeholder with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400" />

                    {/* Actual image */}
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${product.image})`,
                        backgroundColor: "#0891b2",
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-cyan-200/10 hover:via-cyan-500/50 to-transparent flex items-center justify-center"
                    >
                      <div className="text-center px-4">
                        <motion.h4
                          initial={{ y: 50, opacity: 0 }}
                          animate={{
                            y: 150,
                            opacity: 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-white font-bold text-2xl md:text-3xl drop-shadow-2xl"
                        >
                          {product.title}
                        </motion.h4>
                      </div>
                    </motion.div>

                    {/* Border glow on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 ring-2 ring-inset ring-cyan-400/80 shadow-lg shadow-cyan-400/50 pointer-events-none"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          {/* Call to Action */}
          <AnimatedButton
            text="Explore Our Services"
            icon={ArrowRight}
            className="px-20"
            // href="https://BluePixel.vercel.app/"
          />
        </motion.div>
      </div>
    </section>
  );
}

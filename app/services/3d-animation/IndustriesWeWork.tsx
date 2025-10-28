"use client";

import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./3dStyles.css";
import Entertainment from "@/public/3danimation/entertainment.png";
import Commercial from "@/public/3danimation/Commercial.png";
import NonProfit from "@/public/3danimation/NonProfit.png";
import Healthcare from "@/public/3danimation/Healthcare.png";
import Educational from "@/public/3danimation/Educational.png";
import Image from "next/image";

const industries = [
  {
    id: 1,
    category: "Entertainment",
    image: Entertainment,
  },
  {
    id: 2,
    category: "Commercial",
    image: Commercial,
  },
  {
    id: 3,
    category: "Non Profit",
    image: NonProfit,
  },
  {
    id: 4,
    category: "Healthcare",
    image: Healthcare,
  },
  {
    id: 5,
    category: "Educational",
    image: Educational,
  },
  {
    id: 6,
    category: "Kids",
    image: Entertainment,
  },
];

const containerVariants = {
  hidden: { opacity: 0.8, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};
const IndustriesWeWork = () => {
  const swiperRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="bg-gray-50">
      <motion.div className="w-11/12 max-w-7xl mx-auto overflow-hidden py-12 md:py-16 lg:py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-2 my-5"
        >
          <motion.h2 className="text-yellow-500 text-4xl md:text-5xl font-bold mt-1 font-oswald">
            Industries
          </motion.h2>
          <motion.h3 className="text-lg md:text-xl text-duck-bluefontlight font-bold">
            We Specialize In
          </motion.h3>
        </motion.div>
        <motion.div className="relative my-5">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              1280: { slidesPerView: 5 },
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              640: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="swiper-container"
          >
            {industries.map((industry) => (
              <SwiperSlide key={industry.id}>
                {({ isActive, isVisible }) => {
                  // Calculate if this is the center slide based on current viewport
                  let isCenter = false;

                  // For all viewport sizes, we can rely on the isActive property
                  // when using centeredSlides: true
                  isCenter = isActive;

                  return (
                    <div
                      className={`relative ${
                        isCenter
                          ? "bg-gray-200 opacity-100 "
                          : "bg-gray-50 opacity-65 "
                      } shadow-xl my-3 rounded-lg p-6 mx-auto h-80 flex flex-col items-center justify-center transition-all duration-500`}
                    >
                      <Image
                        src={industry.image}
                        alt={industry.category}
                        className="w-36 h-36 object-contain mb-4"
                      />
                      <p
                        className={`text-lg text-black font-oswald ${
                          isCenter ? "font-semibold" : "font-light"
                        }`}
                      >
                        {industry.category}
                      </p>
                    </div>
                  );
                }}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IndustriesWeWork;

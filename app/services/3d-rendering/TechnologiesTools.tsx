"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
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
    <section className="py-12 md:py-16 lg:py-20 bg-duck-bgblue">
      <div className="w-11/12 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl  font-bold text-center mb-6 text-white bg-clip-text "
        >
          Technologies & Tools
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          We leverage industry-leading software and tools to deliver
          high-quality 3D renders and animations.
        </motion.p>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          slidesPerView={1} // Default to 1 slide on small screens
          pagination={false}
          navigation
          className="px-4"
          breakpoints={{
            640: { slidesPerView: 1 }, // Small screens (below 640px)
            768: { slidesPerView: 3 }, // Medium screens (768px and above)
            1024: { slidesPerView: 5 }, // Large screens (1024px and above)
          }}
        >
          {tools.map((tool) => (
            <SwiperSlide key={tool.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-[#00607391] rounded-2xl shadow-lg flex flex-col items-center text-center transition duration-500 ease-in-out transform hover:scale-95 hover:bg-gray-600 group"
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain scale-110 group-hover:scale-125 transition duration-500 ease-in-out"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white ">
                  {tool.name}
                </h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

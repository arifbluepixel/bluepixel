"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Vertex Solutions",
    quote:
      "The 3D renders were absolutely stunning! They brought our vision to life in ways we could not have imagined.",
    avatar: "https://i.ibb.co.com/zWYWN62Z/download.jpg", // Replace with actual avatar URL
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer, Nimbus Technologies",
    quote:
      "Incredible attention to detail and fast turnaround. Highly recommend their services!",
    avatar: "https://i.ibb.co.com/zWYWN62Z/download.jpg", // Replace with actual avatar URL
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Architect, Orion Enterprises",
    quote:
      "The team was professional and creative. The final output exceeded our expectations.",
    avatar: "https://i.ibb.co.com/zWYWN62Z/download.jpg", // Replace with actual avatar URL
  },
  {
    id: 4,
    name: "Sarah Lee",
    role: "Product Manager, Pulse Innovations",
    quote:
      "Their animations added so much value to our product launch. Truly a game-changer!",
    avatar: "https://i.ibb.co.com/zWYWN62Z/download.jpg", // Replace with actual avatar URL
  },
];

const ClientTestimonials = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-duck-bgblue">
      <div className="w-11/12 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-oswald font-bold text-center mb-8 text-white"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-center text-lg text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our clients trust us for expert 3D rendering services that exceed
          expectations.
        </motion.p>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          //   navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-duck-cardblue rounded-2xl shadow-lg mx-4 text-center min-h-80 flex flex-col-reverse justify-between"
              >
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full mb-2"
                  />
                  <h3 className="text-lg font-semibold text-white font-pacifico">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-white">{testimonial.role}</p>
                </div>
                <div>
                  <p className="text-white italic">`{testimonial.quote}`</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientTestimonials;

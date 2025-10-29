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
    name: "Michael Rodriguez",
    role: "CEO, TechVision Studios",
    quote: "The 3D architectural visualizations Blue Pixel created for our luxury development project were absolutely breathtaking. They perfectly captured our vision and helped us secure key investors.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Creative Director, Nova Designs",
    quote: "Working with Blue Pixel transformed our product presentation. Their 3D renders are so realistic that clients often ask if they're looking at actual photographs.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Architect, Urban Space Architects",
    quote: "The attention to detail in their 3D renders is exceptional. Blue Pixel understands lighting, materials, and composition like true artists.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Product Manager, Innovate Labs",
    quote: "Blue Pixel's 3D animations brought our product to life in ways we never imagined. The quality and creativity exceeded all our expectations.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Interior Designer, SpaceCraft Interiors",
    quote: "The interior renders they created for our luxury hotel project were so realistic that our clients could virtually experience the space before construction.",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Lisa Park",
    role: "Marketing Director, Global Brands Inc",
    quote: "Blue Pixel's 3D product renders have become the cornerstone of our marketing campaigns. The quality consistently impresses our international clients.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#1A89C7] to-blue-600">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Client Testimonials
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
            What Our{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hear from businesses and creators who have transformed their visions with our 3D rendering expertise.
          </motion.p>
        </div>
        
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !w-8 !rounded-full'
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-500 h-full flex flex-col min-h-[320px]"
              >
                {/* Quote Section - Fixed height */}
                <div className="flex-grow-0 min-h-[180px] mb-6">
                  <p className="text-white/90 italic text-lg leading-relaxed line-clamp-6">
                    {testimonial.quote}
                  </p>
                </div>
                
                {/* Author Section - Fixed at bottom */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/20">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full object-cover border-2 border-white/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1A89C7] rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <h3 className="text-white font-semibold text-lg truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-200 text-sm truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination !relative !mt-8"></div>

        {/* Custom Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="swiper-button-prev w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
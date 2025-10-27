"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown, HelpCircle, Mail, Phone, MapPin, Palette, Video, Code, Cuboid } from "lucide-react";

const ContactFAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What digital services does Blue Pixel offer?",
      answer:
        "Blue Pixel is a full-service digital agency specializing in image editing, video production, 3D rendering & animation, and web development. We transform your creative vision into stunning digital experiences across all platforms.",
    },
    {
      question: "How do you ensure quality in image and video editing?",
      answer:
        "Our team of certified professionals uses industry-standard tools like Adobe Creative Suite, DaVinci Resolve, and Cinema 4D. We follow a rigorous 3-step quality process: initial review, creative enhancement, and final polish to ensure pixel-perfect results every time.",
    },
    {
      question: "What types of 3D rendering and animation services do you provide?",
      answer:
        "We offer comprehensive 3D services including product visualization, architectural rendering, character animation, motion graphics, VR/AR experiences, and 3D product configurators. Our team excels in both realistic and stylized animation styles.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Timelines vary by project complexity: Image editing (1-3 days), Video production (1-4 weeks), 3D rendering (2-6 weeks), Web development (4-12 weeks). We provide detailed project timelines during our initial consultation and maintain 95% on-time delivery.",
    },
    {
      question: "Do you work with specific industries or business sizes?",
      answer:
        "We serve clients across e-commerce, real estate, manufacturing, healthcare, education, and entertainment sectors. From startups to Fortune 500 companies, we tailor our services to meet your specific business goals and budget requirements.",
    },
    {
      question: "Can you handle large-volume image editing projects?",
      answer:
        "Absolutely! We have dedicated workflows for high-volume projects including e-commerce product images, real estate photos, and batch processing. Our automated pipelines combined with manual quality checks ensure consistency and efficiency.",
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "We work with modern tech stacks including React, Next.js, Vue.js, Node.js, and headless CMS platforms. We specialize in responsive design, e-commerce solutions, progressive web apps, and custom web applications tailored to your business needs.",
    },
    {
      question: "How do you handle project revisions and client feedback?",
      answer:
        "We include 2-3 rounds of revisions in all our packages and use collaborative platforms like Frame.io and Figma for real-time feedback. Our project management system ensures transparent communication throughout the creative process.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive maintenance packages including technical support, content updates, performance optimization, and security monitoring. Our support team is available 24/7 for critical issues.",
    },
    {
      question: "How do you approach creative collaboration with clients?",
      answer:
        "We believe in partnership. Our process includes discovery sessions, mood boards, style frames, and regular check-ins to ensure your vision is realized. We combine your industry knowledge with our creative expertise for optimal results.",
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "Image Editing",
      description: "Professional photo retouching, background removal, color correction"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "From concept to final cut, we create compelling visual stories"
    },
    {
      icon: Cuboid,
      title: "3D & Animation",
      description: "Bringing ideas to life with stunning 3D visuals and motion"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and applications that drive results"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full mb-6"
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Digital Solutions FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Your Digital Vision, <span className="text-blue-600">Our Creative Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Get answers about our comprehensive digital services. From pixel-perfect editing to cutting-edge development, we&#39;re here to bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors duration-300"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-4"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-white text-center relative overflow-hidden"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
              Ready to Transform Your Digital Presence?
            </h3>

            <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
              Let&#39;s discuss how our digital expertise can elevate your brand. Get a free consultation and project estimate today.
            </p>

            {/* Responsive Contact Buttons */}
            <div className="space-y-4 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 justify-items-center">
              {/* Email */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open("mailto:hello@bluepixel.art", "_self")
                }
                className="group flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs p-3 sm:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
              >
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="text-blue-100 text-xs sm:text-sm font-medium opacity-90">
                    Email us at
                  </p>
                  <p className="font-semibold text-sm sm:text-base truncate">
                    hello@bluepixel.art
                  </p>
                </div>
              </motion.button>

              {/* Phone */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("tel:+1234567890", "_self")}
                className="group flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs p-3 sm:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
              >
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="text-blue-100 text-xs sm:text-sm font-medium opacity-90">
                    Call us
                  </p>
                  <p className="font-semibold text-sm sm:text-base truncate">
                    +1 (234) 567-890
                  </p>
                </div>
              </motion.button>

              {/* Get Quote */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const contactSection = document.getElementById("map-section");
                  if (contactSection) {
                    const headerOffset = window.innerWidth < 640 ? 80 : 100;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs p-3 sm:p-4 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/40"
              >
                <div className="p-2 sm:p-3 bg-white/30 rounded-lg group-hover:bg-white/40 transition-colors duration-300 flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="text-blue-100 text-xs sm:text-sm font-medium opacity-90">
                    Visit Us
                  </p>
                  <p className="font-semibold text-sm sm:text-base truncate">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </motion.button>
            </div>

            {/* Responsive decorative elements */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse" />
              <div
                className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
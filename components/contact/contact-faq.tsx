// components/contact-faq.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown, HelpCircle, Mail, Phone, MapPin } from "lucide-react";

const ContactFAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of garments do you specialize in?",
      answer:
        "We specialize in all kinds of knitwear, woven wear, and sweaters. Our product range suits all budgets, from luxurious to economic collections, with distinct styles to meet every need. We handle everything from basic t-shirts to premium fashion items.",
    },
    {
      question: "How do you ensure quality control throughout production?",
      answer:
        "Our dedicated QC Team is present at every stage: sourcing, pattern-cutting, sample-making, main production, labelling, and packaging. We maintain consistent quality standards through rigorous inspections and continuous monitoring to ensure every product meets international standards.",
    },
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer:
        "We offer flexible MOQs to accommodate both small startups and large retailers. Our MOQ varies by product type and complexity. Contact us with your specific requirements, and we'll provide a customized solution that works for your business scale.",
    },
    {
      question: "How long does the production process typically take?",
      answer:
        "Production timelines depend on order complexity and quantity. Generally, sampling takes 2-3 weeks, and main production takes 4-8 weeks. We prioritize on-time delivery and maintain a 98% on-time shipment rate through efficient planning and experienced workforce management.",
    },
    {
      question: "Do you work with sustainable and eco-friendly materials?",
      answer:
        "Yes, we are committed to social responsibility and environmental care. We implement green technologies and sustainable practices throughout our operations. Our eco-friendly initiatives include using organic fabrics, reducing water consumption, and implementing waste management systems.",
    },
    {
      question: "Can you help with design development and sampling?",
      answer:
        "Absolutely! We offer comprehensive services including design development, pattern-cutting, and sample-making. Our experienced team can work with your designs or help develop new concepts. We create prototypes until you're completely satisfied before moving to mass production.",
    },
    {
      question: "What markets do you currently serve?",
      answer:
        "We serve global markets including Europe, North America, Australia, and Asia. Our export-oriented approach and understanding of international quality standards make us a reliable partner for brands worldwide. We're experienced in meeting various international compliance and certification requirements.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const accordionVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0094A6]/10 rounded-full mb-6"
          >
            <HelpCircle className="w-4 h-4 text-[#0094A6]" />
            <span className="text-[#0094A6] font-semibold text-sm uppercase tracking-wide">
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Get Your <span className="text-[#0094A6]">Questions Answered</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Find quick answers to common questions about our services, quality
            standards, and production processes. Can&apos;t find what
            you&apos;re looking for? Contact us directly.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                // @ts-expect-error - ignore this
                variants={itemVariants}
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
                    variants={iconVariants}
                    animate={openIndex === index ? "open" : "closed"}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#0094A6]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      // @ts-expect-error - ignore this
                      variants={accordionVariants}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="w-12 h-1 bg-gradient-to-r from-[#0094A6] to-cyan-400 rounded-full mb-4"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-[#0094A6] to-cyan-600 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-white text-center"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
              Still Have Questions?
            </h3>

            <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
              Our team is ready to assist you with any specific inquiries about
              your garment production needs.
            </p>

            {/* Responsive Contact Buttons */}
            <div className="space-y-4 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 justify-items-center">

              {/* Email */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("mailto:support@blue-pixel.art", "_self")}
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
                    support@blue-pixel.art
                  </p>
                </div>
              </motion.button>

              {/* Phone */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("tel:+8801679106919", "_self")}
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
                    +8801679106919
                  </p>
                </div>
              </motion.button>

              {/* Visit Us */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const mapSection = document.getElementById("map-section");
                  if (mapSection) {
                    const headerOffset = window.innerWidth < 640 ? 80 : 100; // Responsive offset
                    const elementPosition = mapSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs p-3 sm:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
              >
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300 flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="text-blue-100 text-xs sm:text-sm font-medium opacity-90">
                    Visit us
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
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;

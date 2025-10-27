// app/terms-conditions/page.tsx
"use client";

import Header from "@/components/Home/Header";
import Footer from "@/components/shared/footer/Footer";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants/env";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  Phone,
  Scale,
  Shield,
  Truck,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const TermsConditions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const keySections = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content:
        "By accessing and using BluePixel's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
      points: [
        "These terms govern your use of our garment sourcing services",
        "Continued use constitutes acceptance of any modifications",
        "You represent having authority to enter this agreement",
      ],
    },
    {
      icon: Scale,
      title: "Services Description",
      content:
        "BluePixel operates as an export-oriented garment trading agent connecting international brands with trusted manufacturers in Bangladesh.",
      points: [
        "Product development and sampling services",
        "Quality control and production management",
        "Sourcing coordination and logistics support",
        "Manufacturing oversight and compliance",
      ],
    },
    {
      icon: Shield,
      title: "Client Responsibilities",
      content:
        "Clients are responsible for providing accurate information and complying with agreed timelines and specifications.",
      points: [
        "Provide complete and accurate design specifications",
        "Adhere to agreed payment schedules",
        "Timely approval of samples and production stages",
        "Clear communication of requirements and changes",
      ],
    },
    {
      icon: Truck,
      title: "Pricing & Payment Terms",
      content:
        "All pricing is subject to change based on material costs, quantity, and complexity. Payment terms are negotiated per project.",
      points: [
        "30% advance payment for production initiation",
        "40% after sample approval",
        "30% balance before shipment",
        "Prices in USD unless otherwise specified",
      ],
    },
    {
      icon: Clock,
      title: "Production Timeline",
      content:
        "Production timelines are estimates and may vary based on fabric availability, order complexity, and factory capacity.",
      points: [
        "Sampling: 2-3 weeks after design finalization",
        "Production: 4-8 weeks based on quantity",
        "Quality control included in timeline",
        "Shipping: 2-4 weeks depending on destination",
      ],
    },
  ];

  const importantNotes = [
    {
      icon: AlertTriangle,
      title: "Quality Standards",
      content:
        "We maintain strict quality control measures. However, minor variations in color and fabric are inherent in textile manufacturing.",
    },
    {
      icon: CheckCircle,
      title: "Intellectual Property",
      content:
        "Clients retain all rights to their designs. We respect intellectual property and maintain strict confidentiality.",
    },
    {
      icon: Shield,
      title: "Liability",
      content:
        "Our liability is limited to the value of the order. We are not liable for indirect or consequential damages.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 mt-10">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#0094A6] to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-8"
              >
                <Scale className="w-6 h-6" />
                <span className="font-semibold text-sm uppercase tracking-wider">
                  Legal Terms
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl lg:text-6xl font-bold mb-6"
              >
                Terms & <span className="text-cyan-200">Conditions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed"
              >
                Clear guidelines for our partnership. Understand the terms that
                govern our garment sourcing services and collaboration.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="container mx-auto px-4 -mt-8 relative z-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center max-w-4xl mx-auto">
            {/* <p className="text-gray-600">
            Effective Date: <span className="font-semibold text-[#0094A6]">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </p> */}
            <p className="text-sm text-gray-500 mt-2">
              These terms govern all business relationships with Apparel
              Resource BD
            </p>
          </div>
        </motion.div>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="max-w-6xl mx-auto"
            >
              {/* Introduction */}
              <motion.div
                // @ts-expect-error - ignore
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Welcome to BluePixel
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#0094A6] to-cyan-500 mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  These Terms and Conditions outline the rules and regulations
                  for the use of BluePixel&apos;s services. As a reputable
                  garment trading agent based in Dhaka, Bangladesh, we are
                  committed to transparent and professional business practices.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  By engaging our services for knitwear, woven wear, and sweater
                  manufacturing, you agree to comply with these terms. We
                  encourage you to read them carefully and contact us with any
                  questions.
                </p>
              </motion.div>

              {/* Key Sections Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {keySections.map((section) => (
                  <motion.div
                    key={section.title}
                    // @ts-expect-error - ignore
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-[#0094A6] to-cyan-500 rounded-xl text-white">
                        <section.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {section.content}
                    </p>

                    <ul className="space-y-3">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Important Notes */}
              <motion.div
                // @ts-expect-error - ignore
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                  Important Considerations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {importantNotes.map((note) => (
                    <div
                      key={note.title}
                      className="text-center p-6 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors duration-300"
                    >
                      <div className="inline-flex p-3 bg-gradient-to-r from-[#0094A6] to-cyan-500 rounded-xl text-white mb-4">
                        <note.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {note.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {note.content}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Terms */}
              <motion.div
                // @ts-expect-error - ignore
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Additional Terms & Conditions
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#0094A6] to-cyan-500 mb-6"></div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Quality Control & Inspection
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Our QC team monitors all production stages. Final
                      inspection occurs before shipment. Clients may appoint
                      third-party inspectors at their expense.
                    </p>
                    <ul className="text-gray-600 space-y-2 ml-6">
                      <li>
                        • AQL 2.5 standard for final inspection unless specified
                      </li>
                      <li>• Quality reports provided upon request</li>
                      <li>• Rejected items are replaced at our cost</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Shipping & Logistics
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We handle shipping arrangements through trusted partners.
                      Shipping costs, insurance, and customs duties are the
                      client&apos;s responsibility unless otherwise agreed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Cancellation & Modification
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Orders can be cancelled before production begins with a
                      10% administrative fee. Modifications after sample
                      approval may incur additional charges and timeline
                      adjustments.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Force Majeure
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We are not liable for delays or failures in performance
                      resulting from circumstances beyond our reasonable
                      control, including natural disasters, political unrest, or
                      pandemic-related disruptions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact & Agreement */}
              <motion.div
                // @ts-expect-error - ignore
                variants={itemVariants}
                className="text-center bg-gradient-to-r from-[#0094A6] to-cyan-600 rounded-2xl p-8 lg:p-12 text-white"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  Need Clarification?
                </h3>
                <p className="text-cyan-100 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                  We believe in transparent partnerships. If any term is unclear
                  or you need specific modifications for your project,
                  let&apos;s discuss it.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-cyan-100 text-sm">Email us</p>
                      <p className="font-semibold">{CONTACT_EMAIL}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-cyan-100 text-sm">Call us</p>
                      <p className="font-semibold">{CONTACT_PHONE}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-cyan-400/30">
                  <p className="text-cyan-200 text-sm">
                    By proceeding with our services, you acknowledge acceptance
                    of these Terms and Conditions.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;

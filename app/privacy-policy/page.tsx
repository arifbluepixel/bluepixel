"use client";

import Header from "@/components/Home/Header";
import Footer from "@/components/shared/footer/Footer";
import { motion } from "framer-motion";
import { Eye, FileText, Globe, Lock, Shield, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";

const PrivacyPolicy = () => {
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

  const policySections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Business information (Company name, position, business requirements)",
        "Communication data (Emails, messages, inquiries)",
        "Technical data (IP address, browser type, pages visited)",
      ],
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our garment sourcing services",
        "To communicate with you about your projects and inquiries",
        "To improve our services and user experience",
        "To send important updates about our services",
        "To comply with legal obligations",
      ],
    },
    {
      icon: Shield,
      title: "Data Protection",
      content: [
        "We implement appropriate security measures to protect your data",
        "Regular security assessments and updates",
        "Limited access to personal information within our organization",
        "Secure data storage and transmission protocols",
      ],
    },
    {
      icon: Globe,
      title: "Data Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Limited sharing with manufacturing partners for project execution",
        "Compliance with legal requirements and regulations",
        "Service providers who assist in our operations (under strict confidentiality)",
      ],
    },
    {
      icon: Eye,
      title: "Your Rights",
      content: [
        "Right to access your personal information",
        "Right to correct inaccurate data",
        "Right to request deletion of your data",
        "Right to object to processing of your data",
        "Right to data portability",
      ],
    },
    {
      icon: Lock,
      title: "Cookies & Tracking",
      content: [
        "We use essential cookies for website functionality",
        "Analytics cookies to improve user experience",
        "You can control cookie preferences through your browser",
        "No intrusive tracking or advertising cookies",
      ],
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
                <Shield className="w-6 h-6" />
                <span className="font-semibold text-sm uppercase tracking-wider">
                  Privacy & Security
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl lg:text-6xl font-bold mb-6"
              >
                Privacy <span className="text-cyan-200">Policy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed"
              >
                Your trust is our priority. Learn how we protect and handle your
                information with the utmost care and transparency.
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
            Last updated: <span className="font-semibold text-[#0094A6]">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </p> */}
            <p className="text-sm text-gray-500 mt-2">
              We regularly review and update our privacy practices
            </p>
          </div>
        </motion.div>

        {/* Policy Content */}
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
                  Our Commitment to Your Privacy
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#0094A6] to-cyan-500 mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At Apparel Resource BD, we are committed to protecting your
                  privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our
                  services.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We operate as a garment trading agent connecting global brands
                  with trusted manufacturers in Bangladesh. Your trust is
                  fundamental to our business, and we handle your data with the
                  same care and professionalism we apply to our garment sourcing
                  services.
                </p>
              </motion.div>

              {/* Policy Sections Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {policySections.map((section) => (
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

                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Additional Policy Details */}
              <motion.div
                // @ts-expect-error - ignore
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Additional Information
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#0094A6] to-cyan-500 mb-6"></div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Data Retention
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We retain personal information only for as long as
                      necessary to fulfill the purposes for which it was
                      collected, including for the purposes of satisfying any
                      legal, accounting, or reporting requirements. Typically,
                      we retain business communication data for 5 years after
                      project completion.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      International Data Transfers
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      As an export-oriented garment trading agent, we may
                      transfer your information to our international
                      manufacturing partners strictly for project execution
                      purposes. We ensure all data transfers comply with
                      applicable data protection laws and are protected by
                      appropriate safeguards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Changes to This Policy
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We may update this Privacy Policy from time to time to
                      reflect changes in our practices or legal requirements. We
                      will notify you of any material changes by posting the new
                      Privacy Policy on this page and updating the &quot;Last
                      Updated&quot; date.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Contact Us
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      If you have any questions about this Privacy Policy or our
                      data practices, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700">
                        <strong>Email:</strong> support@blue-pixel.art
                      </p>
                      <p className="text-gray-700 mt-2">
                        <strong>Phone:</strong> +8801679106919
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Consent Acknowledgement */}
              <motion.div
                // @ts-expect-error - ignore
                variants={itemVariants}
                className="text-center mt-16 bg-gradient-to-r from-[#0094A6] to-cyan-600 rounded-2xl p-8 lg:p-12 text-white"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Your Privacy Matters
                </h3>
                <p className="text-cyan-100 text-lg max-w-2xl mx-auto leading-relaxed">
                  By using our services, you acknowledge that you have read and
                  understood this Privacy Policy. We are committed to
                  continuously improving our privacy practices and welcome your
                  feedback.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

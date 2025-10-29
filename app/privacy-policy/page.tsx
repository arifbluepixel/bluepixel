"use client";

import { motion } from "framer-motion";
import { Eye, FileText, Globe, Lock, Shield, Users, Palette, Code, Video, Camera } from "lucide-react";
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
        "Project details and creative requirements",
        "Communication data (Emails, messages, project briefs)",
        "Technical data (IP address, browser type, pages visited)",
        "File uploads for creative projects (images, videos, 3D models)",
      ],
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our creative services (image editing, video production, 3D animation, web development)",
        "To communicate with you about your creative projects and inquiries",
        "To process and manage your project files and assets",
        "To improve our services and creative workflows",
        "To send important updates about project progress and service changes",
      ],
    },
    {
      icon: Shield,
      title: "Data Protection & Security",
      content: [
        "Enterprise-grade security measures to protect your creative assets and data",
        "Encrypted file transfers and secure cloud storage",
        "Regular security assessments and system updates",
        "Limited access to project files within our creative team",
        "Secure backup and recovery protocols for all client projects",
      ],
    },
    {
      icon: Globe,
      title: "Data Sharing & Confidentiality",
      content: [
        "We do not share your project files or creative assets with third parties",
        "Strict confidentiality agreements with all team members and contractors",
        "Project data is only accessible to team members working on your specific project",
        "Compliance with international data protection regulations (GDPR, CCPA)",
        "Secure deletion of temporary files after project completion",
      ],
    },
    {
      icon: Eye,
      title: "Your Rights & Control",
      content: [
        "Right to access your personal information and project data",
        "Right to request modifications to your project requirements",
        "Right to request deletion of your data and project files",
        "Right to download your final project deliverables at any time",
        "Right to control how your project examples are used in our portfolio",
      ],
    },
    {
      icon: Lock,
      title: "File Handling & Storage",
      content: [
        "Secure upload and transfer of project files via encrypted channels",
        "Temporary storage of source files during active projects",
        "Long-term archival of final deliverables for client access",
        "Regular cleanup of temporary and unused project files",
        "Option to request permanent deletion of all project data",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 mt-10">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
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
                Privacy <span className="text-blue-200">Policy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
              >
                Protecting your creative projects and data is our top priority. Learn how we safeguard your assets with enterprise-level security.
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
            <p className="text-sm text-gray-500 mt-2">
              We regularly review and update our privacy practices to ensure the highest level of protection for your creative assets
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
                  Our Commitment to Your Creative Security
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At Blue Pixel, we understand that your creative projects and assets are valuable and sensitive. 
                  We are committed to protecting your privacy and ensuring the highest level of security for all 
                  your digital assets, including images, videos, 3D models, and web projects.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As a creative agency specializing in image editing, video production, 3D rendering & animation, 
                  and web development, we handle your projects with the same creativity and precision we apply to 
                  our work. Your trust is fundamental to our partnership.
                </p>
              </motion.div>

              {/* Service-Specific Security */}
              <motion.div
                // @ts-expect-error - ignore
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-10 text-white mb-12"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Service-Specific Data Protection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Camera, service: "Image Editing", desc: "Secure handling of original and edited images" },
                    { icon: Video, service: "Video Production", desc: "Encrypted transfer and storage of video files" },
                    { icon: Palette, service: "3D Animation", desc: "Protected 3D model files and project assets" },
                    { icon: Code, service: "Web Development", desc: "Secure code repositories and database protection" },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <item.icon className="w-8 h-8 mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">{item.service}</h4>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
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
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                        <section.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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
                  Project & Asset Management
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      File Retention Policy
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We retain project files and assets according to the following schedule: 
                      Source files are kept for 6 months after project completion, final deliverables 
                      are archived for 3 years for client access, and temporary working files are 
                      deleted within 30 days of project completion. Clients may request extended 
                      storage or early deletion at any time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Portfolio Usage Rights
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We may request permission to showcase completed projects in our portfolio. 
                      You have full control over which projects can be displayed and can revoke 
                      this permission at any time. Sensitive or proprietary projects are never 
                      shared without explicit written consent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      International Data Compliance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our data protection practices comply with international standards including 
                      GDPR for European clients and CCPA for California residents. All data transfers 
                      are secured with encryption, and we maintain data processing agreements with 
                      all sub-processors involved in your projects.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Contact Our Security Team
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      For any questions about data security, project confidentiality, or to exercise 
                      your privacy rights, please contact our dedicated security team:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700 mt-2">
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
                className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Your Creative Security is Our Priority
                </h3>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                  By using our creative services, you acknowledge that you have read and understood 
                  this Privacy Policy. We are committed to maintaining the highest standards of data 
                  protection for all your creative projects and welcome your feedback on our security practices.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
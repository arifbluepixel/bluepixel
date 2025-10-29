"use client";

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
  Palette,
  Code,
  Video,
  Camera
} from "lucide-react";
import { useEffect, useState } from "react";

const TermsConditions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations immediately when component mounts
    setIsVisible(true);
  }, []);

  const keySections = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content:
        "By accessing and using BluePixel's creative services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
      points: [
        "These terms govern your use of our creative services including image editing, video production, 3D animation, and web development",
        "Continued use constitutes acceptance of any modifications to these terms",
        "You represent having authority to enter this agreement and provide necessary assets",
      ],
    },
    {
      icon: Palette,
      title: "Services Description",
      content:
        "BluePixel provides professional creative services including image editing, video production, 3D rendering & animation, and custom web development solutions.",
      points: [
        "Professional photo editing and image manipulation",
        "Video editing, color grading, and motion graphics",
        "3D modeling, rendering, and animation services",
        "Custom web development and digital solutions",
      ],
    },
    {
      icon: Shield,
      title: "Client Responsibilities",
      content:
        "Clients are responsible for providing accurate project requirements, necessary assets, and timely feedback throughout the creative process.",
      points: [
        "Provide complete project briefs and specifications",
        "Deliver source files in required formats and quality",
        "Provide timely feedback and approvals at each project stage",
        "Adhere to agreed payment schedules and project timelines",
      ],
    },
    {
      icon: Code,
      title: "Pricing & Payment Terms",
      content:
        "Project pricing is based on complexity, scope, and timeline. Custom quotes are provided for each project based on specific requirements.",
      points: [
        "50% advance payment for project initiation",
        "25% after initial delivery and review",
        "25% balance upon final approval and delivery",
        "Additional revisions beyond scope may incur extra charges",
      ],
    },
    {
      icon: Clock,
      title: "Project Timeline",
      content:
        "Project timelines vary based on complexity, scope, and client responsiveness. Standard timelines are provided in project proposals.",
      points: [
        "Image Editing: 2-5 business days based on complexity",
        "Video Production: 1-3 weeks depending on length and effects",
        "3D Animation: 2-6 weeks based on complexity and detail",
        "Web Development: 4-12 weeks based on features and scale",
      ],
    },
  ];

  const importantNotes = [
    {
      icon: AlertTriangle,
      title: "File Ownership & Usage",
      content:
        "Clients retain ownership of source files. BluePixel retains the right to showcase completed work in our portfolio unless otherwise specified.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      content:
        "We maintain high quality standards with multiple review stages. Final deliverables are provided in agreed formats with quality checks.",
    },
    {
      icon: Shield,
      title: "Liability & Limitations",
      content:
        "Our liability is limited to the project value. We maintain professional indemnity insurance for creative services.",
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
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-8"
              >
                <Scale className="w-6 h-6" />
                <span className="font-semibold text-sm uppercase tracking-wider">
                  Service Terms
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl lg:text-6xl font-bold mb-6"
              >
                Terms & <span className="text-blue-200">Conditions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
              >
                Clear guidelines for our creative partnership. Understand the terms that govern our digital services and collaboration.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="container mx-auto px-4 -mt-8 relative z-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center max-w-4xl mx-auto">
            <p className="text-sm text-gray-500 mt-2">
              These terms govern all creative service relationships with Blue Pixel
            </p>
          </div>
        </motion.div>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Welcome to Blue Pixel
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  These Terms and Conditions outline the rules and regulations
                  for the use of Blue Pixel&apos;s creative services. As a professional
                  creative agency specializing in digital solutions, we are committed
                  to transparent and professional business practices.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  By engaging our services for image editing, video production, 3D animation,
                  or web development, you agree to comply with these terms. We encourage
                  you to read them carefully and contact us with any questions about our
                  creative process and deliverables.
                </p>
              </motion.div>

              {/* Service Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-10 text-white mb-12"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Our Creative Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Camera, service: "Image Editing", desc: "Professional photo editing, retouching, and manipulation" },
                    { icon: Video, service: "Video Production", desc: "Video editing, color grading, motion graphics" },
                    { icon: Palette, service: "3D Animation", desc: "3D modeling, rendering, and animation services" },
                    { icon: Code, service: "Web Development", desc: "Custom websites, web apps, and digital solutions" },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                      className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                    >
                      <item.icon className="w-8 h-8 mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">{item.service}</h4>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Sections Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {keySections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
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

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {section.content}
                    </p>

                    <ul className="space-y-3">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                  Important Considerations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {importantNotes.map((note, index) => (
                    <motion.div
                      key={note.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 2.0 + (index * 0.1) }}
                      className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="inline-flex p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white mb-4">
                        <note.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {note.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {note.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Terms */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 2.3 }}
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Project & Delivery Terms
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      File Delivery & Formats
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Final deliverables are provided in agreed formats via secure transfer.
                      We support all standard file formats and can provide specific formats upon request.
                    </p>
                    <ul className="text-gray-600 space-y-2 ml-6">
                      <li>• Image formats: JPG, PNG, PSD, TIFF, RAW</li>
                      <li>• Video formats: MP4, MOV, AVI, with various codec options</li>
                      <li>• 3D formats: FBX, OBJ, STL, with texture maps</li>
                      <li>• Web formats: Responsive HTML/CSS/JS with documentation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Revisions & Changes
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Each project includes a specified number of revision rounds. Additional revisions
                      beyond the agreed scope may incur extra charges. Major changes to project scope
                      after approval may require timeline adjustments and additional costs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Source File Ownership
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Clients retain full ownership of provided source files. Final delivered creative
                      work is owned by the client upon full payment. Blue Pixel retains the right to
                      display completed work in our portfolio and marketing materials unless otherwise
                      agreed in writing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Project Cancellation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Projects can be cancelled before significant work has begun with a 25% administrative
                      fee. After work has commenced, cancellation fees are based on work completed to date.
                      All work completed up to cancellation point will be delivered to the client.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact & Agreement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  Need Clarification?
                </h3>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                  We believe in transparent creative partnerships. If any term is unclear 
                  or you need specific modifications for your project, let&apos;s discuss it.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-blue-100 text-sm">Email us</p>
                      <p className="font-semibold">{CONTACT_EMAIL}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-blue-100 text-sm">Call us</p>
                      <p className="font-semibold">{CONTACT_PHONE}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-400/30">
                  <p className="text-blue-200 text-sm">
                    By proceeding with our creative services, you acknowledge acceptance
                    of these Terms and Conditions for digital creative work.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsConditions;
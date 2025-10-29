"use client";
import CTASection from "@/components/shared/CTASection";
import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { GrayContainer } from "@/components/shared/PageSections";
import whyus from "@/public/webdev/whyus.png";
import { Workflow } from "lucide-react";
import Image from "next/image";

const WhyUs = () => {
  const features = [
    {
      title: "Seasoned Expertise",
      description:
        "Our team of senior developers leverages decades of combined experience to architect robust, enterprise-grade web solutions.",
    },
    {
      title: "Cross-Industry Excellence",
      description:
        "From fintech to healthcare, we've successfully transformed digital visions into reality across diverse sectors.",
    },
    {
      title: "Innovation Meets Reliability",
      description:
        "Combining cutting-edge innovation with battle-tested reliability, we deliver solutions you can depend on.",
    },
    {
      title: "Proven Track Record",
      description:
        "Trusted by forward-thinking organizations worldwide to translate complex business challenges into elegant digital solutions.",
    },
    {
      title: "Future-Ready Technology",
      description:
        "We harness modern frameworks and cloud-native architectures to build scalable, high-performance applications.",
    },
    {
      title: "Partnership-Driven Process",
      description:
        "Your success is our mission. We collaborate closely to craft tailored solutions that align with your strategic objectives.",
    },
  ];

  return (
    <GrayContainer>
      <div className="w-11/12 max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-start relative py-12 md:py-16 lg:py-20 gap-10">
        {/* Left Section - Image (Fixed) */}
        <div className="w-full md:w-1/3 md:my-auto space-y-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <Image
              src={whyus}
              alt="Excellence in web development partnership"
              className="relative w-2/3 md:w-full mx-auto md:mx-0 rounded-lg shadow-xl transform group-hover:scale-[1.02] transition duration-500 ease-out"
            />
          </div>
        </div>

        {/* Right Section - Cards (Scrollable) */}
        <div className="w-full md:w-2/3 space-y-6">
          <PageSectionHeader
            badge="Your Success Partner"
            title="Why Partner With Us?"
            description="Discover what sets us apart in delivering exceptional web
              development solutions."
            darkMode={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:pt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 border border-gray-200 rounded-xl shadow-md bg-white hover:bg-gradient-to-br hover:from-sky-50 hover:to-sky-100 hover:border-sky-300 transition-all duration-300 ease-out cursor-pointer overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-600 group-hover:text-gray-900 mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 text-sm leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <CTASection
            message="Ready to bring your vision to life?"
            buttonText="Start Your Project"
            href="/contact-us"
            variant="blue"
            mode="card"
            delay={0.6}
            icon={<Workflow className="w-5 h-5 text-white" />}
            subMessage="Let's discuss how we can transform your ideas into reality"
            className="mt-12"
          />
        </div>
      </div>
    </GrayContainer>
  );
};

export default WhyUs;

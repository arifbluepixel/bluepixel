import React from "react";

interface HeroSectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
  bgColor: string;
  visualContent: React.ReactNode;
}

const ServiceHero: React.FC<HeroSectionProps> = ({
  title,
  description,
  bgColor,
  visualContent,
}) => {
  return (
    <section
      style={{ backgroundColor: bgColor }}
      className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 dark:from-gray-300 dark:via-slate-300 dark:to-gray-300 relative overflow-hidden pt-20 md:pt-0 pb-4"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="w-11/12 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center pb-8 pt-10 md:pt-12 lg:pt-32 md:pb-12 lg:pb-16">
        {/* Left Section - Heading & Subheading */}
        <div className="w-full md:w-2/3 text-black mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[1.3] mb-6 ">
            {title}
          </h1>
          <div className="text-lg text-gray-700 text-justify md:text-left">
            {description}
          </div>
        </div>

        {/* Right Section - Dynamic Content */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <div className="w-full max-w-[400px] h-auto">{visualContent}</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

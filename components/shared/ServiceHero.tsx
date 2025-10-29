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
      className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 dark:from-gray-300 dark:via-slate-300 dark:to-gray-300 relative overflow-hidden min-h-[80vh] sm:min-h-[85vh] flex items-center"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="w-11/12 max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between gap-8 py-8 sm:py-12 lg:py-16">
        {/* Left Section - Heading & Subheading */}
        <div className="w-full lg:w-1/2 text-black order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[1.2] md:leading-[1.3] mb-4 sm:mb-6">
            {title}
          </h1>
          <div className="text-base sm:text-lg md:text-xl text-gray-700 text-center lg:text-left px-4 sm:px-0">
            {description}
          </div>
        </div>

        {/* Right Section - Dynamic Content */}
        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
          <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto">
            {visualContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
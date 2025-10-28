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
    <section style={{ backgroundColor: bgColor }}>
      <div className="w-11/12 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center py-8 md:py-12 lg:py-16">
        {/* Left Section - Heading & Subheading */}
        <div className="w-full md:w-2/3 text-black mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[1.3] mb-6 font-oswald">
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

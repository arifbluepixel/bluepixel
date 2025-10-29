import React from "react";
import { GrayContainer } from "./PageSections";

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
    <GrayContainer
      className={`-mt-20 pb-8 pt-20 md:pt-24 lg:pt-40 md:pb-12 lg:pb-16`}
    >
      <div className="w-11/12 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center ">
        {/* Left Section - Heading & Subheading */}
        <div className="w-full md:w-2/3 text-black mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[1.3] mb-6 ">
            {title}
          </h1>
          <div className="text-lg text-gray-700 dark:text-gray-100 text-justify md:text-left">
            {description}
          </div>
        </div>

        {/* Right Section - Dynamic Content */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <div className="w-full max-w-[400px] h-auto">{visualContent}</div>
        </div>
      </div>
    </GrayContainer>
  );
};

export default ServiceHero;

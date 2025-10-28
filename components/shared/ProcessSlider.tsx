"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We research your project, analyze competitors, define the target audience, and study market trends to build a strong foundation.",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "We create a detailed roadmap, define the project structure, set goals, and estimate costs. We also plan the tech stack and ensure scalability from the start.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We design clean, user-friendly interfaces using modern design tools like Figma or Adobe XD. We follow accessibility and usability best practices to enhance user experience.",
  },
  {
    id: 4,
    title: "Front-end Development",
    description:
      "We turn designs into responsive and interactive web pages using the latest technologies like React, Vue, or Angular. We follow best practices for performance optimization.",
  },
  {
    id: 5,
    title: "Back-end Development",
    description:
      "We build a secure and scalable server-side system . We follow best practices such as API security, database optimization, and microservices architecture.",
  },
  {
    id: 6,
    title: "Testing",
    description:
      "We perform functional, security, and performance testing using automated and manual testing methods. We ensure a bug-free experience before deployment.",
  },
  {
    id: 7,
    title: "Launch",
    description:
      "We deploy your app using CI/CD pipelines, ensuring a smooth and error-free release. We also configure cloud services and optimize for performance.",
  },
  {
    id: 8,
    title: "Maintenance",
    description:
      "We provide ongoing support, fix bugs, and update the system. We use best practices like CI/CD for continuous updates and monitoring  to track performance.",
  },
  {
    id: 9,
    title: "Scaling",
    description:
      "We help your app grow by optimizing databases, improving performance, and ensuring scalability. We use best DevOps practices to handle large traffic.",
  },
];

export default function ProcessSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);
  const [maxIndex, setMaxIndex] = useState(0);

  // Update visible cards and max index based on screen size
  useEffect(() => {
    const handleResize = () => {
      let cards = 5;

      if (window.innerWidth < 640) {
        cards = 1;
      } else if (window.innerWidth < 1024) {
        cards = 3;
      } else {
        cards = 5;
      }

      setVisibleCards(cards);
      setMaxIndex(Math.max(0, steps.length - cards));

      // Ensure current index is valid
      if (currentIndex > steps.length - cards) {
        setCurrentIndex(steps.length - cards);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate the percent to shift based on current index
  const calculateOffset = () => {
    // Each card takes up (100 / total cards)% of the slider width
    const cardWidthPercent = 100 / steps.length;
    // Shift by current index times the card width
    return currentIndex * cardWidthPercent;
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full">
      {/* Navigation Controls */}
      <div className="flex justify-between items-center w-full mb-4">
        <div></div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="text-gray-600 text-sm">
            {currentIndex + 1} / {maxIndex + 1}
          </div>
          <button
            className="bg-white shadow-md p-1 sm:p-2 rounded-full disabled:opacity-30 cursor-pointer"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            className="bg-white shadow-md p-1 sm:p-2 rounded-full disabled:opacity-30 cursor-pointer"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full overflow-hidden">
        <div className="relative w-full">
          <motion.div
            className="flex transition-all"
            style={{
              width: `${(steps.length * 100) / visibleCards}%`,
              gap: "1rem",
            }}
            animate={{
              x: `-${calculateOffset()}%`,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-lg p-4 md:p-2 "
                style={{
                  width: `calc(${100 / steps.length}% - ${
                    (visibleCards - 1) / visibleCards
                  }rem)`,
                }}
              >
                <h3 className="font-oswald text-2xl text-[#0A314F] text-left pl-7 md:pl-5 pt-5">
                  {step.title}
                </h3>
                <p className="text-gray-700 mt-2 px-7 md:px-5  text-justify p-5 leading-6">
                  {step.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

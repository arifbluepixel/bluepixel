"use client";
import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { DarkContainer } from "@/components/shared/PageSections";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We conduct comprehensive market research, competitive analysis, and audience profiling to establish a strategic foundation. Through stakeholder interviews and trend analysis, we identify opportunities and define success metrics that align with your business objectives.",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "We architect a detailed project blueprint encompassing technical specifications, milestone definitions, and resource allocation. Our planning phase includes technology stack selection, infrastructure design, and scalability considerations to ensure long-term success.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We craft intuitive, accessible interfaces that prioritize user experience and brand consistency. Using industry-leading tools like Figma and Adobe XD, we create pixel-perfect designs that follow WCAG guidelines and modern design principles for maximum engagement.",
  },
  {
    id: 4,
    title: "Front-end Development",
    description:
      "We transform designs into responsive, performant web applications using modern frameworks like React, Vue, or Angular. Our development process emphasizes code quality, component reusability, and progressive enhancement for optimal user experiences across all devices.",
  },
  {
    id: 5,
    title: "Back-end Development",
    description:
      "We engineer secure, scalable server architectures with robust API designs and optimized database schemas. Our backend solutions implement industry best practices including microservices architecture, secure authentication, and efficient data management for enterprise-grade reliability.",
  },
  {
    id: 6,
    title: "Testing",
    description:
      "We execute comprehensive quality assurance through automated testing suites and manual validation protocols. Our multi-layered testing approach covers functional, security, performance, and usability aspects to ensure a flawless product before deployment.",
  },
  {
    id: 7,
    title: "Launch",
    description:
      "We orchestrate seamless deployments using automated CI/CD pipelines and cloud infrastructure optimization. Our launch process includes performance tuning, monitoring setup, and rollback strategies to ensure zero-downtime releases and immediate stability.",
  },
  {
    id: 8,
    title: "Maintenance",
    description:
      "We provide proactive support through continuous monitoring, performance optimization, and rapid issue resolution. Our maintenance services leverage DevOps practices, automated alerts, and regular updates to keep your platform secure and performant.",
  },
  {
    id: 9,
    title: "Scaling",
    description:
      "We enable sustainable growth through infrastructure optimization, load balancing, and performance enhancement. Our scaling strategies employ cloud-native architectures, caching mechanisms, and database optimization to handle exponential traffic growth seamlessly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProcessWorkflow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);
  const [maxIndex, setMaxIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Update visible cards and max index based on screen size
  useEffect(() => {
    const handleResize = () => {
      let cards = 5;

      if (window.innerWidth < 640) {
        cards = 1;
      } else if (window.innerWidth < 1024) {
        cards = 3;
      } else if (window.innerWidth < 1400) {
        cards = 4;
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
    const cardWidthPercent = 100 / steps.length;
    return currentIndex * cardWidthPercent;
  };

  return (
    <DarkContainer
      className="py-16 md:py-20 lg:py-24"
      gridLines={true}
      decorativeElements={
        <>
          <div className="absolute inset-0 opacity-20 -z-50">
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
        </>
      }
    >
      <PageSectionHeader
        badge="Our Process"
        title="Development Workflow"
        description="From initial discovery to continuous scaling, our structured approach ensures transparency, quality, and timely delivery at every stage of your project."
        darkMode={true}
      />

      <motion.div
        ref={ref}
        // @ts-expect-error - ignore
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-11/12 md:max-w-7xl xl:max-w-full  mx-auto"
      >
        {/* Navigation Controls */}
        <motion.div
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="flex justify-between items-center w-full xl:px-5 mb-6"
        >
          <div className="text-slate-400 text-sm font-medium">
            Step
            {currentIndex === visibleCards ? (
              <> {currentIndex + 1}</>
            ) : (
              <>
                {" "}
                {currentIndex + 1} to {visibleCards + currentIndex}
              </>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-slate-300 text-base font-semibold px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
              {currentIndex === visibleCards ? (
                <> {currentIndex + 1}</>
              ) : (
                <>
                  {" "}
                  {currentIndex + 1} to {currentIndex + visibleCards}
                </>
              )}{" "}
              / {maxIndex + visibleCards}
            </div>
            <button
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-lg p-2 sm:p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-sky-500/20 hover:border-sky-500/50 transition-all duration-300 cursor-pointer group"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 group-hover:text-sky-400 transition-colors" />
            </button>
            <button
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-lg p-2 sm:p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-sky-500/20 hover:border-sky-500/50 transition-all duration-300 cursor-pointer group"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 group-hover:text-sky-400 transition-colors" />
            </button>
          </div>
        </motion.div>

        {/* Slider */}
        <motion.div
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="w-full overflow-hidden rounded-2xl"
        >
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
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 shadow-2xl rounded-xl p-6 hover:bg-slate-800/60 hover:border-sky-500/30 hover:shadow-sky-500/10 transition-all duration-300 group"
                  style={{
                    width: `calc(${100 / steps.length}% - ${
                      (visibleCards - 1) / visibleCards
                    }rem)`,
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-lg shadow-lg min-w-10">
                      {step.id}
                    </div>
                    <h3 className="md:text-lg lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 font-bold group-hover:from-sky-300 group-hover:to-blue-400 transition-all">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-xs md:text-sm text-justify">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </DarkContainer>
  );
}

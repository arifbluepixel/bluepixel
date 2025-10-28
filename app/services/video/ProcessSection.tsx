"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import thinkanddesign from "@/public/animations/editing.json";
// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const steps = [
  {
    id: 1,
    title: "Consultation",
    description: "We discuss your vision, goals, and specific editing needs.",
  },
  {
    id: 2,
    title: "Planning & Storyboarding",
    description:
      "We create a structured plan to ensure smooth and effective editing.",
  },
  {
    id: 3,
    title: "Editing & Enhancements",
    description:
      "We apply seamless cuts, color grading, sound design, and effects.",
  },
  {
    id: 4,
    title: "Client Review & Revisions",
    description: "You review the draft and provide feedback for refinements.",
  },
  {
    id: 5,
    title: "Final Quality Check",
    description: "We fine-tune details and conduct a thorough quality check.",
  },
  {
    id: 6,
    title: "Delivery & Support",
    description:
      "We deliver the final high-quality video and provide support if needed.",
  },
];

const ProcessSection = () => {
  return (
    <section className=" bg-duck-bgblue overflow-hidden">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row-reverse md:justify-between items-center gap-2 py-8 md:py-12 lg:py-16">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/3 md:sticky md:top-30 ">
          <Lottie
            animationData={thinkanddesign}
            loop
            className="w-auto h-auto rounded-lg"
          />
        </div>

        {/* Right Side - Visual Representation */}
        <div className="md:w-2/3 flex flex-col items-center md:items-start">
          <div className="flex flex-col gap-2 w-full md:w-10/12 mx-auto md:mx-0">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold font-oswald text-white text-center md:text-left uppercase mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              How We Work
            </motion.h2>
            <h2 className="text-lg md:text-xl font-semibold text-gray-200 uppercase leading-6 md:leading-8 text-center md:text-left">
              Our streamlined process ensures
              <span className="text-duck-bgblue bg-yellow-400 px-1 mx-1">
                high-quality
              </span>{" "}
              editing and on-time delivery!!
            </h2>
          </div>
          <div>
            <p className="text-gray-100 text-lg"></p>
          </div>
          <div className="relative w-full max-w-3xl pt-12">
            {/* Center Circle */}
            {/* <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-32 h-32 bg-white border-4 opacity-80 md:opacity-100 border-gray-300 rounded-full flex items-center justify-center shadow-lg">
                                <p className="text-lg font-bold text-gray-900 text-center">How It Works</p>
                            </div>
                        </div> */}

            {/* Process Steps */}
            <div className="grid grid-cols-2 gap-4 md:gap-10 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`p-4 rounded-lg shadow-md bg-duck-cardblue text-center border-t-4 ${
                    index % 2 === 0 ? "border-yellow-400" : "border-gray-800"
                  } relative z-10  group`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold z-10">
                    {step.id}
                  </div>

                  {/* Step Content */}
                  <h3 className="text-2xl text-gray-50 mb-1 z-10 font-oswald font-medium">
                    {step.title}
                  </h3>
                  <p className="text-gray-100 text-[16px] z-10">
                    {step.description}
                  </p>

                  {/* Hover Effect - Fill background from left to right */}
                  <div
                    className={`absolute inset-0 ${
                      index % 2 === 0 ? "bg-yellow-400" : "bg-blue-500"
                    }  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0 rounded-lg opacity-10`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

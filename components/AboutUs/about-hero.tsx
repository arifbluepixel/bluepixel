"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../shared/AnimatedButton";
import { ArrowRight } from "lucide-react";
import ScrollIndicator from "../ScrollIndicator";

const AboutHero = () => {
    const nextSectionRef = useRef<HTMLDivElement>(null);

    const scrollToNextSection = () => {
        nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative h-screen w-full overflow-hidden"
            >
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/home/about-hero.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-4xl space-y-8"
                    >
                        {/* Main Heading */}
                        <h1 className="text-4xl font-bold leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight">
                            Connecting Global Brands with{" "}
                            <span className="bg-gradient-to-r from-cyan-600 to-cyan-500 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                                Trusted Manufacturers
                            </span>
                        </h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="mx-auto max-w-2xl text-lg md:text-xl text-gray-200"
                        >
                            Apparel Resource BD is a well reputed export oriented garments trading agent in Dhaka, Bangladesh. Our main product is all kinds of knit wear, woven wear and sweater.
                        </motion.p>

                        {/* Call to Action */}
                        <AnimatedButton
                            text="Explore Our Journey"
                            icon={ArrowRight}
                            className="px-20"
                            color="gray-300"
                            onClick={scrollToNextSection}
                        />
                    </motion.div>

                    {/* Scroll Indicator */}
                    <ScrollIndicator />
                </div>
            </motion.section>

            {/* Next Section Anchor */}
            <div ref={nextSectionRef} className="h-0 w-full"></div>
        </>
    );
};

export default AboutHero;
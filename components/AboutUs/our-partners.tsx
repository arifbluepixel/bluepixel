"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const OurPartners = () => {
    const buyers = [
        {
            id: 1,
            name: "KiK",
            logo: "/home/buyer1.png",
            description: "World's leading fashion retailer",
        },
        {
            id: 2,
            name: "Vanguard",
            logo: "/home/buyer2.png",
            description: "Global Spanish fast fashion chain",
        },
        {
            id: 3,
            name: "Have It All",
            logo: "/home/buyer3.png",
            description: "World's largest athletic apparel company",
        },
        {
            id: 4,
            name: "Dunlop",
            logo: "/home/buyer4.png",
            description: "German multinational corporation",
        },
        {
            id: 5,
            name: "Jeronimo Martins",
            logo: "/home/buyer5.png",
            description: "Japanese casual wear designer",
        },
        {
            id: 6,
            name: "Norma",
            logo: "/home/buyer6.png",
            description: "German multinational corporation",
        },
        {
            id: 7,
            name: "UBS.2",
            logo: "/home/buyer7.png",
            description: "American premium lifestyle brand",
        },
    ];

    const [isClient, setIsClient] = useState(false);

    // Set client-side flag
    useEffect(() => {
        setIsClient(true);
    }, []);

    const reverseInfiniteScrollVariants = {
        animate: {
            x: [0, -1000], // Move from right to left
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                },
            },
        },
    };


    // Don't render animations on server to prevent hydration mismatch
    if (!isClient) {
        return (
            <section
                className="py-24 bg-white relative overflow-hidden"
                aria-label="Our Partners Section"
            >
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 mb-8">
                            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
                                Trusted Partnerships
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                            Global{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                Buyers
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We proudly collaborate with industry leaders worldwide, delivering
                            exceptional quality and building lasting partnerships that drive
                            mutual success.
                        </p>
                    </div>
                </div>

                {/* Static marquee for SSR */}
                <div className="w-full mb-12">
                    <div className="relative overflow-hidden bg-white/30 backdrop-blur-sm border-y border-white/20 py-8">
                        <div className="flex gap-16 items-center whitespace-nowrap">
                            {buyers.map((buyer, index) => (
                                <div
                                    key={`static-${index}`}
                                    className="flex-shrink-0 flex items-center gap-6"
                                >
                                    <div className="relative w-24 h-12 opacity-60">
                                        <Image
                                            src={buyer.logo}
                                            alt={buyer.name}
                                            fill
                                            className="object-contain filter grayscale"
                                            sizes="96px"
                                        />
                                    </div>
                                    <div className="text-sm font-medium text-gray-600 min-w-[120px] text-center">
                                        {buyer.name}
                                    </div>
                                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-400/50 to-blue-400/50 rounded-full opacity-50" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            className="py-24 bg-white relative overflow-hidden"
            aria-label="Our Partners Section"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl animate-pulse delay-700" />
                <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-slate-200/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Floating Particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-300/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 mb-8"
                    >
                        <div className="flex gap-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-100" />
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
                        </div>
                        <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
                            Trusted Partnerships
                        </span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-100" />
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
                        </div>
                    </motion.div>

                    <motion.h2
                        className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        Global{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                            Buyers
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        We proudly collaborate with industry leaders worldwide, delivering
                        exceptional quality and building lasting partnerships that drive
                        mutual success.
                    </motion.p>
                </motion.div>
            </div>

            {/* First Row - Left to Right */}
            <div className="w-full mb-4">
                <motion.div
                    className="relative overflow-hidden bg-white/50 backdrop-blur-sm border-y border-white/30 py-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <motion.div
                        className="flex gap-16 items-center"
                        // @ts-expect-error - ignore this
                        variants={reverseInfiniteScrollVariants}
                        animate="animate"
                    >
                        {[...buyers, ...buyers, ...buyers, ...buyers].map(
                            (buyer, index) => (
                                <div
                                    key={`marquee-1-${index}`}
                                    className="flex-shrink-0 flex items-center gap-6 group cursor-pointer"
                                >
                                    <div className="relative w-24 h-12 opacity-70 group-hover:opacity-100 transition-all duration-500">
                                        <Image
                                            src={buyer.logo}
                                            alt={buyer.name}
                                            fill
                                            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                            sizes="96px"
                                        />
                                    </div>
                                    <div className="w-1 h-8 bg-gradient-to-b from-blue-400/50 to-cyan-400/50 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            )
                        )}
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </section>
    );
};

export default OurPartners;

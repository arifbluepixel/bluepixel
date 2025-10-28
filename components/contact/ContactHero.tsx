"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
} from "@/lib/constants/env";
import { formatAddress } from "@/lib/helper/clientHelper";
import { Inter, Playfair_Display } from "next/font/google";
import { FaMapMarkerAlt, FaEnvelope, FaMobileAlt } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  delay?: string;
}

const ContactCard = ({ icon, title, content, delay }: ContactCardProps) => (
  <div
    className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 dark:border-gray-700/40 hover:border-teal-300/50 dark:hover:border-teal-500/30 hover:-translate-y-2"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl text-white group-hover:from-teal-600 group-hover:to-cyan-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
          {icon}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3
          className={`text-lg font-bold text-gray-800 dark:text-white mb-2 ${inter.className}`}
        >
          {title}
        </h3>
        <div
          className={`text-gray-600 dark:text-gray-300 ${inter.className} text-sm leading-relaxed`}
        >
          {content}
        </div>
      </div>
    </div>
  </div>
);

export default function ContactHero() {
  const [animationData, setAnimationData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch("/lottie/Connect.json")
      .then((res) => res.json())
      .then(setAnimationData);

    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const contactCards = [
    {
      icon: <FaEnvelope className="text-lg" />,
      title: "Email Us",
      content: (
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 break-words font-medium"
        >
          {CONTACT_EMAIL}
        </a>
      ),
      delay: "0ms",
    },
    {
      icon: <FaMobileAlt className="text-lg" />,
      title: "Call Us",
      content: (
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 font-medium"
        >
          {CONTACT_PHONE}
        </a>
      ),
      delay: "200ms",
    },
    {
      icon: <FaMapMarkerAlt className="text-lg" />,
      title: "Visit Us",
      content: (
        <div className="font-medium">{formatAddress(CONTACT_ADDRESS)}</div>
      ),
      delay: "400ms",
    },
  ];

  return (
    <section
      className={`relative overflow-hidden px-4 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24 bg-gradient-to-br from-teal-50 via-white to-gray-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-950 min-h-screen ${inter.variable} ${playfair.variable}`}
    >
      {/* Main Container - Centered with max width */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Centered Header Section */}
        <div className="text-center mb-12 lg:mb-16 mt-10">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-700 dark:text-teal-300 text-sm font-medium mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            Get In Touch
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 ${
              playfair.className
            } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400">
              Connect
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto ${
              inter.className
            } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            BluePixel is a well reputed export oriented garments trading agent
            in Dhaka, Bangladesh. Our main product is all kinds of knit wear,
            woven wear and sweater.
          </p>
        </div>

        {/* Content and Animation Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content - Contact Cards */}
          <div className="lg:w-1/2 w-full">
            <div
              className={`space-y-4 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: card.delay }}
                >
                  <ContactCard {...card} />
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div
              className={`flex flex-wrap gap-6 pt-8 justify-center lg:justify-start ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className={inter.className}>Available 24/7</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className={inter.className}>Quick Response</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className={inter.className}>Professional Support</span>
              </div>
            </div>
          </div>

          {/* Right Animation */}
          <div className="lg:w-1/2 w-full flex justify-center">
            {animationData ? (
              <div
                className={`w-[250px] sm:w-[300px] lg:w-[400px] transform transition-all duration-1000 ${
                  isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="drop-shadow-2xl"
                />
              </div>
            ) : (
              <div className="w-[250px] sm:w-[300px] lg:w-[400px] h-[350px] flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-teal-600 rounded-full animate-ping"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 -left-40 w-72 h-72 bg-teal-200/40 dark:bg-teal-800/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-800/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 -left-20 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface CTASectionProps {
  message: string;
  buttonText: string;
  href: string;
  variant?: "blue" | "purple" | "green" | "orange" | "red" | "teal";
  mode?: "simple" | "card" | "compact-card";
  isInView?: boolean;
  delay?: number;
  icon?: ReactNode;
  subMessage?: string;
  className?: string;
}

const colorVariants = {
  blue: {
    gradient: "from-blue-600 to-cyan-600",
    hoverGradient: "hover:from-blue-500 hover:to-cyan-500",
    shadow: "shadow-blue-500/30",
    hoverShadow: "hover:shadow-blue-500/40",
  },
  purple: {
    gradient: "from-purple-600 to-pink-600",
    hoverGradient: "hover:from-purple-500 hover:to-pink-500",
    shadow: "shadow-purple-500/30",
    hoverShadow: "hover:shadow-purple-500/40",
  },
  green: {
    gradient: "from-green-600 to-emerald-600",
    hoverGradient: "hover:from-green-500 hover:to-emerald-500",
    shadow: "shadow-green-500/30",
    hoverShadow: "hover:shadow-green-500/40",
  },
  orange: {
    gradient: "from-orange-600 to-amber-600",
    hoverGradient: "hover:from-orange-500 hover:to-amber-500",
    shadow: "shadow-orange-500/30",
    hoverShadow: "hover:shadow-orange-500/40",
  },
  red: {
    gradient: "from-red-600 to-rose-600",
    hoverGradient: "hover:from-red-500 hover:to-rose-500",
    shadow: "shadow-red-500/30",
    hoverShadow: "hover:shadow-red-500/40",
  },
  teal: {
    gradient: "from-teal-600 to-cyan-600",
    hoverGradient: "hover:from-teal-500 hover:to-cyan-500",
    shadow: "shadow-teal-500/30",
    hoverShadow: "hover:shadow-teal-500/40",
  },
};

const CTASection = ({
  message,
  buttonText,
  href,
  variant = "purple",
  mode = "simple",
  isInView = true,
  delay = 0.5,
  icon,
  subMessage,
  className = "",
}: CTASectionProps) => {
  const colors = colorVariants[variant];

  // Simple Mode (Original Design)
  if (mode === "simple") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay }}
        className={`text-center mt-16 ${className}`}
      >
        <p className="text-slate-300 text-lg mb-6">{message}</p>
        <Link
          href={href}
          className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${colors.gradient} text-white font-semibold rounded-lg
                     ${colors.hoverGradient} transform hover:scale-105 transition-all duration-300
                     shadow-lg ${colors.shadow} hover:shadow-xl ${colors.hoverShadow}`}
        >
          {buttonText}
          {icon && (
            <span className="transition-transform group-hover:translate-x-1">
              {icon}
            </span>
          )}
        </Link>
      </motion.div>
    );
  }

  // Compact Card Mode (Vertical Layout)
  if (mode === "compact-card") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay }}
        className={`text-center mt-16 ${className}`}
      >
        <div className="inline-block p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl min-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0`}
            >
              {icon || (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              )}
            </div>
            <div className="text-left">
              <p className="text-slate-900 dark:text-white font-semibold">
                {message}
              </p>
              {subMessage && (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {subMessage}
                </p>
              )}
            </div>
          </div>
          <Link
            href={href}
            className={`block w-full px-6 py-3 bg-gradient-to-r ${colors.gradient} ${colors.hoverGradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl text-center transition-all duration-300`}
          >
            {buttonText}
          </Link>
        </div>
      </motion.div>
    );
  }

  // Card Mode (Horizontal Layout)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={`text-center mt-16 ${className}`}
    >
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0`}
          >
            {icon || (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            )}
          </div>
          <div className="text-left">
            <p className="text-slate-900 dark:text-white font-semibold">
              {message}
            </p>
            {subMessage && (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {subMessage}
              </p>
            )}
          </div>
        </div>
        <Link
          href={href}
          className={`px-8 py-3 bg-gradient-to-r ${colors.gradient} ${colors.hoverGradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap`}
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
};

export default CTASection;

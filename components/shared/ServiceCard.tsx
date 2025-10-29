"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  size?: "default" | "compact";
  variant?: "blue" | "purple" | "green" | "orange" | "red" | "teal";
}

const colorVariants = {
  blue: {
    iconColor: "text-blue-400",
    iconHoverColor: "group-hover:text-white",
    iconGlow: "bg-blue-500",
    gradient: "hover:from-blue-600 hover:to-cyan-600",
    shadow: "hover:shadow-blue-500/20",
    accentLine: "from-teal-500 to-cyan-500",
  },
  purple: {
    iconColor: "text-purple-400",
    iconHoverColor: "group-hover:text-white",
    iconGlow: "bg-purple-500",
    gradient: "hover:from-purple-600 hover:to-pink-600",
    shadow: "hover:shadow-purple-500/20",
    accentLine: "from-purple-500 to-pink-500",
  },
  green: {
    iconColor: "text-green-400",
    iconHoverColor: "group-hover:text-white",
    iconGlow: "bg-green-500",
    gradient: "hover:from-green-600 hover:to-emerald-600",
    shadow: "hover:shadow-green-500/20",
    accentLine: "from-green-500 to-emerald-500",
  },
  orange: {
    iconColor: "text-orange-400",
    iconHoverColor: "group-hover:text-white",
    iconGlow: "bg-orange-500",
    gradient: "hover:from-orange-600 hover:to-amber-600",
    shadow: "hover:shadow-orange-500/20",
    accentLine: "from-orange-500 to-amber-500",
  },
  red: {
    iconColor: "text-red-400",
    iconHoverColor: "group-hover:text-white",
    iconGlow: "bg-red-500",
    gradient: "hover:from-red-600 hover:to-rose-600",
    shadow: "hover:shadow-red-500/20",
    accentLine: "from-red-500 to-rose-500",
  },
  teal: {
    iconColor: "text-teal-400",
    iconHoverColor: "group-hover:text-white",
    iconGlow: "bg-teal-500",
    gradient: "hover:from-teal-600 hover:to-cyan-600",
    shadow: "hover:shadow-teal-500/20",
    accentLine: "from-teal-500 to-cyan-500",
  },
};

const ServiceCard = ({
  icon,
  title,
  description,
  size = "default",
  variant = "blue",
}: ServiceCardProps) => {
  const colors = colorVariants[variant];
  const isCompact = size === "compact";

  return (
    <motion.div
      whileHover={{
        y: isCompact ? -4 : -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl 
                 hover:bg-gradient-to-br ${colors.gradient}
                 hover:border-transparent hover:shadow-xl ${colors.shadow}
                 transition-all duration-300 ease-out cursor-pointer overflow-hidden
                 ${isCompact ? "p-4" : "p-6"}`}
    >
      {/* Icon container with glow effect */}
      <div className={`relative ${isCompact ? "mb-3" : "mb-4"} inline-block`}>
        <div
          className={`absolute inset-0 ${colors.iconGlow} rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
        ></div>
        <div
          className={`relative ${isCompact ? "text-3xl" : "text-5xl"} ${
            colors.iconColor
          } ${
            colors.iconHoverColor
          } transition-colors duration-300 group-hover:scale-110 transform`}
        >
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3
        className={`${
          isCompact ? "text-base" : "text-lg"
        } font-bold text-white mb-2 group-hover:text-white transition-colors duration-300`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`${
          isCompact ? "text-xs" : "text-sm"
        } text-slate-400 group-hover:text-purple-50 transition-colors duration-300`}
      >
        {description}
      </p>

      {/* Hover accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.accentLine}
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`}
      ></div>
    </motion.div>
  );
};

export default ServiceCard;

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronUp, type LucideIcon } from "lucide-react";

// Animation variants
const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 100,
  },
};

const glowVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
  },
};

const iconBounceVariants: Variants = {
  animate: {
    y: [0, -2, 0],
  },
};

const particleVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    opacity: [0, 1, 0],
  },
};

const tooltipVariants: Variants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

type Position = "bottom-right" | "bottom-left" | "top-right" | "top-left";

interface BackToTopProps {
  // Visibility
  showIcon?: boolean;
  showText?: boolean;
  showTooltip?: boolean;
  showGlow?: boolean;
  showParticles?: boolean;
  showProgress?: boolean;
  showBorder?: boolean;

  // Content
  text?: string;
  icon?: LucideIcon;
  tooltipText?: string;

  // Colors
  bgColor?: string;
  bgGradientFrom?: string;
  bgGradientTo?: string;
  textColor?: string;
  borderColor?: string;
  glowColor?: string;

  // Opacity
  opacity?: number;
  changeOpacityOnHover?: boolean;

  // Position
  position?: Position;

  // Behavior
  scrollThreshold?: number;
  scrollBehavior?: ScrollBehavior;
  cursor?: string;

  // Sizes
  size?: "sm" | "md" | "lg";

  // Custom animations (merge with defaults)
  customButtonVariants?: Partial<Variants>;
  customGlowVariants?: Partial<Variants>;
  customIconVariants?: Partial<Variants>;
  customParticleVariants?: Partial<Variants>;
  customTooltipVariants?: Partial<Variants>;
  customTransition?: Record<string, unknown>;

  // Callbacks
  onScrollToTop?: () => void;
}

const positionClasses: Record<Position, string> = {
  "bottom-right":
    "bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10",
  "bottom-left":
    "bottom-6 left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10",
  "top-right": "top-6 right-6 md:top-8 md:right-8 lg:top-10 lg:right-10",
  "top-left": "top-6 left-6 md:top-8 md:left-8 lg:top-10 lg:left-10",
};

const sizeClasses = {
  sm: "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14",
  md: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
  lg: "w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20",
};

const iconSizeClasses = {
  sm: "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5",
  md: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6",
  lg: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7",
};

const textSizeClasses = {
  sm: "text-[0.6rem] sm:text-xs",
  md: "text-xs sm:text-sm",
  lg: "text-xs sm:text-sm md:text-base",
};

const borderWidthClasses = {
  sm: "border",
  md: "border-2",
  lg: "border-2 md:border-[3px]",
};

const BackToTop: React.FC<BackToTopProps> = ({
  showIcon = true,
  showText = false,
  showTooltip = true,
  showGlow = true,
  showParticles = true,
  showProgress = true,
  showBorder = true,
  text = "Top",
  icon: Icon = ChevronUp,
  tooltipText = "Back to Top",
  bgColor,
  bgGradientFrom = "#0093B5",
  bgGradientTo = "#00977D",
  textColor = "white",
  borderColor = "white",
  glowColor = "#00977D",
  opacity = 0.9,
  changeOpacityOnHover = true,
  position = "bottom-right",
  scrollThreshold = 300,
  scrollBehavior = "smooth",
  cursor = "cursor-pointer",
  size = "md",
  customButtonVariants,
  customGlowVariants,
  customIconVariants,
  customParticleVariants,
  customTooltipVariants,
  customTransition,
  onScrollToTop,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = React.useCallback(() => {
    if (window.pageYOffset > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollThreshold]);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: scrollBehavior,
    });
    onScrollToTop?.();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

  // Merge custom variants with original defaults

  // @ts-expect-error - Ignore This
  const mergedButtonVariants: Variants = {
    ...buttonVariants,
    ...(customButtonVariants || {}),
  };
  // @ts-expect-error - Ignore This
  const mergedGlowVariants: Variants = {
    ...glowVariants,
    ...(customGlowVariants || {}),
  };
  // @ts-expect-error - Ignore This
  const mergedIconVariants: Variants = {
    ...iconBounceVariants,
    ...(customIconVariants || {}),
  };
  // @ts-expect-error - Ignore This
  const mergedParticleVariants: Variants = {
    ...particleVariants,
    ...(customParticleVariants || {}),
  };
  // @ts-expect-error - Ignore This
  const mergedTooltipVariants: Variants = {
    ...tooltipVariants,
    ...(customTooltipVariants || {}),
  };

  // Merge custom transition with defaults
  const mergedTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25,
    ...customTransition,
  };

  const bgStyle = bgColor
    ? { backgroundColor: bgColor }
    : {
        backgroundImage: `linear-gradient(to bottom right, ${bgGradientFrom}, ${bgGradientTo})`,
      };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`fixed z-50 ${positionClasses[position]} ${cursor}`}
          variants={mergedButtonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{
            scale: 1.1,
            opacity: changeOpacityOnHover ? 1 : opacity,
          }}
          whileTap={{ scale: 0.9 }}
          // @ts-expect-error - Ignore This
          transition={mergedTransition}
          onClick={scrollToTop}
          aria-label={tooltipText}
          style={{ opacity }}
        >
          {/* Main Button */}
          <div className="relative group">
            {/* Background Glow */}
            {showGlow && (
              <motion.div
                className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: glowColor }}
                variants={mergedGlowVariants}
                animate="animate"
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            {/* Main Button Circle */}
            <div
              className={`relative ${
                sizeClasses[size]
              } rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 ${
                showBorder ? borderWidthClasses[size] : ""
              }`}
              style={{
                ...bgStyle,
                ...(showBorder && { borderColor }),
              }}
            >
              {/* Content */}
              <div
                className={`flex items-center ${showText ? "flex-col" : ""}`}
                style={{ color: textColor }}
              >
                {/* Chevron Icon */}
                {showIcon && (
                  <motion.div
                    variants={mergedIconVariants}
                    animate="animate"
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className={iconSizeClasses[size]} />
                  </motion.div>
                )}

                {/* Text */}
                {showText && (
                  <span
                    className={`${textSizeClasses[size]} font-medium mt-0.5`}
                  >
                    {text}
                  </span>
                )}
              </div>

              {/* Progress Circle */}
              {showProgress && (
                <svg
                  className="absolute inset-0 w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke={textColor}
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="301.59"
                    initial={{ strokeDashoffset: 301.59 }}
                    animate={{
                      strokeDashoffset: [301.59, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  />
                </svg>
              )}
            </div>

            {/* Tooltip */}
            {showTooltip && (
              <motion.div
                className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1.5 sm:px-3 sm:py-2 bg-gray-900 text-white text-xs sm:text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                variants={mergedTooltipVariants}
                initial="hidden"
                whileHover="visible"
              >
                {tooltipText}
                {/* Tooltip arrow */}
                <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rotate-45"></div>
              </motion.div>
            )}
          </div>

          {/* Floating particles */}
          {showParticles && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full opacity-70"
                  style={{
                    backgroundColor: textColor,
                    left: `${20 + i * 30}%`,
                    bottom: "10%",
                  }}
                  variants={mergedParticleVariants}
                  animate="animate"
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;

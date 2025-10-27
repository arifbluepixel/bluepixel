import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  className?: string;
  delay?: number;
  iconAnimation?: boolean;
  variant?: "colorful" | "minimal" | "form";
  rounded?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  color?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  onClick,
  href,
  icon: Icon,
  className = "",
  delay = 0.4,
  iconAnimation = true,
  variant = "colorful",
  rounded = false,
  disabled = false,
  type = "button",
  fullWidth = false,
  color = "cyan-600",
}) => {
  const colorfulContent = (
    <>
      <span className="relative z-10 flex items-center group-hover:text-white text-xl transition-colors duration-300 font-bold delay-150">
        {text}
        {Icon && (
          <motion.span
            className="w-4 h-8 ml-2 group-hover:translate-x-1 flex justify-center items-center transition-transform duration-300"
            animate={iconAnimation && !disabled ? { x: [0, 4, 0] } : {}}
            transition={
              iconAnimation && !disabled
                ? { duration: 1.5, repeat: Infinity }
                : {}
            }
          >
            <Icon size={16} />
          </motion.span>
        )}
      </span>

      {/* Left side fill */}
      <span className="absolute inset-y-0 left-0 w-[51%] bg-gradient-to-r to-cyan-600 from-teal-400 transform -translate-x-full group-hover:translate-x-0 origin-left transition-transform duration-500 ease-out z-0" />

      {/* Right side fill */}
      <span className="absolute inset-y-0 right-0 w-[51%] bg-gradient-to-l to-cyan-600 from-teal-400 transform translate-x-full group-hover:translate-x-0 origin-right transition-transform duration-500 ease-out z-0" />
    </>
  );

  const minimalContent = (
    <>
      <span className="relative z-10 flex items-center transition-colors duration-500 ease-in-out group-hover:text-black dark:group-hover:text-black">
        {text}
        {Icon && (
          <motion.span
            className="ml-2 inline-block transition-all duration-500 ease-in-out group-hover:text-black"
            animate={iconAnimation && !disabled ? { x: [0, 4, 0] } : {}}
            transition={
              iconAnimation && !disabled
                ? { duration: 1.5, repeat: Infinity }
                : {}
            }
          >
            <Icon size={20} />
          </motion.span>
        )}
      </span>

      {/* Background fill */}
      <span className="absolute inset-0 bg-white dark:bg-gray-100 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out z-0" />
    </>
  );

  const formContent = (
    <>
      <span className="relative z-10 flex items-center justify-center group-hover:text-white text-lg transition-colors duration-300 font-bold delay-150">
        {text}
        {Icon && (
          <motion.span
            className="ml-2 flex justify-center items-center transition-transform duration-300 group-hover:translate-x-1"
            animate={iconAnimation && !disabled ? { x: [0, 4, 0] } : {}}
            transition={
              iconAnimation && !disabled
                ? { duration: 1.5, repeat: Infinity }
                : {}
            }
          >
            <Icon size={18} />
          </motion.span>
        )}
      </span>

      {/* Left side fill */}
      <span className="absolute inset-y-0 left-0 w-[51%] bg-gradient-to-r to-cyan-600 from-teal-400 transform -translate-x-full group-hover:translate-x-0 origin-left transition-transform duration-500 ease-out z-0" />

      {/* Right side fill */}
      <span className="absolute inset-y-0 right-0 w-[51%] bg-gradient-to-l to-cyan-600 from-teal-400 transform translate-x-full group-hover:translate-x-0 origin-right transition-transform duration-500 ease-out z-0" />
    </>
  );

  const colorfulClasses =
    `relative inline-flex items-center px-6 py-3 border-2 border-cyan-600 text-${color} font-medium overflow-hidden group rounded-lg cursor-pointer`;

  const minimalClasses = `inline-flex items-center justify-center gap-2 text-lg cursor-pointer px-7 py-3 border-[1px] transition-all duration-500 ease-in-out group relative overflow-hidden ${
    rounded ? "rounded-full" : "rounded-lg hover:rounded-full"
  } bg-transparent border-white text-white hover:bg-white hover:text-black dark:border-gray-200 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-black`;

  const formClasses = `relative inline-flex items-center justify-center px-8 py-4 border-2 font-medium overflow-hidden group rounded-lg transition-all duration-300 ${
    fullWidth ? "w-full" : ""
  } ${
    disabled
      ? "border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-60"
      : "border-cyan-600 dark:border-cyan-500 text-cyan-600 dark:text-cyan-400 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-cyan-400/30"
  }`;

  const buttonContent =
    variant === "colorful"
      ? colorfulContent
      : variant === "minimal"
      ? minimalContent
      : formContent;

  const baseClasses =
    variant === "colorful"
      ? colorfulClasses
      : variant === "minimal"
      ? minimalClasses
      : formClasses;

  const wrapperClasses =
    variant === "form"
      ? fullWidth
        ? "w-full"
        : ""
      : `pt-4 text-center mt-12 ${className}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={wrapperClasses}
    >
      {href ? (
        <Link href={href} className={baseClasses}>
          {buttonContent}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={baseClasses}
          disabled={disabled}
          type={type}
        >
          {buttonContent}
        </button>
      )}
    </motion.div>
  );
};

export default AnimatedButton;
"use client";

import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  text?: string;
  color?: string;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  text = "Scroll to Discover",
  color = "cyan",
  className = "",
  delay = 1.2,
  onClick,
}) => {
  // Color mapping for dynamic classes
  const colorMap = {
    cyan: {
      border: "border-cyan-400/70",
      dot: "bg-cyan-400",
      text: "text-gray-300",
    },
    emerald: {
      border: "border-emerald-400/70",
      dot: "bg-emerald-400",
      text: "text-gray-300",
    },
    teal: {
      border: "border-teal-400/70",
      dot: "bg-teal-400",
      text: "text-gray-300",
    },
    purple: {
      border: "border-purple-400/70",
      dot: "bg-purple-400",
      text: "text-gray-300",
    },
    white: {
      border: "border-white/70",
      dot: "bg-white",
      text: "text-white",
    },
  };

  const selectedColor =
    colorMap[color as keyof typeof colorMap] || colorMap.cyan;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center space-y-3">
        <span
          className={`text-xs uppercase tracking-widest ${selectedColor.text}`}
        >
          {text}
        </span>
        <motion.div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${selectedColor.border}`}
          animate={{
            borderColor: [
              "rgba(34, 211, 238, 0.7)",
              "rgba(34, 211, 238, 0.3)",
              "rgba(34, 211, 238, 0.7)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className={`w-1 h-2 rounded-full mt-2 ${selectedColor.dot}`}
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;

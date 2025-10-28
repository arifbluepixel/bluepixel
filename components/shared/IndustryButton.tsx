"use client";
import { IndustryButtonProps } from "@/lib/types";
import { useState, useRef } from "react";

// Button component with tooltip
export const IndustryButton: React.FC<IndustryButtonProps> = ({
  industry,
  isPrimary,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Show tooltip immediately
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear timeout if user hovers back
    }
    setShowTooltip(true);
  };

  // Delay hiding tooltip for 1s
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 200); // 1s delay
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`relative inline-flex items-center px-5 md:px-4 lg:px-6 py-2 md:py-3 rounded-full text-base font-medium transition-all duration-500 whitespace-nowrap overflow-hidden group cursor-pointer ${
          isPrimary
            ? "bg-gray-900 text-white"
            : "bg-transparent text-gray-700 border border-gray-300"
        }`}
      >
        {/* Background effect */}
        <span className="absolute inset-0 bg-gradient-to-b from-yellow-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-full group-hover:translate-y-0"></span>

        {/* Text should remain visible */}
        <span className="relative z-10 group-hover:text-white transition-all duration-500">
          {industry.name}
        </span>
      </button>

      {/* Tooltip - stays visible for 1s after mouse leaves */}
      {showTooltip && (
        <div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-72 bg-white rounded-lg shadow-lg p-3 z-10 text-left transition-opacity duration-300"
          onMouseEnter={handleMouseEnter} // Keep it open if hovered
          onMouseLeave={handleMouseLeave} // Apply delay on exit
        >
          <p className="text-gray-700 text-sm">{industry.description}</p>
          {industry.link && (
            <a
              href={industry.link}
              className="text-blue-600 text-xs mt-1 inline-block hover:underline"
            >
              Learn more
            </a>
          )}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white"></div>
        </div>
      )}
    </div>
  );
};

"use client";
import { IndustryButtonProps } from "@/lib/types";
import { useState, useRef } from "react";

// Button component with tooltip
export const IndustryButton: React.FC<IndustryButtonProps> = ({
  industry,
  isPrimary,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Show tooltip after 1 second
  const handleMouseEnter = () => {
    // Clear any pending hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    // Set timeout to show tooltip after 300ms
    showTimeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 400);
  };

  // Hide tooltip immediately when mouse leaves
  const handleMouseLeave = () => {
    // Clear the show timeout if mouse leaves before 1 second
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }

    // Hide tooltip immediately
    setShowTooltip(false);
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
        <span className="absolute inset-0 bg-gradient-to-b from-sky-600 to-sky-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-full group-hover:translate-y-0"></span>

        {/* Text should remain visible */}
        <span className="relative z-10 group-hover:text-white transition-all duration-500">
          {industry.name}
        </span>
      </button>

      {/* Single tooltip with responsive positioning */}
      {showTooltip && (
        <>
          <div className="fixed md:absolute top-1/2 left-1/2 md:top-auto md:bottom-full md:left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-2 w-[90vw] max-w-sm md:w-72 bg-white rounded-lg shadow-2xl md:shadow-lg p-4 md:p-3 z-50 md:z-10 text-left animate-in fade-in duration-200">
            {/* Close button - only on mobile */}
            <button
              onClick={() => setShowTooltip(false)}
              className="md:hidden absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close tooltip"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <p className="text-gray-700 text-sm pr-6 md:pr-0">
              {industry.description}
            </p>
            {industry.link && (
              <a
                href={industry.link}
                className="text-blue-600 text-xs mt-2 md:mt-1 inline-block hover:underline"
              >
                Learn more
              </a>
            )}
            {/* Arrow pointer - only visible on desktop */}
            <div className="hidden md:block absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white"></div>
          </div>

          {/* Backdrop overlay - only on mobile, clickable to close */}
          <div
            className="md:hidden fixed inset-0 bg-black/5 z-40 animate-in fade-in duration-200"
            onClick={() => setShowTooltip(false)}
          ></div>
        </>
      )}
    </div>
  );
};

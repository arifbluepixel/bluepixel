import React from "react";
import Link from "next/link";
import { ColoredButtonProps } from "@/lib/types";

export const ColoredButton: React.FC<ColoredButtonProps> = ({
  ColoringButton,
  isPrimary,
  isFullWidth,
}) => {
  return (
    <Link href={ColoringButton.link}>
      <button
        className={`relative inline-flex justify-center items-center px-6 md:px-4 lg:px-6 py-3 rounded-2xl text-xl font-medium transition-all duration-500 whitespace-nowrap overflow-hidden group cursor-pointer ${
          isFullWidth ? " w-full " : "w-full md:w-fit  "
        } ${
          isPrimary
            ? "bg-gray-900 text-white font-pacifico"
            : "bg-transparent text-gray-900 border border-gray-300 "
        }`}
      >
        {/* Background effect */}
        <span className="absolute inset-0 bg-gradient-to-b from-yellow-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-full group-hover:translate-y-0"></span>

        {/* Text should remain visible */}
        <span
          className={`relative z-10 group-hover:text-white transition-all duration-500 `}
        >
          {ColoringButton.name}
        </span>
      </button>
    </Link>
  );
};

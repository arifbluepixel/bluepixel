"use client";
import { StaticImageData } from "next/image";
import React from "react";
import BeforeAfterSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

interface BeforeAfterSliderProps {
  beforeImage: string | StaticImageData;
  afterImage: string | StaticImageData;
  width?: number | string;
  height?: number | string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSliderComponent: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  width = 800, // Default width
  height = 500, // Default height
}) => {
  // Convert StaticImageData to string URL if needed
  const beforeImageUrl =
    typeof beforeImage === "string" ? beforeImage : beforeImage.src;
  const afterImageUrl =
    typeof afterImage === "string" ? afterImage : afterImage.src;

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg relative"
      style={{ width, height }}
    >
      {/* Before Text */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-sm font-medium z-10">
        Before
      </div>

      {/* After Text */}
      <div className="absolute top-4 right-4 bg-yellow-400 bg-opacity-50 text-black font-bold px-2 py-1 rounded-md text-sm z-10">
        After
      </div>

      {/* Slider Component */}
      <BeforeAfterSlider
        firstImage={{ imageUrl: beforeImageUrl, alt: "Before" }}
        secondImage={{ imageUrl: afterImageUrl, alt: "After" }}
        delimiterIconStyles={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#fff",
          border: "2px solid #FBCE3A",
        }}
        currentPercentPosition={50}
      />
    </div>
  );
};

export default BeforeAfterSliderComponent;

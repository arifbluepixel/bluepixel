"use client";

import {
  slider1,
  slider10,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider9,
} from "@/lib/constants/images";
import Image from "next/image";

// --- Main Component ---
const BottomGallery = () => {
  const sliderImages = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
  ];

  // Duplicate the array for a seamless loop effect
  const duplicatedImages = [...sliderImages, ...sliderImages];

  return (
    <>
      {/* Inline styles for the carousel animation */}
      <style jsx global>{`
        .slider-track {
          animation: scroll 40s linear infinite;
        }
        .slider:hover .slider-track {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${sliderImages.length}));
          }
        }
      `}</style>

      <section className=" bg-gray-800 overflow-hidden py-1">
        {/* --- Continuous Image Carousel --- */}
        <div
          className="relative slider w-[100vw] left-[calc(-50vw+50%)]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="slider-track flex w-max">
            {duplicatedImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-[250px] p-2">
                <div className="group h-[350px] relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  <Image
                    src={image}
                    alt={`Model showcasing clothing ${
                      (index % sliderImages.length) + 1
                    }`}
                    fill
                    className="object-cover absolute top-0 left-0 w-full h-full"
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomGallery;

"use client";

import { CONTACT_ADDRESS, SITE_NAME } from "@/lib/constants/env";
import { Inter, Playfair_Display } from "next/font/google";
import { Map, Marker } from "pigeon-maps";
import { FaLocationArrow } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function MapContact() {
  const position: [number, number] = [23.830052424914633, 90.4182664597695];

  const getMapHeight = () => {
    if (typeof window === "undefined") return 500;
    if (window.innerWidth < 768) return 350;
    if (window.innerWidth < 1024) return 450;
    return 500;
  };

  return (
    <section id="map-section" className="relative h-auto w-full pb-16 md:pb-20">
      <Map
        center={position}
        zoom={18}
        defaultWidth={100}
        height={getMapHeight()}
        boxClassname="rounded-xl"
      >
        <Marker anchor={position} width={50} color="var(--primary)" />
      </Map>

      {/* Compact Mobile Design */}
      <div className="absolute top-2 left-2 md:top-6 md:left-6 lg:top-8 lg:left-8 z-10">
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden max-w-[160px] md:max-w-sm lg:max-w-md">
          {/* Mobile Header */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500 px-2 py-1 md:px-4 md:py-3 lg:px-6 lg:py-4">
            <h3 className={`text-sm md:text-xl lg:text-2xl font-bold text-white text-center ${playfair.className}`}>
              <span className="md:hidden">Location</span>
              <span className="hidden md:inline">{SITE_NAME}</span>
            </h3>
          </div>

          {/* Mobile Content */}
          <div className={`p-2 md:p-4 lg:p-6 space-y-2 md:space-y-4 ${inter.className}`}>
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <FaLocationArrow className="text-xs md:text-sm" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="hidden md:block text-xs lg:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  Address
                </p>
                <p className="text-xs md:text-sm lg:text-base text-gray-800 dark:text-gray-200 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {CONTACT_ADDRESS}
                </p>
              </div>
            </div>

            <button
              onClick={() => window.open(`https://www.google.com/maps?q=${position[0]},${position[1]}`, "_blank")}
              className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-1 md:py-2 lg:py-3 px-2 md:px-4 rounded md:rounded-lg text-xs md:text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="md:hidden">Map</span>
              <span className="hidden md:inline">Get Directions</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
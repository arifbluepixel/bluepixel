import {
  slider1,
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
import React from "react";
import SocialFollow from "../shared/SocialFollow";

const ImageGrid: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-7xl w-11/12 mx-auto mb-8">
        {/* Special layout for first 5 images */}
        <div className="col-span-1 row-span-1 md:row-span-1 overflow-hidden rounded">
          <Image
            width={1080}
            height={1080}
            quality={100}
            src={slider1}
            alt="Image 1"
            className="w-full h-full object-cover p-1 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-1 overflow-hidden rounded">
          <Image
            width={1080}
            height={1080}
            quality={100}
            src={slider2}
            alt="Image 2"
            className="w-full h-full object-cover p-1 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-2 overflow-hidden rounded">
          <Image
            width={1080}
            height={1080}
            quality={100}
            src={slider3}
            alt="Image 5"
            className="w-full h-full object-cover p-1 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-1 overflow-hidden rounded">
          <Image
            width={1080}
            height={1080}
            quality={100}
            src={slider4}
            alt="Image 3"
            className="w-full h-full object-cover p-1 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-1 overflow-hidden rounded">
          <Image
            width={1080}
            height={1080}
            quality={100}
            src={slider5}
            alt="Image 4"
            className="w-full h-full object-cover p-1 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        {/* Special layout for Reverse */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 col-span-1 md:col-span-3 gap-4 ">
          <div className="col-span-1 row-span-1 md:row-span-2 overflow-hidden rounded">
            <Image
              width={1080}
              height={1080}
              quality={100}
              src={slider6}
              alt="Image 13"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden rounded">
            <Image
              width={1080}
              height={1080}
              quality={100}
              src={slider7}
              alt="Image 14"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="col-span-1 row-span-1 md:row-span-2 overflow-hidden rounded">
            <Image
              width={1080}
              height={1080}
              quality={100}
              src={slider8}
              alt="Image 15"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden rounded">
            <Image
              width={1080}
              height={1080}
              quality={100}
              src={slider9}
              alt="Image 16"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <SocialFollow title="Share" size="md" />
    </div>
  );
};

export default ImageGrid;

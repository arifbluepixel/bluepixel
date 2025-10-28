"use client";

import {
  FaEraser,
  FaAdjust,
  FaFileImage,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { TbVectorBezier, TbCrop, TbBrightnessUp } from "react-icons/tb";
import {
  MdColorLens,
  MdOutlineLayers,
  MdOutlinePhotoSizeSelectLarge,
} from "react-icons/md";
import {
  BsStars,
  BsFillImageFill,
  BsLayers,
  BsDropletHalf,
  BsFilter,
} from "react-icons/bs";
import { RiImageEditFill, RiImageAddFill } from "react-icons/ri";
import { GiMagicBroom, GiResize } from "react-icons/gi";
import { IoIosImages } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { icon: <FaEraser />, title: "Background Removal" },
  { icon: <TbVectorBezier />, title: "Clipping Path" },
  { icon: <MdColorLens />, title: "Color Correction" },
  { icon: <BsStars />, title: "Image Masking" },
  { icon: <RiImageEditFill />, title: "Image Retouching" },
  { icon: <GiMagicBroom />, title: "Image Manipulation" },
  { icon: <TbCrop />, title: "Image Cropping" },
  { icon: <MdOutlinePhotoSizeSelectLarge />, title: "Image Resizing" },
  { icon: <FaAdjust />, title: "Brightness & Contrast Adjustment" },
  { icon: <MdOutlineLayers />, title: "Layer Masking" },
  { icon: <BsFillImageFill />, title: "Photo Restoration" },
  { icon: <BsLayers />, title: "Multi-Layer Editing" },
  { icon: <RiImageAddFill />, title: "Image Enhancement" },
  { icon: <IoIosImages />, title: "Photo Merging" },
  { icon: <FaFileImage />, title: "Vector Conversion" },
  { icon: <GiResize />, title: "Aspect Ratio Adjustment" },
  { icon: <BsDropletHalf />, title: "Color Grading" },
  { icon: <TbBrightnessUp />, title: "HDR Image Processing" },
  { icon: <BsFilter />, title: "Advanced Filters & Effects" },
  { icon: <FaCloudUploadAlt />, title: "Bulk Image Processing" },
];

const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  return (
    <div className="bg-duck-bgblue">
      <section
        ref={ref}
        className="w-11/12 max-w-7xl mx-auto py-8 md:py-12 lg:py-16"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-bold text-4xl md:text-5xl font-oswald uppercase text-white">
            What We Offer
          </h2>
          <p className="mt-3 text-white text-lg">
            We provide a wide range of professional image editing services to
            meet your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="pt-8"
        >
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 hover:bg-yellow-300 transition-all ease-in-out duration-300 rounded-lg shadow-md flex flex-col items-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="text-5xl text-yellow-500 mb-4 group-hover:text-duck-bgblue">
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium font-oswald">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesSection;

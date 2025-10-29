"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { PlayCircle, X } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const videos = [
  {
    id: 1,
    thumbnail: `https://img.youtube.com/vi/6ChpKMUj_bM/maxresdefault.jpg`,
    alt: "Video 1",
    url: "https://www.youtube.com/embed/6ChpKMUj_bM",
  },
  {
    id: 2,
    thumbnail: `https://img.youtube.com/vi/zLoNy4E5AGg/maxresdefault.jpg`,
    alt: "Video 2",
    url: "https://www.youtube.com/embed/zLoNy4E5AGg",
  },
  {
    id: 3,
    thumbnail: `https://img.youtube.com/vi/c_Xdgyopz74/maxresdefault.jpg`,
    alt: "Video 3",
    url: "https://www.youtube.com/embed/c_Xdgyopz74",
  },
  {
    id: 4,
    thumbnail: `https://img.youtube.com/vi/nVxS9eloWvo/maxresdefault.jpg`,
    alt: "Video 4",
    url: "https://www.youtube.com/embed/nVxS9eloWvo",
  },
];

const containerVariants = {
  hidden: { opacity: 0.8, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

interface VideoItemProps {
  video: {
    id: number;
    thumbnail: string;
    alt: string;
    url: string;
  };
  index: number;
  onClick: (url: string) => void;
}

const VideoItem = ({ video, index, onClick }: VideoItemProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 1", "0.8 1"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -100 : 100, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="relative group cursor-pointer"
      onClick={() => onClick(video.url)}
    >
      <Image
        src={video.thumbnail}
        alt={video.alt}
        width={300}
        height={200}
        className="w-full h-auto rounded-lg"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition duration-300 rounded-lg flex items-center justify-center">
        <PlayCircle className="text-white w-24 h-24" />
      </div>
    </motion.div>
  );
};

const VideoBox = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="px-5 text-center max-w-7xl mx-auto w-11/12 py-12 md:py-16 lg:py-20 overflow-hidden">
      <motion.div
        ref={ref}
        // @ts-expect-error - ignore
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center gap-2 my-5"
      >
        <motion.h2 className="text-duck-bluefont text-4xl md:text-5xl font-bold mt-1 ">
          Our 3D <span className="text-yellow-600">Animated </span>
          Videos
        </motion.h2>
        <motion.h3 className="text-lg md:text-xl text-duck-bluefontlight font-bold">
          Turning Ideas Into Visuals
        </motion.h3>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {videos.map((video, index) => (
          <VideoItem
            key={video.id}
            video={video}
            index={index}
            onClick={setSelectedVideo}
          />
        ))}
      </div>

      <button className="mt-6 px-6 py-2 text-duck-bluefont border border-duck-cardblue rounded-lg hover:text-yellow-400 hover:bg-black cursor-pointer font-semibold font-pacifico text-xl bg-gray-200 transition">
        See More Videos
      </button>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-200 hover:text-white border-2 border-white rounded-3xl"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              className="w-full h-[400px] md:h-[500px] rounded-lg"
              src={`${selectedVideo}?autoplay=1`}
              title="Video Player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoBox;

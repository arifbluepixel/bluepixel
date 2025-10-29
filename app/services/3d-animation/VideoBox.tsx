"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { PlayCircle, X } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { DarkContainer } from "@/components/shared/PageSections";
import PageSectionHeader from "@/components/shared/PageSectionHeader";

const videos = [
  {
    id: 1,
    thumbnail: `https://img.youtube.com/vi/6ChpKMUj_bM/maxresdefault.jpg`,
    alt: "3D Animation Showcase",
    title: "Product Visualization",
    url: "https://www.youtube.com/embed/6ChpKMUj_bM",
  },
  {
    id: 2,
    thumbnail: `https://img.youtube.com/vi/zLoNy4E5AGg/maxresdefault.jpg`,
    alt: "Character Animation",
    title: "Character Animation",
    url: "https://www.youtube.com/embed/zLoNy4E5AGg",
  },
  {
    id: 3,
    thumbnail: `https://img.youtube.com/vi/c_Xdgyopz74/maxresdefault.jpg`,
    alt: "Motion Graphics Demo",
    title: "Motion Graphics",
    url: "https://www.youtube.com/embed/c_Xdgyopz74",
  },
  {
    id: 4,
    thumbnail: `https://img.youtube.com/vi/nVxS9eloWvo/maxresdefault.jpg`,
    alt: "Visual Effects Reel",
    title: "Visual Effects",
    url: "https://www.youtube.com/embed/nVxS9eloWvo",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface VideoItemProps {
  video: {
    id: number;
    thumbnail: string;
    alt: string;
    title: string;
    url: string;
  };
  index: number;
  onClick: (url: string) => void;
}

const VideoItem = ({ video, onClick }: VideoItemProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      // @ts-expect-error - ignore
      variants={itemVariants}
      style={{ y, opacity }}
      className="group cursor-pointer"
      onClick={() => onClick(video.url)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.alt}
            width={600}
            height={400}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-blue-500/30 transition-all duration-300"
            >
              <PlayCircle className="text-white w-16 h-16 drop-shadow-lg" />
            </motion.div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-lg">{video.title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoBox = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  return (
    <DarkContainer>
      <div className="px-5 max-w-7xl mx-auto w-full py-16 md:py-20 lg:py-24">
        {/* Header */}
        <PageSectionHeader
          badge="Our Portfolio"
          title="3D Animated Videos"
          description="Turning Ideas Into Stunning Visual Experiences"
          darkMode={true}
        />

        {/* Videos Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12"
        >
          {videos.map((video, index) => (
            <VideoItem
              key={video.id}
              video={video}
              index={index}
              onClick={setSelectedVideo}
            />
          ))}
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-slate-900 rounded-2xl shadow-2xl max-w-5xl w-full border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-4 -right-4 bg-blue-500 hover:bg-blue-600 text-slate-900 rounded-full p-2 transition-colors duration-200 shadow-lg z-10"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                className="w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl"
                src={`${selectedVideo}?autoplay=1`}
                title="Video Player"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </div>
    </DarkContainer>
  );
};

export default VideoBox;

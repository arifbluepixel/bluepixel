"use client";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Image, { StaticImageData } from "next/image";
import { Play, X } from "lucide-react";
import { Pacifico, Playfair_Display } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

interface OurStoryProps {
  sectionTitle?: string;
  storyTitle?: string;
  introText?: string;
  leftColumnText?: string;
  rightColumnText?: string;
  showLeftColumn?: boolean;
  showRightColumn?: boolean;
  videoTitle?: string;
  videoDuration?: string;
  onVideoClick?: () => void;
  videoUrl?: string;
  videoIframeUrl?: string;
  signatureString?: string;
  signature?: string | StaticImageData;
  signatureAlt?: string;
}

const OurStory: React.FC<OurStoryProps> = ({
  sectionTitle = "",
  storyTitle = "Our Story",
  introText = "With over 34 years of experience in the clothing industry, we bring together expertise from across the world's fashion disciplines and offer clients a full range of customized services.",
  leftColumnText = "We have products to suit all budgets, both luxurious and economic, split into collections with a very different style to each other that meet every need. Throughout all sourcing, pattern-cutting, sample-making, main production, labelling, and packaging stages, our QC Team is present to ensure consistent quality.",
  rightColumnText = "Our diverse range caters to every budget — from premium luxury pieces to affordable everyday options, each collection crafted with its own distinct personality. From sourcing and design to production, labeling, and packaging, our dedicated QC team ensures flawless quality at every step.",
  showLeftColumn = true,
  showRightColumn = true,
  videoTitle = "INTRO VIDEO",
  videoDuration = "Spend 90 seconds",
  onVideoClick,
  videoUrl,
  videoIframeUrl,
  signature,
  signatureAlt = "Signature",
  signatureString = "",
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animationData, setAnimationData] = useState<any>(null);

  // Load Lottie animation
  useEffect(() => {
    fetch("/lottie/Welcome.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  // Extract YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleVideoClick = () => {
    if (onVideoClick) onVideoClick();
    else if (videoUrl || videoIframeUrl) setShowVideoModal(true);
  };

  const closeModal = () => setShowVideoModal(false);

  const getEmbedUrl = () => {
    if (videoIframeUrl) return videoIframeUrl;
    if (videoUrl) {
      const id = getYouTubeId(videoUrl);
      if (id) return `https://www.youtube.com/embed/${id}`;
      return videoUrl;
    }
    return null;
  };

  const embedUrl = getEmbedUrl();

  return (
    <>
      <section className="bg-gradient-to-b from-gray-200 to-gray-100 dark:from-slate-700 dark:to-slate-600 text-white py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="max-w-5xl mx-auto mb-12 text-center lg:text-left">
          {sectionTitle && (
            <h3 className="text-sm md:text-base font-medium tracking-wider text-gray-900 dark:text-gray-300 mb-4">
              {sectionTitle}
            </h3>
          )}
          <p className="text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-200 leading-relaxed">
            {introText}
          </p>
        </div>

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Lottie Animation */}
          <div className="flex justify-center lg:justify-end">
            {animationData && (
              <div className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[50px] xl:w-[520px]">
                <Lottie animationData={animationData} loop={true} />
              </div>
            )}
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h2
              className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-gray-950 dark:text-gray-100 leading-tight tracking-tight`}
            >
              {storyTitle}
            </h2>

            {(showLeftColumn || showRightColumn) && (
              <div
                className={`grid gap-6 md:gap-8 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed ${
                  showLeftColumn && showRightColumn
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {showLeftColumn && (
                  <p className="text-justify">{leftColumnText}</p>
                )}
                {showRightColumn && (
                  <p className="text-justify">{rightColumnText}</p>
                )}
              </div>
            )}

            <div className="border-t-2 border-gray-400 dark:border-gray-700 pt-2"></div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Video Button */}
              {(onVideoClick || videoUrl || videoIframeUrl) && (
                <button
                  onClick={handleVideoClick}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-teal-500 dark:border-gray-400 flex items-center justify-center bg-white/80 dark:bg-neutral-800 backdrop-blur-sm transition-all duration-300 group-hover:bg-teal-100 dark:group-hover:bg-gray-300 group-hover:scale-110 shadow-sm hover:shadow-md">
                    <Play
                      size={26}
                      className="fill-teal-600 text-teal-600 dark:fill-gray-200 dark:text-gray-200 group-hover:fill-teal-800 group-hover:text-teal-800 dark:group-hover:fill-neutral-900 dark:group-hover:text-neutral-900 transition-all duration-300 ml-1"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 tracking-wide">
                      {videoTitle}
                    </p>
                    <p className="text-xs md:text-sm text-gray-800 dark:text-gray-400">
                      {videoDuration}
                    </p>
                  </div>
                </button>
              )}

              {/* Signature */}
              {signature && (
                <div className="relative w-40 h-12 md:w-48 md:h-14 pt-2">
                  <Image
                    src={signature}
                    alt={signatureAlt}
                    fill
                    className="object-contain opacity-80 dark:opacity-70"
                  />
                </div>
              )}
              {signatureString && !signature && (
                <div
                  className={`relative w-40 h-12 text-teal-800 dark:text-gray-200 md:w-48 md:h-14 text-xl ${pacifico.className} pt-2`}
                >
                  {signatureString}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && embedUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video player"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OurStory;

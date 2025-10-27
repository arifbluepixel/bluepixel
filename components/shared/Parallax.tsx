"use client";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import AnimatedButton from "@/components/shared/AnimatedButton";
import { worktogether } from "@/lib/constants/images";

// Load Playfair Display from next/google (Google Fonts)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  variable: "--font-playfair",
});

type ParallaxProps = {
  showExtraData: boolean;
  title?: string;
  description?: string;
  contactButton?: boolean;
  contactButtonText?: string;
  parallaxImage?: string | StaticImageData;
  parallaxOverlay: string;
  position?: string;
  rounded?: boolean;
  customFontClass?: string; // Optional custom font class
  useRegularFont?: boolean; // If true, use regular font instead of Playfair
};

const Parallax = ({
  showExtraData,
  title,
  description,
  contactButton = false,
  contactButtonText = "Book Me",
  parallaxImage = worktogether,
  parallaxOverlay,
  position = "top center",
  rounded = false,
  customFontClass = "",
  useRegularFont = false,
}: ParallaxProps) => {
  const [leftCenter, setLeftCenter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setLeftCenter(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine font class to use
  const fontClass = customFontClass
    ? customFontClass
    : useRegularFont
    ? "font-sans"
    : playfair.className;

  return (
    <div className="relative h-[75vh] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover transition-transform duration-75"
        style={{
          backgroundImage: `url(${parallaxImage})`,
          backgroundSize: "cover",
          backgroundPosition: leftCenter ? "center center" : position,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {parallaxOverlay && parallaxOverlay != "" && (
          <div className={`absolute inset-0 ${parallaxOverlay}`}></div>
        )}

        {showExtraData &&
        (title != "" || description != "" || contactButton != false) ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            {title && title != "" && (
              <h2
                className={
                  `${fontClass} text-center mb-4 leading-tight font-semibold text-white dark:text-gray-100 tracking-tight ` +
                  "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:lg:text-9xl"
                }
              >
                {title}
              </h2>
            )}

            {description && description != "" && (
              <p className="max-w-3xl text-center text-lg sm:text-xl md:text-2xl  text-white/90 dark:text-gray-200/90">
                {description}
              </p>
            )}

            {contactButton && (
              <>
                <AnimatedButton
                  text={contactButtonText}
                  href="/contact-us"
                  icon={ArrowRight}
                  variant="minimal"
                  rounded={rounded}
                />
              </>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Parallax;

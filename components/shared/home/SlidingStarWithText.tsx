"use client";

import { bluepixel } from "@/lib/constants/images";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SlidingStarWithText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const starControls = useAnimation();
  const textControls = useAnimation();
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const fullText = "Blue-Pixel.art";

  useEffect(() => {
    if (isInView) {
      starControls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
          duration: 0.8,
        },
      });
      textControls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
      });

      setTimeout(() => {
        setIsTyping(true);
        let i = 0;
        const interval = setInterval(() => {
          setDisplayText(fullText.slice(0, i + 1));
          i++;
          if (i === fullText.length) {
            clearInterval(interval);
            setIsTyping(false);
            starControls.start({
              rotate: [0, 360],
              transition: { duration: 10, repeat: Infinity, ease: "linear" },
            });
          }
        }, 100);
      }, 400);
    }
  }, [isInView, starControls, textControls]);

  return (
    <div ref={ref} className="flex items-center justify-center gap-3">
      {/* Sliding Image with Spin */}
      <motion.div initial={{ x: -50, opacity: 0 }} animate={starControls}>
        <Image
          width={48}
          height={48}
          src={bluepixel}
          alt="Logo"
          className="h-10 md:h-12 w-10 md:w-12 drop-shadow-lg"
        />
      </motion.div>

      {/* Text Reveal with Typing Effect */}
      <motion.span
        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -10 }}
        animate={textControls}
      >
        {displayText}
        {isTyping && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ color: "#0d9488" }}
          >
            |
          </motion.span>
        )}
      </motion.span>
    </div>
  );
};

export default SlidingStarWithText;

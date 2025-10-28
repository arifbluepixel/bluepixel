"use client";
import Image from "next/image";
import { useState, useRef, CSSProperties } from "react";
import { TiltCardProps } from "@/lib/types";

const TiltCard = ({ render }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<CSSProperties>({
    transform:
      "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
    transition: "all 0.1s ease",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the card
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element

    // Calculate rotation based on mouse position
    // We use the position relative to the center of the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles
    // Reverse the X rotation to make it feel more natural
    const rotateX = -1 * ((y - centerY) / centerY) * 15; // Max 15 degrees rotation
    const rotateY = ((x - centerX) / centerX) * 15; // Max 15 degrees rotation

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "all 0.1s ease",
    });
  };

  const handleMouseLeave = (): void => {
    setTiltStyle({
      transform:
        "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
      transition: "all 0.5s ease",
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
    >
      <Image
        src={render.imageUrl}
        alt={`Rendering ${render.id}`}
        width={500}
        height={500}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-1 transition-opacity duration-300 group-hover:opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-white text-lg font-semibold px-4">{render.text}</p>
      </div>
    </div>
  );
};

export default TiltCard;

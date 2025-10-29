"use client";
import { darkSectionCSS, lightSectionCSS } from "@/lib/helper/design";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  gridLines?: boolean;
  dark?: boolean;
  decorativeElements?: ReactNode;
  className?: string;
}

export function DarkContainer({
  children,
  gridLines = true,
  decorativeElements,
  className = "",
}: ContainerProps) {
  return (
    <section className={darkSectionCSS + " " + className}>
      {gridLines && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      )}

      {/* Decorative background elements */}
      {decorativeElements && decorativeElements}

      {children}
    </section>
  );
}
export function GrayContainer({
  children,
  gridLines = true,
  decorativeElements,
  className = "",
}: ContainerProps) {
  return (
    <section className={lightSectionCSS + " " + className}>
      {" "}
      {gridLines && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      )}
      {/* Decorative background elements */}
      {decorativeElements && decorativeElements}
      {children}
    </section>
  );
}

export function SingleContainer({
  children,
  dark = false,
  gridLines = true,
  decorativeElements,
  className = "",
}: ContainerProps) {
  return (
    <>
      {dark ? (
        <DarkContainer
          gridLines={gridLines}
          decorativeElements={decorativeElements}
          className={className}
        >
          {children}
        </DarkContainer>
      ) : (
        <GrayContainer
          gridLines={gridLines}
          decorativeElements={decorativeElements}
          className={className}
        >
          {children}
        </GrayContainer>
      )}
    </>
  );
}

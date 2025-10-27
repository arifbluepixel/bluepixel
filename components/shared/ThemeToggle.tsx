"use client";

import { useTheme } from "@/hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState, useCallback } from "react";
import { capitalizeWords } from "@/lib/helper/clientHelperfunc";
import type { Theme } from "@/lib/redux-features/slices/theme-slice";

const CYCLE_ORDER: Theme[] = ["system", "light", "dark"];

export function ThemeToggle() {
  const { currentTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const cycleTheme = useCallback(() => {
    const idx = CYCLE_ORDER.indexOf(currentTheme ?? "system");
    const next = CYCLE_ORDER[(idx + 1) % CYCLE_ORDER.length];
    setTheme(next);
  }, [currentTheme, setTheme]);

  const getIcon = (theme: Theme) => {
    if (theme === "light") return <FaSun className="h-4 w-4" aria-hidden />;
    if (theme === "dark") return <FaMoon className="h-4 w-4" aria-hidden />;
    return <FaDisplay className="h-4 w-4" aria-hidden />;
  };

  // placeholder skeleton while not mounted to avoid mismatch
  if (!mounted) {
    return (
      <div className="w-fit rounded-full p-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-cyan-400/60 border">
        <div className="inline-flex rounded-full bg-white/10 w-9 h-9 items-center justify-center opacity-60" />
      </div>
    );
  }

  const label = capitalizeWords(currentTheme ?? "system");

  return (
    <div className="w-fit">
      <Button
        variant="ghost"
        size="icon"
        onClick={cycleTheme}
        title={`Theme: ${label} — click to cycle`}
        aria-label={`Toggle theme (current: ${label})`}
        className={cn(
          "relative p-2 rounded-full w-9 h-9 flex items-center justify-center transition-transform duration-200 cursor-pointer",
          // teal/cyan mix background when active (system uses softer)
          currentTheme === "light" &&
            "bg-gradient-to-br from-teal-400 to-cyan-300 text-white shadow",
          currentTheme === "dark" &&
            "bg-gradient-to-br from-cyan-700 to-teal-700 text-white shadow-lg",
          currentTheme === "system" &&
            "bg-gradient-to-br from-teal-200 to-cyan-200 text-gray-800 ring-1 ring-white/10"
        )}
      >
        <span className="sr-only">Current theme: {label}</span>
        <div
          className={cn(
            "flex items-center justify-center w-5 h-5 transition-transform",
            // little icon bounce for light/dark
            currentTheme === "light" && "scale-105",
            currentTheme === "dark" && "scale-95"
          )}
        >
          {getIcon(currentTheme ?? "system")}
        </div>

        {/* little border ring to make it pop on hover/focus */}
        <span className="absolute -inset-0.5 rounded-full opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100" />
      </Button>
    </div>
  );
}

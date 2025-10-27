"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React, { memo, useMemo } from "react";

interface SectionHeaderProps {
  badge: string;
  badgeIcon?: LucideIcon;
  title: string;
  highlightText?: string | string[];
  description: string;
}

const SectionHeader = memo<SectionHeaderProps>(
  ({ badge, badgeIcon: BadgeIcon, title, highlightText, description }) => {
    const titleElements = useMemo(() => {
      if (!highlightText) return title;

      // Parse highlights
      const highlights = Array.isArray(highlightText)
        ? highlightText.filter(Boolean)
        : highlightText
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean);

      if (highlights.length === 0) return title;

      // Create a map of highlight positions for single-pass processing
      const positions: Array<{ start: number; end: number; text: string }> = [];
      const lowerTitle = title.toLowerCase();

      for (const highlight of highlights) {
        const lowerHighlight = highlight.toLowerCase();
        let searchStart = 0;

        while (true) {
          const index = lowerTitle.indexOf(lowerHighlight, searchStart);
          if (index === -1) break;

          positions.push({
            start: index,
            end: index + highlight.length,
            text: title.substring(index, index + highlight.length),
          });

          searchStart = index + highlight.length;
        }
      }

      // Sort and merge overlapping positions
      positions.sort((a, b) => a.start - b.start);
      const merged: Array<{ start: number; end: number }> = [];

      for (const pos of positions) {
        if (merged.length && merged[merged.length - 1].end >= pos.start) {
          merged[merged.length - 1].end = Math.max(
            merged[merged.length - 1].end,
            pos.end
          );
        } else {
          merged.push({ start: pos.start, end: pos.end });
        }
      }

      // Build elements
      const elements: (string | React.JSX.Element)[] = [];
      let lastEnd = 0;

      for (let i = 0; i < merged.length; i++) {
        const { start, end } = merged[i];

        if (start > lastEnd) {
          elements.push(title.substring(lastEnd, start));
        }

        elements.push(
          <span
            key={`h-${i}`}
            className="bg-gradient-to-r from-cyan-600 via-emerald-600 to-teal-600 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent"
          >
            {title.substring(start, end)}
          </span>
        );

        lastEnd = end;
      }

      if (lastEnd < title.length) {
        elements.push(title.substring(lastEnd));
      }

      return elements.length ? elements : title;
    }, [title, highlightText]);

    return (
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-emerald-100 dark:from-cyan-900/30 dark:to-emerald-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-semibold mb-4"
        >
          {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
          <span>{badge}</span>
        </motion.div>

        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 py-3">
          {titleElements}
        </h3>

        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";
export default SectionHeader;

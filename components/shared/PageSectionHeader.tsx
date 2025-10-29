import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface PageSectionHeaderProps {
  /** Badge text displayed above the title */
  badge: string;
  /** Main heading text */
  title: string;
  /** Description text below the title */
  description: string;
  /** Whether dark mode styles should be applied */
  darkMode?: boolean;
  /** Custom className for additional styling */
  className?: string;
}

export default function PageSectionHeader({
  badge,
  title,
  description,
  darkMode = false,
  className = "",
}: PageSectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`text-center mb-16 ${className}`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block mb-4"
      >
        <span className="px-4 py-2 text-sm font-bold tracking-wider uppercase rounded-full bg-gradient-to-r from-sky-500/70 to-cyan-500/50 dark:from-sky-500/20 dark:to-cyan-500/20 dark:border dark:border-sky-500/30 dark:backdrop-blur-sm text-white dark:text-sky-100 shadow-lg shadow-sky-500/50 dark:shadow-none hover:shadow-xl hover:shadow-sky-500/60 transition-shadow duration-300">
          {badge}
        </span>
      </motion.div>

      <h2
        className={`mt-2 font-bold text-4xl md:text-5xl lg:text-6xl  uppercase mb-4 tracking-tight ${
          darkMode ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
          darkMode ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}

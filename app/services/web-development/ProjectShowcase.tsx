"use client";
import {
  agencySiteImages,
  crmDashboardImages,
  ecommerceImages,
  influencerSiteImages,
  photographerSiteImages,
} from "@/lib/constants/images";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PageSectionHeader from "../../../components/shared/PageSectionHeader";
import { GrayContainer } from "../../../components/shared/PageSections";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrls: string[];
  status: "Live" | "In Progress" | "Completed";
  technologies: string[];
  links: {
    label: string;
    url?: string;
    type: "demo" | "code" | "other" | "credentials";
    credentials?: {
      username?: string;
      email?: string;
      password?: string;
      note?: string;
    };
  }[];
  features?: string[];
}

const AUTO_ROTATE_MS = 3500;

const imgAnim = {
  initial: { opacity: 0, scale: 1.02 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { duration: 0.45, ease: "easeInOut" as const },
};

const ProjectCardComponent = React.memo(function ProjectCardComponent({
  project,
  onOpen,
  setOpenCredentials,
}: {
  project: Project;
  onOpen: (p: Project) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpenCredentials: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    project.imageUrls.forEach((u) => {
      const i = {};
      // @ts-expect-error -ignore
      i.src = u;
    });
  }, [project.imageUrls]);

  useEffect(() => {
    if (project.imageUrls.length <= 1 || isHovered) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % project.imageUrls.length);
    }, AUTO_ROTATE_MS);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [project.imageUrls.length, isHovered]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const currentImage = project.imageUrls[index] ?? project.imageUrls[0];

  return (
    <div
      onClick={() => onOpen(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-200 dark:border-slate-700 flex flex-col hover:-translate-y-1"
      aria-label={`Open project ${project.title}`}
    >
      {/* Image area */}
      <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 overflow-hidden flex-shrink-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentImage}
            src={currentImage}
            alt={`${project.title} screenshot ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            {...imgAnim}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

        {project.imageUrls.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIndex(
                  (i) =>
                    (i - 1 + project.imageUrls.length) %
                    project.imageUrls.length
                );
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 dark:bg-white/20 dark:hover:bg-white/30 text-white rounded-full p-2.5 shadow-lg backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i + 1) % project.imageUrls.length);
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 dark:bg-white/20 dark:hover:bg-white/30 text-white rounded-full p-2.5 shadow-lg backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.imageUrls.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-cyan-400 dark:bg-cyan-500"
                      : "w-1.5 bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          <span
            className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm ${
              project.status === "Live"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 text-white"
                : project.status === "In Progress"
                ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white"
                : "bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600 text-white"
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-medium px-2.5 py-1 rounded-md border border-sky-200 dark:border-sky-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto">
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            }}
          >
            {project.links.map((link, i) => {
              if (link.type === "credentials") {
                return (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (link.credentials) {
                        setOpenCredentials({
                          project,
                          credentials: link.credentials,
                        });
                      } else if (link.url) {
                        window.open(link.url, "_blank", "noopener,noreferrer");
                      }
                    }}
                    className="w-full text-center py-2.5 px-4 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 dark:from-cyan-400 dark:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500 text-white shadow-md hover:shadow-lg min-w-0"
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`w-full text-center py-2.5 px-4 rounded-lg font-medium transition-all duration-200 min-w-0 shadow-md hover:shadow-lg ${
                    link.type === "demo"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 dark:from-cyan-400 dark:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500 text-white"
                      : "bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

function ProjectModal({
  project,
  onClose,
  setOpenCredentials,
}: {
  project: Project;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpenCredentials: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [idx, setIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        setIdx(
          (i) => (i - 1 + project.imageUrls.length) % project.imageUrls.length
        );
      if (e.key === "ArrowRight")
        setIdx((i) => (i + 1) % project.imageUrls.length);
      if (e.key === "Escape") onClose();
    },
    [project.imageUrls.length, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    containerRef.current?.focus();
    return () => prev?.focus?.();
  }, []);

  useEffect(() => {
    if (!project.imageUrls || project.imageUrls.length === 0) return;
    const next = {};
    const prev = {};
    // @ts-expect-error -ignore
    next.src = project.imageUrls[(idx + 1) % project.imageUrls.length];
    // @ts-expect-error -ignore
    prev.src =
      project.imageUrls[
        (idx - 1 + project.imageUrls.length) % project.imageUrls.length
      ];
  }, [idx, project.imageUrls]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden
      />

      <div
        ref={containerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-7xl max-h-[96vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden outline-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center min-h-[360px] lg:min-h-0">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={project.imageUrls[idx]}
                src={project.imageUrls[idx]}
                alt={`${project.title} screenshot ${idx + 1}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {project.imageUrls.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setIdx(
                      (i) =>
                        (i - 1 + project.imageUrls.length) %
                        project.imageUrls.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 shadow-xl transition-all duration-200 focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500"
                  aria-label="Previous"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={() =>
                    setIdx((i) => (i + 1) % project.imageUrls.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 shadow-xl transition-all duration-200 focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500"
                  aria-label="Next"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            <div className="lg:hidden absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {project.imageUrls.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === idx
                      ? "w-8 bg-cyan-400 dark:bg-cyan-500"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

            <div
              className="hidden lg:flex absolute bottom-4 left-4 right-4 gap-2 overflow-x-auto px-3 py-1"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {project.imageUrls.map((u, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`inline-block flex-none w-14 h-11 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    i === idx
                      ? "ring-2 ring-cyan-400 dark:ring-cyan-500 border-cyan-400 dark:border-cyan-500"
                      : "border-transparent hover:border-white/30"
                  }`}
                  aria-label={`Thumbnail ${i + 1}`}
                >
                  <Image
                    src={u}
                    alt={`thumb ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={56}
                    height={44}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 overflow-y-auto bg-white dark:bg-slate-900">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                {project.status && (
                  <span
                    className={`inline-block mt-2 text-xs font-semibold px-3 py-1.5 rounded-full ${
                      project.status === "Live"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 text-white"
                        : project.status === "In Progress"
                        ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white"
                        : "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {project.features && project.features.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-3">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 text-cyan-500 dark:text-cyan-400 flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.links.map((link, index) => {
                if (link.type === "credentials" && link.credentials) {
                  return (
                    <button
                      key={index}
                      onClick={() =>
                        setOpenCredentials({
                          project,
                          credentials: link.credentials!,
                        })
                      }
                      className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 dark:from-cyan-400 dark:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500 text-white shadow-md hover:shadow-lg"
                    >
                      {link.label}
                    </button>
                  );
                }

                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg ${
                      link.type === "demo"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 dark:from-cyan-400 dark:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500 text-white"
                        : "bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-6 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-medium">💡 Tip:</span> Use ← → arrow keys to
              navigate images, press Esc to close.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CredentialsModal({
  project,
  credentials,
  onClose,
}: {
  project: Project;
  credentials: NonNullable<Project["links"][number]["credentials"]>;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative max-w-xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 border border-gray-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Access Credentials
          </h3>
          <button
            onClick={onClose}
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mb-4 p-3 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg">
          <p className="text-sm font-medium text-cyan-900 dark:text-cyan-300">
            {project.title}
          </p>
        </div>

        <div className="space-y-4">
          {credentials.email && (
            <div>
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Email / Username
              </label>
              <div className="mt-1.5 p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg font-mono text-sm text-slate-900 dark:text-slate-100 break-words">
                {credentials.email}
              </div>
            </div>
          )}

          {credentials.username && (
            <div>
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Username
              </label>
              <div className="mt-1.5 p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg font-mono text-sm text-slate-900 dark:text-slate-100 break-words">
                {credentials.username}
              </div>
            </div>
          )}

          {credentials.password && (
            <div>
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Password
              </label>
              <div className="mt-1.5 p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg font-mono text-sm text-slate-900 dark:text-slate-100 break-words">
                {credentials.password}
              </div>
            </div>
          )}

          {credentials.note && (
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-sm text-amber-900 dark:text-amber-200">
                <span className="font-semibold">Note:</span> {credentials.note}
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-6">
          {(() => {
            const credLink = project.links.find(
              (l) => l.type === "credentials" && l.url
            );
            if (credLink && credLink.url) {
              return (
                <a
                  href={credLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 dark:from-cyan-400 dark:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500 text-white shadow-md hover:shadow-lg"
                >
                  Go to Sign-in
                </a>
              );
            }
            return null;
          })()}

          <button
            onClick={onClose}
            className="flex-1 text-center py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white shadow-md hover:shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sampleProjects: Project[] = [
    {
      id: 1,
      title: "Shoeset — E-Commerce Site",
      description:
        "Full-featured e-commerce store for footwear with product catalog, cart, and admin sign-in.",
      imageUrls: ecommerceImages,
      status: "Live",
      technologies: [
        "Next.js",
        "React",
        "ShadCN UI",
        "Tailwind CSS",
        "MongoDB",
        "TypeScript",
      ],
      features: [
        "Product listing & filters",
        "Shopping cart & checkout",
        "Admin sign-in for managing products/orders",
      ],
      links: [
        { label: "Live Demo", url: "https://shoeset.vercel.app", type: "demo" },
        {
          label: "View Credentials",
          type: "credentials",
          credentials: {
            email: "admin@gmail.com",
            password: "admin@gmail.com",
            note: "Use the sign-in page after viewing credentials",
          },
          url: "https://shoeset.vercel.app/sign-in",
        },
      ],
    },

    {
      id: 2,
      title: "Photographer Portfolio — Wander Light Studio",
      description:
        "A clean and visual-first portfolio site tailored for photographers to showcase galleries and services.",
      imageUrls: photographerSiteImages,
      status: "Live",
      technologies: [
        "Next.js",
        "React",
        "ShadCN UI",
        "Tailwind CSS",
        "MongoDB",
        "TypeScript",
      ],
      features: [
        "Image galleries",
        "Contact / booking CTA",
        "Portfolio case studies",
      ],
      links: [
        {
          label: "Fashion Pallete",
          url: "https://photographerweb.vercel.app/",
          type: "demo",
        },
        {
          label: "WANDER LIGHT STUDIO",
          url: "https://wander-light-studio.vercel.app/",
          type: "demo",
        },
      ],
    },

    {
      id: 3,
      title: "Influencer Portfolio — Blue-Pixel",
      description:
        "Personal brand / influencer landing page to present collaborations, social links, and a media kit.",
      imageUrls: influencerSiteImages,
      status: "Live",
      technologies: [
        "Next.js",
        "React",
        "ShadCN UI",
        "Tailwind CSS",
        "MongoDB",
        "TypeScript",
      ],
      features: ["Link hub", "Media kit section", "Social proof & contact"],
      links: [
        {
          label: "Live Demo",
          url: "https://influencer-duckiq.vercel.app/",
          type: "demo",
        },
      ],
    },

    {
      id: 4,
      title: "Agency Portfolio — Duck IQ & ClippingTech",
      description:
        "Agency websites showcasing services, case studies and contact channels for enterprise clients.",
      imageUrls: agencySiteImages,
      status: "Live",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "MongoDB",
        "TypeScript",
      ],
      features: ["Service pages", "Case studies", "Contact & lead capture"],
      links: [
        { label: "Duck IQ", url: "https://www.duck-iq.com/", type: "demo" },
        {
          label: "ClippingTech",
          url: "https://www.clippingtech.com/",
          type: "demo",
        },
      ],
    },

    {
      id: 5,
      title: "CRM — ClippingTech (Auth)",
      description:
        "Customer Relationship Management dashboard with authentication and role-based access (login page).",
      imageUrls: crmDashboardImages,
      status: "Live",
      technologies: [
        "Next.js",
        "React",
        "ShadCN UI",
        "Tailwind CSS",
        "MongoDB",
        "TypeScript",
      ],
      features: ["User auth", "Dashboards", "Role based access"],
      links: [
        {
          label: "Login Page",
          url: "https://crm.clippingtech.com/auth/login",
          type: "demo",
        },
      ],
    },
  ];

  const [openProject, setOpenProject] = useState<Project | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [openCredentials, setOpenCredentials] = useState<any>(null);

  const LazyProjectCard = useMemo(
    () =>
      React.lazy(() =>
        Promise.resolve({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          default: (props: any) => (
            <ProjectCardComponent
              {...props}
              setOpenCredentials={setOpenCredentials}
            />
          ),
        })
      ),
    []
  );

  return (
    <GrayContainer className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <PageSectionHeader
          badge="Portfolio"
          title="Featured Projects"
          description="Explore our latest web development projects showcasing modern technologies and innovative solutions!"
          darkMode={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          <Suspense
            fallback={
              <div className="col-span-full flex justify-center items-center py-20">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent dark:border-cyan-400 dark:border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    Loading projects...
                  </p>
                </div>
              </div>
            }
          >
            {sampleProjects.map((project) => (
              <LazyProjectCard
                key={project.id}
                project={project}
                onOpen={(p: Project) => setOpenProject(p)}
              />
            ))}
          </Suspense>
        </div>
      </div>

      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
          setOpenCredentials={setOpenCredentials}
        />
      )}

      {openCredentials &&
        (() => {
          if (openCredentials.project && openCredentials.credentials) {
            const { project, credentials } = openCredentials;
            return (
              <CredentialsModal
                project={project}
                credentials={credentials}
                onClose={() => setOpenCredentials(null)}
              />
            );
          }
          if (openCredentials && openCredentials.links) {
            const project = openCredentials as Project;
            const credLink = project.links.find(
              (l) => l.type === "credentials" && l.credentials
            );
            if (credLink && credLink.credentials) {
              return (
                <CredentialsModal
                  project={project}
                  credentials={credLink.credentials}
                  onClose={() => setOpenCredentials(null)}
                />
              );
            }
          }
          return null;
        })()}
    </GrayContainer>
  );
}

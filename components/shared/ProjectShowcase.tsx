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

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrls: string[]; // support multiple images per project
  status: "Live" | "In Progress" | "Completed";
  technologies: string[];
  links: {
    label: string;
    url?: string;
    type: "demo" | "code" | "other" | "credentials";
    // credentials payload (optional, only used when type === 'credentials')
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

  // preload images to reduce flicker
  useEffect(() => {
    project.imageUrls.forEach((u) => {
      // @ts-expect-error - ignore
      const i = new Image();
      i.src = u;
    });
  }, [project.imageUrls]);

  // auto-rotate logic with cleanup
  useEffect(() => {
    // don't auto rotate if single or hovered
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

  // clear interval on unmount
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
      className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-200 flex flex-col"
      aria-label={`Open project ${project.title}`}
    >
      {/* Image area (crossfade) */}
      <div className="relative h-96 bg-gray-300 overflow-hidden flex-shrink-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentImage}
            src={currentImage}
            alt={`${project.title} screenshot ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            {...imgAnim}
          />
        </AnimatePresence>

        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />

        {/* Prev / Next */}
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
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 shadow-md hover:bg-black/45 focus:ring-2 focus:ring-yellow-300"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i + 1) % project.imageUrls.length);
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 shadow-md hover:bg-black/45 focus:ring-2 focus:ring-yellow-300"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="text-xl font-bold text-black truncate">
            {project.title}
          </h3>

          <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
            {project.status}
          </span>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links: responsive auto-fit grid so many links don't break layout */}
        <div className="mt-auto">
          <div
            className="grid gap-3"
            // use CSS grid auto-fit to keep buttons tidy when link count grows
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            }}
          >
            {project.links.map((link, i) => {
              // credentials button
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
                    className="w-full text-center py-2 px-4 rounded-lg font-medium transition-colors bg-yellow-400 hover:bg-yellow-500 text-black min-w-0"
                  >
                    {link.label}
                  </button>
                );
              }

              // regular link
              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`w-full text-center py-2 px-4 rounded-lg font-medium transition-colors min-w-0 ${
                    link.type === "demo"
                      ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                      : "bg-gray-800 hover:bg-gray-900 text-white"
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
    // @ts-expect-error - ignore
    const next = new Image();
    // @ts-expect-error - ignore
    const prev = new Image();
    next.src = project.imageUrls[(idx + 1) % project.imageUrls.length];
    prev.src =
      project.imageUrls[
        (idx - 1 + project.imageUrls.length) % project.imageUrls.length
      ];
  }, [idx, project.imageUrls]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div
        ref={containerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-7xl max-h-[96vh] bg-white rounded-2xl shadow-2xl overflow-hidden outline-none"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative bg-gray-900 flex items-center justify-center min-h-[360px] md:min-h-0">
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

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
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 shadow-md hover:bg-black/50 focus:ring-2 focus:ring-yellow-300"
                  aria-label="Previous"
                >
                  ‹
                </button>

                <button
                  onClick={() =>
                    setIdx((i) => (i + 1) % project.imageUrls.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 shadow-md hover:bg-black/50 focus:ring-2 focus:ring-yellow-300"
                  aria-label="Next"
                >
                  ›
                </button>
              </>
            )}

            <div className=" md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {project.imageUrls.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === idx ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

            {/* thumbnails - visible on md+ (now scrollable when many images) */}
            <div
              className="hidden md:flex absolute bottom-4 left-4 right-4 gap-2 flex-wrap whitespace-nowrap px-3 py-1"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {project.imageUrls.map((u, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`inline-block flex-none w-12 h-10 overflow-hidden rounded-md border ${
                    i === idx ? "ring-2 ring-yellow-400" : "border-transparent"
                  }`}
                  aria-label={`Thumbnail ${i + 1}`}
                >
                  <Image
                    src={u}
                    alt={`thumb ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={10}
                    height={10}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                {project.status && (
                  <div className="mt-1 text-sm text-slate-500">
                    {project.status}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={onClose}
                  className="ml-auto text-slate-600 hover:text-slate-900"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            <p className="mt-5 text-slate-700">{project.description}</p>

            {project.features && project.features.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-medium text-slate-700">
                  Highlights
                </h4>
                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-600">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-amber-500">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6">
              <h4 className="text-sm font-medium text-slate-700">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-2xl bg-slate-100 text-slate-700"
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
                      className="w-full py-3 px-4 rounded-lg font-semibold bg-yellow-400 hover:bg-yellow-500 text-black"
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
                    className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition ${
                      link.type === "demo"
                        ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                        : "bg-slate-800 hover:bg-slate-900 text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Tip: Use ← and → to browse screenshots, Esc to close.
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
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative max-w-xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Credentials — {project.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 text-gray-700">
          {credentials.email && (
            <div className="mb-2">
              <div className="text-xs text-gray-500">Email / Username</div>
              <div className="font-mono mt-1 break-words">
                {credentials.email}
              </div>
            </div>
          )}

          {credentials.password && (
            <div className="mb-2">
              <div className="text-xs text-gray-500">Password</div>
              <div className="font-mono mt-1 break-words">
                {credentials.password}
              </div>
            </div>
          )}

          {credentials.username && (
            <div className="mb-2">
              <div className="text-xs text-gray-500">Username</div>
              <div className="font-mono mt-1 break-words">
                {credentials.username}
              </div>
            </div>
          )}

          {credentials.note && (
            <div className="mt-2 text-sm text-gray-500">{credentials.note}</div>
          )}

          <div className="flex gap-3 mt-6">
            {/** if the link for sign-in exists, show a button to go there **/}
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
                    className="flex-1 text-center py-2 px-4 rounded-lg font-medium transition-colors bg-gray-800 hover:bg-gray-900 text-white"
                  >
                    Go to Sign-in
                  </a>
                );
              }
              return null;
            })()}

            <button
              onClick={onClose}
              className="flex-1 text-center py-2 px-4 rounded-lg font-medium transition-colors bg-gray-200 hover:bg-gray-300 text-black"
            >
              Close
            </button>
          </div>
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
          // note: modal will show these creds and then provide a button to go to sign-in link if provided
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

  // // memoize projects so they are stable across renders and not re-created
  // const sampleProjects = useMemo(() => rawProjects, []);

  const [openProject, setOpenProject] = useState<Project | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [openCredentials, setOpenCredentials] = useState<any>(null);

  // memoize the lazy wrapper so it doesn't recreate on each render
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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3 py-10 ">
          <h2 className="text-2xl font-semibold font-oswald italic text-yellow-600 text-center uppercase">
            * Explore our latest web development projects showcasing modern
            technologies and innovative solutions!
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold font-oswald text-duck-bluefont text-center uppercase">
            Featured Projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          <Suspense
            fallback={
              <div className="col-span-full flex justify-center items-center">
                Loading projects...
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

      {/* detail modal */}
      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
          setOpenCredentials={setOpenCredentials}
        />
      )}

      {/* credentials modal: this covers both card-level and modal-level 'View Credentials' */}
      {openCredentials &&
        (() => {
          // normalize the payload
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
            // fallback: if openCredentials is a Project itself
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
    </section>
  );
}

"use client";

import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_FACEBOOK,
  SITE_INSTAGRAM,
  SITE_NAME,
  XHandle,
} from "@/lib/constants/env";
import { bluepixel } from "@/lib/constants/images";
import { jaroFont } from "@/lib/helper/fontHelper";
import {
  ChevronDown,
  HelpCircleIcon,
  ImageIcon,
  Minus,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";

const servicesPages = [
  {
    id: 12,
    category: "Services",
    title: "Image",
    icon: <ImageIcon />,
    link: "services/image",
  },
  {
    id: 13,
    category: "Services",
    title: "Video",
    icon: <Video />,
    link: "services/video",
  },
  {
    id: 14,
    category: "Services",
    title: "3D Rendering",
    icon: <Video />,
    link: "services/3d-rendering",
  },
  {
    id: 15,
    category: "Services",
    title: "3D Animation",
    icon: <Video />,
    link: "services/3d-animation",
  },
  {
    id: 16,
    category: "Services",
    title: "Web Development",
    icon: <HelpCircleIcon />,
    link: "services/web-development",
  },
];

const leftNavLinks = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "#",
    hasDropdown: true,
    children: servicesPages,
    dropdownClass: "",
    dropdownAlign: "right",
  },
];

const rightNavLinks = [
  { name: "About", path: "/about-us" },
  { name: "Contact Us", path: "/contact-us" },
];

const AnimatedLogo = () => {
  const [animationStage, setAnimationStage] = useState<
    "spinning" | "sliding" | "complete"
  >("spinning");

  useEffect(() => {
    // Spin for 1.7 seconds
    const spinTimer = setTimeout(() => {
      setAnimationStage("sliding");
    }, 1500);

    // Complete animation after slide
    const completeTimer = setTimeout(() => {
      setAnimationStage("complete");
    }, 2000);

    return () => {
      clearTimeout(spinTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden px-2 md:px-3">
      {/* Spinning star - moves to right */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
        style={{
          transform:
            animationStage === "sliding" || animationStage === "complete"
              ? "translateX(100%)"
              : "translateX(0)",
          opacity: animationStage === "complete" ? 0 : 1,
        }}
      >
        <Image
          width={32}
          height={32}
          src={bluepixel}
          alt={SITE_NAME}
          className="h-8 w-8 drop-shadow-lg animate-spin"
          style={{
            animationDuration: "1s",
          }}
        />
      </div>

      {/* Logo - slides in from left */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
        style={{
          transform:
            animationStage === "complete"
              ? "translateX(0)"
              : "translateX(-100%)",
          opacity: animationStage === "complete" ? 1 : 0,
        }}
      >
        <div className="flex items-center gap-1">
          <Image
            width={32}
            height={32}
            src={bluepixel}
            alt={SITE_NAME}
            className="h-6 w-6 drop-shadow-lg "
            style={{
              animationDuration: "1s",
            }}
          />
          <span
            className={`text-[24px] font-bold text-sky-800 ${jaroFont.className}`}
          >
            Blue Pixel
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null
  );
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const [scrolled, setScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Check if a link is active
  const isLinkActive = (linkPath: string) => {
    if (linkPath === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(linkPath);
  };

  // Check if a dropdown child is active
  const isDropdownChildActive = (children: any[]) => {
    return children.some((child: any) => 
      pathname === `/${child.link}` || pathname.startsWith(`/${child.link}`)
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
      Object.keys(dropdownRefs.current).forEach((key) => {
        if (
          openDesktopDropdown === key &&
          dropdownRefs.current[key] &&
          !dropdownRefs.current[key]!.contains(event.target as Node)
        ) {
          setOpenDesktopDropdown(null);
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDesktopDropdown]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      setOpenMobileDropdown(null);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkheader = `text-gray-800 dark:text-white font-semibold text-sm xl:text-lg hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 ease-in-out cursor-pointer whitespace-nowrap`;

  const activeLinkClass = "text-cyan-600 dark:text-cyan-400";
  const activeBgClass = "bg-gradient-to-r from-cyan-500 to-teal-500 text-white";
  const activeUnderlineClass = "relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-teal-500";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderDropdown = (link: any) => {
    const isOpen = openDesktopDropdown === link.name;
    const isActive = isDropdownChildActive(link.children || []);
    const alignClasses =
      link.dropdownAlign === "right"
        ? "right-0 origin-top-right"
        : "left-0 origin-top-left";

    return (
      <div
        className="relative"
        // @ts-expect-error - Ignore
        ref={(el) => (dropdownRefs.current[link.name] = el)}
        key={link.name}
      >
        <button
          className={`flex items-center space-x-1 ${linkheader} ${
            isActive ? activeLinkClass : ""
          } ${isActive ? activeUnderlineClass : ""}`}
          onClick={() => setOpenDesktopDropdown(isOpen ? null : link.name)}
          onMouseEnter={() => setOpenDesktopDropdown(link.name)}
          type="button"
        >
          <span>{link.name}</span>
          <ChevronDown 
            size={14} 
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`absolute top-full ${alignClasses} mt-8 ${
            link.dropdownClass || "w-[280px] sm:w-[320px]"
          } rounded-xl bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-cyan-200 dark:ring-gray-700 transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
          onMouseEnter={() => setOpenDesktopDropdown(link.name)}
          onMouseLeave={() => setOpenDesktopDropdown(null)}
        >
          <div className="py-4 px-3">
            {(() => {
              const categories = [
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ...new Set(link.children?.map((item: any) => item.category)),
              ];
              return categories.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (cat: any) => (
                  <div key={cat}>
                    <ul className="space-y-1">
                      {link.children
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        ?.filter((s: any) => s.category === cat)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((pages: any) => {
                          const isChildActive = pathname === `/${pages.link}` || pathname.startsWith(`/${pages.link}`);
                          return (
                            <li
                              key={pages.id}
                              className="border-b pb-0.5 border-gray-200 dark:border-gray-700 last:border-none"
                            >
                              <a
                                href={`/${pages?.link
                                  .toLowerCase()
                                  .replace(" ", "-")}`}
                                className={`block px-3 py-2 text-sm font-semibold transition-all duration-300 ease-in-out rounded-lg ${
                                  isChildActive
                                    ? activeBgClass
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white"
                                }`}
                                onClick={() => setOpenDesktopDropdown(null)}
                              >
                                {pages.title}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )
              );
            })()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header
        className={`fixed ${
          scrolled ? "top-2" : "top-5"
        } left-0 right-0 z-50 transition-all duration-300`}
      >
        <div className="mx-auto max-w-7xl w-11/12">
          <div className="flex items-center justify-between rounded-2xl bg-cyan-200/85 dark:bg-gray-900/95 backdrop-blur-md px-2 lg:px-6 py-2 shadow-xl border border-gray-200 dark:border-gray-700 ">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center justify-end space-x-6 xl:space-x-8 flex-1 ">
              {leftNavLinks.map((link) => {
                if (link.hasDropdown) {
                  return renderDropdown(link);
                }
                const isActive = isLinkActive(link.path);
                return (
                  <Link 
                    key={link.name} 
                    href={link.path} 
                    className={`${linkheader} ${isActive ? activeLinkClass : ""} ${isActive ? activeUnderlineClass : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Center Logo */}
            <div className="flex items-center justify-start lg:justify-center min-w-[200px]">
              <Link href="/" className="flex items-center">
                <div className="relative flex h-14 w-auto min-w-36 items-center justify-center rounded-lg md:rounded-2xl lg:rounded-full bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-400 dark:to-teal-500 shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105">
                  {!logoLoaded ? (
                    <AnimatedLogo />
                  ) : (
                    <div className="flex items-center gap-1">
                      <Image
                        width={32}
                        height={32}
                        src={bluepixel}
                        alt={SITE_NAME}
                        className="h-6 w-6 drop-shadow-lg "
                        style={{
                          animationDuration: "1s",
                        }}
                      />
                      <span
                        className={`text-[24px] font-bold text-sky-800 ${jaroFont.className}`}
                      >
                        Blue Pixel
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            </div>

            {/* Right Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-start">
              {rightNavLinks.map((link) => {
                // @ts-expect-error - ignore
                if (link.hasDropdown) {
                  return renderDropdown(link);
                }
                const isActive = isLinkActive(link.path);
                return (
                  <Link 
                    key={link.name} 
                    href={link.path} 
                    className={`${linkheader} ${isActive ? activeLinkClass : ""} ${isActive ? activeUnderlineClass : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center space-x-3 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 p-2.5 text-white hover:from-cyan-600 hover:to-teal-700 focus:outline-none transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(true)}
              >
                <HiOutlineMenuAlt4 className="h-5 w-5" />
              </button>
            </div>

            {/* Desktop Theme Toggle */}
            <div className="hidden lg:block ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 h-full w-full max-w-sm bg-gradient-to-b from-cyan-900 via-teal-900 to-emerald-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6 overflow-y-auto">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
            >
              <Minus size={20} />
            </button>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex h-16 items-center justify-center rounded-xl bg-cyan-100 backdrop-blur-sm px-4 shadow-xl">
              <div className="flex items-center gap-1">
                <Image
                  width={32}
                  height={32}
                  src={bluepixel}
                  alt={SITE_NAME}
                  className="h-6 w-6 drop-shadow-lg "
                  style={{
                    animationDuration: "1s",
                  }}
                />
                <span
                  className={`text-[24px] font-bold text-sky-800 ${jaroFont.className}`}
                >
                  Blue Pixel
                </span>
              </div>
            </div>
          </div>

          <nav className="mt-8 flex justify-center items-start px-2">
            <ul className="w-full space-y-3">
              {[...leftNavLinks, ...rightNavLinks].map((link) => {
                const isActive = isLinkActive(link.path);
                // @ts-expect-error - ignore
                if (link.hasDropdown) {
                  const isMobileOpen = openMobileDropdown === link.name;
                  const isDropdownActive = isDropdownChildActive(link.children || []);
                  return (
                    <li key={link.name}>
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(isMobileOpen ? null : link.name)
                        }
                        className={`w-full text-left flex items-center justify-between text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                          isDropdownActive
                            ? "bg-white/20 text-cyan-300"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isMobileOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <ul
                        className={`mt-2 ml-4 pl-3 border-l-2 border-cyan-400/50 space-y-2 overflow-hidden transition-all duration-300 ${
                          isMobileOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {
                          // @ts-expect-error - ignore
                          link.children?.map(
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            (pages: any) => {
                              const isChildActive = pathname === `/${pages.link}` || pathname.startsWith(`/${pages.link}`);
                              return (
                                <li key={pages.id}>
                                  <Link
                                    href={`/${pages.link
                                      .toLowerCase()
                                      .replace(" ", "-")}`}
                                    className={`block text-sm transition-colors py-1.5 ${
                                      isChildActive
                                        ? "text-cyan-300 font-semibold"
                                        : "text-gray-200 hover:text-cyan-300"
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {pages.title}
                                  </Link>
                                </li>
                              );
                            }
                          )
                        }
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={`block text-base font-semibold transition-colors py-3 px-4 rounded-lg ${
                        isActive
                          ? "bg-white/20 text-cyan-300"
                          : "text-white hover:bg-white/10"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto space-y-6">
            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Contact</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-sm text-gray-200 hover:text-cyan-300 transition-colors mb-2"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="block text-sm text-gray-200 hover:text-cyan-300 transition-colors"
              >
                {CONTACT_PHONE}
              </a>
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href={SITE_INSTAGRAM}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-400 text-white hover:bg-cyan-400 hover:text-cyan-900 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={`https://x.com/${XHandle}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-400 text-white hover:bg-cyan-400 hover:text-cyan-900 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href={SITE_FACEBOOK}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-400 text-white hover:bg-cyan-400 hover:text-cyan-900 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={18} />
              </a>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal-400 text-white hover:bg-teal-400 hover:text-cyan-900 transition-all">
                <ThemeToggle />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
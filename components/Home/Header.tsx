"use client";

import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_FACEBOOK,
  SITE_INSTAGRAM,
  SITE_NAME,
  XHandle,
} from "@/lib/constants/env";
import { logo } from "@/lib/constants/images";
import { ChevronDown, HelpCircleIcon, Home, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const servicesPages = [
  {
    id: 11,
    category: "about",
    title: "About",
    icon: <HelpCircleIcon />,
    link: "/",
  },
  {
    id: 12,
    category: "about",
    title: "About",
    icon: <HelpCircleIcon />,
    link: "/",
  },
];
const homePages = [
  { id: 1, category: "home", title: "Home 1", icon: <Home />, link: "/" },

  { id: 2, category: "home", title: "Home 2", icon: <Home />, link: "home2" },
];

const compliancePages = [
  {
    id: 3,
    category: "Compliance & Ethics",
    title: "Compliance Vision",
    icon: <Home />,
    link: "compliance-vision",
  },
  {
    id: 4,
    category: "Compliance & Ethics",
    title: "Zero Tolerance",
    icon: <Home />,
    link: "zero-tolerance",
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Products", path: "/products" },
  {
    name: "Compliance & Ethics",
    path: "#",
    hasDropdown: true,
    children: compliancePages,
    dropdownClass: "",
    dropdownAlign: "left",
  },
  { name: "Gallery", path: "/gallery" },
  {
    name: "Services",
    path: "#",
    hasDropdown: true,
    children: servicesPages,
    dropdownClass: "",
    dropdownAlign: "right",
  },
  { name: "Contact Us", path: "/contact-us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null
  );
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [scrolled, setScrolled] = useState(false);

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
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkheader = `text-gray-800 dark:text-white font-semibold text-base lg:text-lg hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 ease-in-out cursor-pointer`;

  return (
    <>
      <header
        className={`sticky -mt-5 z-50 w-full px-4 py-2 ${
          scrolled ? "top-2" : "top-5"
        } transition-all duration-300`}
      >
        <div className="mx-auto max-w-7xl px-3 md:px-0 fixed top-5 right-0 left-0 ">
          <div className="flex items-center justify-between rounded-md bg-gradient-to-br from-cyan-200 to-teal-300 dark:from-gray-900 dark:to-gray-800 px-4 py-3 sm:px-6 sm:py-4 shadow-md border border-cyan-100 dark:border-gray-700 ">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-auto items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-teal-100 transition duration-300 ease-in-out shadow-lg">
                <Image
                  src={logo}
                  alt="BluePixel"
                  width={150}
                  height={50}
                  priority
                  className="py-16 px-5"
                />
              </div>

              {
                // @ts-expect-error - ignore this
                logo === "" && (
                  <button className="text-xl sm:text-2xl text-white relative inline-block bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 dark:from-cyan-600 dark:to-teal-700 dark:hover:from-cyan-700 dark:hover:to-teal-800 transition-all duration-300 ease-in-out px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold font-style3 cursor-pointer shadow-md">
                    <span>{SITE_NAME}</span>
                  </button>
                )
              }
            </Link>

            <div className="flex items-center space-x-2 lg:space-x-6">
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    const isOpen = openDesktopDropdown === link.name;
                    const alignClasses =
                      link.dropdownAlign === "right"
                        ? "right-0 origin-top-right"
                        : "left-0 origin-top-left";
                    return (
                      <div
                        className="relative"
                        // @ts-expect-error - ignore this
                        ref={(el) => (dropdownRefs.current[link.name] = el)}
                        key={link.name}
                      >
                        <button
                          className={`flex items-center space-x-1 ${linkheader}`}
                          onClick={() =>
                            setOpenDesktopDropdown(isOpen ? null : link.name)
                          }
                          onMouseEnter={() => setOpenDesktopDropdown(link.name)}
                          type="button"
                        >
                          <span>{link.name}</span>
                          <ChevronDown size={16} />
                        </button>
                        <div
                          className={`absolute top-14 ${alignClasses} mt-2 ${
                            link.dropdownClass ||
                            "w-[280px] sm:w-[400px] lg:w-[600px]"
                          } rounded-xl bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-cyan-200 dark:ring-gray-700 transition-all duration-300 ease-in-out transform ${
                            isOpen
                              ? "scale-100 opacity-100"
                              : "scale-95 opacity-0 pointer-events-none"
                          }`}
                          onMouseEnter={() => setOpenDesktopDropdown(link.name)}
                          onMouseLeave={() => setOpenDesktopDropdown(null)}
                        >
                          <div className="flex flex-col sm:flex-row py-4 sm:py-6 px-2 sm:px-4 uppercase">
                            {(() => {
                              const categories = [
                                ...new Set(
                                  link.children?.map((item) => item.category)
                                ),
                              ];
                              return categories.map((cat, index) => (
                                <div key={cat}>
                                  {index > 0 && (
                                    <div className="hidden sm:block self-stretch w-px bg-gray-200 dark:bg-gray-700 mx-4" />
                                  )}
                                  <div className="flex-1 px-2 sm:px-4 mt-4 sm:mt-0">
                                    <h3 className="mb-2 sm:mb-4 uppercase text-lg sm:text-xl font-semibold font-style3 text-cyan-600 dark:text-cyan-400">
                                      {cat}
                                    </h3>
                                    <ul className="space-y-1 sm:space-y-2">
                                      {link.children
                                        ?.filter((s) => s.category === cat)
                                        .map((pages) => (
                                          <li
                                            key={pages.id}
                                            className="border-b border-gray-200 dark:border-gray-700 last:border-none"
                                          >
                                            <Link
                                              href={`/${pages?.link
                                                .toLowerCase()
                                                .replace(" ", "-")}`}
                                              className="block px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white rounded-lg my-1"
                                              onClick={() =>
                                                setOpenDesktopDropdown(null)
                                              }
                                            >
                                              {pages.title}
                                            </Link>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                </div>
                              ));
                            })()}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={linkheader}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 dark:from-cyan-600 dark:to-teal-700 p-2 text-white hover:from-cyan-500 hover:to-teal-600 focus:outline-none transition-all duration-300 ease-in-out shadow-md"
                onClick={() => setIsMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <HiOutlineMenuAlt4
                  className="block h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

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
              className="rounded-full bg-white dark:bg-gray-700 p-2 text-cyan-900 dark:text-white hover:bg-cyan-100 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <Minus size={20} />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <div className="mt-4 flex items-center">
            <div className="flex h-10 mx-auto w-auto items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 dark:from-cyan-100 dark:to-teal-100 transition duration-300 ease-in-out shadow-lg">
              <Link href="/" className="z-50">
                <Image
                  src={logo}
                  alt="BluePixel"
                  width={150}
                  height={50}
                  priority
                  className="py-16 px-5"
                />
              </Link>
            </div>
            {
              // @ts-expect-error - ignore this
              logo === "" && (
                <Link
                  href={`/`}
                  className="ml-2 text-2xl sm:text-3xl text-white relative inline-block bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 transition ease-in-out duration-300 px-3 py-1.5 rounded-lg font-bold font-style3 shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{SITE_NAME}</span>
                </Link>
              )
            }
          </div>

          <nav className="mt-8 flex justify-center items-start px-2">
            <ul className="w-full space-y-4">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  const isMobileOpen = openMobileDropdown === link.name;
                  return (
                    <li key={link.name}>
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(isMobileOpen ? null : link.name)
                        }
                        className="w-full text-left flex items-center justify-between text-lg font-semibold text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-300"
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
                        className={`mt-2 ml-4 pl-2 border-l-2 border-cyan-400/50 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                          isMobileOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {link.children?.map((pages) => (
                          <li key={pages.id}>
                            <Link
                              href={`/${pages.link
                                .toLowerCase()
                                .replace(" ", "-")}`}
                              className="block text-base text-gray-200 hover:text-cyan-300 transition-colors duration-300 py-1.5"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {pages.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="block text-lg font-semibold text-white hover:text-cyan-300 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-cyan-300">Email</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 text-sm sm:text-base text-gray-200 hover:text-cyan-300 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-300">Call Now</h3>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="mt-1 text-sm sm:text-base text-gray-200 hover:text-cyan-300 transition-colors"
              >
                {CONTACT_PHONE}
              </a>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <Link
              href={SITE_INSTAGRAM}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-400 text-white hover:bg-cyan-400 hover:text-cyan-900 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href={`https://x.com/${XHandle}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-400 text-white hover:bg-cyan-400 hover:text-cyan-900 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={18} />
            </Link>
            <Link
              href={SITE_FACEBOOK}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-400 text-white hover:bg-cyan-400 hover:text-cyan-900 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

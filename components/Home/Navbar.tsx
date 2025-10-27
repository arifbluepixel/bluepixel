"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { logo } from "@/lib/constants/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const router = useRouter();
  let timeout: NodeJS.Timeout | null = null;

  const navLinks = [
    {
      name: "Home",
      path: "#",
      children: [
        { name: "Home 1", path: "/" },
        { name: "Home 2", path: "/home2" },
      ],
    },
    { name: "About Us", path: "/about-us" },
    { name: "Products", path: "/products" },
    {
      name: "Compliance & Ethics",
      path: "#",
      children: [
        { name: "Compliance Vision", path: "/compliance-vision" },
        { name: "Zero Tolerance", path: "/zero-tolerance" },
      ],
    },
    { name: " Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenus(new Set());
    setOpenDropdown(null);
  };

  const handleLinkClick = (path: string) => {
    router.push(path);
    closeMenu();
  };

  const toggleSubmenu = (name: string) => {
    const newSet = new Set(openSubmenus);
    if (newSet.has(name)) {
      newSet.delete(name);
    } else {
      newSet.add(name);
      // Close other submenus
      navLinks.forEach(link => {
        if (link.children && link.name !== name && newSet.has(link.name)) {
          newSet.delete(link.name);
        }
      });
    }
    setOpenSubmenus(newSet);
  };

  const handleMouseEnter = (name: string) => {
    if (timeout) clearTimeout(timeout);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  // Improved active link detection
  const isActive = (path: string) => {
    return pathname === path || (path !== "/" && pathname.startsWith(path));
  };

  const isParentActive = (link: (typeof navLinks)[0]) => {
    if (!link.children) return isActive(link.path);
    return link.children.some((child) => isActive(child.path));
  };

  const menuButtonVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 ${scrolled ? "shadow-md" : ""}`}
    >
      <nav
        className={`bg-cyan-50 transition-colors duration-300 ${
          scrolled ? "bg-opacity-95" : "bg-opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-50" onClick={closeMenu}>
            <Image
              src={logo}
              alt="apparelresourcebd"
              width={140}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => {
              if (!link.children) {
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium text-gray-800 transition-all duration-300
                      ${
                        isActive(link.path)
                          ? "bg-[#0861AB]/10 text-[#0861AB]"
                          : "hover:text-[#0861AB]"
                      } group`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0861AB]
                        transform ${
                          isActive(link.path) ? "scale-x-100" : "scale-x-0"
                        } 
                        group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`cursor-pointer relative px-3 py-2 rounded-md text-sm font-medium text-gray-800 transition-all duration-300
                      ${
                        isParentActive(link)
                          ? "bg-[#0861AB]/10 text-[#0861AB]"
                          : "hover:text-[#0861AB]"
                      } group`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0861AB]
                        transform ${
                          isParentActive(link) ? "scale-x-100" : "scale-x-0"
                        } 
                        group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}
                    />
                  </div>
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        className="absolute md:top-18 lg:top-14 left-0 mt-2 w-48 bg-cyan-50 rounded-md shadow-lg overflow-hidden z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => {
                          if (timeout) clearTimeout(timeout);
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.path}
                            className={`block px-4 py-2 text-sm text-gray-800 hover:bg-[#0861AB]/10 transition-colors duration-200
                              ${
                                isActive(child.path)
                                  ? "bg-[#0861AB]/5 text-[#0861AB]"
                                  : ""
                              }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden z-50 p-2 focus:outline-none"
            onClick={toggleMenu}
            variants={menuButtonVariants}
            animate={isOpen ? "open" : "closed"}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX size={24} className="text-black" />
            ) : (
              <FiMenu size={24} className="text-black" />
            )}
          </motion.button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="md:hidden fixed inset-0 bg-black/50 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeMenu}
                />
                
                {/* Mobile Menu */}
                <motion.div
                  className="md:hidden fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, type: "tween" }}
                >
                  <div className="flex flex-col h-full">
                    {/* Header with close button */}
                    <div className="p-4 border-b flex justify-between items-center">
                      <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
                        Logo
                      </Link>
                      <button
                        onClick={closeMenu}
                        className="p-2 text-gray-600 hover:text-gray-800"
                      >
                        <FiX size={24} />
                      </button>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                      {navLinks.map((link) => (
                        <React.Fragment key={link.name}>
                          {/* Parent Link */}
                          <div
                            className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                              isParentActive(link)
                                ? "bg-[#0861AB]/10 text-[#0861AB] border border-[#0861AB]/20"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onClick={() => {
                              if (link.children) {
                                toggleSubmenu(link.name);
                              } else {
                                handleLinkClick(link.path);
                              }
                            }}
                          >
                            <span className="font-medium text-base">{link.name}</span>
                            {link.children && (
                              <span className={`transform transition-transform ${
                                openSubmenus.has(link.name) ? "rotate-180" : ""
                              }`}>
                                ▼
                              </span>
                            )}
                          </div>
                          
                          {/* Submenu */}
                          {link.children && openSubmenus.has(link.name) && (
                            <div className="pl-6 space-y-1 mt-2">
                              {link.children.map((child) => (
                                <button
                                  key={child.name}
                                  onClick={() => handleLinkClick(child.path)}
                                  className={`w-full text-left p-2 rounded-md text-sm transition-colors duration-200 ${
                                    isActive(child.path)
                                      ? "bg-[#0861AB]/10 text-[#0861AB] font-medium"
                                      : "text-gray-600 hover:bg-gray-100 hover:text-[#0861AB]"
                                  }`}
                                >
                                  {child.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
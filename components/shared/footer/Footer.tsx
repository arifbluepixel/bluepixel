"use client";
import { SITE_NAME } from "@/lib/constants/env";
import { motion } from "framer-motion";
import {
  Briefcase,
  Home,
  Info,
  Mail,
  Package,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { FiImage } from "react-icons/fi";
import Newsletter from "./Newsletter";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/", icon: <Home size={14} /> },
    { name: "About Us", path: "/about-us", icon: <Info size={14} /> },
    { name: "Contact Us", path: "/contact-us", icon: <Mail size={14} /> },
    { name: "Products", path: "/products", icon: <Package size={14} /> },
    {
      name: "Photo Gallery",
      path: "/gallery",
      icon: <FiImage size={14} />,
    },
  ];

  const services = [
    "Denim",
    "Woven",
    "Sweater",
    "Underwear",
    "Lingerie",
    "Nightwear",
  ];

  const socialLinks = [
    {
      label: "Facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/apparelresourcebd",
      color: "#1877F2",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/apparel-resource-bd/",
      color: "#0A66C2",
    },
    {
      label: "YouTube",
      icon: FaYoutube,
      href: "https://www.youtube.com/@apparelresource8820",
      color: "#FF0000",
    },
    {
      label: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/apparel_resource_bd/",
      color: "#E1306C",
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background pattern with overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-800/95"></div>

      <div className=" py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start max-w-7xl w-11/12 mx-auto">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <motion.div
              className=""
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="inline-block">
                <div className="flex items-center space-x-2">
                  <span className="p-4 rounded-2xl bg-gradient-to-r from-cyan-100 to-emerald-50 dark:from-cyan-900/30 dark:to-emerald-900/30 text-cyan-700 dark:text-cyan-300 text-xl font-semibold hover:text-[#10b981] transition-all duration-300">
                    {SITE_NAME}
                  </span>
                </div>
              </Link>
            </motion.div>
            <p className="text-gray-300 text-sm text-center md:text-left max-w-xs">
              Businees goal of Apparel Resource is to provide the client with a
              high quality product that meets their quality expectation.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label + index} // ensure unique key
                  href={social.href}
                  target="_blank" // open in new tab
                  rel="noopener noreferrer" // security best practice
                  aria-label={social.label}
                  className="text-gray-400 transition-colors duration-200 p-2 rounded-lg"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    backgroundColor: "#ffffff",
                    color: social.color,
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ color: "gray", backgroundColor: "transparent" }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col items-center md:items-start space-y-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg font-bold text-[#00968E] flex items-center">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-[#00968E] transition-colors duration-200 text-sm flex items-center gap-2 justify-center md:justify-start group"
                  >
                    <div className="p-1 rounded-full bg-[#00968E] text-white flex items-center justify-center">
                      {link.icon}
                    </div>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Product Category */}
          <motion.div
            className="flex flex-col items-center md:items-start space-y-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg font-bold text-[#00968E] flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Product Category
            </h3>
            <ul className="space-y-3 cursor-default">
              {services.map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-gray-300 text-sm flex items-center gap-2 justify-center md:justify-start group">
                    <div className="w-2 h-2 bg-[#00968E] rounded-full"></div>
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <Newsletter />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-4 border-gray-700 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl w-11/12 mx-auto">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>
                © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
              </span>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <Link
                href="/privacy-policy"
                className="hover:text-[#00968E] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="hover:text-[#00968E] transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 -bottom-8 h-8 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;

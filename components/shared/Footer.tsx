"use client";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_NAME,
} from "@/lib/constants/env";
import { bluepixel } from "@/lib/constants/images";
import { jaroFont } from "@/lib/helper/fontHelper";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Clock,
  Home,
  Info,
  Mail,
  MapPin,
  Package,
  Phone,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/", icon: <Home size={16} /> },
    { name: "About Us", path: "/about-us", icon: <Info size={16} /> },
    { name: "Services", path: "/services", icon: <Package size={16} /> },
    { name: "Contact Us", path: "/contact-us", icon: <Mail size={16} /> },
  ];

  const services = [
    { name: "Web Design & Development", icon: <CheckCircle2 size={16} /> },
    { name: "Video Editing & Production", icon: <CheckCircle2 size={16} /> },
    {
      name: "Image Manipulation & Retouching",
      icon: <CheckCircle2 size={16} />,
    },
    { name: "Digital Marketing Campaigns", icon: <CheckCircle2 size={16} /> },
    { name: "Brand Strategy & Consulting", icon: <CheckCircle2 size={16} /> },
  ];

  const contactInfo = [
    {
      icon: <Phone size={16} />,
      label: "Phone",
      value: CONTACT_EMAIL,
      href: `tel:${CONTACT_PHONE}`,
    },
    {
      icon: <Mail size={16} />,
      label: "Email",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: <MapPin size={16} />,
      label: "Address",
      value: `${CONTACT_ADDRESS}`,
      href: "#",
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/BluePixel",
      color: "#1877F2",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/bluepixel",
      color: "#0A66C2",
    },
    {
      label: "YouTube",
      icon: FaYoutube,
      href: "https://www.youtube.com/@bluepixel",
      color: "#FF0000",
    },
    {
      label: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/bluepixel",
      color: "#E1306C",
    },
  ];

  const trustBadges = [
    { icon: <Award size={20} />, text: "Quality Assured" },
    { icon: <Shield size={20} />, text: "Secure & Private" },
    { icon: <Clock size={20} />, text: "24/7 Support" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500"></div>

      <div className="py-16 relative z-10">
        {/* Main Footer Content */}
        <div className=" ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 max-w-7xl w-11/12 mx-auto">
            {/* Company Info */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/" className="inline-block ">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-100 to-sky-100 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    {bluepixel ? (
                      <div className="flex items-center gap-1">
                        <Image
                          width={32}
                          height={32}
                          src={bluepixel}
                          alt="Loading"
                          className="h-6 w-6 drop-shadow-lg animate-pulse"
                          style={{
                            animationDuration: "1s",
                          }}
                        />
                        <span
                          className={`text-[24px] font-bold text-sky-800 ${jaroFont.className}`}
                        >
                          BluePixel
                        </span>
                      </div>
                    ) : (
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text text-transparent">
                        {SITE_NAME}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Transforming visions into digital reality. We deliver
                cutting-edge web solutions, stunning video content, and
                strategic marketing campaigns that drive results.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <span className="text-cyan-500">{badge.icon}</span>
                    <span className="text-xs text-slate-300">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={link.path}
                      className="group flex items-center gap-3 text-gray-300 hover:text-cyan-500 transition-colors duration-300"
                    >
                      <span className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300 text-gray-400 group-hover:text-cyan-500">
                        {link.icon}
                      </span>
                      <span className="text-sm font-medium">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-start gap-2 group cursor-pointer"
                  >
                    <span className="text-cyan-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </span>
                    <span className=" text-gray-300 group-hover:text-cyan-500 transition-colors duration-300">
                      {service.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-start gap-3 group"
                  >
                    <span className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300 text-gray-400 group-hover:text-cyan-500 flex-shrink-0">
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-300 group-hover:text-cyan-500 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                  Connect With Us
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label + index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-700/50 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl w-11/12 mx-auto">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()}{" "}
                  <span className="text-cyan-500 font-semibold">
                    {SITE_NAME}
                  </span>
                  . All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Crafted with passion for digital excellence
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <Shield size={14} />
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="text-sm text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <CheckCircle2 size={14} />
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;

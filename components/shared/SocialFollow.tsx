import {
  SITE_FACEBOOK,
  SITE_INSTAGRAM,
  SITE_LINKEDIN,
  XHandle,
  SITE_YOUTUBE,
} from "@/lib/constants/env";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

// Optimized font loading
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

// Types
export type SocialPlatform =
  | "twitter"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "tiktok"
  | "github";

export type SizeVariant = "sm" | "md" | "lg" | "xl";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
}

export interface SocialFollowProps {
  /** Title text displayed above social links */
  title?: string;
  /** Size variant for the component */
  size?: SizeVariant;
  /** Custom social links array */
  links?: SocialLink[];
  /** Show/hide specific platforms when using default links */
  showTwitter?: boolean;
  showFacebook?: boolean;
  showInstagram?: boolean;
  showLinkedin?: boolean;
  showYoutube?: boolean;
  showTiktok?: boolean;
  showGithub?: boolean;
  /** Custom CSS classes for the container */
  className?: string;
  /** Show border top */
  showBorder?: boolean;
  /** Title font class (e.g., Playfair Display) */
  titleClassName?: string;
  /** Use Playfair Display font for title (default: true) */
  usePlayfairFont?: boolean;
}

// Default social links
const DEFAULT_LINKS: Record<SocialPlatform, string> = {
  twitter: `https://x.com/${XHandle}`,
  facebook: SITE_FACEBOOK,
  instagram: SITE_INSTAGRAM,
  linkedin: SITE_LINKEDIN,
  youtube: SITE_YOUTUBE,
  tiktok: "https://tiktok.com",
  github: "https://github.com",
};

// Social platform configurations
const SOCIAL_CONFIG: Record<
  SocialPlatform,
  {
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    label: string;
  }
> = {
  twitter: {
    icon: FaX,
    color: "#1DA1F2",
    label: "Twitter",
  },
  facebook: {
    icon: FaFacebookF,
    color: "#1877F2",
    label: "Facebook",
  },
  instagram: {
    icon: FaInstagram,
    color: "#E1306C",
    label: "Instagram",
  },
  linkedin: {
    icon: FaLinkedinIn,
    color: "#0A66C2",
    label: "LinkedIn",
  },
  youtube: {
    icon: FaYoutube,
    color: "#FF0000",
    label: "YouTube",
  },
  tiktok: {
    icon: FaTiktok,
    color: "#000000",
    label: "TikTok",
  },
  github: {
    icon: FaGithub,
    color: "#181717",
    label: "GitHub",
  },
};

// Size configurations
const SIZE_CONFIG: Record<
  SizeVariant,
  {
    container: string;
    circle: string;
    icon: string;
    label: string;
    gap: string;
    padding: string;
    title: string;
  }
> = {
  sm: {
    container: "py-4 md:py-6 space-y-4",
    circle: "w-12 h-12 md:w-14 md:h-14",
    icon: "text-lg md:text-xl",
    label: "text-xs md:text-sm",
    gap: "gap-4 md:gap-6",
    padding: "py-2",
    title: "text-2xl md:text-3xl",
  },
  md: {
    container: "py-8 md:py-12 space-y-8",
    circle: "w-16 h-16 md:w-20 md:h-20",
    icon: "text-2xl md:text-3xl",
    label: "text-sm md:text-base",
    gap: "gap-6 md:gap-12 lg:gap-16",
    padding: "py-4",
    title: "text-3xl md:text-4xl lg:text-5xl",
  },
  lg: {
    container: "py-10 md:py-16 space-y-10",
    circle: "w-20 h-20 md:w-24 md:h-24",
    icon: "text-3xl md:text-4xl",
    label: "text-base md:text-lg",
    gap: "gap-8 md:gap-16 lg:gap-20",
    padding: "py-6",
    title: "text-4xl md:text-5xl lg:text-6xl",
  },
  xl: {
    container: "py-12 md:py-20 space-y-12",
    circle: "w-24 h-24 md:w-28 md:h-28",
    icon: "text-4xl md:text-5xl",
    label: "text-lg md:text-xl",
    gap: "gap-10 md:gap-20 lg:gap-24",
    padding: "py-8",
    title: "text-5xl md:text-6xl lg:text-7xl",
  },
};

export default function SocialFollow({
  title = "Follow Us",
  size = "md",
  links,
  showTwitter = false,
  showFacebook = true,
  showInstagram = true,
  showLinkedin = true,
  showYoutube = true,
  showTiktok = false,
  showGithub = false,
  className = "",
  showBorder = true,
  titleClassName = "",
  usePlayfairFont = true,
}: SocialFollowProps) {
  const sizeClasses = SIZE_CONFIG[size];

  // Determine which links to display
  const displayLinks: SocialLink[] = links
    ? links
    : ([
        showTwitter && {
          platform: "twitter" as SocialPlatform,
          url: DEFAULT_LINKS.twitter,
        },
        showFacebook && {
          platform: "facebook" as SocialPlatform,
          url: DEFAULT_LINKS.facebook,
        },
        showInstagram && {
          platform: "instagram" as SocialPlatform,
          url: DEFAULT_LINKS.instagram,
        },
        showLinkedin && {
          platform: "linkedin" as SocialPlatform,
          url: DEFAULT_LINKS.linkedin,
        },
        showYoutube && {
          platform: "youtube" as SocialPlatform,
          url: DEFAULT_LINKS.youtube,
        },
        showTiktok && {
          platform: "tiktok" as SocialPlatform,
          url: DEFAULT_LINKS.tiktok,
        },
        showGithub && {
          platform: "github" as SocialPlatform,
          url: DEFAULT_LINKS.github,
        },
      ].filter(Boolean) as SocialLink[]);

  return (
    <div
      className={`${sizeClasses.container} ${
        showBorder ? "border-t border-gray-200 dark:border-gray-700" : ""
      } ${className}`}
    >
      {/* Title */}
      <h3
        className={`text-center tracking-wide text-gray-900 dark:text-gray-100 ${
          sizeClasses.title
        } ${usePlayfairFont ? playfair.className : ""} ${titleClassName}`}
      >
        {title}
      </h3>

      {/* Social Links */}
      <div
        className={`flex justify-center items-center flex-wrap ${sizeClasses.gap} ${sizeClasses.padding}`}
      >
        {displayLinks.map((link) => {
          const config = SOCIAL_CONFIG[link.platform];
          const Icon = config.icon;
          const label = link.label || config.label;

          return (
            <Link
              key={link.platform}
              href={link.url}
              className="group flex flex-col items-center text-gray-700 dark:text-gray-300 transition-all duration-300"
              aria-label={`Follow us on ${label}`}
              target="_blank"
              rel="noopener noreferrer"
              style={
                {
                  "--hover-color": config.color,
                } as React.CSSProperties
              }
            >
              <div
                className={`${sizeClasses.circle} rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-[var(--hover-color)] dark:group-hover:border-[var(--hover-color)] flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}
              >
                <Icon
                  className={`${sizeClasses.icon} group-hover:text-[var(--hover-color)]`}
                />
              </div>
              <span
                className={`mt-3 font-medium group-hover:text-[var(--hover-color)] ${sizeClasses.label}`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// Example usage:
/*
// Basic usage with default links and Playfair font
<SocialFollow />

// Custom title
<SocialFollow title="Connect With Us" />

// Different size
<SocialFollow size="lg" />

// Without Playfair font
<SocialFollow usePlayfairFont={false} />

// Hide specific platforms
<SocialFollow 
  showTwitter={false}
  showLinkedin={true}
  showYoutube={true}
/>

// Custom links
<SocialFollow 
  links={[
    { platform: "twitter", url: "https://twitter.com/myhandle" },
    { platform: "instagram", url: "https://instagram.com/myhandle" },
    { platform: "github", url: "https://github.com/myhandle" },
  ]}
/>

// With custom styling
<SocialFollow 
  titleClassName="font-bold italic"
  className="bg-gray-50 dark:bg-gray-900"
  size="xl"
  showBorder={false}
/>

// Full customization
<SocialFollow 
  title="Stay Connected"
  size="lg"
  usePlayfairFont={true}
  showBorder={true}
  showTwitter={true}
  showFacebook={true}
  showInstagram={true}
  showLinkedin={true}
  className="my-8"
/>
*/

import {
  DesignTeam,
  manipulation,
  patternAdd,
  Poster,
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  video,
  videoEditing,
  website,
} from "@/lib/constants/images";
import {
  BarChart3,
  Brush,
  Camera,
  CheckCircle,
  Code,
  ImageIcon,
  Layers,
  Layout,
  Mail,
  Monitor,
  Music,
  Palette,
  PenTool,
  Rocket,
  Scissors,
  Smartphone,
  Sparkles,
  Target,
  TrendingUpIcon,
  Users,
  Video,
  Wand2,
  Zap,
} from "lucide-react";

export const TITLES = [
  {
    id: "web-development",
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    bgImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    card: {
      id: "web-development",
      header: "Web Development",
      description:
        "Custom-coded websites and web applications built with modern frameworks, optimized for performance, scalability, and seamless user experiences.",
      cta: "Start Your Project",
    },
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    bgImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    card: {
      id: "graphics-design",
      header: "Graphics Design",
      description:
        "Eye-catching visual designs including logos, branding materials, social media graphics, and marketing collateral that elevate your brand identity.",
      cta: "View Portfolio",
    },
  },
  {
    id: "photo-editing",
    title: "Professional Photo Editing",
    image:
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171",
    bgImage:
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171",
    card: {
      id: "photo-editing",
      header: "Professional Photo Editing",
      description:
        "Expert retouching, color correction, and enhancement services that transform your images with precision attention to detail and natural results.",
      cta: "See Examples",
    },
  },
  {
    id: "clipping-path",
    title: "Clipping Path Services",
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    bgImage:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    card: {
      id: "clipping-path",
      header: "Clipping Path Services",
      description:
        "Pixel-perfect background removal and image masking services delivering clean cutouts for e-commerce, catalogs, and professional photography.",
      cta: "Get Quote",
    },
  },
  {
    id: "video-editing",
    title: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=880",
    bgImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=880",
    card: {
      id: "video-editing",
      header: "Video Editing",
      description:
        "Professional video production and post-production services including cutting, color grading, motion graphics, and effects for engaging content.",
      cta: "Watch Showreel",
    },
  },
];

// Service images object
export const SERVICE_IMAGES = [
  { title: "Web Design and Development", image: website },
  { title: "Motion Graphics", image: videoEditing },
  { title: "Dedicated Design Team", image: DesignTeam },
  { title: "Image Manipulation", image: manipulation },
  { title: "Video Editing", image: video },
  { title: "Adding Patterns", image: patternAdd },
  { title: "Poster", image: Poster },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    designation: "Marketing Director, TechStart Inc",
    rating: 5,
    review:
      "Their web design transformed our online presence completely. The site is not only visually stunning but also incredibly user-friendly. Our conversion rate increased by 40% within the first month!",
    image: slider1,
  },
  {
    name: "James Rodriguez",
    designation: "Content Creator & Influencer",
    rating: 5,
    review:
      "The video editing service is absolutely phenomenal. They took my raw footage and turned it into cinematic masterpieces. The attention to detail in color grading and transitions is unmatched.",
    image: slider2,
  },
  {
    name: "Emily Chen",
    designation: "E-commerce Brand Owner",
    rating: 5,
    review:
      "Their image manipulation skills are incredible! Every product photo looks magazine-quality. Our social media engagement skyrocketed after they revamped our visual content. Worth every penny!",
    image: slider3,
  },
  {
    name: "Michael Thompson",
    designation: "CEO, Digital Solutions Hub",
    rating: 5,
    review:
      "The marketing campaign they designed for us was a game-changer. Strategic, data-driven, and creative. We saw a 300% ROI in just three months. Highly recommended for serious growth!",
    image: slider4,
  },
  {
    name: "Alexandra Knight",
    designation: "Founder, Lifestyle Blog",
    rating: 5,
    review:
      "From web development to video production, they handle everything with professionalism. My website loads fast, looks beautiful, and my video content has never been better. A one-stop solution!",
    image: slider5,
  },
  {
    name: "David Park",
    designation: "Marketing Manager, StartupLab",
    rating: 5,
    review:
      "Exceptional work on our digital marketing strategy and visual content. The team understood our brand vision perfectly and delivered beyond expectations. Our online visibility has increased dramatically!",
    image: slider6,
  },
];

export type LucideIcon = typeof Code;

// Types
export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  serviceIcon: LucideIcon;
}

export interface ProcessStep {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
}

export interface ServiceProcesses {
  [key: string]: ProcessStep[];
}

export interface ProcessCardProps {
  step: ProcessStep;
  index: number;
  isInView: boolean;
  hoveredFeature: string | null;
  setHoveredFeature: (id: string | null) => void;
  isActive: boolean;
}

export interface FeatureCardProps {
  feature: ServiceFeature;
  index: number;
  isInView: boolean;
  hoveredFeature: string | null;
  setHoveredFeature: (id: string | null) => void;
  isSelected: boolean;
  onSelect: () => void;
}

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    id: "web-design",
    title: "Web Design",
    description: "Stunning, responsive websites that captivate users",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    serviceIcon: Monitor,
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Professional video production and post-production",
    icon: "🎬",
    gradient: "from-blue-500 to-cyan-500",
    serviceIcon: Video,
  },
  {
    id: "image-manipulation",
    title: "Image Manipulation",
    description: "Creative image manipulation and enhancement",
    icon: "🖼️",
    gradient: "from-orange-500 to-red-500",
    serviceIcon: ImageIcon,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Strategic campaigns that drive real results",
    icon: "📊",
    gradient: "from-green-500 to-emerald-500",
    serviceIcon: TrendingUpIcon,
  },
];

export const SERVICE_PROCESSES: ServiceProcesses = {
  "web-design": [
    { id: "wireframe", name: "Wireframing", icon: Layout, color: "#8b5cf6" },
    { id: "ui-design", name: "UI Design", icon: Palette, color: "#ec4899" },
    {
      id: "prototyping",
      name: "Prototyping",
      icon: Smartphone,
      color: "#3b82f6",
    },
    { id: "development", name: "Development", icon: Code, color: "#06b6d4" },
    {
      id: "responsive",
      name: "Responsive Testing",
      icon: Monitor,
      color: "#f59e0b",
    },
    { id: "optimization", name: "Optimization", icon: Zap, color: "#10b981" },
    {
      id: "testing",
      name: "Quality Testing",
      icon: CheckCircle,
      color: "#6366f1",
    },
    { id: "launch", name: "Launch & Deploy", icon: Rocket, color: "#ef4444" },
  ],
  "video-editing": [
    { id: "storyboard", name: "Storyboarding", icon: Layout, color: "#3b82f6" },
    { id: "footage", name: "Footage Review", icon: Camera, color: "#06b6d4" },
    {
      id: "cutting",
      name: "Cutting & Trimming",
      icon: Scissors,
      color: "#8b5cf6",
    },
    {
      id: "transitions",
      name: "Transitions",
      icon: Sparkles,
      color: "#ec4899",
    },
    { id: "effects", name: "Visual Effects", icon: Wand2, color: "#f59e0b" },
    { id: "audio", name: "Audio Mixing", icon: Music, color: "#10b981" },
    {
      id: "color-grade",
      name: "Color Grading",
      icon: Palette,
      color: "#6366f1",
    },
    { id: "export", name: "Export & Deliver", icon: Rocket, color: "#ef4444" },
  ],
  "image-manipulation": [
    {
      id: "selection",
      name: "Image Selection",
      icon: Target,
      color: "#f59e0b",
    },
    { id: "retouching", name: "Retouching", icon: Wand2, color: "#ec4899" },
    {
      id: "color-correction",
      name: "Color Correction",
      icon: Palette,
      color: "#8b5cf6",
    },
    { id: "masking", name: "Masking & Layers", icon: Layers, color: "#3b82f6" },
    {
      id: "effects",
      name: "Effects & Filters",
      icon: Sparkles,
      color: "#06b6d4",
    },
    {
      id: "compositing",
      name: "Compositing",
      icon: ImageIcon,
      color: "#10b981",
    },
    { id: "enhancement", name: "Enhancement", icon: Brush, color: "#6366f1" },
    {
      id: "final-export",
      name: "Final Export",
      icon: Rocket,
      color: "#ef4444",
    },
  ],
  marketing: [
    { id: "research", name: "Market Research", icon: Target, color: "#10b981" },
    {
      id: "strategy",
      name: "Strategy Planning",
      icon: BarChart3,
      color: "#8b5cf6",
    },
    {
      id: "content",
      name: "Content Creation",
      icon: PenTool,
      color: "#ec4899",
    },
    { id: "design", name: "Ad Design", icon: Palette, color: "#3b82f6" },
    { id: "campaign", name: "Campaign Setup", icon: Rocket, color: "#06b6d4" },
    { id: "email", name: "Email Marketing", icon: Mail, color: "#f59e0b" },
    { id: "social", name: "Social Media", icon: Users, color: "#6366f1" },
    {
      id: "analytics",
      name: "Analytics & ROI",
      icon: TrendingUpIcon,
      color: "#ef4444",
    },
  ],
};

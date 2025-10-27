import {
  activeWear,
  backpack,
  cap,
  denim,
  fHBUTCycling,
  fJacket,
  fPant,
  fShirt,
  fSweater,
  hHBUTCycling,
  hHBUTCycling2,
  hJacket,
  homeWear,
  hPant,
  hShirt,
  jacket,
  juteProduct,
  knit,
  lingerieAndNightWear,
  longsleeve1,
  longsleeve2,
  longsleeve3,
  longsleeve4,
  slider1,
  slider10,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider9,
  sweater,
  tshirt1,
  tshirt2,
  underWear,
  wooven,
  woven1,
} from "@/lib/constants/images";
import { Product } from "../types";

export const TITLES = [
  {
    id: "minimal",
    title: "Minimal Streetwear",
    image:
      "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    bgImage:
      "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    card: {
      id: "minimal",
      header: "Minimal Streetwear",
      description:
        "Precision-cut silhouettes crafted from premium cotton blends built for everyday versatility with a refined edge.",
      cta: "Shop Capsule",
    },
  },
  {
    id: "sustainable",
    title: "Sustainable Fabrics",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    card: {
      id: "sustainable",
      header: "Sustainable Collections",
      description:
        "Responsibly sourced organic cotton, recycled fibers, and low-impact dyes designed for a cleaner supply chain and a better future.",
      cta: "Explore Fabrics",
    },
  },
  {
    id: "tailored",
    title: "Tailored Basics",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    bgImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    card: {
      id: "tailored",
      header: "Tailored Basics",
      description:
        "Every piece engineered for a perfect fit with attention to stitching, drape, and durability that stands up to daily wear.",
      cta: "View Lookbook",
    },
  },
  {
    id: "limited",
    title: "Limited Drops",
    image:
      "https://images.unsplash.com/photo-1735039061532-b567eadfe1eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    bgImage:
      "https://images.unsplash.com/photo-1735039061532-b567eadfe1eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    card: {
      id: "limited",
      header: "Limited Drops",
      description:
        "Small-batch production runs meticulously crafted pieces that guarantee exclusivity and collector-grade quality.",
      cta: "See Drop",
    },
  },
  {
    id: "active",
    title: "Performance Activewear",
    image:
      "https://images.unsplash.com/photo-1595909315417-2edd382a56dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    bgImage:
      "https://images.unsplash.com/photo-1595909315417-2edd382a56dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    card: {
      id: "active",
      header: "Performance Activewear",
      description:
        "Engineered with moisture-wicking fabrics and ergonomic seams designed to support movement, durability, and comfort in motion.",
      cta: "Shop Active",
    },
  },
];

// Product images object
export const PRODUCT_IMAGES = [
  { title: "Active Wear", image: activeWear },
  { title: "Backpack", image: backpack },
  { title: "Cap", image: cap },
  { title: "Denim", image: denim },
  { title: "Home Wear", image: homeWear },
  { title: "Jacket", image: jacket },
  { title: "Jute Product", image: juteProduct },
  { title: "Knit", image: knit },
  { title: "Lingerie And Night Wear", image: lingerieAndNightWear },
  { title: "Sweater", image: sweater },
  { title: "Under Wear", image: underWear },
  { title: "Woven", image: wooven },
];

export const mockProducts = [
  {
    id: 1,
    title: "Pant",
    description: "Premium Cotton Blend ",
    image: fPant,
    category: "featured",
    status: "featured",
    bgColor: "bg-amber-50",
  },
  {
    id: 2,
    title: "Jacket",
    description: "Classic Denim Jacket",
    image: fJacket,
    category: "featured",
    status: "featured",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    title: "Shirt",
    description: "Premium Cotton Blend Shirt",
    image: fShirt,
    category: "featured",
    status: "featured",
    bgColor: "bg-rose-50",
  },
  {
    id: 4,
    title: "HBUT Cycling",
    description: "Premium Cotton Blend",
    image: fHBUTCycling,
    category: "featured",
    status: "featured",
    bgColor: "bg-slate-50",
  },
  {
    id: 5,
    title: "Sweater",
    description: "Sweater Collection",
    image: fSweater,
    category: "featured",
    status: "featured",
    bgColor: "bg-emerald-50",
  },
  // {
  //   id: 6,
  //   title: "Urban Backpack",
  //   description: "Backpack Collection",
  //   image:
  //     "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
  //   category: "featured",
  //   status: "featured",
  //   bgColor: "bg-purple-50",
  // },
  {
    id: 7,
    title: "HBUT Cycling",
    description: "Premium Cotton Blend",
    image: hHBUTCycling,
    category: "hot",
    status: "hot",
    bgColor: "bg-pink-50",
  },
  {
    id: 8,
    title: "HBUT Cycling",
    description: "Premium Cotton Blend",
    image: hHBUTCycling2,
    category: "hot",
    status: "hot",
    bgColor: "bg-cyan-50",
  },
  {
    id: 9,
    title: "Jacket",
    description: "Premium Cotton Blend",
    image: hJacket,
    category: "hot",
    status: "hot",
    bgColor: "bg-orange-50",
  },
  {
    id: 10,
    title: "Pant",
    description: "Premium Cotton Blend",
    image: hPant,
    category: "hot",
    status: "hot",
    bgColor: "bg-indigo-50",
  },
  {
    id: 11,
    title: "Shirt",
    description: "Premium Cotton Blend",
    image: hShirt,
    category: "hot",
    status: "hot",
    bgColor: "bg-teal-50",
  },
];

export const testimonials = [
  {
    name: "Hannes Wettstein",
    designation: "CEO & Founder",
    rating: 5,
    review:
      "The fabric quality and service exceeded all expectations. I've been working with many suppliers, but this one stands out. Their commitment to ethical production is truly commendable.",
    image: slider1,
  },
  {
    name: "Roberto Martins",
    designation: "Lead Architect",
    rating: 5,
    review:
      "Exceptional communication and timely delivery. The end-to-end process integration made our collection launch seamless and stress-free.",
    image: slider2,
  },
  {
    name: "Diane Iverson",
    designation: "Customs Officer",
    rating: 5,
    review:
      "I was amazed by the durability and comfort of their fabrics. Top-notch quality assurance, resulting in minimal returns. Definitely worth the investment!",
    image: slider3,
  },
  {
    name: "Lisa Wallace",
    designation: "HR Manager, Retail Group",
    rating: 5,
    review:
      "Great communication and fast delivery schedules. Their team really understands modern retail timelines and logistical challenges.",
    image: slider4,
  },
  {
    name: "Shaun Larsen",
    designation: "Investment Analyst",
    rating: 5,
    review:
      "Top-notch quality at reasonable pricing. The supply chain visibility they offer is unparalleled in the industry. I'll keep working with them in the future.",
    image: slider5,
  },
];

export const fashionQuotes = [
  {
    text: "Fashion is the armor to survive the reality of everyday life.",
    author: "Bill Cunningham",
    duration: 12000,
  },
  {
    text: "Style is a way to say who you are without having to speak.",
    author: "Rachel Zoe",
    duration: 11000,
  },
  {
    text: "Fashion is about dressing according to what's fashionable. Style is more about being yourself.",
    author: "Oscar de la Renta",
    duration: 14000,
  },
  {
    text: "Elegance is elimination.",
    author: "Cristóbal Balenciaga",
    duration: 10000,
  },
  {
    text: "Fashion fades, only style remains the same.",
    author: "Coco Chanel",
    duration: 11000,
  },
  {
    text: "Dress like you're already famous.",
    author: "Unknown",
    duration: 10000,
  },
  {
    text: "Fashion is what you buy. Style is what you do with it.",
    author: "Unknown",
    duration: 11000,
  },
  {
    text: "Style is something each of us already has, all we need to do is find it.",
    author: "Diane von Furstenberg",
    duration: 13000,
  },
  {
    text: "Fashion is instant language.",
    author: "Miuccia Prada",
    duration: 10000,
  },
  {
    text: "You can have anything you want in life if you dress for it.",
    author: "Edith Head",
    duration: 12000,
  },
  {
    text: "Fashion is not necessarily about labels. It's not about brands. It's about something else that comes from within you.",
    author: "Ralph Lauren",
    duration: 15000,
  },
  {
    text: "Style is knowing who you are, what you want to say, and not giving a damn.",
    author: "Orson Welles",
    duration: 13000,
  },
  {
    text: "I don't do fashion, I am fashion.",
    author: "Coco Chanel",
    duration: 10000,
  },
  {
    text: "Fashion is about dreaming and making other people dream.",
    author: "Donatella Versace",
    duration: 11000,
  },
  {
    text: "Style is a reflection of your attitude and your personality.",
    author: "Shawn Ashmore",
    duration: 11000,
  },
];

interface Category {
  name: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  { name: "Knit", image: knit, count: 0 },
  { name: "Woven", image: wooven, count: 0 },
  { name: "Sweater", image: sweater, count: 0 },
  { name: "Denim", image: denim, count: 0 },
  { name: "Lingerie & Nightwear's", image: lingerieAndNightWear, count: 0 },
  { name: "Active Wear", image: activeWear, count: 0 },
  { name: "Underwear", image: underWear, count: 0 },
  { name: "Homeware", image: homeWear, count: 0 },
  { name: "Jute Product", image: juteProduct, count: 0 },
  { name: "Backpack", image: backpack, count: 0 },
  { name: "Cap", image: cap, count: 0 },
  { name: "Jacket", image: jacket, count: 0 },
];

export const demoProducts: Product[] = [
  {
    id: 1,
    name: "Tshirt",
    images: [tshirt1, tshirt1],
    badgeColor: "bg-orange-500 dark:bg-orange-600",
    category: "Knit",
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 12,
    name: "Tshirt",
    images: [tshirt2, tshirt2],
    badgeColor: "bg-orange-500 dark:bg-orange-600",
    category: "Knit",
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 13,
    name: "Long Sleeve",
    images: [longsleeve1, longsleeve2, longsleeve3, longsleeve4],
    badgeColor: "bg-black dark:bg-gray-900",
    category: "Knit",
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 2,
    name: "Shirt",
    images: [woven1, woven1],
    badge: "Trending",
    badgeColor: "bg-blue-500 dark:bg-blue-600",
    category: "Woven",
    saleFooter: ["Most Sold Item Of January , 2025"],
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 3,
    name: "Women's T-shirts Plus Size",
    images: [slider5, slider6],
    badge: "Trending",
    badgeColor: "bg-blue-500 dark:bg-blue-600",
    category: "Sweater",
    saleFooter: ["Most Sold Item Of January , 2025"],
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 4,
    name: "Summer Linen Pants",
    images: [slider7, slider8],
    category: "Sweater",
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 5,
    name: "Half sleeve crop top",
    images: [slider9, slider10],
    badgeColor: "bg-black dark:bg-gray-900",
    category: "Denim",
    saleFooter: ["Most Sold Item Of March , 2025"],
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 6,
    name: "Summer two piece set",
    images: [slider1, slider2],
    badgeColor: "bg-red-600 dark:bg-red-700",
    category: "Denim",
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 7,
    name: "Women's straight leg pants",
    images: [slider3, slider4],
    badge: "New arrival",
    badgeColor: "bg-green-500 dark:bg-green-600",
    category: "Lingerie & Nightwear's",
    saleFooter: ["Most Sold Item Of August , 2025"],
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 8,
    name: "Short sleeve office shirt",
    images: [slider5, slider6],
    category: "Underwear",
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 9,
    name: "Loose V-neck T-shirt",
    images: [slider7, slider8],
    category: "Underwear",
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
  {
    id: 10,
    name: "The North Face Trail Jacket",
    images: [slider9, slider10],
    colors: ["#000000", "#F5F5DC"],
    badgeColor: "bg-black dark:bg-gray-900",
    category: "Jacket",
    saleFooter: ["Most Sold Item Of February , 2025"],
    description:
      "Super soft and comfy fabric, skin-friendly and breathable. Womens tops dressy casual, round neck cute lightweight tops",
  },
];

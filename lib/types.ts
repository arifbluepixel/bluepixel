export type HeroCard = {
  id: string;
  header: string;
  description: string;
  cta: string;
};

export interface Product {
  id: number;
  name: string;
  images: string[];
  badge?: string;
  badgeColor?: string;
  category: string;
  description: string;
  saleFooter?: string[];
  colors?: string[];
}

export interface ProductCardProps {
  product: Product;
  viewMode: string;
}
export interface Service {
  id: number;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  photo: any;
  description: string;
  link: string;
}
// Define interface for industry data
export interface Industry {
  id: string;
  name: string;
  description: string;
  link: string;
}

// Define props for the IndustryButton component
export interface IndustryButtonProps {
  industry: Industry;
  isPrimary: boolean;
}

// Define interface for ColoringButton data
export interface ColoringButton {
  id: string;
  name: string;
  link: string;
}
// Define props for the ColoredButton component
export interface ColoredButtonProps {
  ColoringButton: ColoringButton;
  isPrimary: boolean;
  isFullWidth: boolean;
}

// Define types for our data structure
export interface RenderingItem {
  id: number;
  imageUrl: string;
  text: string;
}

// Define props type for TiltCard component
export interface TiltCardProps {
  render: RenderingItem;
}

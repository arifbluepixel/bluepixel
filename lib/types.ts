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

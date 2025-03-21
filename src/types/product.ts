export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  labels?: {
    discount?: number;
    freeShipping?: boolean;
    gift?: boolean;
    flashSale?: boolean;
  };
  totalSold?: number;
} 
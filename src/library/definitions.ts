import { StaticImageData } from "next/image";

export interface Product {
  productid: number;
  sellerId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageurl: string;
}

export interface User {
  userId: number;
  name: string;
  email: string;
  password: string;
  role: "seller" | "buyer";
}

export interface ImageType {
  Icon: StaticImageData;
  alt: string;
}

// Define the Category type
export type Category = {
  category: string;
};

// Define the component props with properly typed categories
export type ComponentProps = {
  categories: Category[];
};

export interface ProductsProps {
  limit?: number; // Optional prop for limit
}


 export const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Sellers", href: "/sellers" },
  { name: "About", href: "/about" },
];


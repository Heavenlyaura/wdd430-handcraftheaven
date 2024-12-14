import { inter } from "@/app/fonts/fonts";
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

export interface ProductDetailType {
  productid: number,
  sellerid: number,
  name: string,
  description: string,
  price: number,
  category: string,
  imageurl: string
}

export interface IconItem {
  icon: StaticImageData;
  alt: string;
  href: string;
}

 export const links = [
  { name: "HOME", href: "/" },
  { name: "PRODUCTS", href: "/products" },
  { name: "SELLERS", href: "/sellers" },
  { name: "ABOUT", href: "/about" },
];


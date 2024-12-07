import { StaticImageData } from "next/image";

export interface Product {
  productId: number;
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

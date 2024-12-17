import { inter } from "@/app/fonts/fonts";
import { StaticImageData } from "next/image";
import { z } from "zod";

export interface Product {
  productid: number;
  sellerId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageurl: string;
}

export interface ProductProp {
  products: Product[];
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
  productid: number;
  sellerid: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageurl: string;
}

export interface IconItem {
  icon: StaticImageData;
  alt: string;
  href: string;
}

export const SignUpFormSchema = z.object({
  firstname: z.string().min(1, "Firstname is required"),
  lastname: z.string().min(1, "Lastname is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long") // Minimum length
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
    .regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
    .regex(/[0-9]/, "Password must contain at least one number") // At least one number
    .regex(/[@$!%*?&]/, "Password must contain at least one special character ")
    .trim(),
  role: z.string({ message: "Role is required" }).min(1),
});

export const LoginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long") // Minimum length
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
    .regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
    .regex(/[0-9]/, "Password must contain at least one number") // At least one number
    .regex(/[@$!%*?&]/, "Password must contain at least one special character ")
    .trim(),
});

export interface UserRegisterData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

export type User = {
  userid: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: "seller" | "buyer";
};

export interface UserFromSession {
  userid: string;
  firstname: string;
  lastname: string;
  email: string;
  role: "seller" | "buyer";
}

export interface UserSession {
  user: {
    userid: string;
    firstname: string;
    lastname: string;
    email: string;
    role: "buyer" | "seller"; // Adjust as needed for possible roles
  };
  expiresAt: string; // ISO 8601 date string
  iat: number; // Issued at, in seconds since epoch
  exp: number; // Expiry, in seconds since epoch
}

export const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Sellers", href: "/sellers" },
  { name: "About", href: "/about" },
];

export type SessionPayload = {
  user: UserFromSession;
  expiresAt: Date;
};

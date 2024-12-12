import { links } from "@/library/definitions";
import Link from "next/link";
import signUp from "/public/other/signup.svg";
import { ImageType } from "@/library/definitions";
import Image from "next/image";

const signUpImg: ImageType = {
  Icon: signUp,
  alt: "Sign Up Button",
};

export const socialMediaLinks = [
  { name: "LinkedIn", href: "/" },
  { name: "Facebook", href: "/products" },
  { name: "Twitter", href: "/sellers" },
  { name: "Instagram", href: "/about" },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0C0D12] text-white">
       
      </footer>
    </>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import hambuger from "../../../public/navigation/hambuger.svg";
import close from "../../../public/navigation/close.svg";
import { useState } from "react";

export const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Sellers", href: "/sellers" },
  { name: "About", href: "/about" },
];

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden md:flex gap-4">
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.href} className="">
              <p>{link.name}</p>
            </Link>
          );
        })}
      </div>

      <div className="md:hidden flex item-center">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Image
            src={isOpen ? close : hambuger}
            alt={isOpen ? "close Icon" : "hambuger Icon"}
          />
        </button>
      </div>
    </>
  );
}

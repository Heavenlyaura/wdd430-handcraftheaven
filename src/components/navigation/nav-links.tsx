"use client";
import Link from "next/link";
import Image from "next/image";
import hambuger from "../../../public/navigation/hambuger.svg";
import close from "../../../public/navigation/close.svg";
import { useEffect, useState } from "react";
import { hambugerLinks } from "@/library/definitions";

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuClasses, setMenuClasses] = useState<string[]>(["hidden"]);

  useEffect(() => {
    if (isOpen) {
      setMenuClasses([
        "absolute z-30 pt-20 pl-8 top-0 left-0 flex flex-col bg-black bg-opacity-50 backdrop-blur-lg text-white font-bold h-screen w-1/2 gap-6 transition-transform duration-300 ease-in-out transform translate-x-0",
      ]);
    } else {
      setMenuClasses([
        "absolute z-30 pt-20 pl-8 top-0 left-0 flex flex-col bg-black bg-opacity-50 backdrop-blur-lg text-white font-bold h-screen w-1/2 gap-6 transition-transform duration-300 ease-in-out transform translate-x-[-100%]",
      ]);
    }
  }, [isOpen]);

  return (
    <>
      <div className={`md:hidden ${menuClasses.join(" ")}`}>
        {hambugerLinks.map((link) => {
          return (
            <a key={link.name} href={link.href} className="">
              <p className={`md:${link.md}`}>{link.name}</p>
            </a>
          );
        })}
      </div>

      <div className={`hidden md:flex gap-6`}>
        {hambugerLinks.map((link) => {
          return (
            <Link key={link.name} href={link.href} className="">
              <p className={`md:${link.md}`}>{link.name}</p>
            </Link>
          );
        })}
      </div>

      <div
        className={`${isOpen ? "flex z-40 " : ""} md:hidden flex items-center`}
      >
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Image
            src={isOpen ? close : hambuger}
            alt={isOpen ? "close Icon" : "hamburger Icon"}
          />
        </button>
      </div>
    </>
  );
}

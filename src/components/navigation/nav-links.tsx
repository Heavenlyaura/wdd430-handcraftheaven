"use client";
import Link from "next/link";
import Image from "next/image";
import hambuger from "../../../public/navigation/hambuger.svg";
import close from "../../../public/navigation/close.svg";
import { useEffect, useState } from "react";
import { links, hambugerLinks } from "@/library/definitions";

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuClasses, setMenuClasses] = useState<string[]>(["hidden"]);

  useEffect(() => {
    if (isOpen) {
      setMenuClasses([
        "absolute pt-14 pl-8 top-0 left-0 flex flex-col bg-black bg-opacity-50 backdrop-blur-lg text-white font-bold h-screen w-1/2 gap-6",
      ]);
    } else {
      setMenuClasses(["md:flex gap-4 hidden"]);
    }
  }, [isOpen]);

  return (
    <>
      <div className={`md:hidden ${menuClasses.join(" ")}`}>
        {hambugerLinks.map((link) => {
          return (
            <Link key={link.name} href={link.href} className="">
              <p className={`md:${link.md}`}>{link.name}</p>
            </Link>
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
        className={`${isOpen ? "flex z-10 " : ""} md:hidden flex items-center`}
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

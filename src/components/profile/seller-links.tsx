"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [{ name: "My Products", href: "/profile/products" }];

export default function SellerLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium  hover:bg-[#DDDDDD] hover:text-black transition-colors md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-[#DDDDDD]": pathname === link.href,
              }
            )}
          >
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

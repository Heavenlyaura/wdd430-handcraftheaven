import Link from "next/link";
// import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Sellers", href: "/sellers" },
  { name: "About", href: "/about" },
];

export default function NavLinks() {
  return (
    <div className="flex gap-4">
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href} className="">
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

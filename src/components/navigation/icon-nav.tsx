import Image, { StaticImageData } from "next/image";
import cart from "/public/navigation/cart.svg";
import search from "/public/navigation/search.svg";
import user from "/public/navigation/user.svg";
import login from "/public/navigation/login.svg";
import { IconItem } from "@/library/definitions";
import Link from "next/link";

const icons: IconItem[] = [
  { icon: cart, alt: "cart icon", href: "/cart" },
  { icon: search, alt: "search icon", href: "/search" },
  { icon: user, alt: "user icon", href: "/profiel" },
  { icon: login, alt: "login icon", href: "/login" },
];

export default function IconNav() {
  return (
    <>
      <div>
        <Image src={cart} alt="cart icon" className="md:hidden" />
      </div>
      <div className="hidden md:flex md:gap-6">
        {icons.map((icon, index) => (
          <Link key={index} href={icon.href}>
            <Image
              // Add a unique key for each element
              src={icon.icon} // The image source
              alt={icon.alt} // The alt text for accessibility
              // width={24} // Adjust the width as needed
              height={24} // Adjust the height as needed
              className=""
            />
          </Link>
        ))}
      </div>
    </>
  );
}

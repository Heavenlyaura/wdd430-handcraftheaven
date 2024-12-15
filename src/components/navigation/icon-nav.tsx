// "use client";
import Image from "next/image";
import cart from "/public/navigation/cart.svg";
import search from "/public/navigation/search.svg";
import user from "/public/navigation/user.svg";
import login from "/public/navigation/login.svg";
import logout from "/public/navigation/logout.svg";
import { IconItem } from "@/library/definitions";
import Link from "next/link";
import isAuthenticated from "@/library/actions";
import { deleteSession } from "@/library/session";

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
        <Link href={"/search"}>
          <Image src={search} alt={"search Image"} className="" />
        </Link>
        <Link href={"/profile"}>
          <Image src={user} alt={"Profile Image"} className="" />
        </Link>
        <Link href={"/cart"}>
          <Image src={cart} alt={"cart Image"} className="" />
        </Link>
        <AuthButton />
      </div>
    </>
  );
}

function LoginButton() {
  return (
    <Link href={"/login"}>
      <Image height={24} src={login} alt={"login Image"} className="" />
    </Link>
  );
}

function LogoutButton() {
  return (
    <a href={"/logout"} className="">
      <Image height={24} src={logout} alt={"login Image"} className="" />
    </a>
  );
}
async function AuthButton() {
  return (await isAuthenticated()) ? <LogoutButton /> : <LoginButton />;
}

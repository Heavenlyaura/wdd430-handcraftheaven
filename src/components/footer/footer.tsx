import { links } from "@/library/definitions";
import Link from "next/link";
import signUp from "/public/other/signup.svg";
import { ImageType } from "@/library/definitions";
import { zillaSlab } from "@/app/fonts/fonts";

const signUpImg: ImageType = {
  Icon: signUp,
  alt: "Sign Up Button",
};

export const socialMediaLinks = [
  { name: "LINKEDIN", href: "/" },
  { name: "FACEBOOK", href: "/products" },
  { name: "TWITTER", href: "/sellers" },
  { name: "INSTAGRAM", href: "/about" },
];

export default function Footer() {
  return (
    <footer
      className={`flex flex-col gap-6 bg-[#0C0D12] text-white p-6 ${zillaSlab.className} antialiased`}
    >
      <h2 className="pt-6 font-bold">Handcrafter Haven</h2>
      <div className="flex gap-6">
        <ul>
          {links.map((link, index) => (
            <li key={index} className="p-2">
              <Link href={link.href}>{link.name.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
        <ul>
          {socialMediaLinks.map((link, index) => (
            <li key={index} className="p-2">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex m md:flex-col md:w-fit gap-4 ml-auto">
        <p>Stay in the know - we will send you new offers & more</p>
        <Link
          href={`/register`}
          className="flex items-center justify-center p-2 border border-white rounded-3xl w-fit"
        >
          Register
        </Link>
      </div>
      <hr className="py-4" />
      <p>Handcrafter Haven 2024. All Rights Reserved</p>
      <p>Built by Goodness Arinze Okafor</p>
    </footer>
  );
}

import { links } from "../navigation/nav-links";
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
      <section className="md:bg-[#0C0D12] md:text-white md:h-auto">
        <div className="md:flex md:justify-between md:max-w-[1280px] md:m-auto">
          <div className="md:flex md:gap-10 md:p-10 md:h-full">
            <div>Heavenly Aura</div>
            <div>
              <ul className="md:flex md:gap-4 md:flex-col">
                {links.map((link) => {
                  return (
                    <Link key={link.name} href={link.href} className="">
                      <li>{link.name}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul className="md:flex md:gap-4 md:flex-col">
                {socialMediaLinks.map((link) => {
                  return (
                    <Link key={link.name} href={link.href} className="">
                      <li>{link.name}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="md:max-w-[272px] md:h-[193px] md:flex md:flex-col md:gap-6 md:items-center md:justify-center md:p-6">
            <h4>Stay in the know - We will send you Offers and More</h4>
            <button>
              <Image src={signUpImg.Icon} alt={signUpImg.alt} />
            </button>
          </div>
        </div>
        <hr className="md:border-t-2 md:border-gray-300 md:max-w-[1280px] md:mx-auto" />
        <div className="md:flex md:justify-between md:p-10">
          <p>©️ 2024 HeavenlyAura. All rights reserved</p>
          <p>Built by Goodness Arinzechukwu Okafor</p>
        </div>
      </section>
    </>
  );
}

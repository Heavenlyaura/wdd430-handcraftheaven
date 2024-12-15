import IconNav from "./icon-nav";
import NavLinks from "./nav-links";
import Logo from "./logo";
import { zillaSlab } from "@/app/fonts/fonts";

export default function NavBar() {
  return (
    <div
      className={`${zillaSlab.className} antialiased flex justify-between md:justify-evenly items-center p-6 md:p-6 bg-[#F9F5EA]`}
    >
      <NavLinks />
      <Logo />
      <IconNav />
    </div>
  );
}

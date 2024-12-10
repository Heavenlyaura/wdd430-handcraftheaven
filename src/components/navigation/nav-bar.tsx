import IconNav from "./icon-nav";
import NavLinks from "./nav-links";
import Logo from "./logo";

export default function NavBar() {
  return (
    <div className="md:flex md:justify-around md:items-center md:gap-6 md:h-[88px]">
      <NavLinks />
      <Logo />
      <IconNav />
    </div>
  );
}

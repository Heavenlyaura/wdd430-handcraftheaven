import IconNav from "./icon-nav";
import NavLinks from "./nav-links";
import Logo from "./logo";

export default function NavBar() {
  return (
    <div className="flex justify-around items-center gap-6 h-[88px]">
      <NavLinks />
      <Logo />
      <IconNav />
    </div>
  );
}

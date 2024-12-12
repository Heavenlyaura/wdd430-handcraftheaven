import IconNav from "./icon-nav";
import NavLinks from "./nav-links";
import Logo from "./logo";

export default function NavBar() {
  return (
    <div className="flex justify-between md:justify-evenly items-center p-6 md:p-6">
      <NavLinks />
      <Logo />
      <IconNav />
    </div>
  );
}

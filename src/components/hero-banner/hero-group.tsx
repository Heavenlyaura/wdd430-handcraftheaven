import HeroImage from "./hero-image";
import HeroContent from "./hero-content";

export default function HeroGroup() {
  return (
    <section className="flex absolute top-0 w-[1440px] h-[729px] bg-[#F9F5EA] z-[-2]">
      <HeroImage/>
      <HeroContent/>
    </section>
  );
}

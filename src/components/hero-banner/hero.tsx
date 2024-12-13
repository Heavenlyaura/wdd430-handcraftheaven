import HeroImage from "./hero-image";
import HeroContent from "./hero-content";

export default function HeroGroup() {
  return (
    <section className="flex flex-col-reverse relative top-[70px] md:grid grid-cols-2 f-full bg-[#F9F5EA]">
      <HeroImage />
      <HeroContent />
    </section>
  );
}

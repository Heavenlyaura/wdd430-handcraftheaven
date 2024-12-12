import HeroImage from "./hero-image";
import HeroContent from "./hero-content";

export default function HeroGroup() {
  return (
    <section className="md:flex md:w-full md:bg-[#F9F5EA]">
      <HeroImage />
      <HeroContent />
    </section>
  );
}

import HeroImage from "./hero-image";
import HeroContent from "./hero-content";

export default function HeroGroup() {
  return (
    <section className="flex w-full h-screen bg-[#F9F5EA]">
      <HeroImage />
      <HeroContent />
    </section>
  );
}

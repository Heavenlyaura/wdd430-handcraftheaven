import heroImg from "/public/hero/hero-img.jpg";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="md:flex md:w-[593px] md:border md:bg-[#FBEDD3] md:overflow-hidden">
      <Image
        src={heroImg}
        alt="Hero Image"
        className="md:object-cover md:w-full md:h-full"
      />
    </div>
  );
}

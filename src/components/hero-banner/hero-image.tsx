import heroImg from "/public/hero/hero-img.jpg";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex h-[729px] w-[593px] border bg-[#FBEDD3]">
      <Image
        src={heroImg}
        alt="Hero Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

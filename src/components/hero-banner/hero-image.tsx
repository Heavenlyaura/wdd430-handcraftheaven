import heroImg from "/public/hero/hero-img.jpg";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex w-[593px] border bg-[#FBEDD3] overflow-hidden">
      <Image
        src={heroImg}
        alt="Hero Image"
        className="object-cover w-full h-full"
      />
    </div>
  );
}

import heroImg from "/public/hero/hero-img.jpg";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className=" max-w-[768px] md:max-w-[593px] md:col-start-1 md:col-end-2">
      <Image
        src={heroImg}
        alt="Hero Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
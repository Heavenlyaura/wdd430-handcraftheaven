import Link from "next/link";
import { zillaSlab, lusitana } from "@/app/fonts/fonts";

export default function HeroContent() {
  return (
    <div className="md:flex md:items-center md:justify-center md:w-[847px] md:h-[683px] md:text-start md:p-[16px]">
      <div>
        <h3 className={`${lusitana.className} md:antialiased md:font-light`}>
          HEAVENLY AURA EXPERIENCE
        </h3>
        <p
          className={`${zillaSlab.className} md:antialiased md:font-bold`}
          style={{ fontSize: "30px" }}
        >
          Every item tells a story. From the first sketch to the final touch,
          our handmade creations embody passion, skill, and attention to detail.
          Explore unique pieces that bring craftsmanship to life.
        </p>

        <Link
          className={`${lusitana.className} md:antialiased md:font-light`}
          href="/collections"
        >
          Discover More
        </Link>
      </div>
    </div>
  );
}

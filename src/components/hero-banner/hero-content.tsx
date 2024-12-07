import Link from "next/link";
import { zillaSlab, lusitana } from "@/app/fonts/fonts";

export default function HeroContent() {
  return (
    <div className="flex items-center justify-center w-[847px] h-[683px] text-start p-[16px]">
      <div>
        <h3 className={`${lusitana.className} antialiased font-light`}>
          HEAVENLY AURA EXPERIENCE
        </h3>
        <p
          className={`${zillaSlab.className} antialiased font-bold`}
          style={{ fontSize: "30px" }}
        >
          Every item tells a story. From the first sketch to the final touch,
          our handmade creations embody passion, skill, and attention to detail.
          Explore unique pieces that bring craftsmanship to life.
        </p>

        <Link
          className={`${lusitana.className} antialiased font-light`}
          href="/collections"
        >
          Discover More
        </Link>
      </div>
    </div>
  );
}

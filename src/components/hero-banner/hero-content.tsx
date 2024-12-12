import Link from "next/link";
import { zillaSlab, lusitana, LaBelleAurore } from "@/app/fonts/fonts";

export default function HeroContent() {
  return (
    <div className="flex text-center items-center justify-center md:text-start p-4 md:col-start-2 md:col-end-3 md:p-6">
      <div>
        <h3 className={`${lusitana.className} antialiased font-light p-2`}>
          #HEAVENLYAURAEXPERIENCE
        </h3>
        <p
          className={`${zillaSlab.className} md:antialiased md:font-bold text-[28px] font-bold`}
        >
          Every item tells a story. From the first sketch to the final touch,
          <span className="text-[#C9A489]">
            {" "}
            our handmade creations embody passion
          </span>
          , skill, and attention to detail.
          <span
            className={`${LaBelleAurore.className} antialiased text-[#C9A489]`}
          >
            {" "}
            Explore unique pieces that bring craftsmanship to life
          </span>
          .
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

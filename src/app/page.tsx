import Hero from "@/components/hero-banner/hero";
import TrendingProducts from "@/components/trending/trending-list";

export default function Home() {
  return (
    <>
      <div className="bg-[#FBF8F0]">
        <Hero />
        <TrendingProducts />
      </div>
    </>
  );
}

import TrendingProducts from "./trending";
import BannerImage from "./banner-img";
import DisplayWrapedImages from "./wrap-img";

export default function MainSection() {
  return (
    <main>
      <TrendingProducts />
      <BannerImage />
      <DisplayWrapedImages />
    </main>
  );
}

import TrendingProducts from "./trending";
import BannerImage from "./banner-img";
import DisplayWrapedImages from "../trending/wrap-img";

export default function MainSection() {
  return (
    <>
      <TrendingProducts />
      <BannerImage />
      <DisplayWrapedImages/>
    </>
  );
}

import Products from "../util/getProducts";
import Categories from "./categories";

export default function ProductListing() {
  return (
    <>
      <Categories />
      <Products />
    </>
  );
}

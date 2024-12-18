import { getProducts } from "@/library/data";
import Products from "../util/getProducts";

export default async function Recommendations() {
  const products = await getProducts({ limit: 4 });
  return (
    <section className="bg-[#ECDFDB]">
      <h2 className="md:px-10 pt-6 font-bold text-center md:text-start">
        YOU MAY ALSO LIKE
      </h2>
      <Products products={products} />
    </section>
  );
}

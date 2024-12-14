import Products from "../util/getProducts";

export default async function Recommendations() {
  return (
    <section className="bg-[#ECDFDB]">
      <h2 className="md:px-10 pt-6 font-bold text-center md:text-start">YOU MAY ALSO LIKE</h2>
      <Products limit={4} />
    </section>
  );
}

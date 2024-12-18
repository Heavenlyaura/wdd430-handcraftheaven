import ProductListing from "@/components/product-list/product-list";
export default async function ProductPage({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const { category } = await searchParams;
  return (
    <>
      <div className=" bg-[#F9F5EA]">
        <ProductListing searchParams={searchParams} />
      </div>
    </>
  );
}

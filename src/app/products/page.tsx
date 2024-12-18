import ProductListing from "@/components/product-list/product-list";

export default async function ProductPage(props: {
  searchParams: Promise<{ category: string }>;
}) {
  const searchParams = await props.searchParams;
  return (
    <>
      <div className=" bg-[#F9F5EA]">
        <ProductListing searchParams={searchParams} />
      </div>
    </>
  );
}

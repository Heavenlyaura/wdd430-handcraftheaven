import { getProductDetails } from "@/library/data";
import { ProductDetailType } from "@/library/definitions";
import Details from "@/components/product-details/details";

export default async function productDetail(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = Number(params.id);
  const product: ProductDetailType = (await getProductDetails(
    id
  )) as unknown as ProductDetailType;
  return (
    <main className="bg-[#F9F5EA] pt-20">
      <Details details={product} />
    </main>
  );
}

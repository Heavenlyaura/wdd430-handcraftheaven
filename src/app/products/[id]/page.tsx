import { getProductDetails } from "@/library/data";
import { ProductDetailType } from "@/library/definitions";
import Details from "@/components/product-details/details";
import CompanyMission from "@/components/product-details/company-mission";
import Recommendations from "@/components/product-details/recommendations";
import { zillaSlab } from "@/app/fonts/fonts";

export default async function productDetail(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;
  const product: ProductDetailType = (await getProductDetails(
    id
  )) as unknown as ProductDetailType;
  return (
    <main className={`bg-[#F9F5EA] ${zillaSlab.className} antialiased `}>
      <Details details={product} />
      <CompanyMission />
      <Recommendations />
    </main>
  );
}

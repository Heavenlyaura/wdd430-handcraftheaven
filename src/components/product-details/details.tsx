import { ProductDetailType } from "@/library/definitions";
import Image from "next/image";
import Link from "next/link";

export default function Details({ details }: { details: ProductDetailType }) {
  return (
    <section className={`flex flex-col md:flex-row md:p-10 `}>
      <div className="md:max-w-[1000px] p-4 m-auto">
        <Image
          src={details.imageurl}
          alt={`Image if ${details.name}`}
          width={500}
          height={500}
        />
      </div>

      <div className="flex flex-col gap-6 p-4">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl md:text-3xl">{details.name}</h2>
          <h2 className="font-bold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(details.price)}
          </h2>
        </div>
        <p className="">{details.description}</p>
        <Link className="bg-black text-white w-fit mx-auto py-2 px-6 rounded-3xl md:text-2xl md:px-8 md:py-4" href={`/cart`}> Add To Cart</Link>
      </div>
    </section>
  );
}

"use client";
import { ProductDetailType } from "@/library/definitions";
import Image from "next/image";
import Link from "next/link";
import RatingStars from "../util/star-rating";
import StarRate from "./starRate";

export default function Details({
  details,
  rating,
  reviewCount,
}: {
  details: ProductDetailType;
  rating: number;
  reviewCount: number | null;
}) {
  return (
    <>
      <section className={`flex flex-col sm:flex-row md:p-10 `}>
        <div className="sm:max-w-[1000px] p-4 m-auto">
          <Image
            src={details.imageurl}
            alt={`Image if ${details.name}`}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-6 px-4 pb-10">
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl sm:text-3xl">{details.name}</h2>
            <h2 className="font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(details.price)}
            </h2>
          </div>
          <div className="flex gap-6 text-[20px]">
            <RatingStars rating={rating} />
            <Link href={"/reviews/"}>{`${reviewCount} Review(s)`}</Link>
          </div>
          <p className="">
            <span className="font-bold">Description: </span>
            {details.description}
          </p>
          <p>
            <span className="font-bold">Artistian: </span>
            <Link
              href={"/Artisians"}
            >{`${details.firstname} ${details.lastname}`}</Link>
          </p>
          <Link
            className="bg-black text-white w-fit py-2 px-6 rounded-3xl md:py-4"
            href={`/cart`}
          >
            {" "}
            Add To Cart
          </Link>
        </div>
      <StarRate productid={details.productid} />
      </section>

    </>
  );
}

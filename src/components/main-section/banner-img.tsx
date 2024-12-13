import bannerImg from "../../../public/other/layer.jpg";
import Image from "next/image";
import { zillaSlab } from "@/app/fonts/fonts";

export default function BannerImage() {
  return (
    <>
      <section className="grid grid-cols-2 grid-rows-1 relative mt-10 md:p-6">
        <div className="col-start-1 col-end-3 h-[260px]">
          <Image
            src={bannerImg}
            alt="Banner Image"
            className=" w-full h-full object-cover"
          />
        </div>

        <div
          className={`${zillaSlab.className} antialiased fred col-start-1 col-end-2 row-start-1 row-end-3 z-10 absolute top-1/4 flex flex-col items-center justify-center text-white`}
        >
          <div className="flex flex-col p-4 gap-2">
            <h4 className=" text-3xl font-bold">
              <span className="bg-black px-2">35%</span> OFF
            </h4>
            <p className="md:text-2xl">
              Get the best for less this Christmas season!
            </p>
            <p className="md:text-2xl">#HEAVENLYAURAEXPERIENCE</p>
          </div>
        </div>
      </section>
    </>
  );
}

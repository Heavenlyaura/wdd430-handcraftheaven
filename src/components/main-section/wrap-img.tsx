import contentImg1 from "/public/other/Contentimg-1.png";
import contentImg2 from "/public/other/Contentimg-2.png";
import wrpimg1 from "/public/other/wrapimg-1.jpg";
import wrpimg2 from "/public/other/wrapimg-2.jpg";
import Image from "next/image";

export default function DisplayWrapedImages() {
  const imgArray = [wrpimg1, contentImg1, wrpimg2, contentImg2];

  return (
    <div className="flex justify-center items-center my-20">
      <div className="flex flex-wrap justify-center gap-10 p-4">
        {imgArray.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Wrapped image ${index + 1}`}
            className="w-[514px] md:h-[593px] object-contain"
          />
        ))}
      </div>
    </div>
  );
}

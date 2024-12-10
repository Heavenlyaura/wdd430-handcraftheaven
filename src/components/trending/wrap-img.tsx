import contentImg1 from "/public/other/Contentimg-1.png";
import contentImg2 from "/public/other/Contentimg-2.png";
import wrpimg1 from "/public/other/wrapimg-1.jpg";
import wrpimg2 from "/public/other/wrapimg-2.jpg";
import Image from "next/image";

export default function DisplayWrapedImages() {
  const imgArray = [wrpimg1, contentImg1, wrpimg2, contentImg2];

  return (
    <div className="md:flex md:justify-center md:items-center">
      <div className="md:flex md:flex-wrap md:justify-center md:gap-10">
        {imgArray.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Wrapped image ${index + 1}`}
            className="md:w-[514px] md:h-[593px] md:object-fit"
          />
        ))}
      </div>
    </div>
  );
}

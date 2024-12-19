import wrpimg1 from "/public/other/wrapimg-1.jpg";
import wrpimg2 from "/public/other/wrapimg-2.jpg";
import wrpimg3 from "/public/other/wrapimg-3.jpg";
import wrpimg4 from "/public/other/wrapimg-4.jpg";

import Image from "next/image";

export default function DisplayWrapedImages() {
  const imgArray = [wrpimg1, wrpimg3, wrpimg2, wrpimg4];

  return (
    <div className="flex justify-center items-center bg-[#ECDFDB] mt-10 py-10">
      <div className="flex flex-wrap justify-center gap-10 p-4">
        {imgArray.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Wrapped image ${index + 1}`}
            className="w-[514px] md:h-[593px] object-cover"
          />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import bgImage from "../../../public/other/loginbgimg.jpg";

export default function Background() {
  return (
    <div className="col-start-1 col-end-3 row-start-1 row-end-2">
      <Image
        src={bgImage}
        alt="Background Image"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

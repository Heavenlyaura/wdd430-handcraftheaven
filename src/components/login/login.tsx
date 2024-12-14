import Image from "next/image";
import bgImage from "../../../public/other/loginbgimg.jpg";

export default function Background() {
  return (
    <div className="">
      <Image src={bgImage} alt="Background Image" />
    </div>
  );
}

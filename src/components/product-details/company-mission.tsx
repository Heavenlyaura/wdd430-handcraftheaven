import Image from "next/image";
import missionIMG from "../../../public/other/missionimg.jpg";

export default function CompanyMission() {
  return (
    <section className="flex flex-col md:flex-row justify-between p-4 md:px-20 gap-4 border border-[#964B00]">
      <div className="flex flex-col max-w-[300px] gap-4">
        <h2 className="text-2xl">OUR MISSION</h2>
        <p className="md:text-2xl">
          Handcrafter Haven connects artisans and buyers, offering a platform
          for unique handmade creations while fostering a community of
          creativity and quality.
        </p>
      </div>
      <div className="max-w-[400px] m-auto md:m-0">
        <Image src={missionIMG} alt="mission image" />
      </div>
    </section>
  );
}

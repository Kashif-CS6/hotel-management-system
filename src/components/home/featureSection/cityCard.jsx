import React from "react";
import Image from "next/image";
const CityCard = ({ img = "/heroBg.jpg", city = "City" }) => {
  return (
    <div className="bg-[#eff6ff] shadow-md p-1 bg-opacity-50 border border-white rounded-xl w-fit">
      <Image
        src={"/heroBg.jpg"}
        width={70}
        height={50}
        className="rounded-full object-cover overflow-hidden"
      />
      <p className="text-center text-xs py-1 font-semibold">{city}</p>
    </div>
  );
};

export default CityCard;

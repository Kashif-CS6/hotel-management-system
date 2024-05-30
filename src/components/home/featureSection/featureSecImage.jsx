import React from "react";
import CityCard from "./cityCard";
import RentCard from "./rentCard";
import { FaLocationDot } from "react-icons/fa6";
const FeatureSecImage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/global-map.png')",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="h-full w-full"
    >
      <div className="h-full w-full bg-white bg-opacity-50 relative">
        <div className="absolute right-32">
          <CityCard city="Tokyo" />
        </div>
        <div className="absolute right-28 bottom-0">
          <CityCard city="Bali" />
        </div>
        <div className="absolute right-56 bottom-20">
          <CityCard city="Singapur" />
        </div>
        <div className="absolute top-5">
          <RentCard width={"w-32"} />
        </div>
        <div className="absolute top-28 left-20">
          <RentCard width={"w-20"} />
        </div>
        <div className="absolute bottom-5 left-10">
          <RentCard width={"w-20"} />
        </div>
        <div className="text-orange-500 absolute right-32">
          <FaLocationDot />
        </div>
        <div className="text-orange-500 absolute right-36 bottom-20">
          <FaLocationDot />
        </div>
        <div className="text-orange-500 absolute right-52 bottom-32">
          <FaLocationDot />
        </div>
      </div>
    </div>
  );
};

export default FeatureSecImage;

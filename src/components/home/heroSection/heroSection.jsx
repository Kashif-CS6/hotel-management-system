import React from "react";
import HotelFilter from "./hotelFilter";
import Button from "../../common/button";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/heroBg.jpg')",
        height: "calc(90vh)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-col px-5 md:px-10 lg:px-36 bg-white bg-opacity-5 h-full w-full flex items-start justify-center gap-10 pb-16">
        <h1 className="text-5xl md:w-1/2 text-white font-semibold">
          Book the best hotel in beautiful countries
        </h1>
        <Button>Explore Our Hotels</Button>
      </div>
      <div className="py-5 pb-8 bg-[#eff6ff] mx-5 md:mx-10 lg:mx-36 rounded-2xl -translate-y-1/2">
        <h2 className="text-center font-semibold text-2xl py-3">
          Start your search
        </h2>
        <div>
          <HotelFilter />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

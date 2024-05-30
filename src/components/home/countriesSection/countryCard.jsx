import React from "react";

const CountryCard = ({ name, img = "url('/heroBg.jpg')" }) => {
  return (
    <div className={"h-full min-h-64"}>
      <div
        style={{
          backgroundImage: img,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-full rounded-2xl overflow-hidden"
      >
        <div className="absolute top-2 right-2  bg-gray-800 flex items-center gap-1 text-white w-fit rounded-full px-3 py-1 text-xs">
          45 hotels
        </div>
        <div className="text-white absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-3">
          <div className="font-bold text-xl line-clamp-1">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;

import React from "react";
import { FaStar } from "react-icons/fa6";
const HotelCard = ({ name, rating, price, index, img }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={isEven ? "h-72" : "h-96"}>
      <div
        style={{
          backgroundImage: img,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-full rounded-2xl overflow-hidden"
      >
        <div className="absolute top-2 left-2  bg-white flex items-center gap-1 text-yellow-400 w-fit rounded-full p-1 text-xs">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <div className="text-white absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-3">
          <div className="font-bold text-xl line-clamp-1">{name}</div>
          <div className="flex items-end">
            <div className="font-bold text-lg">{price}</div>
            <div className="text-xs">/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

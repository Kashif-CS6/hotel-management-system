import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const HotelRank = ({rank}) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex items-center gap-1 text-yellow-400 w-fit text-xs">
        {Array.from({ length: rank }, (_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <div className="bg-orange-500 flex items-center gap-1 text-white px-2 py-1 rounded-xl text-xs">
        <FaThumbsUp />
        <FaPlus />
      </div>
    </div>
  );
}

export default HotelRank
import React from 'react'
import { FaTag } from "react-icons/fa6";

const PriceMatchCard = () => {
  return (
    <div className="flex gap-2 items-center py-3 font-semibold text-base  text-orange-500">
      <div>
        <FaTag />
      </div>
      <div>We price Match</div>
    </div>
  );
}

export default PriceMatchCard
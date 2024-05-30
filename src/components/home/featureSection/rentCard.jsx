import React from "react";
import Image from "next/image";
const RentCard = ({ width }) => {
  return (
    <div className="flex shadow-md items-center gap-2 bg-[#eff6ff] p-2  rounded-xl w-fit">
      <Image
        src={"/heroBg.jpg"}
        width={40}
        height={40}
        className="rounded object-cover overflow-hidden aspect-square"
      />
      <div className={"space-y-1 " + width}>
        <div className="w-2/3 h-2 bg-blue-300 rounded-full overflow-hidden"></div>
        <div className="w-full h-1.5 bg-blue-200 rounded-full overflow-hidden"></div>
        <div className="w-1/2 h-1.5 bg-blue-200 rounded-full overflow-hidden"></div>
      </div>
      <div className="flex items-end">
        <div className="font-bold text-lg">$500</div>
        <div className="text-xs">/night</div>
      </div>
    </div>
  );
};

export default RentCard;

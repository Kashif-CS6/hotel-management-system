"use client";
import { FaChevronDown } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Card from "./card";
const Listing = () => {
  return (
    <div className="border  shadow-[gray] shadow-sm rounded-lg w-80 md:w-fit mx-auto h-fit px-5 py-4 md:pt-3 md:pb-2 mb-2">
      {/* listing top section */}
      <div className="flex items-center gap-8 md:gap-0  flex-wrap justify-center md:justify-between">
        <div>
          <h1 className="text-sm font-[700]">Listing</h1>
          <p className="text-xs md:text-sm text-[gray]">A list or catalog of units.</p>
        </div>
        {/* button */}
        <div className="flex w-[9.6rem] rounded-md py-[2px] px-[2px] items-center gap-1 text-sm bg-[#e4dcdc]">
          <button className="py-1 px-2 bg-white text-[#000000ad] rounded-md">
            For Rent
          </button>
          <button className="py-1 px-2 text-[#000000ad] rounded-md">
            For Sale
          </button>
        </div>

        {/* current */}
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center gap-1 py-1 px-2 border border-gray-300 rounded-md bg-white text-sm text-[gray]">
            Current <FaChevronDown />
          </button>
          <button className="py-1 px-2 border border-gray-300 rounded-md bg-white text-md text-[gray]">
            <BsThreeDots size={20} />
          </button>
        </div>
      </div>
      {/* ----------end---------- */}
      {/* this section will display all cards */}
      <div className="flex flex-wrap items-center py-6 space-x-0 md:space-x-4  justify-center space-y-4 md:space-y-0">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Listing;

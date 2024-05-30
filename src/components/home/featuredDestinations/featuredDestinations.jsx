import React from "react";
import SectionHeader from "../sectionHeader";
import DestinationCarousel from "./destinationCarousel";

const FeaturedDestinations = () => {
  return (
    <div className="min-h-screen relative">
      <div className="bg-[#eff6ff] w-full md:w-2/3 md:absolute left-0 md:-top-40 h-full rounded-r-3xl p-5 md:p-10 lg:pl-36">
        <div className="flex justify-between  flex-col h-full">
          <div>
            <SectionHeader title="Featured Destinations" />
            <p className="text-sm text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ad
              soluta nisi aliquam tempore in quaerat cumque quisquam
              perferendis, quam, quis sit ut earum! Ex explicabo consectetur
              repellendus similique nihil.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">City Name</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full items-center z-50 mt-20">
        <DestinationCarousel />
      </div>
    </div>
  );
};

export default FeaturedDestinations;

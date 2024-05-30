import React from "react";
import SectionHeader from "../sectionHeader";
import DescriptionText from "../descriptionText";
import HotelsCarousel from "./hotelsCarousel";

const TopHotelsSection = () => {
  return (
    <div className="">
      <div className="space-y-5 py-5 w-full text-center">
        <SectionHeader title="Our Top hotels in 50 different countries" />
        <DescriptionText text="Explore our top destination voted by more than 1000 000+ customers around the world" />
      </div>
      <div>
        <HotelsCarousel />
      </div>
    </div>
  );
};

export default TopHotelsSection;

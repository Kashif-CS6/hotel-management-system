import React from "react";
import SectionHeader from "../sectionHeader";
import DescriptionText from "../descriptionText";
import CountriesGrid from "./countriesGrid";
import Button from "@/components/common/button";
import { FaAngleRight } from "react-icons/fa";
const CountriesSection = () => {
  return (
    <div className="">
      <div className="space-y-5 py-5 w-full text-center">
        <SectionHeader title="Explore By Countries" />
        <DescriptionText text="Explore our top destination voted by more than 1000 000+ customers around the world" />
      </div>
      <div className="px-5 md:px-10 lg:px-20">
        <CountriesGrid />
        <div className="mx-auto w-fit py-3">
          <Button>
            View All Countries <FaAngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountriesSection;

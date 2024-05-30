import React from "react";
import SectionHeader from "../sectionHeader";
import DescriptionText from "../descriptionText";
import FeatureCard from "./featureCard";
import { FiEye } from "react-icons/fi";
import FeatureSecImage from "./featureSecImage";
const FeatureSection = () => {
  return (
    <div className="min-h-screen space-y-10">
      <div className="space-y-5 py-5 w-full text-center">
        <SectionHeader title="Our Top hotels in 50 different countries" />
        <DescriptionText text="Explore our top destination voted by more than 1000 000+ customers around the world" />
      </div>
      <div className="grid grid-rows-2 md:grid-cols-3 gap-10 px-5 md:px-10 lg:px-36">
        <div className="lg:col-span-1 space-y-8">
          <FeatureCard
            icon={<FiEye />}
            title="See it all"
            description="From local hotels to global brands discover millions of room all around the world"
          />
          <FeatureCard
            icon={<FiEye />}
            title="See it all"
            description="From local hotels to global brands discover millions of room all around the world"
          />
          <FeatureCard
            icon={<FiEye />}
            title="See it all"
            description="From local hotels to global brands discover millions of room all around the world"
          />
        </div>
        <div className="md:col-span-2">
          <FeatureSecImage />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

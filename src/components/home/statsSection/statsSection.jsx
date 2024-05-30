import React from "react";
import SectionHeader from "../sectionHeader";
import Button from "@/components/common/button";
import { FaAngleRight } from "react-icons/fa";
import ButtonLight from "@/components/common/buttonLight";
import StatsSecImg from "./statsSecImg";
const StatsSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 px-5 md:px-10 lg:px-36">
      <div>
        <StatsSecImg />
      </div>
      <div className="space-y-5">
        <div className="space-y-5 py-5 w-full text-left">
          <SectionHeader title="Our Top hotels in 50 different countries" />
          <p className="text-sm pr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            reprehenderit perspiciatis magnam ea provident ipsam debitis illum
            voluptatem optio quia harum, alias quae accusamus ex cupiditate
            fugiat blanditiis deserunt eligendi.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Button>
            See all activitis <FaAngleRight />
          </Button>
          <ButtonLight>
            See all Hotels <FaAngleRight />
          </ButtonLight>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

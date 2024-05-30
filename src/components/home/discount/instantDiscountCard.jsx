import React from "react";
import SectionHeader from "../sectionHeader";

const InstantDiscountCard = () => {
  return (
    <div className="bg-blue-200 w-2/3 mx-auto translate-y-1/2 rounded-3xl overflow-hidden ">
      <div
        style={{
          backgroundImage: "url('/global-map.png')",
          // height: "calc(25rem)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-full w-full "
      >
        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-transparent h-full p-10 text-white">
          <SectionHeader title="Get Instant Discounts" />
          <p className="text-sm pr-10 py-3">
            Just sign into your wander list account and look for blue genuis
            logo to save.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-5 py-10">
            <button className="bg-transparent text-white border border-white px-5 py-2 rounded-md w-fit flex items-center gap-1 hover:bg-white hover:bg-opacity-10">
              Register
            </button>
            <button className="bg-white text-black border border-white px-5 py-2 rounded-md w-fit flex items-center gap-1 hover:bg-opacity-80">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantDiscountCard;

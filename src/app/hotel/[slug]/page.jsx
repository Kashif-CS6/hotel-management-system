import Breadcrumb from "@/components/common/breadcrumb";
import SecondaryNavbar from "@/components/common/navBar/secondaryNavbar";
import HotelDetails from "@/components/hotelDetails/hotelDetails";
import React from "react";

const Page = () => {
  return (
    <div>
      <div>
        <SecondaryNavbar />
      </div>
      <div className="px-5 md:px-10 lg:px-36">
        <div className="">
          <Breadcrumb />
        </div>
        <div>
            <HotelDetails />
        </div>
      </div>
    </div>
  );
};

export default Page;

"use client";
import NavBar from "@/components/common/navBar/navBar";
import React, { useState } from "react";
import data2 from "@/components/searchResults/data2";
import Maincomponent from "@/components/searchResults/maincomponent/maincomponent";
import Breadcrumb from "@/components/common/breadcrumb";
import SearchPage from "@/components/searchResults/searchPage";
import SecondaryNavbar from "@/components/common/navBar/secondaryNavbar";

const Page = () => {
  const [stateData, setStateData] = useState(data2);
  return (
    <div className="">
      <div>
        <SecondaryNavbar />
      </div>
      <div>
        <div>
          <Maincomponent />
        </div>
      </div>
    </div>
  );
};

export default Page;

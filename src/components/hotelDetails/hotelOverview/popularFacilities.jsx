import React from "react";
import { FaWifi } from "react-icons/fa6";
import { RiCustomerServiceLine } from "react-icons/ri";
import { LiaSmokingBanSolid } from "react-icons/lia";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineFastfood } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { MdFamilyRestroom } from "react-icons/md";
import { SiGitea } from "react-icons/si";


const PopularFacilities = () => {

  const facilities = [
    {
      icon: <FaWifi />,
      name: "Free Wifi",
    },
    {
      icon: <RiCustomerServiceLine />,
      name: "24/7 Room Service",
    },
    {
      icon: <LiaSmokingBanSolid />,
      name: "Non-Smoking Rooms",
    },
    {
      icon: <IoIosFitness />,
      name: "Fitness Center",
    },
    {
      icon: <MdOutlineFastfood />,
      name: "Restaurant",
    },
    {
      icon: <LuParkingCircle />,
      name: "Free Parking",
    },
    {
      icon: <MdFamilyRestroom />,
      name: "Family Rooms",
    },
    {
      icon: <SiGitea />,
      name: "Good Breakfast",
    },
  ];
  return <div>
    <h3 className="text-lg font-bold">Most Popular Facilities</h3>
    <div className="flex gap-2 flex-wrap">
      {facilities.map((facility, index) => (
        <div key={index} className="flex items-center gap-2 bg-white p-2 rounded-md">
          <div className="text-green-700 text-2xl">{facility.icon}</div>
          <p className="text-sm font-light">{facility.name}</p>
        </div>
      ))}
    </div>
  </div>;
};

export default PopularFacilities;

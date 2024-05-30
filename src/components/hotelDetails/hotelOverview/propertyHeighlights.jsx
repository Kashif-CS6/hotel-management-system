import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import Button from "@/components/common/button";
const PropertyHeighlights = () => {
  return (
    <div className="bg-orange-300 p-5 w-full">
      <h3 className="font-bold">Property Heighlights</h3>
      <div className="my-3">
        <div className="py-2">
          <h4 className="font-bold text-sm">Perfect for a 16 night stay</h4>
          <div className="flex items-start gap-2 my-2">
            <div className="mt-1">
              <FaLocationDot />
            </div>
            <p className="text-sm">
              Top Location: Highly rated by recent guests (9.7)
            </p>
          </div>
        </div>
        <div className="py-2">
          <h4 className="font-bold text-sm">Breakfast Info</h4>
          <p className="text-sm py-2">
            Continental, Italian, Full English/Irish, Vegetarian, American,
            Buffet, Breakfast to go
          </p>
        </div>
        <div className="py-2">
          <h4 className="font-bold text-sm">Rooms with:</h4>
          <div className="flex items-start gap-2 my-2">
            <div className="mt-1">
              <FaStreetView />
            </div>
            <p className="text-sm">Quiet Street view</p>
          </div>
          <div className="flex items-start gap-2 my-2">
            <div className="mt-1">
              <LuParkingCircle />
            </div>
            <p className="text-sm">
              Free private parking available at the hotel.
            </p>
          </div>
        </div>
        <div className="w-fit ml-auto mt-5">
          <Button>Reserve</Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeighlights;

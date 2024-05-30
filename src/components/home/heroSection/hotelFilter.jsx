"use client";
import React, { Children } from "react";
import Selection from "../../common/selection";
import Date from "../../common/date";
import Button from "../../common/button";

const HotelFilter = () => {
  return (
    <div className="grid  lg:grid-cols-12 items-end gap-2 px-5 md:px-10 lg:px-20">
      <div className="col-span-4">
        <label htmlFor="hotelSelection" className="text-xs">
          Destination
        </label>
        <Selection
          name="hotelSelection"
          placeholder="Enter Destination or hotel name"
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="checkin" className="text-xs">
          Check In
        </label>
        <Date name="checkin" />
      </div>

      <div className="col-span-2">
        <label htmlFor="checkout" className="text-xs">
          Check Out
        </label>
        <Date name="checkout" />
      </div>
      <div className="col-span-2">
        <label htmlFor="hotelSelection" className="text-xs">
          People
        </label>
        <Selection name="hotelSelection" placeholder="2 people, 1 room" />
      </div>
      <div className="col-span-2 text-sm">
        <Button>Search Hotels</Button>
      </div>
    </div>
  );
};

export default HotelFilter;

"use client";
import React, { useEffect, useState } from "react";
import FilterCard from "./filterCard";
import Mapcomponent from "../admin/hotelslist/mapcomponent";
import data2 from "./data2";
const filterss = [
  {
    name: "Free Cancellation",
    value: "freeCancellation",
  },
  {
    name: "Room Service",
    value: "roomService",
  },
  {
    name: "Very Good (8+)",
    value: "veryGood",
  },
  {
    name: "Fitness",
    value: "fitness",
  },
  {
    name: "Pet Friendly",
    value: "petFriendly",
  },
  {
    name: "Apartments",
    value: "apartments",
  },
  {
    name: "Guesthouses",
    value: "guesthouses",
  },

  {
    name: "F-6 Sector",
    value: "F6Sector",
  },
  {
    name: "G-9 Sector",
    value: "G9Sector",
  },
  {
    name: "F-8 Sector",
    value: "F8Sector",
  },
  {
    name: "F-7 Sector",
    value: "F7Sector",
  },
  {
    name: "G-6 Sector",
    value: "G6Sector",
  },
  {
    name: "G-8 Sector",
    value: "G8Sector",
  },
  {
    name: "G-7 Sector",
    value: "G7Sector",
  },
  {
    name: "I-8 Sector",
    value: "I8Sector",
  },
];

const SearchFilters = ({ setRatingFilters, ratingFilters }) => {
  const uniqueCity = [...new Set(data2.map((hotel) => hotel.city))];
  const filterData = [
    { name: "1 Star", value: 1 },
    { name: "2 Star", value: 2 },
    { name: "3 Star", value: 3 },
    { name: "4 Star", value: 4 },
    { name: "5 Star", value: 5 },
    { name: "Unrated", value: 0 },
  ];
  const [isChecked, setIsChecked] = useState(null);
  return (
    <div>
      {/* mapcomponent */}
      <div className="mb-2">
        <Mapcomponent h="h-36" rounded="lg" />
      </div>
      {/* filter by rating container */}
      <div className="border rounded-lg">
        <div className="font-bold px-3 py-2 border-b">Filter by:</div>
        <div>
          <ul className="px-3">
            <h3 className="font-semibold text-sm py-2">Property Rating:</h3>

            {filterData.map((filter, index) => (
              <FilterCard
                key={index}
                name={filter.name}
                value={filter.value}
                setFilters={setRatingFilters}
                filters={ratingFilters}
                setIsChecked={setIsChecked}
                isChecked={isChecked}
              />
            ))}
            {/*         
           {filters.map((filter) => (
           <FilterCard
             key={filter.value}
             name={filter.name}
             value={filter.value}
             onFilterChange={handleFilterChange}
           />
         ))} */}
          </ul>
        </div>
      </div>
      {/* Filter according to cities */}
      <div className="mt-2 border rounded-lg">
        <div className="font-bold px-3 py-2 border-b">Filter by:</div>
        <div className="px-3">
          <h1 className="font-semibold text-sm py-2">Hotel Destinations</h1>
          <ul>
            {uniqueCity.map((item) => {
              return (
                <li className="flex gap-2 py-2">
                  <input type="checkbox" name="" id="" />
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;

import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchNewHotel = () => {
  return (
    <div className="p-5 bg-orange-300 space-y-3 text-black">
      <h2 className="font-semibold">Search</h2>
      <div>
        <label htmlFor="search" className="text-xs">
          Destination/peoperty name
        </label>
        <div className="w-full p-2 rounded bg-white flex items-center overflow-hidden ">
          <div>
            <FaSearch />
          </div>
          <input type="text" id="search" className="outline-none px-2" />
        </div>
      </div>
      <div>
        <label htmlFor="checkIn" className="text-xs">
          Check-in
        </label>
        <input
          type="date"
          id="checkIn"
          className="w-full p-2 rounded bg-white"
        />
      </div>
      <div>
        <label htmlFor="checkOut" className="text-xs">
          Check-out
        </label>
        <input
          type="date"
          id="checkOut"
          className="w-full p-2 rounded bg-white"
        />
      </div>
      <div>
        <label htmlFor="adults" className="text-xs">
          16-Night Stay
        </label>
        <div className="p-2 bg-white rounded">
          <select name="" id="" className="p-1 outline-none ">
            <option value="1">2 Adults 0 -children</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
      <div className=''>
        <input type="checkbox"  />
        <label htmlFor="checkbox" className="pl-1 text-xs">
          I'm traveling for work
        </label>
      </div>
      <div>
        <button className="w-full p-2 bg-orange-500 text-white rounded mt-2">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchNewHotel 
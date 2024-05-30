"use client";
import Image from "next/image";
import { IoFilter } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BiDollarCircle, BiSearch } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";
import { PiSquaresFour } from "react-icons/pi";
import { useEffect, useState } from "react";
import Hotelcard from "./hotelcard";
import data from "../data";

const Filtersection = () => {
  const [filter1, setfilter1] = useState(0);
  const [filter2, setfilter2] = useState(2);
  const [apartments, setApartments] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSortByDate = () => {
    const sorted = [...apartments].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setApartments(sorted);
  };

  const handleSortByPrice = () => {
    const sorted = [...apartments].sort(
      (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
    );
    setApartments(sorted);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    const filteredByPrice = data.filter(
      (apartment) => apartment.price === e.target.value
    );
    setApartments(filteredByPrice);
  };

  const handleDateChange = (e) => {
    const abc = e.target.value;
    const date = new Date(abc);
    const Monthh =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;

    const Datee =
      date.getDate() < 10 ? `0${date.getDate() + 1}` : date.getDate();
    const formattedDate = `${Monthh}/${Datee}/${date.getFullYear()}`;
    console.log(formattedDate);
    setSelectedDate(formattedDate);

    const filteredByDate = data.filter(
      (apartment) => apartment.date === formattedDate
    );

    setApartments(filteredByDate);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    const filteredByCountry = data.filter(
      (apartment) => apartment.countryname === e.target.value
    );
    setApartments(filteredByCountry);
  };
  //handle Search function
  const handleSearch = () => {
    const results = data.filter(
      (hotel) =>
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.countryname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.cityname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.price.includes(searchTerm)
    );
    setApartments(results);
  };

  //useEffect
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div className="w-auto md:w-9/12">
      {/* top */}
      <div className="my-2 flex flex-col items-center md:items-start text-center md:text-start">
        <h1 className="text-xl font-[700]">176 Stays in Melbourne</h1>
        <p className="text-md text-[gray]">
          Book your next stay at one of our properties.
        </p>
      </div>

      {/* filter buttons */}
      <div className="flex items-center flex-col md:flex-row md:justify-between my-4 space-y-4 md:space-y-0">
        <div className="flex items-center flex-col md:flex-row space-y-4 md:space-x-10 md:space-y-0">
          {/* countries */}
          <select className="flex items-center gap-1 px-2 border py-2 text-sm md:text-md rounded-md font-[600]" onChange={handleCountryChange} value={selectedCountry}>
            <option value="">Select Country</option>
            {Array.from(
              new Set(data.map((apartment) => apartment.countryname))
            ).map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          {/* date */}
          <div className="flex items-center gap-1 px-2 border py-2  rounded-md font-[600]">
            <input
              type="date"
              onChange={handleDateChange}
              value={selectedDate}
              className="outline-none"
            />
          </div>
          {/* price */}
          <select className="flex items-center gap-1 px-2 border py-2 text-sm md:text-md  rounded-md font-[600]" onChange={handlePriceChange} value={selectedPrice}>
            <option value="">Select Price</option>
            {Array.from(new Set(data.map((apartment) => apartment.price))).map(
              (price, index) => (
                <option key={index} value={price}>
                  {price}
                </option>
              )
            )}
          </select>

          {/* price end here */}
        </div>
        <button className="flex items-center px-2 gap-2 border py-2 rounded-md font-[600]">
          <IoFilter />
          <p>More filters</p>
        </button>
      </div>
      {/* Search bar */}
      <div className=" flex gap-4 md:gap-2 justify-between w-auto items-center my-2 flex-col md:flex-row">
        <div className="flex gap-2 w-80 items-center bg-gray-200 py-2 flex-1 rounded-md pl-2 text-[gray]">
          <BiSearch size={20} />
          <input
            type="text"
            className="outline-none bg-transparent w-full text-xs md:text-sm"
            placeholder="Search by location, country, or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 text-sm md:text-md   items-center">
          <button
            onClick={() => {
              setSearchTerm("");
            }}
            className="text-sm border active:bg-green-600 cursor-pointer border-[gray] font-bold bg-white py-2 px-2 rounded-sm"
          >
            Clear
          </button>
          <button
            onClick={handleSearch}
            className="text-sm  bg-black font-bold text-white py-2 px-2 rounded-sm"
          >
            Search
          </button>
        </div>
      </div>
      {/* ended search bar */}
      {/* Filter types */}
      <div className="flex items-center justify-between my-4 p-0 m-0 flex-col gap-3 md:gap-0 md:flex-row">
        {/* filter 1 */}
        <div className="flex items-center gap-1 text-sm w-52 h-10 rounded-md bg-white border">
          <button
            className="w-[50%] font-[600] text-white text-sm md:text-md h-full rounded-tl-md rounded-bl-md"
            style={{
              backgroundColor: filter1 == 0 ? "black" : "white",
              color: filter1 == 0 ? "white" : "black",
            }}
            onClick={() => {
              setfilter1(0);
              handleSortByDate();
            }}
          >
            Sort by date
          </button>
          <button
            className="w-[50%] duration-200  font-[600] h-full rounded-tl-md rounded-bl-md"
            style={{
              backgroundColor: filter1 == 1 ? "black" : "white",
              color: filter1 == 1 ? "white" : "black",
              borderRadius: filter1 == 1 ? "0 7px 7px 0" : null,
            }}
            onClick={() => {
              setfilter1(1);
              handleSortByPrice();
            }}
          >
            Sort by price
          </button>
        </div>
        {/* filter 2 */}
        <div className="flex items-center gap-1 text-sm w-28 mx-2 h-10 rounded-md bg-white border">
          <button
            className="w-[50%] flex justify-center items-center duration-200  font-[600] h-full rounded-tl-md rounded-bl-md"
            style={{
              backgroundColor: filter2 == 2 ? "black" : "white",
              color: filter2 == 2 ? "white" : "black",
            }}
            onClick={() => {
              setfilter2(2);
            }}
          >
            <AiOutlineBars />
          </button>
          <button
            className="w-[50%] duration-200 flex justify-center items-center  font-[600] h-full rounded-tl-md rounded-bl-md"
            style={{
              backgroundColor: filter2 == 3 ? "black" : "white",
              color: filter2 == 3 ? "white" : "black",
              borderRadius: filter2 == 3 ? "0 7px 7px 0" : null,
            }}
            onClick={() => {
              setfilter2(3);
            }}
          >
            <PiSquaresFour />
          </button>
        </div>
      </div>
      <hr />
      {/* cards section started here */}
      <div className="my-3 flex flex-col gap-5">
        <Hotelcard apartments={apartments} />
      </div>
    </div>
  );
};

export default Filtersection;

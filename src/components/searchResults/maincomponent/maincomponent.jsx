import React, { useState } from "react";
import ResultCard from "../resultCard";
import data2 from "../data2";
import Ratingcheckbox from "./ratingcheckbox";
import Mapcomponent from "@/components/admin/hotelslist/mapcomponent";
import Citycheckbox from "./citycheckbox";
import Breadcrumb from "@/components/common/breadcrumb";
import Namecheckbox from "./namecheckbox";
import Reviewcheckbox from "./reviewcheckbox";
import { HiHomeModern } from "react-icons/hi2";

const Maincomponent = () => {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [setselectedNames, setsetselectedNames] = useState([]);
  const [selectedReviews, setselectedReviews] = useState([]);

  const handleRatingChange = (e) => {
    const rating = e.target.value;
    if (e.target.checked) {
      setSelectedRatings([...selectedRatings, rating]);
    } else {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    }
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    if (e.target.checked) {
      setSelectedCities([...selectedCities, city]);
    } else {
      setSelectedCities(selectedCities.filter((c) => c !== city));
    }
  };
  //name of the hotels
  const handleNameChange = (e) => {
    const name = e.target.value;
    if (e.target.checked) {
      setsetselectedNames([...setselectedNames, name]);
    } else {
      setsetselectedNames(setselectedNames.filter((c) => c !== name));
    }
  };

  //Reviews
  const handleReviewChange = (e) => {
    const review = e.target.value;
    if (e.target.checked) {
      setselectedReviews([...selectedReviews, review]);
    } else {
      setselectedReviews(selectedReviews.filter((c) => c !== review));
    }
  };

  const filteredResults = data2.filter((item) => {
    const ratingMatch =
      selectedRatings.length === 0 ||
      selectedRatings.includes(item.star.toString());
    const cityMatch =
      selectedCities.length === 0 || selectedCities.includes(item.city);
    const nameMatch =
      setselectedNames.length === 0 || setselectedNames.includes(item.name);
    const cityMatch2 =
      selectedReviews.length === 0 ||
      selectedReviews.includes(item.reviews.toString());
    return ratingMatch && cityMatch && nameMatch && cityMatch2;
  });

  //search bar methods
  const [stateCity, setStateCity] = useState("");
  const [stateDatein, setStateDatein] = useState("");
  const [stateDateout, setStateDateout] = useState("");
  const [statetwopeople, setStatetwopeople] = useState("");
  const [searchData, setSearchData] = useState(data2);
  const [check, setCheck] = useState(false);
  const handleCountryChange = (e) => {
    setStateCity(() => e.target.value);
    console.log("City name:", e.target.value);
  };

  //Date cheque in
  const handleDatechequein = (e) => {
    setStateDatein(e.target.value);
    console.log("Date in", e.target.value);
  };

  //Date cheque out
  const handleDatechequeout = (e) => {
    setStateDateout(e.target.value);
    console.log("Date out", e.target.value);
  };

  //Two people one room function

  const hanldeTwoPeopleRoomsChange = (e) => {
    setStatetwopeople(e.target.value);
    console.log("Selected value:", e.target.value);
  };

  //Search function here
  const handleSearch = () => {
    console.log(
      `All getted values:${stateCity} and ${stateDatein} and ${stateDateout} and ${statetwopeople}`
    );

    if (
      stateCity == "" ||
      stateDatein == "" ||
      stateDateout == "" ||
      statetwopeople == ""
    ) {
      setCheck(false);
    }
    const SearchRecord = data2.filter((item) => {
      // Convert check-in and check-out dates to Date objects for comparison
      const checkin = new Date(stateDatein);
      const checkout = new Date(stateDateout);

      // Check if the item matches all search criteria
      return (
        // City, case-insensitive match
        item.city.toLowerCase().includes(stateCity.toLowerCase()) &&
        // Check-in date is on or after selected check-in date
        new Date(item.checkinDate) >= checkin &&
        // Check-out date is on or before selected check-out date
        new Date(item.checkoutDate) <= checkout &&
        // Number of rooms available is equal to or greater than selected value
        item.twoPeopleRooms >= parseInt(statetwopeople)
      );
    });

    // Update filteredResults state with the search results
    setSearchData(SearchRecord);
    // Set check to true to indicate that search results should be displayed
    setCheck(true);
    if (
      stateCity == "" ||
      stateDatein == "" ||
      stateDateout == "" ||
      statetwopeople == ""
    ) {
      setCheck(false);
    }
  };

  return (
    <div className="w-10/12 mx-auto">
      {/* search bar */}
      <div className="py-3 my-3 lg:my-1 bg-slate-100 space-y-3 lg:space-y-0  border rounded-3xl flex flex-col lg:flex-row items-center justify-center md:justify-around">
        {/* Destination div */}
        <div className="text-center lg:text-start">
          <label htmlFor="#">Destination</label>
          <div className="w-48 bg-white flex items-center border py-1 px-2 rounded-md gap-2">
            {/* icon */}
            <HiHomeModern />
            <select
              className="outline-none bg-white w-full"
              onChange={handleCountryChange}
              value={stateCity}
            >
              <option value="" className="bg-white">
                Select City
              </option>
              {Array.from(new Set(data2.map((item) => item.city))).map(
                (city, index) => (
                  <option className="bg-white" key={index} value={city}>
                    {city}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Cheque in date */}
        <div className="text-center lg:text-start">
          <label htmlFor="#">Check in</label>
          <div className="px-2 border rounded-md bg-white">
            <input
              className="outline-none  py-[1px] "
              type="date"
              onChange={handleDatechequein}
              value={stateDatein}
            />
          </div>
        </div>

        {/* Cheque out date */}
        <div className="text-center lg:text-start">
          <label htmlFor="#">Cheque Out</label>
          <div className="px-2 py-[1px]  border rounded-md bg-white">
            <input
              className="outline-none"
              type="date"
              onChange={handleDatechequeout}
              value={stateDateout}
            />
          </div>
        </div>

        {/* two people dropdown */}
        <div className="text-center lg:text-start">
          <label htmlFor="#">People</label>
          <div className="w-56 flex px-2 py-1 border rounded-md gap-2 bg-white items-center">
            {/* icon */}
            <HiHomeModern />
            <select
              className="outline-none w-full bg-white"
              onChange={hanldeTwoPeopleRoomsChange}
              value={statetwopeople}
            >
              <option value="">Select people room</option>
              {Array.from(
                new Set(data2.map((item) => item.twoPeopleRooms))
              ).map((room, index) => (
                <option key={index} value={room}>
                  {room}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search button */}
        <div>
          <button
            className="cursor-pointer hover:bg-opacity-80 bg-orange-500 text-white px-5 py-2 rounded-md w-fit flex items-center justify-between gap-2"
            onClick={handleSearch}
          >
            Search Hotels
          </button>
        </div>
      </div>

      {/* path */}
      <div>
        <Breadcrumb />
      </div>

      {/* filter and cards */}

      <div className="flex-1 flex gap-3 flex-wrap justify-center md:justify-start">
        <div className="filter w-80">
          <div>
            <Mapcomponent w="w-80" h="h-48" rounded="lg" />
          </div>
          <div className="mt-2 border rounded-lg ">
            <h2 className="text-md py-2 font-[700] border-b px-2">
              Filter by Rating
            </h2>
            {[1, 2, 3, 4, 5].map((rating) => (
              <Ratingcheckbox
                key={rating}
                rating={rating}
                checked={selectedRatings.includes(rating.toString())}
                onChange={handleRatingChange}
              />
            ))}
          </div>

          <div className="mt-2 border rounded-lg ">
            <h2 className="text-md py-2 font-[700] border-b px-2">
              Filter by City
            </h2>
            {Array.from(new Set(data2.map((item) => item.city))).map((city) => (
              <Citycheckbox
                key={city}
                city={city}
                checked={selectedCities.includes(city)}
                onChange={handleCityChange}
              />
            ))}
          </div>

          {/* Names filter  */}
          <div className="mt-2 border rounded-lg ">
            <h2 className="text-md py-2 font-[700] border-b px-2">
              Filter by Name
            </h2>
            {Array.from(new Set(data2.map((item) => item.name))).map((name) => (
              <Namecheckbox
                key={name}
                name={name}
                checked={setselectedNames.includes(name)}
                onChange={handleNameChange}
              />
            ))}
          </div>
          {/* Reviews filter */}
          <div className="mt-2 border rounded-lg ">
            <h2 className="text-md py-2 font-[700] border-b px-2">
              Filter by Reviews
            </h2>
            {Array.from(new Set(data2.map((item) => item.reviews))).map(
              (review) => (
                <Reviewcheckbox
                  key={review}
                  review={review}
                  checked={selectedReviews.includes(review.toString())}
                  onChange={handleReviewChange}
                />
              )
            )}
          </div>
        </div>

        {/* cards details shown here */}
        <div className="card flex-1">
          {check
            ? searchData.map((item, index) => {
                return (
                  <ResultCard
                    name={item.name}
                    img={item.img}
                    rating={item.rating}
                    star={item.star}
                    description={item.description}
                    distance={item.distance}
                    city={item.city}
                    reviews={item.reviews}
                  />
                );
              })
            : filteredResults.map((item, index) => (
                <ResultCard
                  name={item.name}
                  img={item.img}
                  rating={item.rating}
                  star={item.star}
                  description={item.description}
                  distance={item.distance}
                  city={item.city}
                  reviews={item.reviews}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Maincomponent;

import React from "react";
import CountryCard from "./countryCard";

const CountriesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 py-5">
      <div>
        <CountryCard name={"Indonesia"} img="url('/country (1).jpg')" />
      </div>
      <div className="grid grid-rows-2 gap-5">
        <CountryCard name={"Indonesia"} img="url('/country (2).jpg')" />
        <CountryCard name={"Indonesia"} img="url('/country (3).jpg')" />
      </div>
    </div>
  );
};

export default CountriesGrid;

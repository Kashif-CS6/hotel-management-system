"use client";
import React, { useEffect, useState } from "react";
import SearchFilters from "./searchFilters";
import ResultsList from "./resultsList";

const SearchPage = () => {
  const [ratingFilters, setRatingFilters] = useState(null);

  useEffect(() => {
    console.log(ratingFilters);
  }, [ratingFilters]);
  return (
    <div className="grid grid-cols-4 gap-5 py-5">
      <div className="col-span-1">
        <SearchFilters
          setRatingFilters={setRatingFilters}
          ratingFilters={ratingFilters}
        />
      </div>
      <div className="col-span-3">
        <ResultsList ratingFilter={ratingFilters} />
      </div>
    </div>
  );
};

export default SearchPage;

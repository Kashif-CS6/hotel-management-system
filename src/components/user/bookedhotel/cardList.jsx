"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "@/components/admin/dashboard/card";

const CardList = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const cardsPerPage = 8;
  const pagesVisited = pageNumber * cardsPerPage;

  // Dummy data for demonstration
  const data = Array.from({ length: 20 }, (_, i) => i + 1);

  const displayCards = data
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((cardData) => {
      return <Card totalheight="17rem" key={cardData} />;
    });

  const pageCount = Math.ceil(data.length / cardsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="flex justify-center gap-8 flex-wrap">{displayCards}</div>
      <div className="mt-4 flex justify-center">
        <ReactPaginate
          className="flex mt-8 gap-2 items-center text-md font-[500]"
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousLinkClassName={
            "pagination__link text-blue-500 text-md font-[600]"
          }
          nextLinkClassName={
            "pagination__link text-blue-500 text-md font-[600]"
          }
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active text-orange-500"}
        />
      </div>
    </div>
  );
};

export default CardList;

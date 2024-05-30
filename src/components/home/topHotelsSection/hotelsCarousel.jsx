"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotelCard from "./hotelCard";
const HotelsCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 20, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  const hotels = [
    {
      name: "Hotel 1 Ibezza Point Suites Hotel",
      rating: 4,
      price: 100,
      img: "url('/hotel (1).jpg')",
    },
    {
      name: "Hotel 2",
      rating: 4,
      price: 100,
      img: "url('/hotel (2).jpg')",
    },
    {
      name: "Hotel 12",
      rating: 4,
      price: 100,
      img: "url('/hotel (3).jpg')",
    },
    {
      name: "Hotel 3",
      rating: 5,
      price: 100,
      img: "url('/hotel (4).jpg')",
    },
    {
      name: "Hotel 4",
      rating: 4,
      price: 100,
      img: "url('/hotel (5).jpg')",
    },
    {
      name: "Hotel 5",
      rating: 4,
      price: 100,
      img: "url('/hotel (6).jpg')",
    },
    {
      name: "Hotel 6",
      rating: 5,
      price: 100,
      img: "url('/hotel (7).jpg')",
    },
    {
      name: "Hotel 7",
      rating: 4,
      price: 100,
      img: "url('/hotel (8).jpg')",
    },
    {
      name: "Hotel 8",
      rating: 5,
      price: 100,
      img: "url('/hotel (9).jpg')",
    },
    {
      name: "Hotel 9",
      rating: 5,
      price: 100,
      img: "url('/hotel (10).jpg')",
    },
  ];
  return (
    <div>
      {" "}
      <Carousel
        // draggable={false}
        responsive={responsive}
        // showDots={true}
        // infinite={true}
        partialVisible
        // ssr={true}
        itemClass="px-2"
        // centerMode
      >
        {hotels.map((item, index) => (
          <HotelCard
            key={index}
            name={item.name}
            rating={item.rating}
            price={item.price}
            index={index}
            img={item.img}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HotelsCarousel;

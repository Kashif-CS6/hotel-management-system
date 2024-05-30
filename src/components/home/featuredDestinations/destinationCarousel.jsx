"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import HotelCard from "../topHotelsSection/hotelCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DestinationCard from "./destinationCard";

const DestinationCarousel = () => {
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
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        effect={"coverflow"}
        centeredSlides={true}
        grabCursor={true}
        loop={false}
        // slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 2,
          stretch: 5,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        pagination={false}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {hotels.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <DestinationCard img={item.img} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationCarousel;

import React from "react";
import ResultCard from "./resultCard";
const hotels = [
  {
    name: "Grand View Hotel",
    img: "url('/destinations (1).jpg')",
    rating: 8.5,
    star: 5,
    description:
      "Experience the breathtaking views of the city from Grand View Hotel. Relax in our luxurious rooms and enjoy top-notch amenities.",
    distance: 2.5,
    city: "Islamabad",
    reviews: 250,
    checkinDate: "2024-03-01",
    checkoutDate: "2024-03-05",
    twoPeopleRooms: 1,
  },
  {
    name: "Cozy Corner Guesthouse",
    img: "url('/destinations (1).jpg')",
    rating: 4.8,
    star: 4,
    description:
      "A charming, family-run guesthouse offering comfortable accommodations and a warm atmosphere in the heart of the city.",
    distance: 1.0,
    city: "Rawalpindi",
    reviews: 120,
    checkinDate: "2024-03-02",
    checkoutDate: "2024-03-06",
    twoPeopleRooms: 2,
  },
  {
    name: "Modern City Suites",
    img: "url('/destinations (1).jpg')",
    rating: 9.2,
    star: 1,
    description:
      "Modern, stylish apartments equipped with all the amenities you need for a comfortable and convenient stay.",
    distance: 0.8,
    city: "Peshawar",
    reviews: 480,
    checkinDate: "2024-03-03",
    checkoutDate: "2024-03-07",
    twoPeopleRooms: 1,
  },
  {
    name: "Green Haven Boutique Hotel",
    img: "url('/destinations (1).jpg')",
    rating: 4.3,
    star: 4,
    description:
      "A peaceful oasis in the city, surrounded by lush greenery. Perfect for nature lovers and relaxation seekers.",
    distance: 4.0,
    city: "Islamabad",
    reviews: 80,
    checkinDate: "2024-03-04",
    checkoutDate: "2024-03-08",
    twoPeopleRooms: 2,
  },
  {
    name: "Historical Palace Hotel",
    img: "url('/destinations (1).jpg')",
    rating: 8.8,
    star: 2,
    description:
      "Immerse yourself in history at this beautifully restored palace, offering luxurious accommodations and unique experiences.",
    distance: 3.2,
    city: "Lahore",
    reviews: 350,
    checkinDate: "2024-03-05",
    checkoutDate: "2024-03-09",
    twoPeopleRooms: 1,
  },
  {
    name: "Budget Inn",
    img: "url('/destinations (1).jpg')",
    rating: 3.7,
    star: 3,
    description:
      "A basic and affordable option for budget-conscious travelers in a convenient location.",
    distance: 1.5,
    city: "Islamabad",
    reviews: 600,
    checkinDate: "2024-03-06",
    checkoutDate: "2024-03-10",
    twoPeopleRooms: 2,
  },
  {
    name: "The Family Lodge",
    img: "url('/destinations (1).jpg')",
    rating: 4.5,
    star: 4,
    description:
      "Spacious and comfortable accommodations perfect for families, with play areas and amenities for children.",
    distance: 5.0,
    city: "Rawalpindi",
    reviews: 180,
    checkinDate: "2024-03-07",
    checkoutDate: "2024-03-11",
    twoPeopleRooms: 1,
  },
  {
    name: "Riverside Retreat",
    img: "url('/destinations (1).jpg')",
    rating: 4.2,
    star: 2,
    description:
      "Relax and enjoy the scenic river views from this peaceful retreat, offering activities like kayaking and fishing.",
    distance: 6.0,
    city: "Lahore",
    reviews: 150,
    checkinDate: "2024-03-08",
    checkoutDate: "2024-03-12",
    twoPeopleRooms: 2,
  },
  {
    name: "Luxury Spa Hotel",
    img: "url('/destinations (1).jpg')",
    rating: 9.7,
    star: 1,
    description:
      "Indulge in ultimate pampering at this luxurious spa hotel, offering world-class treatments and amenities.",
    distance: 0.5,
    city: "Peshawar",
    reviews: 700,
    checkinDate: "2024-03-09",
    checkoutDate: "2024-03-13",
    twoPeopleRooms: 1,
  },
  {
    name: "Eco-Friendly B&B",
    img: "url('/destinations (1).jpg')",
    rating: 4.9,
    star: 5,
    description:
      "A sustainable and eco-friendly option offering comfortable accommodations and promoting environmental awareness.",
    distance: 2.0,
    city: "Attock",
    reviews: 220,
    checkinDate: "2024-03-10",
    checkoutDate: "2024-03-14",
    twoPeopleRooms: 2,
  },
];

const ResultsList = ({ ratingFilter }) => {
  return (
    <div className="space-y-3">
      {hotels
        .filter((hotel) => (ratingFilter ? hotel.star == ratingFilter : true))
        .map((hotel, index) => {
          console.log({...hotel});
          return <ResultCard key={index} {...hotel} />;
        })}
    </div>
  );
};

export default ResultsList;

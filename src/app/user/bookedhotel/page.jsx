import React from "react";
import CardList from "@/components/user/bookedhotel/cardList";

const page = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold font-serif mb-6 ">Hotels Booked History</h1>
      <CardList />
    </div>
  );
};

export default page;

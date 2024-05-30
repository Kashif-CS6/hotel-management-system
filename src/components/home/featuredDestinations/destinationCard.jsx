import React from "react";

const DestinationCard = ({ isActive, img }) => {
  return (
    <div
      className={
        isActive ? "h-96 w-96 aspect-square" : "h-96 w-96 aspect-square"
      }
    >
      <div
        style={{
          backgroundImage: img,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-full rounded-2xl overflow-hidden"
      ></div>
    </div>
  );
};

export default DestinationCard;

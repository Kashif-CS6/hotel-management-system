import React from "react";
import { PiLeafFill } from "react-icons/pi";
import { PiLeafLight } from "react-icons/pi";

const SustainabilityCard = ({ level }) => {
  return (
    <div className="flex items-center gap-1 bg-green-200 px-2 rounded-sm py-0.5 text-green-600 text-xs">
      {Array.from({ length: level }, (_, i) => (
        <PiLeafFill key={i} />
      ))}
      {Array.from({ length: 3-level }, (_, i) => (
        <PiLeafLight key={i} />
      ))}

      <p>Travel Sustainable Level {level}</p>
    </div>
  );
};

export default SustainabilityCard;

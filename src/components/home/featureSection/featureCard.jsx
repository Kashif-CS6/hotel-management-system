import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="px-5">
      <div className="flex items-center gap-3 pb-3">
        <div className="text-orange-500">{icon}</div>
        <div className="font-bold text-sm"> {title}</div>
      </div>
      <p className="text-sm md:pr-10">{description}</p>
    </div>
  );
};

export default FeatureCard;

import React from "react";

const Circularbar = ({ percentage }) => {
  const radius = 50;
  const strokeWidth = 16;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className="relative block transform rotate-90"
    >
      <circle
        stroke="#edf2f7"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#3182ce"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset: offset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-180 ${radius} ${radius})`}
      />
    </svg>
  );
};

export default Circularbar;

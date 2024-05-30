import React from "react";

const Date = ({ name }) => {
  return (
    <div>
      <input
        name={name}
        type="date"
        className=" appearance-none text-xs bg-white text-gray-500 rounded py-2 px-3 focus:outline-none focus:bg-white"
      />
    </div>
  );
};

export default Date;

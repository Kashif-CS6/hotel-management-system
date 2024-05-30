import React from "react";
import { FaHotel } from "react-icons/fa6";
const Selection = ({ placeholder, name }) => {
  return (
    <div className="rounded-md flex text-xs items-center gap-2 text-gray-500 py-2.5 px-4 bg-white">
      <div className="">
        <FaHotel />
      </div>
      <select
        name={name}
        id=""
        defaultValue={"select"}
        className="appearance-none bg-transparent outline-none w-full"
      >
        <option value="select">{placeholder}</option>
        <option value="h1">H1</option>
        <option value="">H2</option>
        <option value="">H3</option>
        <option value="">H4</option>
        <option value="">H5</option>
        <option value="">H6</option>
      </select>
    </div>
  );
};

export default Selection;

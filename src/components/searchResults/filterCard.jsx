import React, { useEffect, useState } from "react";

const FilterCard = ({ value, name, setFilters, setIsChecked, isChecked }) => {
  console.log(`By default value of ${isChecked}`);
  const handleInputChange = (event) => {
    if (event.target.checked) {
      console.log(`Checkbox with value ${value} is checked.`);
      setFilters(value);
      setIsChecked(value);
    }
  };
  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);
  return (
    <li className="space-x-2 py-1">
      <input
        type="checkbox"
        name="checkbox"
        checked={isChecked === value}
        onChange={handleInputChange}
        // onChange={() => setFilters([value])}
      />
      <label htmlFor="checkbox" className="text-sm">
        {name}
      </label>
    </li>
  );
};

export default FilterCard;

import React from "react";

const Citycheckbox = ({ city, checked, onChange }) => {
  return (
    <div>
      <label className="flex gap-2 px-2 my-2 text-md">
        <input
          type="checkbox"
          value={city}
          checked={checked}
          onChange={onChange}
        />
        {city}
      </label>
    </div>
  );
};

export default Citycheckbox;

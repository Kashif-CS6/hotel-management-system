import React from "react";

const Ratingcheckbox = ({ rating, checked, onChange }) => {
  return (
    <div>
      <label className="flex gap-2 px-2 my-2 text-md">
        <input
          type="checkbox"
          value={rating}
          checked={checked}
          onChange={onChange}
        />
        {rating} Star
      </label>
    </div>
  );
};

export default Ratingcheckbox;

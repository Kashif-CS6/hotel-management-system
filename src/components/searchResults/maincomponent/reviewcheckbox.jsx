import React from "react";

const Reviewcheckbox = ({ review, checked, onChange }) => {
  return (
    <div>
      <label className="flex px-2 text-md gap-2 my-2">
        <input
          type="checkbox"
          value={review}
          checked={checked}
          onChange={onChange}
        />
        {review}
      </label>
    </div>
  );
};

export default Reviewcheckbox;

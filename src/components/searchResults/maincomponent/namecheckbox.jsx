import React from "react";

const Namecheckbox = ({ name, checked, onChange }) => {
  return (
    <div>
      <label className="flex gap-2 px-2 my-2 text-md">
        <input
          type="checkbox"
          value={name}
          checked={checked}
          onChange={onChange}
        />
        {name}
      </label>
    </div>
  );
};

export default Namecheckbox;

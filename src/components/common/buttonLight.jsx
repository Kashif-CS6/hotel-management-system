import React from "react";

const ButtonLight = ({ children }) => {
  return (
    <div className="bg-white hover:bg-opacity-80 cursor-pointer text-orange-500 border border-orange-500 px-5 py-2 rounded-md w-fit flex items-center gap-1">
      {children}
    </div>
  );
};

export default ButtonLight;

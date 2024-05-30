import React from "react";

const Button = ({ children }) => {
  return (
    <div className="cursor-pointer hover:bg-opacity-80 bg-orange-500 text-white px-5 py-2 rounded-md w-fit flex items-center justify-between gap-2">
      {children}
    </div>
  );
};

export default Button;

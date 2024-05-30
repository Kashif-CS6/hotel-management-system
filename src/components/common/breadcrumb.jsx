import React from "react";
import { FaChevronRight } from "react-icons/fa6";
const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-1 py-5">
      <p className="text-xs">Home</p>
      <div className="text-xs">
        <FaChevronRight />
      </div>

      <p className="text-xs">Current Page</p>
    </div>
  );
};

export default Breadcrumb;

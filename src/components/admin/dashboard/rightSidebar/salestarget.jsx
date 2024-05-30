import { FaChevronDown } from "react-icons/fa";
import Circularbar from "./circularBar/circularbar";
const SalesTarget = () => {
  return (
    <div className="mt-2 py-3 border w-80 md:w-[22rem] h-32  md:h-[10.2rem] mx-auto rounded-md shadow-sm bg-white shadow-[gray] px-2">
      {/* top container */}
      <div className="flex justify-between items-center pt-1">
        <div className="flex flex-col gap-1">
          <h1 className="text-xs md:text-sm font-[700]">Sales Target</h1>
          <p className="text-xs md:text-sm text-[gray]">
            This your sales analytic
          </p>
        </div>
        <button className="flex items-center justify-center gap-1 py-1 px-2 border border-gray-300 rounded-md bg-white text-sm text-[gray]">
          <p>Year</p>
          <FaChevronDown />
        </button>
      </div>
      {/* end top container */}
      <div className="flex items-center justify-between h-14 my-2 md:my-4">
        <div>
          <h1 className="flex text-md font-[600] items-center">
            340
            <p className="text-[10px] md:text-xs font-[400] text-[gray]">
              /400 Units
            </p>
          </h1>
          <p className="text-xs text-[gray]">Made this year</p>
        </div>
        {/* circular bar */}
        <div className="mr-[-22px] ">
          <Circularbar percentage={(340 / 400) * 100} />
        </div>
      </div>
    </div>
  );
};

export default SalesTarget;

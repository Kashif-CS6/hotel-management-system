import { EyeOffIcon } from "lucide-react";
import { BsFillCameraFill } from "react-icons/bs";

const SelectData = () => {
  return (
    <div className="border py-3  w-80 md:w-[22rem] h-60 md:h-72 mx-auto rounded-md shadow-sm bg-white shadow-[gray] px-2">
      {/* top section */}
      <div className="flex justify-between items-center pb-1 mb-2 ">
        <div>
          <h1 className="text-xs md:text-sm font-[700]">Sales Data</h1>
          <p className="text-xs md:text-sm text-[gray]">This your sales analytic</p>
        </div>
        <button className="flex items-center justify-center gap-1 py-1 px-2 border border-gray-300 rounded-md bg-white text-sm text-[gray]">
          Manage
        </button>
      </div>
      {/* total balance */}
      <div className="text-xs  bg-slate-300 px-3  rounded-md py-2 md:py-5 ">
        <div className="flex items-center gap-2">
          <BsFillCameraFill />
          <p className="text-[gray] md:text-sm">Total balance</p>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-xs font-[600]">$337.614,28</h1>
          <EyeOffIcon
            size={15}
            className="text-[gray] text-xs cursor-pointer"
          />
        </div>
      </div>
      {/* progress report */}
      <div className="">
        {/* first */}
        <div className="flex items-center text-xs md:text-sm justify-between mt-6">
          <p>Active</p>
          <p>60%</p>

          <div class="w-20 h-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="h-4 w-[60%] bg-blue-600 rounded-full dark:bg-blue-500"></div>
          </div>
        </div>
        {/* second */}
        <div className="flex items-center text-xs md:text-sm justify-between mt-4">
          <p>Spending</p>
          <p>15%</p>

          <div class="w-20  h-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="h-4 w-[15%] bg-orange-600 rounded-full dark:bg-orange-500"></div>
          </div>
        </div>
        {/* third */}
        <div className="flex items-center text-xs md:text-sm justify-between mt-4">
          <p>Saving</p>
          <p>25%</p>

          <div class="w-20  h-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="h-4 w-[25%] bg-green-600 rounded-full dark:bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectData;

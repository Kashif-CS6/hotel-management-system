import { FaChevronDown } from "react-icons/fa";
import { GiFastArrow } from "react-icons/gi";
import Linechart from "./linechart";
import Barchart from "./barchart";
import { BsThreeDots } from "react-icons/bs";
const Charts = () => {
  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {/* line chart data */}
      <div className="mt-2 py-3 border w-80 md:w-[27rem] h-80 md:h-96 rounded-md shadow-sm bg-white shadow-[gray] px-5">
        {/* top container */}
        <div className="flex justify-between items-center pt-1">
          <div className="flex flex-col gap-1">
            <h1 className="text-xs md:text-sm font-[700]">Unit Analytics</h1>
            <p className="text-xs md:text-sm text-[gray]">
              This your unit analytic
            </p>
          </div>
          {/* buttons */}
          <div className="flex items-center gap-1">
            <button className="flex items-center justify-center gap-1 py-1 px-2 border border-gray-300 rounded-md bg-white text-sm text-[gray]">
              <p>Current</p>
              <FaChevronDown />
            </button>
            <button className="py-1 px-2 border border-gray-300 rounded-md bg-white text-md text-[gray]">
              <BsThreeDots size={20} />
            </button>
          </div>
        </div>
        {/* house records */}
        <div className="flex items-center gap-16 mt-6 mb-6">
          {/* sold houses */}
          <div>
            <div className="flex items-center gap-1">
              <GiFastArrow size={10} className="text-blue-600" />{" "}
              <p className="text-[11px] text-[gray] ">Total house sold</p>
            </div>
            <h1 className="text-xs font-[600]">
              80 <span className="text-[gray] font-[400]">/350</span>
            </h1>
          </div>
          {/* rent houses */}
          <div>
            <div className="flex items-center gap-1">
              <GiFastArrow size={10} className="text-green-600" />{" "}
              <p className="text-[11px] text-[gray]">Total house rented</p>
            </div>
            <h1 className="text-xs font-[600]">
              24 <span className="text-[gray] font-[400]">/50</span>
            </h1>
          </div>
          {/* rented house ended */}
        </div>
        {/* house record div ended here */}
        <div>
          <Linechart />
        </div>
      </div>
      {/* complete line chart ended here */}

      {/* bar chart data */}
      <div className="my-2 py-3 border w-80 md:w-[27rem] h-80 md:h-96 rounded-md shadow-sm bg-white shadow-[gray] px-5">
        {/* top container */}
        <div className="flex justify-between items-center pt-1">
          <div className="flex flex-col gap-1">
            <h1 className="text-xs md:text-sm font-[700]">Client Overview</h1>
            <p className="text-xs md:text-sm text-[gray]">
              Analysis of client data
            </p>
          </div>
          {/* buttons */}
          <div className="flex items-center gap-1">
            <button className="flex items-center justify-center gap-1 py-1 px-2 border border-gray-300 rounded-md bg-white text-sm text-[gray]">
              <p>Current</p>
              <FaChevronDown />
            </button>
            <button className="py-1 px-2 border border-gray-300 rounded-md bg-white text-md text-[gray]">
              <BsThreeDots size={20} />
            </button>
          </div>
        </div>
        {/* client div */}
        <div className="flex bg-[#f4f1f1] rounded-md p-1 md:p-2 my-1 md:my-2  gap-1">
          <GiFastArrow size={15} className="text-blue-600" />
          <p className="text-xs md:text-sm text-[gray]">
            This client will increase when the clients deal with agent. So agent
            can register the client data.
          </p>
        </div>
        {/* client records */}
        <div className="flex items-center justify-between py-3">
          {/* total client houses */}
          <div>
            <div className="flex items-center gap-1">
              <GiFastArrow size={10} className="text-blue-600" />{" "}
              <p className="text-[10px] md:text-xs text-[gray] ">
                Total Clients
              </p>
            </div>
            <h1 className="text-xs font-[600]">840</h1>
          </div>
          {/* Deal clients */}
          <div>
            <div className="flex items-center gap-1">
              <GiFastArrow size={10} className="text-green-600" />{" "}
              <p className="text-[10px] md:text-xs text-[gray] ">
                Deal clients
              </p>
            </div>
            <h1 className="text-xs font-[600]">340</h1>
          </div>
          {/* Cancel clients */}
          <div>
            <div className="flex items-center gap-1">
              <GiFastArrow size={10} className="text-orange-600" />{" "}
              <p className="text-[10px] md:text-xs text-[gray] ">
                Cancel clients
              </p>
            </div>
            <h1 className="text-xs font-[600]">500</h1>
          </div>
          {/* rented house ended */}
        </div>
        <div className="my-3">
          <Barchart />
        </div>
      </div>
    </div>
  );
};

export default Charts;

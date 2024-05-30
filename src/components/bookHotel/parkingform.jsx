"use client";

import { LuParkingCircle } from "react-icons/lu";
import { RiBusLine } from "react-icons/ri";
import { FaMotorcycle } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { FaWheelchair } from "react-icons/fa";
import { ChevronUpIcon } from "lucide-react";
import { FaWineBottle } from "react-icons/fa";
import { SiDatadog } from "react-icons/si";
import { useState } from "react";

const Parkingform = ({ Controller, control, register, errors }) => {
  //

  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in "yyyy-mm-dd" format
  const [cdate, setcdate] = useState(currentDate);

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleOptionChange2 = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className=" border md:mx-auto p-5 my-2">
      {/* form 2 started here */}
      <div>
        <div>
          <h1 className="text-2xl font-[700] text-center md:text-start">
            Add to your stay
          </h1>
        </div>
        <div className="border rounded-lg px-2 mt-3 pb-5">
          {/* top tag */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between mt-4">
            {/* left side */}
            <div className="flex items-center gap-2">
              <input
                className="w-6 h-6"
                type="checkbox"
                value={20}
                name="parking"
                id=""
                onChange={(e) => {
                  console.log(
                    `${e.target.name} has charges of ${e.target.value}`
                  );
                }}
              />
              {/* parking sign */}
              <div className="bg-slate-100 py-2 px-1 w-16 flex justify-center">
                <LuParkingCircle className="text-[#4b4bf7] text-3xl" />
              </div>
              <div>
                <h1 className="flex text-md font-[600]">Car park </h1>
                <p className="text-sm text-[gray]">The choice of families</p>
              </div>
            </div>
            {/* right side */}
            <div className="text-sm text-[gray]">
              <p>
                from{""}
                <span className="text-lg text-[#4b4bf7] font-[700]">$20</span>
              </p>
              <p>/night</p>
            </div>
          </div>
          {/* Radio buttons for choices started here */}

          {/* for vehicle */}
          <div className="mx-7 mt-8 md:mt-4">
            <p className="text-md text-blue-500 md:text-[gray] mb-1 text-center md:text-start">
              Vehicle Type
            </p>
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <div className="border w-40 h-36 rounded-md">
                <input
                  className="w-6 h-6 mt-1 ml-1"
                  type="radio"
                  value="Bike"
                  checked={selectedOption === "Bike"}
                  onChange={handleOptionChange}
                />
                <div className="flex flex-col justify-center items-center gap-1">
                  <FaMotorcycle size={30} />
                  <h1 className="text-lg font-[600]">Motor Cycle</h1>
                  <h1 className="flex items-center text-[#4b4bf7]  text-md font-[700]">
                    $20 <p className="text-sm text-[gray] font-[400]">/night</p>
                  </h1>
                </div>
              </div>
              {/* second option */}
              <div className="border w-40 h-36 rounded-md">
                <input
                  className="w-6 h-6 mt-1 ml-1"
                  type="radio"
                  value="Car"
                  checked={selectedOption === "Car"}
                  onChange={handleOptionChange}
                />
                <div className="flex flex-col justify-center items-center gap-1">
                  <FaCar size={30} />
                  <h1 className="text-lg font-[600]">Car</h1>
                  <h1 className="flex items-center text-[#4b4bf7]  text-md font-[700]">
                    $30 <p className="text-sm text-[gray] font-[400]">/night</p>
                  </h1>
                </div>
              </div>
              {/* third option */}
              <div className="border w-40 h-36 rounded-md">
                <input
                  className="w-6 h-6 mt-1 ml-1"
                  type="radio"
                  value="Bus"
                  checked={selectedOption === "Bus"}
                  onChange={handleOptionChange}
                />
                <div className="flex flex-col justify-center items-center gap-1">
                  <RiBusLine size={30} />
                  <h1 className="text-lg font-[600]">Bus</h1>
                  <h1 className="flex items-center text-md text-[#4b4bf7]  font-[700]">
                    $50 <p className="text-sm text-[gray] font-[400]">/night</p>
                  </h1>
                </div>
              </div>
              {/* ending of options */}
            </div>
            <div className="my-2">
              {errors.vehicleType && (
                <p className="text-red-500">{errors.vehicleType.message}</p>
              )}
            </div>
          </div>

          {/* for place type */}
          <div className="mx-7 mt-8 md:mt-4">
            <p className="text-md text-blue-500 md:text-[gray] mb-2 text-center md:text-start">
              Place Type
            </p>
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <div className="border w-40 h-36 rounded-md">
                <input
                  className="w-6 h-6 mt-1 ml-1"
                  type="radio"
                  value="Default"
                  checked={selectedOption2 === "Default"}
                  onChange={handleOptionChange2}
                />
                <div className="flex flex-col justify-center items-center gap-1">
                  <FaCar size={30} />
                  <h1 className="text-lg font-[600]">Default</h1>
                </div>
              </div>
              {/* second option */}
              <div className="border w-48 h-36 rounded-md">
                <input
                  className="w-6 h-6 mt-1 ml-1"
                  type="radio"
                  value="Disabled"
                  checked={selectedOption2 === "Disabled"}
                  onChange={handleOptionChange2}
                />
                <div className="flex flex-col justify-center items-center gap-1">
                  <FaWheelchair size={30} />
                  <h1 className="text-lg font-[600] text-center">
                    Disabled Parking Spot
                  </h1>
                </div>
              </div>

              {/* ending of options */}
            </div>
            <div className="my-2">
              {errors.placeType && (
                <p className="text-red-500">{errors.placeType.message}</p>
              )}
            </div>
          </div>
          {/* date section started */}
          <div className="ml-7 mt-4 flex flex-col md:flex-row items-center md:gap-4">
            {/* from */}
            <div className="w-60 md:w-6/12">
              <p className="my-2">From</p>
              <div className="border py-1 rounded-md">
                <input
                  className="w-full h-full px-2 py-1 outline-none"
                  type="date"
                  {...register("checkInDate", {
                    required: "Check in date is required",
                    min: {
                      value: currentDate,
                      message: `date must be equal to or greater than today ${currentDate}`,
                    },
                  })}
                  id=""
                  onChange={(e) => {
                    setcdate(e.target.value);
                  }}
                />
              </div>
              <div className="my-2">
                {errors.checkInDate && (
                  <p className="text-red-500 text-sm">
                    {errors.checkInDate.message}
                  </p>
                )}
              </div>
            </div>

            {/* to section */}
            <div className="w-60 md:w-6/12">
              <p className="my-2">To</p>
              <div className=" border py-1 rounded-md">
                <Controller
                  name="checkOutDate"
                  control={control}
                  rules={{
                    required: "Check-out date is required",
                    validate: {
                      checkDate: (value) => {
                        const checkInDate = new Date(
                          // control.fieldsRef.current.checkInDate.value
                          cdate
                        );
                        const checkOutDate = new Date(value);
                        return (
                          checkOutDate > checkInDate ||
                          "Check-out date must be greater than Check-in date"
                        );
                      },
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="date"
                      className="w-full h-full px-2 py-1 outline-none"
                      placeholder="mm-dd-yyyy"
                      min={currentDate}
                    />
                  )}
                />
              </div>
              {/* errors */}
              <div className="my-2">
                {errors.checkOutDate && (
                  <p className="text-red-500 text-sm">
                    {errors.checkOutDate.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* date section ended here */}
        </div>
        {/* wine check information */}

        <div className="border w-full flex flex-col md:flex-row items-center justify-between gap-2 py-1 rounded-lg my-4 px-2">
          <div className="flex items-center gap-2 py-1">
            <input
              type="checkbox"
              value="Drinks"
              name=""
              id=""
              onChange={(e) => {
                console.log(e.target.value);
              }}
              className="w-6 h-6"
            />

            <div className="flex items-center gap-2">
              {/* left */}
              <div className="bg-slate-100 py-2 px-1 w-16 flex justify-center">
                <FaWineBottle className="text-3xl" />
              </div>
              <div>
                <h1 className="text-md font-[600]">Drinks</h1>
                <p className="text-sm text-[gray]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-md text-blue-500 font-[600]">$50</h1>
            <p className="text-xs text-[gray] font-[600]">/piece</p>
          </div>
        </div>

        {/* pets information */}

        <div className="border w-full flex flex-col md:flex-row items-center justify-between gap-2 py-1 rounded-lg my-4 px-2">
          <div className="flex items-center gap-2 py-1">
            <input
              type="checkbox"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              name=""
              id=""
              value="Pets"
              className="w-6 h-6"
            />

            <div className="flex items-center gap-2">
              {/* left */}
              <div className="bg-slate-100 py-2 px-1 w-16 flex justify-center">
                <SiDatadog className="text-3xl" />
              </div>
              <div>
                <h1 className="text-md font-[600]">Stay of a pet</h1>
                <p className="text-sm text-[gray]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-md text-blue-500 font-[600]">$50</h1>
            <p className="text-xs text-[gray] font-[600]">/piece</p>
          </div>
        </div>

        {/* ended heree */}
      </div>
      {/* <input
        className="bg-blue-500 px-4 py-1 my-2 w-48 text-white"
        type="submit"
        value="Submit"
      /> */}
    </div>
  );
};

export default Parkingform;

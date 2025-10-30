"use client";

import React, { useState } from "react";
import Detailform from "./detailform";
import Parkingform from "./parkingform";
import Confirmation from "./confirmation";
import Reservationsummary from "./reservationsummary";
import { useForm, Controller } from "react-hook-form";

const Step = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [userfirstname, setuserfirstname] = useState("");
  const [userlastname, setuserlastname] = useState("");
  const [checkinDate, setcheckinDate] = useState(currentDate);
  const [checkoutDate, setcheckoutDate] = useState(currentDate);
  const [phonenumber, setphoneNumber] = useState("");
  const [emailnum, setemailNum] = useState("");
  const [park, setPark] = useState("Car");
  const [step, setStep] = useState(1);

  // use form methods
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    // You can do something with the form data here
    setuserfirstname(data.firstname);
    setuserlastname(data.lastname);
    setphoneNumber(data.phone);
    setemailNum(data.email);
    setcheckinDate(data.checkInDate);
    setcheckoutDate(data.checkOutDate);
    handleNext();
  };

  // handler of states started here

  const handleFname = (fname) => {
    console.log(fname.firstname);
    setuserfirstname(fname);
  };

  const handleLname = (lname) => {
    console.log(lname);
    setuserlastname(lname);
  };

  const handlePhone = (lname) => {
    console.log(lname);
    setphoneNumber(lname);
  };

  const handleEmail = (lname) => {
    console.log(lname);
    setemailNum(lname);
  };

  return (
    <div className="flex gap-2 flex-wrap px-2 items-center">
      <form
        className="md:w-8/12 mx-auto mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <div className="relative">
              <div className="flex mb-2">
                <div
                  className={`w-1/3 h-2 rounded-full ${
                    step >= 1 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`w-1/3 h-2 rounded-full ${
                    step >= 2 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`w-1/3 h-2 rounded-full ${
                    step >= 3 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              </div>
              <div className="absolute top-0 left-0 mt-4 ml-0 w-full flex justify-between">
                <div className="w-1/3 text-center text-xs text-gray-500">
                  Dates and Rooms
                </div>
                <div className="w-1/3 text-center text-xs text-gray-500">
                  Extras
                </div>
                <div className="w-1/3 text-center text-xs text-gray-500">
                  Payment
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Rooms and Dates</h2>
              <Detailform
                register={register}
                errors={errors}
                setFName={handleFname}
                setPhone={handlePhone}
                setEmail={handleEmail}
                setLName={handleLname}
              />
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Extras</h2>
              <Parkingform
                Controller={Controller}
                control={control}
                errors={errors}
                register={register}
              />
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
              <Confirmation
                FirstName={userfirstname}
                LastName={userlastname}
                Email={emailnum}
                Phone={phonenumber}
                CheckIn={checkinDate}
                CheckOut={checkoutDate}
              />
            </div>
          )}
        </div>
        <div className="flex justify-between gap-3">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            onClick={handlePrev}
            disabled={step === 1}
          >
            Previous
          </button>
          <input
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            // onClick={handleNext}
            disabled={step === 3}
            value="Next"
          />
        </div>
      </form>
      {/* side bar */}
      <div>
        <Reservationsummary />
      </div>
    </div>
  );
};

export default Step;

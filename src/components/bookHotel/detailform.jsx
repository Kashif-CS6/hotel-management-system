"use client";

import React from "react";
import { useForm } from "react-hook-form";

const Detailform = ({
  register,
  errors,
  setFName,
  setLName,
  setPhone,
  setEmail,
}) => {
  // use form methods

  return (
    <div className="w-96 md:w-auto p-5 border mx-auto my-2">
      <div className="w-full">
        {/* form 1 */}
        <div>
          <h1 className="text-md font-[900]">Enter your details</h1>
        </div>
        <div>
          {/* top div */}
          <div className="flex flex-col md:flex-row w-full  gap-2">
            <div className="flex flex-col w-6/12 mt-3">
              <label htmlFor="#">First Name</label>
              <div className="py-1 my-1 bg-white border px-2 rounded-sm w-80 md:w-auto">
                {" "}
                <input
                  placeholder="Enter your first name"
                  className="outline-none w-full"
                  type="text"
                  {...register("firstname", {
                    required: "First name is required!",
                    minLength: {
                      value: 2,
                      message: "Minimum length will be 2",
                    },
                    pattern: {
                      value: /^[A-Z][a-z]*$/,
                      message: "First latter must be upper case",
                    },
                  })}
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                />
              </div>
              {/* Error message */}
              <div className="my-2">
                <p className="text-xs text-red-500 ">
                  {errors.firstname?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-6/12 mt-3">
              <label htmlFor="#">Last Name</label>
              <div className="py-1 my-1 bg-white border px-2 rounded-sm w-80 md:w-auto">
                {" "}
                <input
                  placeholder="Enter your last name"
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
                  className="outline-none w-full text-[gray]"
                  type="text"
                  {...register("lastname", {
                    required: "Last name is required!",
                    minLength: {
                      value: 2,
                      message: "Minimum length will be 2",
                    },
                    pattern: {
                      value: /^[A-Z][a-z]*$/,
                      message: "First latter must be upper case",
                    },
                  })}
                />
              </div>
              {/* Error message */}
              <div className="my-2">
                <p className="text-xs text-red-500 ">
                  {errors.lastname?.message}
                </p>
              </div>
            </div>
          </div>

          {/* email and phone number div */}

          <div className="flex flex-col md:flex-row gap-2 mt-3">
            <div className="flex flex-col w-6/12">
              <label htmlFor="#">Email</label>
              <div className="py-1 my-1 bg-white border px-2 rounded-sm w-80 md:w-auto">
                {" "}
                <input
                  placeholder="e.g ali@gmail.com"
                  className="outline-none w-full"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email!",
                    },
                  })}
                />
              </div>
              {/* error message */}
              <div className="my-2">
                <p className="text-xs text-red-500 ">{errors.email?.message}</p>
              </div>
            </div>
            <div className="flex flex-col w-6/12">
              <label htmlFor="#">Phone Number</label>
              <div className="py-1 my-1 bg-white border px-2 rounded-sm w-80 md:w-auto">
                {" "}
                <input
                  placeholder="9233340505050"
                  className="outline-none w-full"
                  type="number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  {...register("phone", {
                    required: "phone number is required",
                    minLength: {
                      value: 11,
                      message: "Minimum length will be 11",
                    },
                    maxLength: {
                      value: 12,
                      message: "maximum number will be 12",
                    },
                    min: {
                      value: 0,
                      message: "Number will be start from Positive number",
                    },
                  })}
                />
              </div>
              {/* error message */}
              <div className="my-2">
                <p className="text-xs text-red-500 ">{errors.phone?.message}</p>
              </div>
            </div>
          </div>
        </div>
        {/* last two full */}
      </div>
    </div>
  );
};

export default Detailform;

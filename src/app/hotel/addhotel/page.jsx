"use client";
import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { FaParking, FaSmokingBan } from "react-icons/fa";
import { FaHeadphones, FaWifi } from "react-icons/fa6";
import { FiUploadCloud } from "react-icons/fi";
import {
  MdFamilyRestroom,
  MdFitnessCenter,
  MdFreeBreakfast,
} from "react-icons/md";
import { useRef, useState } from "react";
import { FcAddImage } from "react-icons/fc";
import Image from "next/image";
import { useForm } from "react-hook-form";

const page = () => {
  const inputRef = useRef(null);
  const inputTwoRef = useRef(null);
  const [imgurl, setimgurl] = useState("/hotel (4).jpg");
  const [imgname, setimgname] = useState("upload thumbnail");
  const [selectedImages, setSelectedImages] = useState([]);

  // use form methods
  const {
    register,
    handleSubmit,
    Controller,
    control,
    formState: { errors },
  } = useForm();

  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in "yyyy-mm-dd" format
  const [cdate, setcdate] = useState(currentDate);

  // multiple picture function
  const onSelectFile = (event) => {
    const selectFiles = event.target.files;
    const selectedFilesArray = Array.from(selectFiles);

    if (selectedFilesArray.length > 4) {
      alert("You can select a maximum of 4 images.");
      return;
    }

    const imageArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages(imageArray);
  };

  const handleImageClick = () => {
    inputTwoRef.current.click();
  };

  const handleImage2Click = () => {
    inputRef.current.click();
  };

  const handlethumbnailChange = (e) => {
    setimgname(e.target.files[0].name);
    setimgurl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="bg-gray-100">
      <form
        className="px-0 mx-2 md:mx-0 md:px-2"
        action=""
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="flex items-center py-2 justify-between">
          <div>
            <h1 className="text-md font-[600]">Hotel info</h1>
            <p className="text-sm font-[400] text-sky-900">
              Update hotel info here
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="bg-white border rounded-lg py-1 px-2">
              Cancel
            </button>
            <input
              type="submit"
              value="Save"
              className="bg-blue-700 text-white font-[500] border rounded-lg py-1 px-2"
            />
          </div>
        </div>
        {/* Name details */}
        <hr className="my-2 h-2" />
        <div className="my-2 flex flex-col md:flex-row justify-between w-full gap-1 md:gap-0 md:w-8/12 ">
          <h1 className="text-sm font-[500]  text-sky-900">Hotel name</h1>
          <div>
            <div className="py-1 w-full md:w-96 border rounded-md bg-white shadow">
              <input
                type="text"
                id=""
                {...register("hotelname", {
                  required: "Hotel name is required!",
                  minLength: {
                    value: 2,
                    message: "Minimum length will be 2",
                  },
                  pattern: {
                    value: /^[A-Z][a-z]*$/,
                    message: "First latter must be upper case",
                  },
                })}
                className="w-full outline-none px-2 border-none py-1"
              />
            </div>
            {/* Error message */}
            <div className="my-2">
              <p className="text-xs text-red-500 ">
                {errors.hotelname?.message}
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-3 h-2" />
        {/* Hotel location */}
        <div className="my-2 flex flex-col md:flex-row justify-between w-full gap-1 md:gap-0 md:w-8/12 ">
          <h1 className="text-sm font-[500]  text-sky-900">Hotel location</h1>
          <div>
            <div className="py-1 w-full  md:w-96 border rounded-md  bg-white shadow">
              <input
                type="address"
                {...register("location", {
                  required: "Location is required!",
                  minLength: {
                    value: 5,
                    message: "Minimum length will be 5",
                  },
                })}
                id=""
                className="w-full outline-none px-2 border-none py-1"
              />
            </div>

            {/* Error message */}
            <div className="my-2">
              <p className="text-xs text-red-500 ">
                {errors.location?.message}
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-3 h-2" />

        {/* Hotel discription */}
        <div className="my-2 flex flex-col md:flex-row justify-between h-auto md:h-32 w-full gap-1 md:gap-0 md:w-8/12 ">
          <h1 className="text-sm font-[500]  text-sky-900">
            Hotel Discription
          </h1>
          <div>
            <div className="py-1 md:h-24 w-full md:w-96 border rounded-md  bg-white shadow">
              <textarea
                className="w-full outline-none h-full px-2 border-none py-1"
                {...register("description", {
                  required: "Description is required!",
                  minLength: {
                    value: 10,
                    message: "Minimum length will be 10",
                  },
                })}
              ></textarea>
            </div>
            {/* Error message */}
            <div className="my-2">
              <p className="text-xs text-red-500 ">
                {errors.description?.message}
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-3 h-2" />
        {/* Hotel Thumbnail picture */}
        <div className="md:my-2 h-36 flex flex-col gap-1 md:gap-0 md:flex-row justify-between w-full md:w-8/12">
          <div>
            <h1 className="text-sm font-[500]  text-sky-900">
              Hotel Thumbnail
            </h1>
            <p className="text-xs text-blue-500">
              This will be display as thumbnail
            </p>
          </div>
          {/* Thumbnail section started here */}
          <div className="flex gap-3">
            <Image
              src={imgurl}
              width={500}
              height={500}
              className="w-16 h-16 md:w-20 md:h-20 rounded-[50%] bg-cover border border-blue-500"
            />
            <div className="w-full h-full">
              <div
                className="py-1 w-full md:w-60 border rounded-md  bg-white shadow flex flex-col gap-3 justify-center items-center h-auto md:h-28"
                onClick={handleImageClick}
              >
                <div className="w-8 h-8 rounded-[50%] bg-sky-100 flex justify-center items-center">
                  <FiUploadCloud className="text-blue-800" size={20} />
                </div>
                <p className="text-xs text-blue-500">{imgname}</p>
                <input
                  type="file"
                  id=""
                  ref={inputRef}
                  className="hidden"
                  onChange={handlethumbnailChange}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-3 h-2" />
        {/* Hotel other pictures */}
        <div className="my-2 h-auto md:h-36 flex flex-col gap-2 md:gap-0 md:flex-row justify-between w-full md:w-8/12">
          <div className="w-full">
            <h1 className="text-sm font-[500]  text-sky-900">Hotel Pictures</h1>
            <p className="text-xs text-blue-500">
              This will be display hotel pictures
            </p>
          </div>

          {/* other hotel picture div started here */}
          <div className="flex ">
            <div className="flex w-60  gap-4 flex-wrap">
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div
                      key={image}
                      className="flex flex-col flex-wrap rounded-md md:pl-5"
                    >
                      <Image
                        src={image}
                        className="h-16 w-16 object-cover rounded-md"
                        alt=""
                        height={100}
                        width={100}
                      />
                    </div>
                  );
                })}
            </div>

            {/* hotel section that hold record of both error and pictures input(files) */}
            <div className="w-full md:w-60 flex justify-end">
              <div
                onClick={handleImage2Click}
                className="py-1 w-52 md:w-60 border rounded-md  bg-white shadow flex flex-col gap-3 justify-center items-center"
              >
                <div className="w-8 h-8 rounded-[50%] bg-sky-100 flex justify-center items-center">
                  <FiUploadCloud className="text-blue-800" size={20} />
                </div>

                <p className="text-xs text-blue-600">
                  {selectedImages == 0 ? "no " : selectedImages.length} files
                  selected
                </p>
                <input
                  type="file"
                  id=""
                  max={4}
                  maxLength={4}
                  ref={inputTwoRef}
                  multiple
                  accept="image/png , image/jpeg, image/webp"
                  className="hidden"
                  onChange={onSelectFile}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-3 h-2" />
        {/* Offered Feasalities */}
        <div className="my-2 h-28 flex flex-col md:flex-row justify-between w-80 md:w-8/12">
          <h1 className="text-sm font-[500]  text-sky-900">
            Available Facilities
          </h1>
          <div className="flex items-center gap-4">
            {/* started */}
            <div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="Wifi" id="Wifi" value="Wifi" />
                <label
                  htmlFor="Wifi"
                  className="flex items-center gap-2 text-xs text-blue-500"
                >
                  <FaWifi className="text-blue-500" /> Free Wifi
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="parking"
                  id="parking"
                  value="parking"
                />
                <label
                  htmlFor="parking"
                  className="flex items-center gap-2 text-xs  text-blue-500"
                >
                  <FaParking className="text-blue-500" /> Free Parking
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="nonsmooking"
                  id="nonsmooking"
                  value="non-smooking"
                />
                <label
                  htmlFor="nonsmooking"
                  className="flex items-center gap-2 text-xs  text-blue-500"
                >
                  <FaSmokingBan className="text-blue-500" /> Non Smooking Rooms
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="247service"
                  id="247service"
                  value="24/7service"
                />
                <label
                  htmlFor="247service"
                  className="flex items-center gap-2 text-xs  text-blue-500"
                >
                  <FaHeadphones className="text-blue-500" /> 24/7 Services
                </label>
              </div>
            </div>
            {/* 2nd side started here */}
            <div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="FitnessCenter"
                  id="FitnessCenter"
                  value="FitnessCenter"
                />
                <label
                  htmlFor="FitnessCenter"
                  className="flex items-center gap-2 text-xs text-blue-500"
                >
                  <MdFitnessCenter className="text-blue-500" /> Fitness Center
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="familyrooms"
                  id="familyrooms"
                  value="familyrooms"
                />
                <label
                  htmlFor="familyrooms"
                  className="flex items-center gap-2 text-xs text-blue-500"
                >
                  <MdFamilyRestroom className="text-blue-500" /> Family Rooms
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="resturant"
                  id="resturant"
                  value="resturant"
                />
                <label
                  htmlFor="resturant"
                  className="flex items-center gap-2 text-xs text-blue-500"
                >
                  <BiRestaurant className="text-blue-500" /> Resturant
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="breakfast"
                  id="breakfast"
                  value="break fast"
                />
                <label
                  htmlFor="breakfast"
                  className="flex items-center gap-2 text-xs text-blue-500"
                >
                  <MdFreeBreakfast className="text-blue-500" /> Break Fast
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-3 h-2" />
        {/* check in date */}
        <div className="my-2 flex flex-col md:flex-row justify-between w-full gap-2 md:gap-0 md:w-8/12 ">
          <h1 className="text-sm font-[500]  text-sky-900">Check in Date</h1>
          <div>
            <div className="py-1 w-full md:w-96 border rounded-md bg-white shadow">
              <input
                type="date"
                {...register("checkindate", {
                  required: "Checkin date is required",
                  min: {
                    value: currentDate,
                    message: `date must be equal to or greater than today ${currentDate}`,
                  },
                })}
                id=""
                className="w-full outline-none px-2 border-none py-1"
                onChange={(e) => {
                  setcdate(e.target.value);
                }}
              />
            </div>
            {/* errors message */}
            <div className="my-2">
              <p className="text-red-500 text-xs">
                {errors.checkindate?.message}
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-3 h-2" />
        {/* check out date */}
        <div className="my-2 flex flex-col md:flex-row justify-between w-full gap-2 md:gap-0 md:w-8/12 ">
          <h1 className="text-sm font-[500]  text-sky-900">Check out Date</h1>
          <div>
            <div className="py-1 w-full md:w-96 border rounded-md bg-white shadow">
              <input
                type="date"
                min={currentDate}
                {...register("checkoutdate", {
                  required: "Checkin date is required",
                  min: {
                    value: currentDate,
                    message: `date must be equal to or greater than today ${currentDate}`,
                  },
                })}
                id=""
                className="w-full outline-none px-2 border-none py-1"
                onChange={(e) => {
                  setcdate(e.target.value);
                }}
              />
            </div>
            {/* errors message */}
            <div className="my-2">
              <p className="text-red-500 text-xs">
                {errors.checkoutdate?.message}
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-3 h-2" />

        <div className="my-2 flex flex-col md:flex-row gap-2 md:gap-0 justify-between w-full md:w-8/12 ">
          <h1 className="text-sm font-[500]  text-sky-900">Country</h1>
          {/* select coutry middle */}
          <div>
            <div>
              <div className="py-1 w-full md:w-96 border rounded-md bg-white shadow flex px-2 items-center gap-3">
                <Image
                  src="/country (1).jpg"
                  className="w-7 h-7 rounded-full"
                  width={500}
                  height={500}
                />
                <p>Country</p>
                <select
                  {...register("country", {
                    required: "Select your country",
                    min: {
                      value: 2,
                      message: "minimum length will be 2",
                    },
                  })}
                  className="flex-1 h-full bg-white"
                >
                  <option required></option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Japan">Japan</option>
                  <option value="America">America</option>
                </select>
              </div>
            </div>
            {/* error message */}
            <div className="my-2">
              <p className="text-red-500 text-xs">{errors.country?.message}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;

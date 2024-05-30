"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoIosStar, IoMdHeart } from "react-icons/io";
import { CiWifiOn } from "react-icons/ci";
import { IoBed, IoLocationOutline } from "react-icons/io5";
import { useState } from "react";

const Hotelcard = ({ apartments }) => {
  const [Heart, setHeart] = useState(true);
  return (
    <>
      {apartments.map((item, key) => {
        return (
          <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
            {/* left section of || image */}
            <div className="w-80 md:w-60 rounded-md">
              <Image
                className="w-full rounded-lg"
                src={item.imageurl}
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col  flex-1 gap-2">
              {/* top */}
              <div className="flex gap-3 md:gap-0 items-center flex-col md:flex-row md:justify-between">
                <p className="text-sm">
                  {item.appartmentstatus} apartment rental in {item.cityname}
                </p>
                <div className="flex items-center gap-2">
                  <button className="text-green-600 border text-xs rounded-md border-green-500 py-1 px-1">
                    Approve
                  </button>
                  <button className="text-red-600 border text-xs rounded-md border-red-500 py-1 px-1">
                    Reject
                  </button>
                  {Heart ? (
                    <CiHeart
                      onClick={() => {
                        setHeart(!Heart);
                      }}
                      fill="red"
                      className="cursor-pointer"
                      size={20}
                    />
                  ) : (
                    <IoMdHeart
                      onClick={() => {
                        setHeart(!Heart);
                      }}
                      size={20}
                      fill="red"
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <h1 className="md:text-sm">A Stylish Apt, {item.location}</h1>
              {/*review*/}
              <div className="flex flex-col md:flex-row items-center my-1 lg:my-3 gap-2">
                {/* starts */}
                <div className="flex gap-1 items-center">
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                </div>
                <p className="font-[600]">{item.rating}</p>
                <p>{item.reviews} reviews</p>
              </div>
              {/* end of card */}
              <div className="flex items-center flex-col md:flex-row justify-center md:justify-between sm:mt-1  lg:mt-2">
                {/* left */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 lg:gap-2">
                    <IoLocationOutline />
                    <p className="text-[9px] lg:text-md">{item.cityname}</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <IoBed />
                    <p className="text-[9px] lg:text-md">{item.beds} bed</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <CiWifiOn />
                    <p className="text-[9px] lg:text-md">Wifi</p>
                  </div>
                </div>
                {/* right */}
                <div className="flex items-center gap-2">
                  <h1 className="font-[700]">{item.price}</h1>
                  <p className="text-[gray]">AUD total</p>
                </div>
              </div>
            </div>
            <hr className="my-3" />
          </div>
        );
      })}
    </>
  );
};

export default Hotelcard;

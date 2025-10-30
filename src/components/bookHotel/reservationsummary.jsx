"use client";
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Reservationsummary = () => {
  const router = useRouter();
  return (
    <div className="md:w-96 mx-auto border rounded-lg py-3 my-2">
      <div className="px-2 py-2">
        <h1 className="text-md font-[700]">Reservation summary</h1>
        <div className="border rounded-lg my-2 py-2 px-2">
          {/* top */}
          <div className="flex items-center justify-between">
            {/* left */}
            <div>
              <p className="text-sm font-[600] text-[gray]">CHECK-IN</p>
              <p className="text-sm font-[600]">Sun,22 May 2022</p>
              <p className="text-xs font-[600]">from 16:00</p>
            </div>

            {/* right */}
            <div>
              <p className="text-sm font-[600] text-[gray]">CHECK-OUT</p>
              <p className="text-sm font-[600]">Sun,22 May 2022</p>
              <p className="text-xs font-[600]">from 11:00</p>
            </div>
          </div>
          {/* middle */}
          <div className="my-2 py-1">
            <p className="text-sm font-[600] text-[gray]">
              TOTAL LENGTH OF STAY:
            </p>
            <p className="flex items-center gap-3 text-sm font-[600] ">
              <span className="text-sm font-[600]">3</span> <BsCalendar2Date />
            </p>
          </div>

          {/* end */}
          <div className="my-2">
            <p className="text-sm font-[600] text-[gray]">YOU SELECTED:</p>
            <p className="text-sm font-[600]">
              King bed stylish Apartment with Loft style family rom
            </p>
            <Link className="text-sm font-[600] text-blue-600" href="#">
              Change your selection
            </Link>
          </div>
        </div>

        {/* bottom part */}
        <div className="mt-4">
          <h1 className="text-md font-[700]">Your price summary</h1>
          <div className="flex items-center justify-between my-1">
            <p className="text-sm font-[600]">Rooms and offer:</p>
            <p className="text-sm font-[600]">$625.43</p>
          </div>
          <div className="flex items-center justify-between my-1">
            <p className="text-sm font-[600]">8% VAT:</p>
            <p className="text-sm font-[600]">$50.03</p>
          </div>
          <div className="flex items-center justify-between my-1">
            <p className="text-sm font-[600]">City tax:</p>
            <p className="text-sm font-[600]">$16.44</p>
          </div>
          <div className="flex items-center justify-between my-1 mb-4">
            <p className="text-sm font-[700] text-green-500">Total Price</p>
            <p className="text-sm font-[700] text-green-500">$698.87</p>
          </div>

          <div className="bg-blue-700 font-[600] text-white py-2 rounded-md flex justify-center my-2">
            <button onClick={() => router.push("/")}>Request to Book</button>
          </div>
          <p className="text-xs text-[gray] text-center">
            we run on <span className="text-sm text-[gray]">TraWell Inc.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reservationsummary;

import React from "react";
import Image from "next/image";
const StatsSecImg = () => {
  return (
    <div className="mx-auto">
      <div className="flex relative ">
        <Image
          src={"/destinations (1).jpg"}
          width={150}
          height={150}
          className="rounded-md object-cover overflow-hidden aspect-square rotate-12 w-32 md:w-40 h-40"
        />
        <Image
          src={"/destinations (2).jpg"}
          width={100}
          height={100}
          className="rounded-md object-cover overflow-hidden aspect-square -rotate-12 w-24 md:w-32 h-32 mb-20 -ml-10 lg:-ml-5"
        />
        <Image
          src={"/destinations (3).jpg"}
          width={100}
          height={100}
          className="rounded-md object-cover overflow-hidden aspect-square w-20 md:w-24 h-24 mt-10 z-10"
        />
        <Image
          src={"/destinations (4).jpg"}
          width={100}
          height={100}
          className="rounded-md object-cover overflow-hidden aspect-square rotate-45 w-32 h-32 hidden md:block"
        />
        {/* <Image
          src={"/heroBg.jpg"}
          width={100}
          height={100}
          className="rounded-md object-cover overflow-hidden aspect-square rotate-12 w-16 h-16"
        /> */}
      </div>
      <div className="flex gap-3 items-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">3022+</h1>
          <p className="text-sm">Travel Destinations</p>
        </div>
        <hr className="w-0.5 h-8 bg-black mx-5" />
        <div className="text-center">
          <h1 className="text-4xl font-semibold">1226+</h1>
          <p className="text-sm">Travel Activities</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSecImg;

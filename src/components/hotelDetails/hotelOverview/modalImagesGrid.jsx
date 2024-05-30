import React from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import RatingCard from "./ratingCard";

const ModalImagesGrid = ({ closeModal }) => {
  return (
    <div className="bg-white max-w-[90vw] h-[90vh] ">
      <div className="border-b pb-5">
        <div
          className="flex items-center w-fit ml-auto cursor-pointer "
          onClick={closeModal}
        >
          <div className="text-sm">Close</div>
          <div className="text-xl mt-0.5">
            <IoClose />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 my-5">
        <div className="col-span-3 ">
          <div className="grid grid-cols-5 gap-5 ">
            {Array.from({ length: 4 }, (_, i) => (
              <div className="py-5">
                <Image
                  key={i}
                  src="/hotel (2).jpg"
                  width={50}
                  height={40}
                  className="w-full object-cover rounded aspect-video "
                />

                <p className="text-sm">Overview</p>
              </div>
            ))}
          </div>
          <div className="overflow-scroll grid grid-cols-3 gap-5 max-h-[55vh]">
            {Array.from({ length: 16 }, (_, i) => (
              <Image
                key={i}
                src="/hotel (2).jpg"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            ))}
          </div>
        </div>
        <div className="col-span-1 max-h-[80vh] overflow-scroll">
          <div className="py-3 shadow-lg">
            <RatingCard />
          </div>
          <h4 className="px-4 text-sm py-5 font-semibold">
            What guests loved the most:
          </h4>
          {Array.from({ length: 16 }, (_, i) => (
            <div key={i} className="px-4 py-2 border-b">
              <p className="text-xs">
                “Cleanliness, staff, location, bed and overall smell”
              </p>
              <div className="flex gap-2">
                <Image
                  key={i}
                  src="/hotel (2).jpg"
                  width={25}
                  height={25}
                  className="rounded-full aspect-square object-cover"
                />
                <p className="text-sm">Name</p>
                <p className="text-sm">Turkey</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalImagesGrid;

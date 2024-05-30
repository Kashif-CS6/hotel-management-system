import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import Image from "next/image";

const Confirmation = ({
  FirstName = "Imran",
  LastName = "khan",
  Email = "imran@gmail.com",
  Phone = 90009888786,
  CheckIn = "23/02/2024",
  CheckOut = "24/02/2024",
}) => {
  return (
    <div className=" border mx-auto my-1 rounded-lg">
      {/* top */}
      <div className="flex items-center gap-2 bg-[#ace0ac] pl-1 md:pl-5 py-1 rounded-tl-lg rounded-tr-lg">
        <div className="h-12 w-[10rem] md:w-[4.5rem]  bg-white rounded-md flex justify-center items-center">
          <IoCheckmarkSharp size={20} color="green" />
        </div>
        <div>
          <h1 className="text-sm md:text-md font-[700]">
            Your booking is confirmed
          </h1>
          <p className="text-[gray] text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            aspernatur sunt totam Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Iure, harum.
          </p>
        </div>
      </div>

      <h1 className="text-lg font-[700] my-4 px-4">Booking details</h1>
      <div className="px-4 flex flex-col gap-5 md:grid md:gap-0  md:grid-cols-4">
        <div>
          <h1 className="text-[gray] text-md font-[600]">GUEST</h1>
          <h1 className=" text-md font-[600]">
            {FirstName} {LastName}
          </h1>
        </div>
        <div>
          <h1 className="text-[gray] text-md font-[600]">CHECK IN</h1>
          <h1 className=" text-md font-[600]">{CheckIn}</h1>
          <p className="text-sm text-[gray] font-[600]">by 16:00</p>
        </div>
        <div>
          <h1 className="text-[gray] text-md font-[600]">CHECK OUT</h1>
          <h1 className=" text-md font-[600]">{CheckOut}</h1>
          <p className="text-sm text-[gray] font-[600]">by 10:00</p>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-4 md:gap-0 md:grid md:grid-cols-4 my-8">
        <div>
          <h1 className="text-[gray] text-md font-[600]">YOUR RESERVATION</h1>
          <h1 className=" text-md font-[600]">3 Nights 1 appartment</h1>
        </div>
        <div>
          <h1 className="text-[gray] text-md font-[600]">PHONE</h1>
          <h1 className=" text-md font-[600]">{Phone}</h1>
        </div>
        <div>
          <h1 className="text-[gray] text-md font-[600]">EMAIL</h1>
          <h1 className=" text-md font-[600]">{Email}</h1>
        </div>
      </div>
      <div className="px-4 grid grid-cols-4 my-8">
        <div>
          <h1 className="text-[gray] text-md font-[600]">BOOKING NUMBER</h1>
          <h1 className=" text-md font-[600]">#899877</h1>
        </div>
      </div>

      {/* last section */}

      <div className="mx-1 md:mx-4 mb-2 rounded-lg border flex justify-center flex-col items-center py-3">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-lg font-[600]">Parking Ticket</h1>
          <p className="w-auto px-4 md:px-0 md:w-96 mb-2 text-[gray]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero esse
            beatae accusantium eligendi obcaecati.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 my-2">
          {/* left side */}
          <Image
            src="/heroBg.jpg"
            width={500}
            height={500}
            className="w-40 h-36 rounded-lg"
            alt="QR image"
          />

          {/* right side */}
          <div className="flex flex-col items-center md:items-start md:justify-between gap-2">
            <p className="text-sm font-[600] text-[gray]">Car Park</p>
            <p className="text-md font-[600]">Car, 3 nights</p>
            <p className="text-md font-[600] text-gray-600">
              Place c-124 on 1st floor
            </p>
            <button className="text-blue-900 text-md font-[600] border-blue-900 border px-2 py-1 rounded-lg hover:border-blue-300 hover:text-blue-400">
              Download parking Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;

import { IoCheckmarkOutline } from "react-icons/io5";

const Partnerhero = () => {
  return (
    <div className="flex bg-blue-700 py-5 items-center justify-around gap-[3rem] flex-wrap ">
      {/* left section */}
      <div className=" md:h-[50vh] lg:h-[50vh]  flex flex-col justify-center items-center md:items-start mt-4 px-[3rem]">
        <h1 className="text-white text-center md:text-start text-2xl md:text-4xl font-[700] mb-2 ">
          List your anything <br />
          on Booking.com
        </h1>
        <p className="text-md text-white md:w-[33rem] mt-5">
          Whether hosting is your side passion or full-time job, register your
          vacation rental on Booking.com to reach travelers worldwide
        </p>
      </div>
      {/* right section */}
      <div className="w-[20rem] mb-2 md:w-[23rem] lg:h-96 mt-4 py-2 bg-white rounded">
        {/* top */}
        <div className="px-4 py-2">
          <h1 className="text-xl w-[20rem] font-[600] py-2">
            Earn more with consistent bookings
          </h1>
          <p className="flex gap-3 text-[13px] py-1">
            <IoCheckmarkOutline size={20} color="green" />
            45% of partners get their first booking within a week
          </p>
          <p className="flex gap-3 text-[13px] py-1">
            <IoCheckmarkOutline size={20} color="green" /> More than 1.1 billion
            vacation rental guests since 2010
          </p>
          <p className="flex gap-3 text-[13px] py-1">
            <IoCheckmarkOutline size={20} color="green" />
            Full control over your property and finances
          </p>
          <p className="flex gap-3 text-[13px] py-1">
            <IoCheckmarkOutline size={20} color="green" />
            Registration is free and takes 15 minutes
          </p>
        </div>
        <hr />
        {/* button */}
        <div className="px-4 py-4">
          <button className="w-full bg-blue-600 text-white py-1 rounded">
            Get started now{" "}
          </button>
        </div>
        <hr />
        {/* bottom */}
        <div className="px-4 pt-3">
          <h2 className="text-[13px] font-[600]">
            Already started registration?
          </h2>
          <p className="text-[11px] text-blue-700">
            Continue your registration
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partnerhero;

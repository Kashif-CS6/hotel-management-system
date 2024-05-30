const Feedback = () => {
  return (
    <div className="w-80 md:w-auto mx-2 md:mx-14">
      {/* top section */}
      <div className="py-5">
        <h1 className="text-xl font-[800]">Meet Patrica</h1>
        <p className="text-[13px] font-[500]">
          See why she loves renting out on Booking.com
        </p>
      </div>
      {/* person info */}
      <div className="flex border flex-wrap xl:flex-nowrap border-gray-100 mb-3  xl:h-[60vh]">
        <img
          className="h-full w-auto md:w-50 "
          src="https://r-xx.bstatic.com/cdata/joinapp/meet_patricia.jpg"
          alt=""
        />
        <div className="w-full flex flex-col justify-center px-4 mt-6 md:mt-0">
          <h1 className="text-md md:text-2xl font-serif font-[700]">
            “Booking.com is one of the platforms that helps us maintain a high
            occupancy level. This is mainly due to the instant booking model and
            the ability to resell canceled rooms more easily.”
          </h1>
          <h2 className="text-md md:text-xl font-[600] pt-16">
            Patricia González
          </h2>
          <p className="text-[gray]">Alterhome, Madrid</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

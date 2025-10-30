const Partnerreach = () => {
  return (
    <div className="mx-auto xl:h-[60vh]">
      <div className="mx-2 px-2 md:mx-0 md:px-[4rem] py-[4rem]">
        <h1 className="text-2xl md:text-3xl font-[800] py-3">
          Reach a unique global customer base
        </h1>
        {/* reach container */}
        <div className="flex gap-4 flex-wrap xl:flex-nowrap lg:flex-nowrap">
          <div className="w-[28rem] py-3">
            <h1 className="text-xl md:text-4xl font-[800]">2/3</h1>
            <p className="text-[gray] text-md">
              of vacation rental guests return to book with us again
            </p>
          </div>
          {/* 2 */}
          <div className="w-[28rem] py-3 ">
            <h1 className="text-xl md:text-4xl font-[800]">48%</h1>
            <p className="text-[gray] text-md">
              of nights booked on Booking.com in 2022 were for international
              stays
            </p>
          </div>
          {/* 3 */}
          <div className="w-[28rem] py-3">
            <h1 className="text-xl md:text-4xl font-[800]">33%</h1>
            <p className="text-[gray] text-md">
              of vacation rental customers are Genius loyalty level 2 or 3 who
              tend to spend more per booking
            </p>
          </div>
        </div>
        {/* reach container end */}
      </div>
    </div>
  );
};

export default Partnerreach;

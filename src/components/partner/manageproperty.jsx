const Manageproperty = () => {
  return (
    <div className="mx-2 md:mx-14">
      {/* heading */}
      <div className="">
        <h1 className="text-2xl font-[800]">Manage your property with ease</h1>
      </div>
      {/* process container that contain all processes */}
      <div className="flex flex-wrap items-center gap-20 my-9">
        {/* first step */}
        <div>
          <img className="w-24 py-4" src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-partner-thumbnails/BasicSetupEmptyState@2x.png" alt="" />
          <h1 className="text-xl font-[700]">Quick Registration</h1>
          <p className="text-sm py-1 md:w-96">Set up your property listing in 15 minutes</p>
        </div>
        {/* second step */}
        <div>
          <img className="w-24 py-4" src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-partner-thumbnails/Websites@2x.png" alt="" />
          <h1 className="text-xl font-[700]">Easy property import</h1>
          <p className="text-sm py-1 md:w-96">Quickly import your property information from other travel sites</p>
        </div>
        {/* third step */}
        <div>
          <img className="w-24 py-4" src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-partner-thumbnails/CustomerSupport@2x.png" alt="" />
          <h1 className="text-xl font-[700]">Robust support</h1>
          <p  className="text-sm py-1 md:w-96">We offer customer support in 45 languages and provide partners with Pulse, our booking management app</p>
        </div>
        {/* 4th step */}
        <div>
          <img className="w-24 py-4" src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-partner-thumbnails/BoardChartUp@2x.png" alt="" />
          <h1 className="text-xl font-[700]">Secure growth</h1>
          <p  className="text-sm py-1 md:w-96">Get guaranteed payouts and fraud protection with Online Payments by Booking.com</p>
        </div>
        {/* 5th step */}
        <div>
          <img className="w-24 py-4" src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-partner-thumbnails/ChannelManager@2x.png" alt="" />
          <h1 className="text-xl font-[700]">Streamlined work</h1>
          <p className="text-sm py-1 md:w-96">Manage your property efficiently by working with one of our 600+ trusted Connectivity providers</p>
        </div>
        {/* 6th step */}
        <div>
          <img className="w-[3.4rem] py-4" src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-partner-thumbnails/Document@2x.png" alt="" />
          <h1 className="text-xl font-[700]">Transparent commission</h1>
          <p  className="text-sm py-1 md:w-96">Understand what and who you’re paying with transparent commission</p>
        </div>
      </div>
    </div>
  );
};

export default Manageproperty;

import React from 'react'
import HotelIntro from './hotelIntro';
import HotelDescription from './hotelOverview/hotelDescription';
import PropertyHeighlights from './hotelOverview/propertyHeighlights';
import SearchNewHotel from './searchNewHotel';
import PriceMatchCard from './hotelOverview/priceMatchCard';

const HotelDetails = () => {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-5 py-5">
        <div className="col-span-1 space-y-5">
            <div className='bg-blue-100 px-3 flex items-center justify-center'>
                <PriceMatchCard />
            </div>
            <SearchNewHotel />
        </div>
        <div className="col-span-3">
          <div className="flex items-center border-b">
            <div className="px-5 py-3 cursor-pointer border-b-2 border-blue-500">
              Overview
            </div>
            <div className="px-5 py-3 cursor-pointer">Info & Prices</div>
            <div className="px-5 py-3 cursor-pointer">Facilities</div>
            <div className="px-5 py-3 cursor-pointer">House rules</div>
            <div className="px-5 py-3 cursor-pointer">Guest reviews</div>
          </div>
          <div>
            <HotelIntro />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 py-5">
        <div className="col-span-2">
            <HotelDescription /> 
        </div>
        <div className="col-span-1">
            <PropertyHeighlights />
        </div>
      </div>
    </div>
  );
}

export default HotelDetails
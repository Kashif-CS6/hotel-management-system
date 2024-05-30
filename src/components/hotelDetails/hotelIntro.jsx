import React from 'react'


import IntroCard from './hotelOverview/introCard';
import ImagesGrid from './hotelOverview/imagesGrid';

const HotelIntro = () => {
  return (
    <div>
     <div>
        <IntroCard />
     </div>
     <div>
        <ImagesGrid />
     </div>
    </div>
  );
}

export default HotelIntro
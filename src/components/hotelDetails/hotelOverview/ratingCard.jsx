import React from 'react'

const RatingCard = () => {
  return (
    <div className=" p-2 w-[200px] bg-white flex items-center gap-3 justify-end">
      <div className="w-fit ">
        <h4 className="font-semibold whitespace-nowrap text-base">Very Good</h4>
        <p className="text-xs font-light text-right">100 reviews</p>
      </div>
      <div className="bg-orange-500 text-white p-1 rounded-md">8.9</div>
    </div>
  );
}

export default RatingCard
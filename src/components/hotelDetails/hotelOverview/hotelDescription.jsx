import React from "react";
import PopularFacilities from "./popularFacilities";

const HotelDescription = () => {
  return (
    <div>
      <div className="text-sm whitespace-pre-line">
        {`You're eligible for a Genius discount at Villa Vista! To save at this property, all you have to do is sign in.\n
          Located in Islamabad, 3 miles from Shah Faisal Mosque, Villa Vista provides accommodations with a fitness center, free private parking and a restaurant. This 4-star hotel offers room service, a 24-hour front desk and free WiFi. Guests can have a drink at the snack bar.\n
          At the hotel, each room comes with a closet. Every room comes with a private bathroom, while selected rooms include a kitchen with a fridge. At Villa Vista, the rooms have a flat-screen TV and a safety deposit box.\n
          A buffet, continental or Full English/Irish breakfast is served at the property.\n
          Lake View Park is 6 miles from the accommodation, while Ayūb National Park is 14 miles away. The nearest airport is Islamabad International Airport, 22 miles from Villa Vista.\n
          Couples in particular like the location - they rated it 9.7 for a two-person trip.\n
          Distance in property description is calculated using © OpenStreetMap`}
      </div>
      <div className="py-5">
        <PopularFacilities />
      </div>
    </div>
  );
};

export default HotelDescription;

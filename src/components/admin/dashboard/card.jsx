import { BiSolidObjectsHorizontalLeft } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import { FaBath } from "react-icons/fa6";
import { IoMdBed } from "react-icons/io";
const Card = ({ totalheight = "[38vh]" }) => {
  return (
    <div
      className={`md:w-[16.6rem] h-${totalheight} md:h-[20rem] border rounded-md shadow-sm shadow-[gray]`}
    >
      <div>
        <img
          className="w-full h-[8rem] md:h-[10rem] rounded-tl-md rounded-tr-md"
          src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
          alt=""
        />
      </div>
      <div>
        <div className="py-4 px-2">
          <h1 className="flex gap-1 text-md font-[600] items-center">
            3.375,18 <p className="text-xs text-[gray] font-[400]">/year</p>
          </h1>
          <p className="text-[10px] md:mt-1 text-[gray]">
            EI Port de la Selva, Catalonia,Spain
          </p>

          <div className="flex flex-wrap pt-2 md:mt-3">
            {/* SQT and Garage section */}
            <div className="flex justify-between py-1 w-48">
              <div className="flex items-center text-[gray] text-xs">
                <BiSolidObjectsHorizontalLeft />
                <p>250 SQFT</p>
              </div>
              <div className="flex items-center text-[gray] text-xs">
                <GiHomeGarage />
                <p>2 Garage</p>
              </div>
            </div>
            {/* Bathroom and Bedroom */}
            <div className="flex  justify-between w-52  py-1">
              <div className="flex items-center text-[gray] text-xs">
                <FaBath />
                <p>2 Bathroom</p>
              </div>
              <div className="flex items-center text-[gray] text-xs">
                <IoMdBed />
                <p>5 Bedrooms</p>
              </div>
            </div>
            {/* end of section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

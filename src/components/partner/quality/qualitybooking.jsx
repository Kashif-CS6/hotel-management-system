import { IoCheckmarkCircleOutline } from "react-icons/io5";
const Qualitybooking = () => {
  return (
    <div className="flex w-80 md:w-auto py-4 mt-5 mx-2 md:px-14 flex-wrap xl:flex-nowrap">
      {/* left */}
      <div className="w-auto md:w-[40rem]">
        <h1 className="text-start text-2xl md:text-4xl md:text-start font-[800] ">
          Get quality bookings quickly
        </h1>
        <div className="py-4 w-auto md:w-auto">
          <p className="flex gap-2 w-full md:w-[30rem] py-3 ">
            <IoCheckmarkCircleOutline className="text-[4rem] md:text-4xl" />
            <span className="text-md">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              amet perferendis dignissimos.
            </span>
          </p>
          <p className="flex gap-2 w-full md:w-[30rem] py-3 ">
            <IoCheckmarkCircleOutline className="text-[4rem] md:text-4xl" />
            <span className="text-md">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              amet perferendis dignissimos.
            </span>
          </p>
          <p className="flex gap-2 w-full md:w-[30rem] py-3 ">
            <IoCheckmarkCircleOutline className="text-[4rem] md:text-4xl" />
            <span className="text-md">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              amet perferendis dignissimos.
            </span>
          </p>
          <p className="flex gap-2 w-full md:w-[30rem] py-3 ">
            <IoCheckmarkCircleOutline className="text-[4rem] md:text-4xl" />
            <span className="text-md">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              amet perferendis dignissimos.
            </span>
          </p>
          <p className="flex gap-2 w-full md:w-[30rem] py-3 ">
            <IoCheckmarkCircleOutline className="text-[4rem] md:text-4xl" />
            <span className="text-md">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              amet perferendis dignissimos.
            </span>
          </p>
        </div>
      </div>
      {/* right with image */}
      <div className="h-52 w-80 md:h-96 md:w-[30rem] rounded">
        <img
          className="w-full h-full my-2 rounded object-fit"
          src="https://images.pexels.com/photos/333525/pexels-photo-333525.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Qualitybooking;

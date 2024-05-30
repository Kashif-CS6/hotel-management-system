import { IoCheckmarkCircleOutline } from "react-icons/io5";
const Propertycontrol = () => {
  return (
    <div className="flex w-80 md:w-auto mx-2 md:mx-14 md:gap-40 md:my-8 flex-wrap lg:flex-nowrap">
      {/* left section */}
      <div className=" bg-slate-500 md:h-96 md:w-[30rem] rounded">
        <img
          className=" w-full h-full rounded"
          src="https://images.pexels.com/photos/6034757/pexels-photo-6034757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>

      {/* right section */}
      <div className="h-96 w-80 md:w-[25rem]  flex flex-col justify-center items-center">
        <h1 className="text-2xl font-[800]">
          Maintain full control over your property and finances
        </h1>
        <p className="flex gap-2 py-2">
          <IoCheckmarkCircleOutline size="2rem" />
          <span className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            reiciendis voluptas maxime.
          </span>
        </p>
        <p className="flex gap-2 py-2">
          <IoCheckmarkCircleOutline size="2rem" />
          <span className="text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            consequuntur vitae vel!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Propertycontrol;

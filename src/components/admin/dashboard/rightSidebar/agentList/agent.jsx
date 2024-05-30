import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const Agent = () => {
  return (
    <div className="flex justify-between items-center my-3">
      {/* left */}
      <div className="flex items-center gap-1">
        <Image
          src="/destinations (1).jpg"
          width={500}
          height={500}
          className="rounded-3xl w-7 h-7"
        />
        <div>
          <h1 className="text-xs font-[600]">Jenny Fransisco</h1>
          <p className="text-xs font-[400] flex items-center text-[gray]">
            21 Solid <GoDotFill /> 32 Rent
          </p>
        </div>
      </div>
      {/* right */}
      <div>
        <h1 className="text-xs font-[600]">+$17,736</h1>
      </div>
    </div>
  );
};

export default Agent;

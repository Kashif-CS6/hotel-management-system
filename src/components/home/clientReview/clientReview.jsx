import React from "react";
import { FaStar } from "react-icons/fa6";
import SectionHeader from "../sectionHeader";
import Image from "next/image";
const ClientReview = () => {
  return (
    <div className="bg-[#eff6ff] py-10">
      <div className="text-center">
        <SectionHeader title="What Our Clients Say" />
      </div>
      <div className="flex items-center gap-5 w-fit mx-auto py-3">
        <div className="font-semibold">Good</div>
        <div className="flex text-orange-500 ">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <div className="text-sm text-gray-500">
          4.5 out of 5 from 50k+ reviews
        </div>
      </div>
      <div className="text-center mx-auto w-fit">
        <p className="text-sm text-gray-500">
          Get the best prices from top hotel providers.
        </p>
        <div className="flex items-center justify-center gap-5 py-5">
          <Image
            src="/TripAdvisor.png"
            alt="trustpilot"
            width={100}
            height={50}
          />{" "}
          <Image src="/expedia.png" alt="trustpilot" width={100} height={40} />
        </div>
      </div>
    </div>
  );
};

export default ClientReview;

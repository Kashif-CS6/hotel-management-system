"use client";

import Stepper from "@/components/bookHotel/Stepper";
import Confirmation from "@/components/bookHotel/confirmation";

import { useForm } from "react-hook-form";

import { useState } from "react";
import Parkingform from "@/components/bookHotel/parkingform";

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Stepper />
    </div>
  );
};

export default page;

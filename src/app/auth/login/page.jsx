"use client";

import { LuUser2 } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  // use form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  // use states
  const [showpas, setShowpas] = useState(false);
  return (
    <div className="py-4 px-14">
      {/* login detail container */}
      <div className="flex gap-0 md:gap-24  justify-center">
        {/* information wrapper */}
        <div className="flex flex-col mt-10 md:mt-0 w-auto justify-center">
          <h1 className="text-3xl font-[700] italic">SL (Groups)</h1>
          <h1 className="text-md font-[600] pt-8">Create an account</h1>
          <p className="text-[13px]">
            Already have an account?{" "}
            <a className="text-orange-600 font-[600]" href="#">
              Sign in
            </a>
          </p>

          {/* form section started */}
          <form
            action="#"
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className="w-72 py-8 flex flex-col gap-2"
          >
            {/* -----------email info----------- */}
            <div>
              <p className="text-[13px]">Email</p>
              <div className="flex items-center border w-full py-1 rounded px-2">
                <input
                  className="outline-none w-full text-[13px] text-[gray]"
                  type="email"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email!",
                    },
                  })}
                />
                <MdAlternateEmail size={15} color="gray" />
              </div>
              <p className="text-xs text-red-500 ">{errors.email?.message}</p>
            </div>
            {/* ------ password ----------- */}
            <div>
              <p className="text-[13px]">Password</p>
              <div className="flex items-center border w-full py-1 rounded px-2">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: `Minimun length required is 8`,
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                      message: "Password not strong enough",
                    },
                  })}
                  className="outline-none w-full text-[13px] text-[gray]"
                  type={showpas ? "text" : "password"}
                />
                {showpas ? (
                  <EyeIcon
                    size={15}
                    color="gray"
                    onClick={() => {
                      setShowpas(!showpas);
                    }}
                    className=" cursor-pointer"
                  />
                ) : (
                  <EyeOffIcon
                    size={15}
                    color="gray"
                    className=" cursor-pointer"
                    onClick={() => {
                      setShowpas(!showpas);
                    }}
                  />
                )}
              </div>
              <p className="text-xs text-red-500 ">
                {errors.password?.message}
              </p>
            </div>
            <input
              type="submit"
              value="Create Account"
              className="text-[13px] py-1 bg-orange-700 font-[400] rounded text-white cursor-pointer"
            />
          </form>
          {/* draw line */}
          <p>------------------or---------------</p>

          {/* other sign up options */}
          <div className="flex flex-col gap-2 py-1">
            <button
              onClick={() => router.push("/")}
              className="flex cursor-pointer items-center justify-center rounded gap-1 py-1 bg-blue-600"
            >
              <GrFacebookOption color="white" />
              <span className="text-[13px] text-white font-[500]">
                Continue with facebook
              </span>
            </button>
            <button
              onClick={() => router.push("/")}
              className="flex cursor-pointer items-center border rounded justify-center font-[500] gap-1 py-1"
            >
              <FcGoogle />
              <span className="text-[13px]"> Continue with google</span>
            </button>
          </div>
          {/* ----buttons ended------ */}
        </div>
        {/* image container */}
        <div className=" hidden lg:block w-[40rem] h-[90vh] rounded-lg  ">
          <Image
            src="/signup.jpg"
            width={500}
            className="w-full h-full rounded-lg"
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default page;

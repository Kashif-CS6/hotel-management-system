"use client";

import SecondaryNavbar from "@/components/common/navBar/secondaryNavbar";
import Footer from "@/components/common/footer/footer";
import Mapcomponent from "@/components/admin/hotelslist/mapcomponent";
import { MdLocationPin } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useForm } from "react-hook-form";

const page = () => {
  // use form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <SecondaryNavbar />
      <div className="w-80 md:w-10/12 mx-2 md:mx-auto my-5">
        {/* top container */}
        <div className="my-3 flex justify-center md:justify-start">
          <h1 className="text-3xl font-[400] font-serif flex items-center gap-2">
            <p>Contact </p> US
          </h1>
        </div>

        <div className="flex flex-wrap items-center space-y-5 lg:space-y-0">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className="w-full md:w-8/12 "
          >
            {/* left container */}

            <div>
              {/* top div */}
              <div className="flex flex-col md:flex-row w-full  gap-2">
                <div className="flex flex-col w-auto  md:w-6/12 mt-3">
                  <label htmlFor="#">First Name</label>
                  <div className="py-1 my-1 bg-white border px-2 rounded-sm w-full md:w-auto">
                    {" "}
                    <input
                      placeholder="Enter your first name"
                      className="outline-none w-full"
                      type="text"
                      {...register("firstname", {
                        required: "First name is required!",
                        minLength: {
                          value: 2,
                          message: "Minimum length will be 2",
                        },
                        pattern: {
                          value: /^[A-Z][a-z]*$/,
                          message: "First latter must be upper case",
                        },
                      })}
                    />
                  </div>
                  {/* Error message */}
                  <div className="my-2">
                    <p className="text-xs text-red-500 ">
                      {errors.firstname?.message}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-6/12 mt-3">
                  <label htmlFor="#">Last Name</label>
                  <div className="py-1 my-1 bg-white border px-2 rounded-sm w-full md:w-auto">
                    {" "}
                    <input
                      placeholder="Enter your last name"
                      className="outline-none w-full text-[gray]"
                      type="text"
                      {...register("lastname", {
                        required: "Last name is required!",
                        minLength: {
                          value: 2,
                          message: "Minimum length will be 2",
                        },
                        pattern: {
                          value: /^[A-Z][a-z]*$/,
                          message: "First latter must be upper case",
                        },
                      })}
                    />
                  </div>
                  {/* Error message */}
                  <div className="my-2">
                    <p className="text-xs text-red-500 ">
                      {errors.lastname?.message}
                    </p>
                  </div>
                </div>
              </div>

              {/* email and phone number div */}

              <div className="flex flex-col md:flex-row gap-2 mt-3">
                <div className="flex flex-col w-full md:w-6/12">
                  <label htmlFor="#">Email</label>
                  <div className="py-1 my-1 bg-white border px-2 rounded-sm w-full md:w-auto">
                    {" "}
                    <input
                      placeholder="e.g ali@gmail.com"
                      className="outline-none w-full"
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
                  </div>
                  {/* error message */}
                  <div className="my-2">
                    <p className="text-xs text-red-500 ">
                      {errors.email?.message}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-6/12">
                  <label htmlFor="#">Phone Number</label>
                  <div className="py-1 my-1 bg-white border px-2 rounded-sm w-full md:w-auto">
                    {" "}
                    <input
                      placeholder="9233340505050"
                      className="outline-none w-full"
                      type="number"
                      {...register("phone", {
                        required: "phone number is required",
                        minLength: {
                          value: 11,
                          message: "Minimum length will be 11",
                        },
                        maxLength: {
                          value: 12,
                          message: "maximum number will be 12",
                        },
                        min: {
                          value: 0,
                          message: "Number will be start from Positive number",
                        },
                      })}
                    />
                  </div>
                  {/* error message */}
                  <div className="my-2">
                    <p className="text-xs text-red-500 ">
                      {errors.phone?.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* last two full */}
            {/* Message or Equiry */}
            <div className="flex items-center  w-full md:w-auto gap-2 mt-3">
              <div className="flex flex-col h-40 w-full">
                <label htmlFor="#">Message or Enquiry</label>
                <div className="py-1 my-1  bg-white  border px-2 flex-1 rounded-sm ">
                  {" "}
                  <textarea
                    placeholder="Enter Something Here . . ."
                    className="w-full outline-none h-full"
                    {...register("request",{
                      required:"Empty message not allowed",
                      minLength:{
                        value:5,
                        message:"minimum length will be 5"
                      }
                    })}
                  ></textarea>
                </div>
                {/* error message */}
                <div className="my-2">
                  <p className="text-red-500 text-xs">{errors.request?.message}</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <button className="bg-blue-700 py-2 float-start md:float-right text-white px-2 rounded-sm">
                Send Message
              </button>
            </div>
          </form>

          {/* right side div */}
          <div className="mx-auto my-auto">
            <Mapcomponent h="h-40" w="w-76" />
            <div className="flex items-center gap-2 my-2">
              <MdLocationPin />
              <p className="text-[gray]">14b, Freedoms street,Pakistan</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <IoMdCall />
              <p className="text-[gray]">13000000,120000000</p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

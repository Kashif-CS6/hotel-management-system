"use client";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Question = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div className="w-80 md:w-auto mx-2 md:px-14 mt-5">
      {/* top */}
      <div className="py-3">
        <h1 className="text-2xl font-[800]">Your questions answered</h1>
      </div>
      {/* Question container */}
      <div className="flex gap-5 flex-wrap">
        {/* Question 1 */}
        <div className="w-[30rem]">
          <hr />
          <h1 className="flex  justify-between text-md font-[700] py-2">
            What happens if my property is damaged by a guest?
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? (
                <FaAngleUp className="text-[gray]" />
              ) : (
                <FaAngleDown className="text-[gray]" />
              )}
            </button>
          </h1>
          {show ? (
            <p className="text-md py-2">
              Property owners can request damage deposits from guests. Deposits
              help cover any potential damage caused by a guest, offering some
              reassurance that your property will be treated respectfully. If
              anything goes wrong, it can be reported to our team through our
              misconduct reporting feature.
            </p>
          ) : null}

          <hr />
        </div>
        {/* Question 2 */}

        <div className="w-[30rem]">
          <hr />
          <h1 className="flex justify-between text-md font-[700] py-2">
            When will my property go online?
            <button
              onClick={() => {
                setShow2(!show2);
              }}
            >
              {show2 ? (
                <FaAngleUp className="text-[gray]" />
              ) : (
                <FaAngleDown className="text-[gray]" />
              )}
            </button>
          </h1>
          {show2 ? (
            <p className="text-md py-2">
              Once you finish creating your listing, you can open your property
              for bookings on our site. We may ask you to verify your property
              before you can start accepting bookings, but you can use this time
              to get familiar with the Extranet and get prepared for your first
              guests.
            </p>
          ) : null}

          <hr />
        </div>
        {/* Question 2 ended .... */}
      </div>
      <div className="py-10">
        <p className="text-md">
          Still have questions? Find answers to all your questions in our{" "}
          <span className="text-blue-600">FAQ</span>
        </p>
      </div>
    </div>
  );
};

export default Question;

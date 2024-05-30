"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FaqAccordian = ({ questionList }) => {
  const [faqs, setFaqs] = useState(questionList ? questionList : tempQuestions);

  const toggleFaq = (id) => {
    setFaqs(
      faqs?.map((faq) =>
        faq.id === id ? { ...faq, show: !faq.show } : { ...faq, show: false }
      )
    );
  };

  return (
    <>
      <div className="bg-bgSlate">
        <div className="text-center mx-auto dark:text-white text-gray-950">
          <div
            id="accordion-collapse"
            className="md:text-left text-center rounded  "
            data-accordion="collapse"
          >
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b-2">
                <h2 id={"accordion-collapse-body-" + faq.id}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  
                            focus:outline-none  dark:text-gray-400  "
                    data-accordion-target={"#accordion-collapse-body-" + faq.id}
                    aria-expanded={faq.show ? "true" : "false"}
                    aria-controls={"accordion-collapse-body-" + faq.id}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    {faq.show ? <FaMinus /> : <FaPlus />}
                  </button>
                </h2>
                <div
                  id={"accordion-collapse-body-" + faq.id}
                  className={faq.show ? "" : "hidden"}
                  aria-labelledby={`accordion-collapse-heading-${faq.id}`}
                >
                  <div className="p-5 ">
                    <p className="mb-2 text-gray-500">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqAccordian;

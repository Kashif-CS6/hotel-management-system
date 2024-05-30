import React from "react";
import FaqAccordian from "./faqAccordian";
import SectionHeader from "../sectionHeader";
import Button from "@/components/common/button";
const tempQuestions = [
  {
    id: 1,
    show: true,
    question: "How can I download the free coding templates?",
    answer:
      "To download the free coding templates, simply visit our website and browse through the available templates. Click on the template you're interested in, and you'll find a download link provided. No account registration is required for accessing free templates.",
  },
  {
    id: 2,
    show: false,
    question: "How do I register to sell my templates?",
    answer:
      "If you wish to sell your coding templates on our website, you need to create an account. Click on the 'Register' button on the website's homepage, fill in the required details, and complete the registration process. Once registered, you can upload and list your templates for sale.",
  },
  {
    id: 3,
    show: false,
    question: "What is the fee structure for selling templates?",
    answer:
      "For each template sale, we charge a 20% commission fee (This price may vary in future). The remaining 80% of the sale amount is provided to the site owner. This fee helps us maintain and enhance the platform, ensuring a seamless experience for both buyers and sellers.",
  },
  {
    id: 4,
    show: false,
    question: "How are the templates reviewed before publishing?",
    answer:
      "To ensure the quality and integrity of the templates available on our platform, we review each template before publishing it for sale. Our team of experts examines the code to ensure it meets our standards and is free from any vulnerabilities or malicious code.",
  },
  {
    id: 5,
    show: false,
    question: "Do I need to provide a live preview of my template?",
    answer:
      "While providing a live preview of your template is not mandatory, it can greatly enhance the buying experience for potential customers. A live preview allows buyers to see how the template looks and functions in a real-time environment. We encourage sellers to provide live previews whenever possible.",
  },
  {
    id: 6,
    show: false,
    question: "What happens after I upload my template for sale?",
    answer:
      "Once you upload your template for sale, our team will review it to ensure its quality and compliance with our guidelines. If any issues or improvements are identified, we may provide feedback for you to address. Once approved, your template will be listed on our website, and potential buyers can purchase it.",
  },
  {
    id: 7,
    show: false,
    question: "Can I sell templates that I have obtained from other sources?",
    answer:
      "To maintain the integrity of our platform and respect intellectual property rights, we only allow the sale of templates that you have created yourself or have the necessary rights to sell. Selling templates obtained from other sources without proper authorization is strictly prohibited.",
  },
  {
    id: 8,
    show: false,
    question:
      "Are there any restrictions on the type of coding templates I can sell?",
    answer:
      "While we aim to provide a wide range of coding templates, we have certain guidelines in place. We do not allow the sale of templates containing malicious code, copyrighted content without proper authorization, or templates that promote unethical or illegal activities. Please refer to our terms and conditions for more detailed information.",
  },
];
const Faq = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20">
      <div className="flex items-center justify-between pb-10">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="flex flex-col md:flex-row items-center gap-5">
          <p className="text-gray-500 text-sm">More Questions?</p>
          <Button>Let's Connect</Button>
        </div>
      </div>
      <div className="md:px-20">
        <FaqAccordian questionList={tempQuestions} />
      </div>
    </div>
  );
};

export default Faq;

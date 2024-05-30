import React from "react";
import FooterLinks from "./footerLinks";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaRegCopyright,
} from "react-icons/fa6";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoMap } from "react-icons/io5";
const footerLinks = [
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        link: "#",
      },
      {
        title: "Careers",
        link: "#",
      },
      {
        title: "Blog",
        link: "#",
      },
    ],
  },
];
const Footer = () => {
  const socialLinks = [
    {
      link: "#",
      icon: <FaFacebookF />,
    },
    {
      link: "#",
      icon: <FaXTwitter />,
    },
    {
      link: "#",
      icon: <FaInstagram />,
    },
  ];

  const socialLinksList = socialLinks.map((item, index) => {
    return (
      <div
        key={index}
        className="p-2 rounded-full bg-orange-500 text-white hover:opacity-80 cursor-pointer"
      >
        {item.icon}
      </div>
    );
  });
  // ;
  return (
    <footer className="bg-[#eff6ff]  py-10 w-full pt-60">
      <div className="2xl:max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-9 w-full gap-5 lg:gap-10">
          <div className="col-span-3 flex flex-col items-start space-y-5 w-full">
            <div className="text-xl font-extrabold text-orange-500">Logo</div>
            <div className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eligendi molestiae consectetur numquam. Quas perspiciatis adipisci
              quod blanditiis earum perferendis ratione quaerat, quidem vitae
              nesciunt quam vero quo aperiam esse.
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-2">
            <div className="">
              <FooterLinks
                title={footerLinks[0].title}
                links={footerLinks[0].links}
              />
            </div>
            <div className="">
              <FooterLinks
                title={footerLinks[0].title}
                links={footerLinks[0].links}
              />
            </div>
          </div>
          <div className="space-y-5 col-span-2">
            <div className="text-lg font-bold whitespace-nowrap">Follow Us</div>
            <div className="flex gap-2 items-center">
              <div className="text-orange-500">
                <IoMail />
              </div>
              <div className="text-gray-600 text-sm">contact@company.com</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-orange-500">
                <MdLocalPhone />
              </div>
              <div className="text-gray-600 text-sm">(425) 956 - 2412</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-orange-500">
                <IoMap />
              </div>
              <div className="text-gray-600 text-sm">St 20, Block-W</div>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-5 border" />
        </div>
        <div className="md:flex justify-between text-xs text-gray-600">
          <div className="flex gap-1 items-center">
            Copyright
            <FaRegCopyright />
            {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-4">{socialLinksList}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import NavLinkList from "./navLinkList";
import ButtonLight from "../buttonLight";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex items-center justify-between px-5 md:px-10 lg:px-36 py-3">
      <div>Logo</div>
      {showMenu ? (
        <div className="absolute inset-0 z-50 h-screen w-screen bg-white flex items-center justify-center md:hidden">
          <div
            className="absolute top-0 right-0 p-10 text-2xl cursor-pointer"
            onClick={onClick}
          >
            <IoClose />
          </div>
          <div onClick={onClick}>
            <NavLinkList />
          </div>
        </div>
      ) : (
        <div className=" hidden md:block ">
          <NavLinkList />
        </div>
      )}

      <div className="flex items-center gap-5">
        {/* <div className="border px-5 py-2 rounded text-orange-400 border-orange-400 hover:bg-orange-100 cursor-pointer"> */}
        <ButtonLight>Contact Us</ButtonLight>
        {/* </div> */}
        <div className="md:hidden cursor-pointer" onClick={onClick}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

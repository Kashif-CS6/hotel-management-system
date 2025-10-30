import React from "react";
import Link from "next/link";

const navList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/partnerprogram" },
  { name: "Admin", path: "/admin/dashboard" },
  { name: "User", path: "/user/dashboard" },
  { name: "Booked", path: "/user/bookedhotel" },
  { name: "Hotels", path: "/admin/hotels-list" },
  { name: "Book Hotel", path: "/book-hotel/A1" },
  { name: "Login", path: "/auth/login" },
  { name: "Register", path: "/auth/signup" },
];

const NavLinkList = () => {
  return (
    <div className="flex items-center text-sm gap-5 flex-col md:flex-row">
      {navList.map((nav, index) => (
        <Link key={index} href={nav.path} className="hover:underline py-2">
          {nav.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinkList;

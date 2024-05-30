import React from "react";
import Link from "next/link";

const navList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
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

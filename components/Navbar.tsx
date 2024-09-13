"use client";
import { useState } from "react";
import Image from "next/image";

import { navLinks } from "../app/uiux/constants/index.js";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-4 px-6 justify-between items-center bg-primary navbar">
      {/* Logo and Website Name */}
      <div className="flex items-center">
        <Image src={"/icons/logo.svg"} alt="hoobank" width={34} height={34} />
        <h1 className="ml-2 text-2xl font-ibm-plex-serif font-bold text-white">BankEase</h1>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-gray-400"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? "/icons/close.svg" : "/icons/menu.svg"}
          alt="menu"
          width={28}
          height={28}
          className="cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        {/* Mobile Menu */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 absolute top-16 right-0 mx-4 my-2 min-w-[200px] rounded-xl z-50`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-gray-400"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false); // Close menu on click
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

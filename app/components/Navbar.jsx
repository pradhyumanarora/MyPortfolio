"use client";
import React from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLinks";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    href: "/",
    title: "HOME",
  },
  {
    href: "#about",
    title: "ABOUT",
  },
  {
    href: "#skills",
    title: "SKILLS",
  },
  {
    href: "#projects",
    title: "PROJECTS",
  },
  {
    href: "#experience",
    title: "EXPERIENCE",
  },
  {
    href: "#contact",
    title: "CONTACT",
  },
];
const Navbar = ({ darkMode, setDarkMode }) => {
  // const navbarClasses = darkMode ? "dark" : "";
  const [isopen, setOpen] = useState(false);
  return (
    <>
    {/* dark: ${isopen ? "bg-opacity-0" : "bg-opacity-10"} */}
      <header
        className={`bg-white shadow-md p-4 fixed w-full z-10 bg-opacity-10 dark:bg-gray-800 backdrop-blur-sm dark:text-gray-50 
        dark:bg-opacity-10
        `}
      >
        <nav className="flex justify-between">
          <h1 className="text-xl font-burtons dark:text-teal-600">
            pradhyumanarora
          </h1>
          <div className="text-xl lg:text-sm flex justify-center">
            <ul className="hidden lg:flex items-center">
              {navLinks.map((link, index) => (
                <li key={index} className="relative mx-3 group">
                  <NavLink href={link.href} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="hidden lg:flex items-center">
              {darkMode ? (
                <li>
                  <BsFillSunFill
                    className="cursor-pointer  text-2xl"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </li>
              ) : (
                <li>
                  <BsFillMoonStarsFill
                    className="cursor-pointer  text-2xl"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </li>
              )}
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu flex items-center justify-center cursor-pointer  md:hidden">
            <div className="mr-3">
              {!darkMode ? (
                <BsFillMoonStarsFill
                  className="cursor-pointer  text-xl "
                  onClick={() => setDarkMode(!darkMode)}
                />
              ) : (
                <BsFillSunFill
                  className="cursor-pointer  text-xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              )}
            </div>
            <div className="ml-2">
              {isopen ? (
                <button
                  className="flex items-center dark:text-gray-50"
                  onClick={() => setOpen(!isopen)}
                >
                  <HiX className="text-2xl" />
                </button>
              ) : (
                <button
                  className="flex items-center dark:text-gray-50"
                  onClick={() => setOpen(!isopen)}
                >
                  <HiMenu
                    className="text-2xl flex items-center"
                    onClick={() => setOpen(!isopen)}
                  />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`fixed h-full top-16 right-0 bg-gray-700 w-0 z-10 transition-all p-3 duration-300 translate-x-6 text-gray-50 ${
          isopen ? "w-72" : "w-0"
        }`}
      >
        {/* <button
          className=" text-gray-50 flex items-center"
          onClick={() => setOpen(!isopen)}
        >
          <HiX className="text-2xl" />
        </button> */}
        {isopen ? <MenuOverlay links={navLinks} /> : null}
      </div>
    </>
  );
};

export default Navbar;

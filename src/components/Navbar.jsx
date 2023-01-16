import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import logo from '../assets/images/logo.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "EVENTS", link: "#events" },
    { name: "TICKETS", link: "#tickets" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 30 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-black text-white" : "text-gray-900"
      }`}
    >
      <div className="flex item-center justify-between">
        <div className="mx-7">
          <div className="mx-7">
            <a href="#home">
              <img src={logo} alt="logo" width="120px" />
            </a>
          </div>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white text-white" : "bg-white"
          } md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-gray-800"
          } text-3xl md:hidden m-5`}
        >
          <CgMenuRight />
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/2 h-screen px-3 py-2 font-medium bg-white top-0  duration-1000 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

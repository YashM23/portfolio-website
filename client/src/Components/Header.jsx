import React, { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import MobileNavbar from "./MobileNavbar";

import { IoMenu } from "react-icons/io5";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const navlinks = [
    { id: 1, link: "/", title: "home" },
    { id: 2, link: "/about", title: "about" },
    { id: 3, link: "/skills", title: "skills" },
    { id: 4, link: "/projects", title: "projects" },
    { id: 5, link: "/contact", title: "contact" },
  ];

  return (
    <div className="w-full flex items-center justify-between h-20 px-4 fixed bg-black/60 backdrop-blur-sm top-0 left-0 z-50">
      <div className="cursor-pointer">
        <Link to="home" smooth duration={1000} className=" text-orange-400 font-navbar font-bold ml-2 md:ml-6 text-3xl md:text-4xl">
          Yash Malavde
        </Link>
      </div>

      <ul className="hidden md:flex">
        {navlinks.map(({ id, link, title }) => (
          <li
            key={id}
            className="text-gray-400 px-2 capitalize hover:scale-105 hover:text-orange-500 duration-300 cursor-pointer font-regular text-xl"
          >
            <Link activeClass="active" to={title} smooth={true} duration={1000} >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => {
          setNavbar(!navbar);
        }}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        <IoMenu
          size={30}
          className={`text-gray-500  ${
            navbar
              ? "text-orange-500 rotate-180 duration-500 ease-in-out"
              : "hover:text-orange-500 rotate-0 duration-500 ease-in-out"
          } `}
        />
      </div>

      {navbar && (
        <ul className="flex flex-col justify-center items-center bg-black/95 absolute top-0 left-0 w-full h-screen">
          {navlinks.map(({ id, link ,title }) => (
            <Link
              onClick={()=>{setNavbar(!navbar)}}
              to={title}
              smooth={true}
              duration={1000}
              key={id}
              className="font-bold font-regular capitalize text-3xl py-4 text-gray-500 hover:text-orange-500 hover:scale-110 duration-300 cursor-pointer"
            >
              {title}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Header;

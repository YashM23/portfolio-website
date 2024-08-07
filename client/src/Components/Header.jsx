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
    <>
      <div className="flex justify-center items-center">
        <div className="w-[340px] sm:w-[640px] md:w-[768px] lg:w-[900px] xl:w-[1280px] rounded-full border-[1px] border-neutral-500 px-2 sm:px-6 md:px-10 mt-2 flex items-center justify-between h-20 fixed top-0 bg-black/70 backdrop-blur-sm z-50">
          <div className="cursor-pointer">
            <Link
              to="home"
              smooth
              duration={1000}
              className=" text-orange-400 font-navbar font-bold ml-2 text-2xl sm:text-3xl md:text-4xl"
            >
              Yash Malavde
            </Link>
          </div>

          <ul className="hidden md:flex">
            {navlinks.map(({ id, link, title },index) => (
              <li
                key={index}
                className="text-gray-400 px-2 capitalize hover:scale-105 hover:text-orange-500 duration-300 cursor-pointer font-regular text-xl"
              >
                <Link
                  activeClass="active"
                  to={title}
                  smooth={true}
                  duration={1000}
                >
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

          {/* MOBILE NAVBAR */}
          {navbar && (
            <>
              <div className={`fixed top-0 right-0 w-[140px] h-full py-20 `}>
                <ul className="flex flex-col justify-center items-end bg-black/90 rounded-2xl border-[1px] border-neutral-500 backdrop-blur-sm z-50">
                  {navlinks.map(({ id, link, title },index) => (
                    <Link
                      onClick={() => {
                        setNavbar(!navbar);
                      }}
                      to={title}
                      smooth={true}
                      duration={1000}
                      key={index}
                      className="font-bold font-regular capitalize text-xl py-2 mr-6 text-gray-500 hover:text-orange-500 hover:scale-105 duration-300 cursor-pointer"
                    >
                      {title}
                    </Link>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;

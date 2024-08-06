import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact bg-black h-full px-20 md:px-10 py-10">
      <div className="">
        <h2 className="font-bold text-orange-500 text-3xl text-center">
          Contact Info
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center bg-black/30 gap-6 mt-10">

        <div className="group bg-white/5 p-10 rounded-xl w-full hover:scale-105 duration-700">
          <div className="flex items-center justify-center gap-4">
            <BiLogoGmail size={40} className="text-red-700 bg-white rounded-lg p-1" />
            <h2 className="text-neutral-300 font-bold ">Email</h2>
          </div>

          <div className="mt-2 text-center">
            <p className=" text-neutral-400 font-poppins duration-500 p-1 group">yash.malavde.jobs@gmail.com</p>
          </div>
        </div>


        <div className="bg-white/5 p-10 rounded-xl w-full hover:scale-105 duration-700">
          <div className="flex items-center justify-center gap-4">
            <IoCall  size={40} className=" text-white bg-green-700 rounded-lg p-1" />
            <h2 className="text-neutral-300 font-bold">Mobile Number</h2>
          </div>

          <div className="mt-2">
            <p className="text-neutral-400 font-poppins text-center">+91 7208606422</p>
          </div>
        </div>


        <div className="bg-white/5 p-10 rounded-xl w-full hover:scale-105 duration-700">
          <div className="flex items-center justify-center gap-4">
            <FaLinkedin size={40} className="text-blue-700 bg-white rounded-lg p-1" />
            <h2 className="text-neutral-300 font-bold">LinkedIn</h2>
          </div>

          <div className="mt-2">
            <p className="text-neutral-400 font-poppins text-center">yashmalavde2002@gmail.com</p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Contact;

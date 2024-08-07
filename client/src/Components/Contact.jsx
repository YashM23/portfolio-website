import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";
import { SiIndeed } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact w-full bg-black h-full py-20 flex justify-center">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl text-orange-500">Contact Me</h2>
        <p className="text-neutral-400 tracking-wide">( For any more Information )</p>
      </div>

      <div className="w-1/2 flex justify-center items-center ">
        <div className="flex gap-6">
          <div
            className="flex flex-col items-center "
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yash.malavde.jobs@gmail.com"
              );
            }}
          >
            <BiLogoGmail
              size={50}
              className="text-red-700 hover:bg-red-700 hover:text-white hover:scale-110 duration-200 bg-white rounded-md p-2"
            />
            <h2 className="text-orange-600 font-semibold text-lg mt-2">
              Gmail
            </h2>
          </div>

          <div
            className="flex flex-col items-center "
            onClick={() => {
              window.open("https://linkedin.com/in/yash-malavde-6b7137219");
            }}
          >
            <FaLinkedin
              size={50}
              className="text-blue-700 hover:bg-blue-700 hover:text-white hover:scale-110 duration-200 bg-white rounded-md p-2"
            />
            <h2 className="text-orange-600 font-semibold text-lg mt-2">
              LinkedIn
            </h2>
          </div>

          <div
            className="flex flex-col items-center "
            onClick={() => {
              window.open("https://github.com/YashM23");
            }}
          >
            <FaGithub
              size={50}
              className="text-purple-800 hover:bg-purple-800 hover:text-white hover:scale-110 duration-200 bg-white rounded-md p-2"
            />
            <h2 className="text-orange-600 font-semibold text-lg mt-2">
              Github
            </h2>
          </div>

          <div
            className="flex flex-col items-center "
            onClick={() => {
              window.open("");
            }}
          >
            <SiIndeed
              size={50}
              className="text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110 duration-200  bg-white rounded-md p-2"
            />
            <h2 className="text-orange-600 font-semibold text-lg mt-2">
              Indeed
            </h2>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 mt-10">
        <div className="group bg-white/5 p-10 rounded-xl w-full">
          <div className="flex items-center justify-center gap-4">
            <BiLogoGmail
              size={40}
              className="text-red-700 bg-white rounded-lg p-1"
            />
            <h2 className="text-neutral-300 font-bold ">Email</h2>
          </div>

          <div className="mt-2 text-center">
            <p className=" text-neutral-400 font-poppins duration-500 p-1 group">
              yash.malavde.jobs@gmail.com
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;

import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";
import { SiIndeed } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact w-full bg-black h-full py-20 flex flex-col sm:flex-row justify-center">
      <div className="sm:w-1/2 flex flex-col justify-center items-center mb-4 sm:mb-0">
        <h2 className="font-bold text-xl sm:text-3xl text-orange-500">
          Contact Me
        </h2>
        <p className="text-neutral-400 tracking-wide text-sm sm:text-xl">
          ( For any more Information )
        </p>
      </div>


      <div className="sm:w-1/2 flex justify-center items-center sm:bg-orange-600/60 sm:p-10 sm:rounded-l-full">
        <div className="flex gap-6 sm:gap-8">
          <div
            className="flex flex-col items-center"
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yash.malavde.jobs@gmail.com"
              );
            }}
          >
            <BiLogoGmail
              size={50}
              className="text-red-700 bg-white hover:bg-white/80 duration-200  rounded-md p-2"
            />
            <h2 className="text-white font-poppins sm:text-base tracking-tight mt-1">
              Gmail
            </h2>
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => {
              window.open("https://linkedin.com/in/yash-malavde-6b7137219");
            }}
          >
            <FaLinkedin
              size={50}
              className="text-white hover:bg-white hover:text-blue-600 duration-200 bg-blue-600 rounded-md p-2"
            />

            <h2 className="text-white font-poppins sm:text-base tracking-tight mt-1">
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
              className="text-white hover:bg-white hover:text-purple-800 duration-200 bg-purple-800 rounded-md p-2"
            />
            <h2 className="text-white font-poppins sm:text-base tracking-tight mt-1">
              Github
            </h2>
          </div>
          {/* <div
            className="flex flex-col items-center "
            onClick={() => {
              window.open("");
            }}
          >
            <SiIndeed
              size={50}
              className="text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110 duration-200  bg-white rounded-md p-2"
            />
            <h2 className="text-neutral-500 font-semibold sm:text-lg mt-2">
              Indeed
            </h2>
          </div> */}
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

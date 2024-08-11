import React from "react";
import { ReactTyped } from "react-typed";
import yashbg from "../images/yash-bg-orange.png";
// import { FaArrowRight } from "react-icons/fa";
import YashResume from "../files/Yash_Resume_2.pdf";
// import { BsDownload } from "react-icons/bs";
// import { GrDocumentDownload } from "react-icons/gr";
import { FaRegFilePdf } from "react-icons/fa6";

function Home() {
  return (
    <>
      {/* Page 1 */}
      <div className="home h-screen w-full bg-black">
        <div className="w-full flex items-center justify-center h-full">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:text-left h-full ml-6 sm:ml-10 md:ml-12 lg:ml-32">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl text-neutral-300 font-thin">
                Hi,I'm{" "}
                <ReactTyped
                  strings={["Yash Malavde", "Web Developer"]}
                  typeSpeed={150}
                  backSpeed={25}
                  loop
                  className="text-3xl md:text-4xl font-regular bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-orange-400 to-orange-600"
                ></ReactTyped>
              </h2>
              <br />

              <div className="">
                <p className="text-sm md:text-base font-regular text-left text-neutral-500 text-wrap w-[300px] sm:w-[450px] md:w-[350px]  line-clamp-3 hover:line-clamp-none transition-transform duration-200">
                  I'm a{" "}
                  <span className="text-lg bg-clip-text text-transparent duration-300 font-extrabold bg-orange-500 ">
                    Full Stack Web Developer
                  </span>
                  .<br /> I embody passion, reliability, and innovation. 
                  My commitment to delivering exceptional code, exceeding project goals fuels mutual growth and remarkable achievements.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              {/* <button className="bg-cyan-600 group font-semibold flex items-center justify-center gap-4 p-4 rounded-md cursor-pointer duration-700 max-w-full">
                Projects <FaArrowRight className=" group-hover:rotate-90 duration-500 " />
              </button> */}

              <button className="w-60 md:w-full bg-gradient-to-l from-orange-500 to-orange-700 hover:bg-white text-white  group gap-4 font-semibold flex items-center justify-center p-4 rounded-lg cursor-pointer ">
                <a
                  href={YashResume}
                  download={true}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume{" "}
                </a>
                <div className="">
                  <FaRegFilePdf
                    size={25}
                    className="font-extrabold group-hover:text-black duration-500 "
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="h-full w-1/2  hidden md:flex justify-center items-center">
            <div className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-2xl bg-[#c2410c] overflow-hidden">
              <img
                src={yashbg}
                width={100}
                height={100}
                alt=""
                className="object-cover object-top h-full w-full"
              />
            </div>
            {/* <p className="text-white">images</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

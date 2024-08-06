import React from "react";
import { ReactTyped } from "react-typed";
import yashbg from "../images/yashbgremoved.png";
// import { FaArrowRight } from "react-icons/fa";
import YashResume from "../files/Yash_Resume.pdf";
// import { BsDownload } from "react-icons/bs";
// import { GrDocumentDownload } from "react-icons/gr";
import { FaRegFilePdf } from "react-icons/fa6";

function Home() {
  return (
    <>
      {/* Page 1 */}
      <div className="home h-screen w-full bg-black">
        <div className="max-w-screen-lg flex flex-col items-center justify-center md:flex-row h-full">
          <div className="flex flex-col items-start md:items-start justify-center md:text-left h-full md:mt-0 p-4 md:p-24">
            <h2 className="text-3xl md:text-5xl text-neutral-300 font-thin">
              Hi,I'm{" "}
              <ReactTyped
                strings={["Yash Malavde", "Web Developer"]}
                typeSpeed={150}
                backSpeed={25}
                loop
                className="text-3xl md:text-5xl font-regular bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-orange-400 to-orange-600"
              ></ReactTyped>
            </h2>
            <br />

            <p className="text-sm md:text-xl font-regular text-left md:text-left text-md md:maxw-lg w-full text-neutral-500">
              I'm a{" "}
              <span className="text-lg bg-clip-text text-transparent duration-300 font-extrabold bg-orange-500 ">
                Full Stack Web Developer
              </span>
              .<br />I have 3 to 4 Years of Experience in Web Development and
              also good amount of knowledge of the Web Technologies.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-6">
              {/* <button className="bg-cyan-600 group font-semibold flex items-center justify-center gap-4 p-4 rounded-md cursor-pointer duration-700 max-w-full">
                Projects <FaArrowRight className=" group-hover:rotate-90 duration-500 " />
              </button> */}

              <button className="bg-gradient-to-l from-orange-500 to-orange-700 hover:bg-white text-white  group gap-4 font-semibold flex items-center justify-center p-4 rounded-lg cursor-pointer duration-100">
                <a
                  href={YashResume}
                  download={true}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume{" "}
                </a>
                <div className="">
                  <FaRegFilePdf size={25} className="font-extrabold group-hover:text-black duration-500 " />
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center bg-blue-500 bg-opacity-20 max-h-full max-w-full rounded-full object-fill">
            <img
              src={yashbg}
              width={250}
              height={250}
              alt=""
              className="hidden md:visiblehover:scale-110 duration-700 object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

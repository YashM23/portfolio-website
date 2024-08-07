import React, { useState } from "react";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { RiNodejsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandSocketIo } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { Circle, Line } from "rc-progress-modern";

const skills_Icon = [
  {
    id: 0,
    skill: "HTML",
    description:
      "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.",
    amount: 80,
    icon: (
      <IoLogoHtml5 className="text-4xl md:text-5xl text-orange-600 text-center" />
    ),
    logocolor: "text-orange-600",
    amountcolor: "bg-orange-600",
    hexcode: "#ea580c",
  },
  {
    id: 1,
    skill: "CSS",
    description:
      "CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML).",
    amount: 80,
    icon: (
      <IoLogoCss3 className="text-4xl md:text-5xl text-blue-600 text-center" />
    ),
    logocolor: "text-blue-600",
    amountcolor: "bg-blue-600",
    hexcode: "#2563eb",
  },
  {
    id: 2,
    skill: "JavaScript",
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages",

    amount: 60,
    icon: (
      <RiJavascriptFill className="text-4xl md:text-5xl text-yellow-400 text-center" />
    ),
    logocolor: "text-yellow-400",
    amountcolor: "bg-yellow-400",
    hexcode: "#facc15",
  },
  {
    id: 3,
    skill: "ReactJS",
    description:
      "React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library.",

    amount: 60,
    icon: (
      <RiReactjsFill className="text-4xl md:text-5xl text-blue-400 text-center" />
    ),
    logocolor: "text-blue-400",
    amountcolor: "bg-blue-400",
    hexcode: "#60a5fa",
  },
  {
    id: 4,
    skill: "TailwindCSS",
    description:
      "Tailwind CSS is a design system implementation in pure CSS. It is also configurable. It gives developers super powers. It allows them to build websites with a clean consistent UI out of the box.",

    amount: 80,
    icon: (
      <RiTailwindCssFill className="text-4xl md:text-5xl text-blue-400 text-center" />
    ),
    logocolor: "text-blue-500",
    amountcolor: "bg-blue-400",
    hexcode: "#3b82f680",
  },
  {
    id: 5,
    skill: "NodeJS",
    description:
      "Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.",

    amount: 60,
    icon: (
      <RiNodejsFill className="text-4xl md:text-5xl text-green-600 text-center" />
    ),
    logocolor: "text-white",
    amountcolor: "bg-green-600",
    hexcode: "#16a34a",
  },
  {
    id: 6,
    skill: "ExpressJS",
    description:
      " Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.",

    amount: 60,
    icon: <SiExpress className="text-4xl md:text-5xl text-white text-center" />,
    logocolor: "text-white",
    amountcolor: "bg-white",
    hexcode: "#ffffff",
  },
  {
    id: 7,
    skill: "MongoDB",
    description:
      "MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.",

    amount: 80,
    icon: (
      <BiLogoMongodb className="text-4xl md:text-5xl text-green-600 text-center" />
    ),
    logocolor: "text-white",
    amountcolor: "bg-green-600",
    hexcode: "#16a34a",
  },
  {
    id: 8,
    skill: "NextJS",
    description:
      "Next.js is a flexible React framework that gives you building blocks to create fast, full-stack web applications.",

    amount: 50,
    icon: (
      <RiNextjsFill className="text-4xl md:text-5xl text-white text-center" />
    ),
    logocolor: "text-white",
    amountcolor: "bg-white",
    hexcode: "#ffffff",
  },

  {
    id: 9,
    skill: "Python",
    description:
      "Python is commonly used for developing websites and software, task automation, data analysis, and data visualisation.",

    amount: 70,
    icon: (
      <FaPython className="text-4xl md:text-5xl text-yellow-500 text-center" />
    ),
    logocolor: "text-white",
    amountcolor: "bg-yellow-500",
    hexcode: "#eab308",
  },
  {
    id: 10,
    skill: "Redis",
    description:
      "Redis is an open source in-memory data store that can be used as a database, cache, or message broker. It's often used for caching web pages and reducing the load on servers.",

    amount: 40,
    icon: <DiRedis className="text-4xl md:text-5xl text-red-700 text-center" />,
    logocolor: "text-white",
    amountcolor: "bg-red-700",
    hexcode: "#b91c1c",
  },

  {
    id: 11,
    skill: "Socket IO",
    description:
      "Socket.IO was created in 2010. It was developed to use open connections to facilitate realtime communication, still a relatively new phenomenon at the time.",

    amount: 50,
    icon: (
      <TbBrandSocketIo className="text-4xl md:text-5xl text-white text-center" />
    ),
    logocolor: "text-white",
    amountcolor: "bg-white",
    hexcode: "#ffffff",
  },
];

const Skills = () => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();

  const showModal = (id) => {
    setModal(!modal);

    const data = skills_Icon.find((skill) => skill.id === id);
    setModalData(data);
  };

  return (
    <div className="skills h-full flex flex-col justify-between items-center bg-black py-10">
      <div className=" font-bold text-white w-full pt-20">
        <h2 className="text-4xl font-bold text-orange-400 text-center">
          Skills
        </h2>

        <p className="text-neutral-600 text-center text-sm mt-2">
          Click on any skill to know more.
        </p>

        <div className="flex flex-col justify-center items-center text-center mt-2">
          <div className="h-full max-w-full">
            {/* <h2 className="font-regular text-2xl md:text-3xl text-neutral-400">Front-End</h2> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 gap-y-6 gap-x-4 mt-2">
              {skills_Icon.map(
                ({ id, skill, amount, icon, logocolor, amountcolor, desc }) => (
                  <>
                    <div
                      key={id}
                      onClick={() => {
                        showModal(id);
                      }}
                      className={`border-2 border-neutral-600 hover:bg-orange-600/15 duration-500 flex items-center cursor-pointer p-3 rounded-xl`}
                    >
                      <div className=" flex justify-center items-center">
                        {/* <IoLogoHtml5 className="text-5xl text-center" /> */}
                        {icon}
                      </div>

                      <div className="w-28 md:w-36 border-l-2 border-neutral-500 ml-4">
                        <p className="text-right font-regular font-bold text-sm md:text-xl text-neutral-400">
                          {skill} <br />{" "}
                          <span
                            className={` font-signature text-transparent bg-clip-text font-bold ${amountcolor}`}
                          >
                            {amount}%
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                )
              )}

              {/* MODAL WHICH SHOW SKILLS */}
              {modal && (
                <>
                  <SkillsModal
                    modalData={modalData}
                    modal={modal}
                    setModal={setModal}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsModal = ({ modalData, modal, setModal }) => {
  // console.log(data);
  return (
    <>
      <div className="fixed inset-0 bg-white/5 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="relative bg-black max-w-xs sm:max-w-2xl flex justify-center items-center rounded-2xl">
          <div
            onClick={() => {
              setModal(!modal);
            }}
            className="text-red-500 hover:text-red-900 duration-500 text-3xl p-4 absolute right-0 top-0"
          >
            <IoIosRemoveCircleOutline />
          </div>
          <div className="w-1/3 flex justify-center items-center ">
            <div className="flex justify-center items-center p-4 ">
              <p className="">{modalData.icon}</p>
            </div>
          </div>

          <div className="w-2/3 h-full py-4 md:px-4 flex flex-col justify-center">
            <div className="text-left md:mt-10">
              <h2 className="text-xl md:text-2xl text-neutral-200">
                {modalData.skill}
              </h2>
            </div>

            <div className="text-left my-4">
              <p className="font-normal font-regular text-xs md:text-base text-neutral-500">
                {modalData.description}
              </p>
            </div>

            <div className="py-2">
              <p className="font-signature text-right text-md md:text-xl">
                <span className={`text-neutral-500 ${modalData.logocolor}`}>
                  {modalData.amount}%
                  <Line
                    strokeWidth={2}
                    trailWidth={2}
                    strokeColor={modalData.hexcode}
                    trailColor="#000000"
                    percent={modalData.amount}
                    className={` ${modalData.logocolor}`}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

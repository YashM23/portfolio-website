import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import realestate from "../images/Real-estate.png";
import EMSApp from "../images/EMS.png";
import Weather from "../images/Weather-App.png";
import Quotes from "../images/Quotes-generator.png";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const ProjectList = [
  {
    id: 0,
    title: "Real Estate Recommendation System",
    details:
      "Guiding as Web Developer to define Full Stack Web Development scope, objectives, and KPIs, ensuring seamless collaboration between tech and business teams. Dual role as Machine Learning Developer, driving algorithm selection, implementation, and continuous optimization for accurate personalized recommendations. ",
    img: realestate,
    techstack: ["NextJS", "TailwindCSS", "MongoDB", "Python"],
    link: "https://github.com/YashM23/Real-Estate-Recommendation-System",
  },
  {
    id: 3,
    title: "Employee Management System",
    details:
      "Developed a full-stack application for managing employee records with functionalities to add, delete, and edit employee details.Implemented a responsive frontend with React.js, a robust backend with Node.js and Express.js, and a scalable database using MongoDB. ",
    img: EMSApp,
    techstack: [
      "MongoDB",
      "ExpressJS",
      "ReactJS",
      "NodeJS",
      "TailwindCSS",
      "Axios",
    ],
    link: "https://github.com/YashM23/EMS-Employee-Management-System",
  },
  {
    id: 1,
    title: "Weather Forecast App",
    details:
      "Designed and developed a dynamic weather application, leveraging ReactJS to provide users with real-time weather updates and forecast. Implemented real-time data integration from reliable weather APIs, offering users up-to-date weather information.",
    img: Weather,
    techstack: ["ReactJS", "TailwindCSS", "Axios"],
    link: "https://github.com/YashM23/Weather-App-ReactJS",
  },
  {
    id: 2,
    title: "Random Quotes Generator",
    details:
      "Conceptualized, designed, and developed a dynamic web application using ReactJS that generates inspirational quotes through API integration. This project showcases my proficiency in front-end development, API utilization, and user experience enhancement.",
    img: Quotes,
    techstack: ["ReactJS", "TailwindCSS", "Axios"],
    link: "https://github.com/YashM23/Random-Quotes-Generator-ReactJS",
  },
];

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  // console.log(modalData)

  const showProjectDetails = (id) => {
    setModal(!modal);

    const data = ProjectList.find((project) => project.id === id);
    setModalData(data);
  };

  return (
    <div className="projects h-full flex flex-col items-center pt-16 bg-black ">
      <div className="text-3xl sm:text-4xl font-bold text-orange-400 pt-10">
        Projects
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center mt-4 py-10 px-10 sm:px-32 md:px-12 lg:px-40">
        {ProjectList.map((project, index) => (
          <>
            <div
              key={index}
              className="bg-neutral-200/10 flex-col md:flex-row rounded-2xl max-w-xl"
            >
              <div className="h-52 relative overflow-hidden rounded-t-xl">
                <img
                  src={project.img}
                  alt=""
                  className="object-cover h-full w-full"
                />
                <h2
                  onClick={() => {
                    showProjectDetails(project.id);
                  }}
                  className=" absolute w-full bottom-0 text-left font-bold cursor-pointer hover:underline hover:underline-offset-8 p-4 text-white bg-gradient-to-t from-black to-transparent text-xl sm:text-2xl md:text-xl lg:text-2xl "
                >
                  {project.title}
                </h2>
              </div>

              <div className="p-4">
                <p className="text-neutral-400 text-xs sm:text-xs md:text-base line-clamp-2 text-justify mt-5">
                  {project.details}
                </p>
              </div>

              <div className="w-full">
                <p className="ml-4 text-left text-neutral-500 font-bold sm:text-sm md:text-base">
                  Technologies Used :
                </p>

                <div className="mb-2 flex items-center justify-start p-4 gap-2 w-[75vw] sm:w-[320px] md:w-[420px] overflow-x-auto no-scrollbar">
                  {project.techstack.map((tech, index) => (
                    <>
                      <p
                        key={index}
                        className="p-2 cursor-pointer border-2 border-neutral-600 hover:bg-orange-500/40 hover:text-white hover:scale-95 duration-300  rounded-full text-neutral-400 text-xs sm:text-xs md:text-xs lg:text-sm text-center"
                      >
                        {tech}
                      </p>
                    </>
                  ))}
                </div>
              </div>

              <div className="p-4 w-full border-t-2 border-neutral-600 flex justify-end">
                {/* GITHUB BUTTON */}
                <button
                  onClick={() => {
                    window.open(project.link);
                  }}
                  className="text-neutral-500 hover:text-orange-500 hover:underline hover:underline-offset-4 duration-300 font-bold flex items-center text-sm md:text-base mr-6"
                >
                  Open in Github{" "}
                  <span className="ml-2">
                    {" "}
                    <FaGithub size={30} className="" />
                  </span>
                </button>

                {/* SHOW MORE BUTTON */}
                <button
                  className="text-neutral-500 hover:text-orange-500 hover:underline hover:underline-offset-4 duration-300 font-bold "
                  onClick={() => {
                    showProjectDetails(project.id);
                  }}
                >
                  Show More
                </button>
              </div>
            </div>
          </>
        ))}

        {modal && (
          <ProjectsModal
            modalData={modalData}
            modal={modal}
            setModal={setModal}
          />
        )}
      </div>
    </div>
  );
};

const ProjectsModal = ({ modalData, modal, setModal }) => {
  return (
    <>
      <div className="fixed inset-0 bg-neutral-900/5 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="relative bg-neutral-900 w-[80vw] sm:max-w-2xl h-[60vh] sm:h-fit flex flex-col justify-center items-start sm:flex-col rounded-md overflow-hidden">
          {/* TOGGLE MODAL */}
          <div
            onClick={() => {
              setModal(!modal);
            }}
            className="text-red-500 hover:text-red-900 duration-500 cursor-pointer text-3xl p-4 absolute right-0 top-0"
          >
            <IoIosRemoveCircleOutline />
          </div>

          {/* IMAGE SECTION */}
          <div className="h-full overflow-hidden bg-transparent">
            <div className="">
              <img
                src={modalData.img}
                height={100}
                width={100}
                className="object-contain h-full w-full"
              />
            </div>
          </div>

          {/* Description SECTION */}
          <div className="w-full h-full py-4 sm:py-10 sm:px-10 flex flex-col ml-5 sm:ml-0 sm:bg-white/5">
            <div className="text-left">
              <h2 className=" text-lg sm:text-2xl md:text-2xl font-bold text-neutral-200 w-64 sm:w-96 text-wrap">
                {modalData.title}
              </h2>
            </div>

            <div className="text-left my-4 pr-2 w-full">
              <p className="font-normal font-regular w-[70vw] sm:w-[35vw] text-justify text-[10px] sm:text-[14px] text-neutral-500">
                {modalData.details}
              </p>
            </div>

            <div className="py-2">
              <div className="mb-2 flex items-center justify-start gap-2 w-[80vw] sm:w-[390px] overflow-x-auto no-scrollbar">
                {modalData.techstack.map((tech, index) => (
                  <>
                    <p
                      key={index}
                      className="p-2 cursor-pointer border-2 border-neutral-600 hover:bg-orange-500/70 hover:text-white duration-300  rounded-lg text-neutral-400 text-xs sm:text-xs md:text-xs lg:text-sm text-center"
                    >
                      {tech}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

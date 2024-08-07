import React from "react";
import { FaGithub } from "react-icons/fa";
import realestate from "../images/Real-estate.png";
import EMSApp from "../images/EMS.png";
import Weather from "../images/Weather-App.png";
import Quotes from "../images/Quotes-generator.png";

const ProjectList = [
  {
    id: 0,
    title: "Real Estate Recommendation System",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam nostrum optio iure, corporis aut libero cumque aliquid corrupti eius blanditiis aliquam dignissimos eos dicta quas ipsa dolorem ipsam! Veritatis dolorem molestiae placeat. Accusamus.",
    img: realestate,
    techstack: ["NextJS", "TailwindCSS", "MongoDB", "Python"],
    link: "https://github.com/YashM23/Real-Estate-Recommendation-System",
  },
  {
    id: 1,
    title: "Weather Forecast App",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam nostrum optio iure, corporis aut libero cumque aliquid corrupti eius blanditiis aliquam dignissimos eos dicta quas ipsa dolorem ipsam! Veritatis dolorem molestiae placeat. Accusamus.",
    img: Weather,
    techstack: ["ReactJS", "TailwindCSS", "Axios"],
    link: "https://github.com/YashM23/Weather-App-ReactJS",
  },
  {
    id: 2,
    title: "Random Quotes Generator",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam nostrum optio iure, corporis aut libero cumque aliquid corrupti eius blanditiis aliquam dignissimos eos dicta quas ipsa dolorem ipsam! Veritatis dolorem molestiae placeat. Accusamus.",
    img: Quotes,
    techstack: ["ReactJS", "TailwindCSS", "Axios"],
    link: "https://github.com/YashM23/Random-Quotes-Generator-ReactJS",
  },
  {
    id: 3,
    title: "Employee Management System",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam nostrum optio iure, corporis aut libero cumque aliquid corrupti eius blanditiis aliquam dignissimos eos dicta quas ipsa dolorem ipsam! Veritatis dolorem molestiae placeat. Accusamus.",
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
];

const Projects = () => {
  return (
    <div className="projects h-full flex flex-col items-center pt-20 bg-black ">
      <div className="text-4xl font-bold text-orange-400 pt-10">Projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-center mt-4  py-10 px-20 sm:px-32 md:px-12 lg:px-52">
        {ProjectList.map((project, index) => (
          <>
            <div
              key={project.id}
              className="bg-neutral-200/10 flex-col md:flex-row rounded-2xl max-w-xl"
            >
              <div className="h-60 relative overflow-hidden rounded-t-xl">
                <img
                  src={project.img}
                  alt=""
                  className="hover:scale-105 duration-700 object-cover h-full w-full"
                />
                <h2 className=" absolute w-full bottom-0 text-left font-bold p-4 text-white bg-gradient-to-t from-black/90 to-transparent text-xl sm:text-2xl md:text-xl lg:text-2xl ">
                  {project.title}
                </h2>
              </div>
              <div className="py-4 px-2">
                <p className="text-neutral-400 text-xs sm:text-xs md:text-sm text-left p-2">
                  {project.details}
                </p>
              </div>

              <div className="w-full">
                <p className="ml-4 text-left text-neutral-500 font-bold sm:text-sm md:text-base">
                  Technologies Used :{" "}
                </p>

                <div className="mb-2 flex items-center justify-start p-4 gap-2 w-full overflow-x-auto no-scrollbar">
                  {project.techstack.map((tech, index) => (
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

              <div className="p-4 w-full border-t-2 border-neutral-600 flex justify-end">
                <button
                  onClick={() => {
                    window.open(project.link);
                  }}
                  className="text-neutral-500 hover:text-orange-500 duration-300 font-bold flex items-center text-sm md:text-base"
                >
                  Open Github{" "}
                  <span className="ml-2">
                    {" "}
                    <FaGithub size={25} />
                  </span>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;

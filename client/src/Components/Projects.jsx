import React from "react";

const ProjectList = [
  {
    id: 0,
    title: "Real Estate Recommendation System",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam nostrum optio iure, corporis aut libero cumque aliquid corrupti eius blanditiis aliquam dignissimos eos dicta quas ipsa dolorem ipsam! Veritatis dolorem molestiae placeat. Accusamus.",
    img: "",
    techstack: ["NextJS", "TailwindCSS", "MongoDB", "Python"],
  },
  {
    id: 1,
    title: "Weather Forecast App",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam nostrum optio iure, corporis aut libero cumque aliquid corrupti eius blanditiis aliquam dignissimos eos dicta quas ipsa dolorem ipsam! Veritatis dolorem molestiae placeat. Accusamus.",
    img: "",
    techstack: ["ReactJS", "TailwindCSS", "Axios"],
  },
  {
    id: 2,
    title: "Random Quotes Generator",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam nostrum optio iure, corporis aut libero cumque aliquid corrupti eius blanditiis aliquam dignissimos eos dicta quas ipsa dolorem ipsam! Veritatis dolorem molestiae placeat. Accusamus.",
    img: "",
    techstack: ["ReactJS", "TailwindCSS", "Axios"],
  },
  {
    id: 3,
    title: "Multi Apps Originator",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam nostrum optio iure, corporis aut libero cumque aliquid corrupti eius blanditiis aliquam dignissimos eos dicta quas ipsa dolorem ipsam! Veritatis dolorem molestiae placeat. Accusamus.",
    img: "",
    techstack: ["Python"],
  },
];

const Projects = () => {
  return (
    <div className="projects h-full flex flex-col items-center pt-10 bg-black ">
      <div className="text-4xl font-bold text-orange-400 pt-10">Projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 text-center mt-4 px-14 py-10">
        {ProjectList.map((project, index) => (
          <>
            <div
              key={project.id}
              className="bg-neutral-200/10 flex-col md:flex-row rounded-2xl max-w-xl"
            >
              <div className="h-60 relative overflow-hidden rounded-t-xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                  alt=""
                  className="hover:scale-105 duration-700 object-cover h-full w-full"
                />
                <h2 className=" absolute w-full bottom-0 text-center font-bold p-6  text-white bg-gradient-to-t from-black/70 to-transparent text-2xl sm:text-2xl md:text-2xl lg:text-2xl ">
                  {project.title}
                </h2>
              </div>
              <div className="py-4 px-2">
                <p className="text-neutral-400 text-xs sm:text-sm  text-left p-2">
                  {project.details}
                </p>
              </div>

              <div className="p-4">
                <p className="text-center mb-4 text-neutral-500 font-bold">Technologies Used : </p>
                
                <div className="flex justify-center sm:justify-center md:justify-center p-2 gap-2">
                  {project.techstack.map((tech, index) => (
                    <>
                      <p
                        key={index}
                        className="p-2 border-2 border-neutral-600 hover:bg-orange-500 duration-300 hover:text-black rounded-full text-neutral-400 text-xs sm:text-xs md:text-sm lg:text-base"
                      >
                        {tech}
                      </p>
                    </>
                  ))}
                </div>
              </div>

              <div className="p-4 w-full border-t-2 border-neutral-600 text-right">
                <button className="text-neutral-500 hover:text-orange-500 duration-300 font-bold ">
                  Click to know more
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

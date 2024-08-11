import React from "react";

const Education = [
  {
    id: "asdflasdlflas",
    year: "2024",
    course: "B.E./B.Tech",
    clgname: "St. Francis Institute Of Technology,Borivali(W)",
    marks: "7.5 CGPA",
  },
  {
    id: "asdflasdlflasasfjadf",
    year: "2020",
    course: "XII",
    clgname: "J.H. Poddar Junior College Of Science & Commerce,Bhayandar(W)",
    marks: "73%",
  },
  {
    id: "sdLJHFsdfnfljs",
    year: "2018",
    course: "X",
    clgname: "Our Lady Of Nazareth High School,Bhayandar(W)",
    marks: "85%",
  },
];

const Hobbies = [
  { id: 0, name: "Programming" },
  { id: 1, name: "Music Production" },
  { id: 2, name: "Musical Instrument" },
  { id: 3, name: "Being a DJ" },
  { id: 4, name: "Sports" },
  { id: 5, name: "Exercise" },
  { id: 6, name: "Photography" },
  { id: 7, name: "Travel" },
];

const About = () => {
  return (
    <div className="about h-full w-full bg-black py-10 ">
      <div className="pt-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-400 text-center p-4">
          About Me
        </h2>
      </div>

      <div className="md:p-2 flex flex-col justify-center items-center mt-4">
        <div className="">
          <h2 className="text-sm sm:text-lg md:text-xl text-center font-regular text-neutral-200 p-4">
            This Table will tell you the information about my{" "}
            <span className="bg-orange-600 text-transparent bg-clip-text font-extrabold">
              Educational Background
            </span>
            .
          </h2>
        </div>

        <div className="">
          <table className="">
            <thead className="text-center bg-neutral-700 text-white border-b-2 border-gray-400 ">
              <tr className=" text-xs sm:text-lg md:text-xl">
                <th className="p-1 sm:p-3 text-left tracking-wide ">College Name</th>
                <th className="p-1 sm:p-3 text-left tracking-wide ">Course</th>
                <th className="p-1 sm:p-3 text-left tracking-wide ">Marks</th>
                <th className="p-1 sm:p-3 text-left tracking-wide ">Passing Year</th>
              </tr>
            </thead>

            <tbody className="">
              {Education.map(({ id, year, clgname, course, marks }) => (
                <>
                  <tr
                    key={id}
                    className={`border-b-2 border-gray-600 text-neutral-500 font-semibold text-center `}
                  >
                    <td className="p-2 sm:p-4 text-left text-[9px] sm:text-sm md:text-base">{clgname}</td>
                    <td className="p-2 sm:p-4 text-left text-[9px] sm:text-sm md:text-base">{course}</td>
                    <td className="p-2 sm:p-4 text-left text-[9px] sm:text-sm md:text-base">{marks}</td>
                    <td className="p-2 sm:p-4 text-left text-[9px] sm:text-sm md:text-base">{year}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        <div>
          <h2 className="text-white text-center p-4 text-lg md:text-2xl">
            My{" "}
            <span className="bg-orange-600 text-transparent bg-clip-text font-extrabold">
              Hobbies
            </span>{" "}
            are :
          </h2>
        </div>

        <div className="w-[350px] sm:w-[600px] md:w-[800px] flex justify-start items-center gap-2 p-2 overflow-scroll no-scrollbar">
          {Hobbies.map(({ id, name }) => (
            <div className="border-2 border-neutral-600 rounded-full hover:bg-orange-600/60 hover:scale-90 duration-300 text-center">
              <p className="text-white p-4 text-nowrap text-xs sm:text-base" key={id}>
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

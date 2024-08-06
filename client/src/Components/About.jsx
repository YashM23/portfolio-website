import React from "react";

const Education = [
  {
    id: 0,
    year: "2024",
    course: "B.E./B.Tech",
    clgname: "St. Francis Institute Of Technology,Borivali(W)",
    marks: "7.6 CGPA",
  },
  {
    id: 1,
    year: "2020",
    course: "XII",
    clgname: "J.H. Poddar Junior College Of Science & Commerce,Bhayandar(W)",
    marks: "73%",
  },
  {
    id: 2,
    year: "2018",
    course: "X",
    clgname: "Our Lady Of Nazareth High School,Bhayandar(W)",
    marks: "85%",
  },
];

const Hobbies = [
  { id: 0, name: "Programming" },
  { id: 1, name: "Music Production" },
  { id: 2, name: "Photography" },
  { id: 3, name: "Sports" },
];

const About = () => {
  return (
    <div className="about h-full w-full bg-black py-10 ">
      <div className="pt-6">
        <h2 className="text-4xl font-bold text-orange-400 text-center p-4">
          About Me
        </h2>
      </div>

      <div className="md:p-2 flex flex-col justify-center items-center mt-4">
        <div className="">
          <h2 className="text-lg md:text-xl text-center font-regular text-neutral-200 p-4">
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
              <tr className=" text-md sm:text-lg md:text-xl">
                <th className="p-2">College Name</th>
                <th className="p-2">Course</th>
                <th className="p-2">Marks</th>
                <th className="p-2">Passing Year</th>
              </tr>
            </thead>

            <tbody className="">
              {Education.map(({ id, year, clgname, course, marks }) => (
                <>
                  <tr
                    key={id}
                    className={`border-b-2 border-gray-600 text-neutral-500 font-semibold text-center `}
                  >
                    <td className="p-2 md:p-4 text-xs sm:text-sm md:text-lg">{clgname}</td>
                    <td className="p-2 md:p-4 text-xs sm:text-sm md:text-lg">{course}</td>
                    <td className="p-2 md:p-4 text-xs sm:text-sm md:text-lg">{marks}</td>
                    <td className="p-2 md:p-4 text-xs sm:text-sm md:text-lg">{year}</td>
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
            are listed below :{" "}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 overflow-hidden">
          {Hobbies.map(({ id, name }) => (
            <div className="border-2 border-neutral-600 rounded-full p-3 hover:bg-gray-800 duration-500 m-2 text-center">
              <p className="text-white" key={id}>
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

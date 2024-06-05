import React from "react";
import illustration from "../img/Under construction-amico.png";

const Project = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-center items-center m-5 p-3 sm:m-7 sm:p-10 md:p-15 semilarge:px-32 semilarge:m-15  semilarge:gap-20 gap-5 sm:gap-12 md:gap-15 transition-all duration-500 ease-in-out bg-color-body h-screen"
      id="project"
    >
      <div className="flex flex-col text-left w-2/3 md:w-6/12 gap-6 rounded overflow-hidden object-contain">
        <img className="" src={illustration} alt="coding" />
      </div>
      <div className="w-full md:w-6/12 flex justify-center text-center md:text-left">
        <h1 className="text-gray-800 font-bold text-2xl">
          New projects coming soon!
        </h1>
      </div>
    </section>
  );
};

export default Project;

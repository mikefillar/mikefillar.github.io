import React from "react";
import illustration from "../img/Under construction-amico.png";

const Project = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-center items-center m-5 px-28 semilarge:m-15 semilarge:px-32 md:m-10 md:p-5 semilarge:gap-24 gap-5 md:gap-20 h-screen transition-all duration-500 ease-in-out bg-color-body"
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

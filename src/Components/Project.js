import React from "react";
// import illustration from "../img/Under construction-amico.png";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";

const Project = () => {
  return (
    <section
      className="grid md:grid-cols-2 md:flex-row justify-center items-center m-5 p-3 sm:m-7 sm:p-10 md:p-15 semilarge:px-32 semilarge:m-15  semilarge:gap-20 gap-5 sm:gap-12 md:gap-15 h-full"
      id="project"
    >
      <div className="w-full flex flex-col gap-4 justify-start text-center md:text-left">
        <a className="text-blue-500 font-bold text-2xl cursor-pointer">
          Student Management System
        </a>
        <p className="text-gray-600 text-sm sm:text-base semilarge:text-lg large:text-xl">
          This application provides an efficient way to manage students. The
          application allows users to add new students including relevant data
          such as student name, gender, address, phone number and email. The
          users can also update and delete specified student making it easier to
          manage students.
        </p>

        <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
          <a
            href="https://github.com/mikefillar/school-of-school"
            target="_blank"
            className="text-3xl text-blue-500 hover:scale-110 transition-all duration-200 ease-linear"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
        <ul className="flex gap-4 justify-center items-center md:justify-start md:items-start flex-wrap">
          <li className="text-gray-600 text-sm sm:text-base">Bootstrap5</li>
          <li className="text-gray-600 text-sm sm:text-base">CSS</li>
          <li className="text-gray-600 text-sm sm:text-base">Handlebars.JS</li>
          <li className="text-gray-600 text-sm sm:text-base">Node.JS</li>
          <li className="text-gray-600 text-sm sm:text-base">Express.JS</li>
          <li className="text-gray-600 text-sm sm:text-base">Jasonwebtoken</li>
          <li className="text-gray-600 text-sm sm:text-base">Cookie-parser</li>
        </ul>
      </div>
      <div className="flex flex-col text-left gap-6 rounded overflow-hidden shadow-md shadow-gray-600">
        <a className="cursor-pointer">
          <img className="" src={project2} alt="coding" />
        </a>
      </div>
      {/* car rental */}
      <div className="flex flex-col text-left gap-6 rounded overflow-hidden shadow-md shadow-gray-600">
        <a href="https://mikefillar.github.io/car-rental-ph" target="_blank">
          <img className="" src={project1} alt="coding" />
        </a>
      </div>
      <div className="w-full flex flex-col gap-4 justify-start text-center md:text-left">
        <a
          href="https://mikefillar.github.io/car-rental-ph"
          target="_blank"
          className="text-blue-500 font-bold text-2xl"
        >
          Car Rental PH
        </a>
        <p className="text-gray-600 text-sm sm:text-base semilarge:text-lg large:text-xl">
          This application provides an efficient way to simplifies booking,
          allowing you to choose cars, pickup locations, select dates, and view
          transparent pricing.
        </p>

        <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
          <a
            href="https://mikefillar.github.io/car-rental-ph"
            target="_blank"
            className="text-3xl text-blue-500 hover:scale-110 transition-all duration-200 ease-linear"
          >
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
          </a>
          <a
            href="https://github.com/mikefillar/mikefillar.github.io"
            target="_blank"
            className="text-3xl text-blue-500 hover:scale-110 transition-all duration-200 ease-linear"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
        <ul className="flex gap-4 justify-center items-center md:justify-start md:items-start flex-wrap">
          <li className="text-gray-600 text-sm sm:text-base">React.JS</li>
          <li className="text-gray-600 text-sm sm:text-base">TailwindCSS</li>
          <li className="text-gray-600 text-sm sm:text-base">
            React Router Dom
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Project;

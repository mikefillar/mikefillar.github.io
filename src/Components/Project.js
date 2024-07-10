import React from "react";
// import illustration from "../img/Under construction-amico.png";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project from "../img/project.png";
import project3 from "../img/project3.png";

const Project = () => {
  return (
    <section
      className="m-5 p-3 sm:m-7 sm:p-10 md:p-15 semilarge:px-32 semilarge:m-15 h-full"
      id="project"
    >
      {/* fruitshop */}
      <div className="relative w-full h-auto md:h-screen py-20 mb-10 md:mb-0">
        <div className="static md:absolute left-0 w-full md:w-5/6 rounded shadow-md shadow-gray-600 md:hover:z-20 md:hover:scale-105 transition-all duration-400 ease-linear ">
          <a href="http://fruitshopph.free.nf/" target="_blank">
            <img className="" src={project3} alt="coding" />
          </a>
        </div>
        <div className="static md:absolute right-0 mt-10 md:mt-0 md:bg-blue-300 rounded md:p-10 bottom-10 z-10 w-full md:w-5/6 xl:w-3/5 flex flex-col gap-4 justify-start text-center md:text-left">
          <a
            target="_blank"
            href="http://fruitshopph.free.nf/"
            className="text-black font-bold text-2xl hover:underline transition-all duration-200 ease-linear"
          >
            Fruit Shop PH
          </a>
          <p className="text-black text-sm sm:text-base semilarge:text-lg large:text-xl">
            This application has user and admin pages. The application allows
            the admin to add, update and delete fruits while the users can view
            added fruits.
          </p>
          <p>
            <b>User Link : </b>
            <a
              className="hover:underline"
              href="http://fruitshopph.free.nf/"
              target="_blank"
            >
              http://fruitshopph.free.nf/
            </a>
          </p>
          <p>
            <b>Admin Link : </b>
            <a
              className="hover:underline"
              href="http://fruitshopph.free.nf/admin.php"
              target="_blank"
            >
              http://fruitshopph.free.nf/admin.php
            </a>
          </p>
          <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
            {/* <a
              href="https://school-of-school.onrender.com/"
              target="_blank"
              className="text-3xl text-black hover:scale-110 transition-all duration-200 ease-linear"
            >
              <ion-icon name="exit-outline"></ion-icon>
            </a> */}
            <a
              href="https://github.com/mikefillar/fruit-shop-ph"
              target="_blank"
              className="text-3xl text-black hover:scale-110 transition-all duration-200 ease-linear"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
          <ul className="flex gap-4 justify-center items-center md:justify-start md:items-start flex-wrap">
            <li className="text-black text-sm sm:text-base">TailwindCSS</li>
            <li className="text-black text-sm sm:text-base">PHP</li>
            <li className="text-black text-sm sm:text-base">MySQL</li>
          </ul>
        </div>
      </div>
      {/* student ms */}
      <div className="relative w-full h-auto md:h-screen py-20 mb-10 md:mb-0 ">
        <div className="static md:absolute left-0 w-full md:w-5/6 rounded shadow-md shadow-gray-600 md:hover:z-20 md:hover:scale-105 transition-all duration-400 ease-linear">
          <a href="https://school-of-school.onrender.com/" target="_blank">
            <img className="" src={project2} alt="coding" />
          </a>
        </div>
        <div className="static md:absolute right-0 mt-10 md:mt-0 md:bg-blue-300 rounded md:p-10 bottom-10 z-10 w-full md:w-5/6 xl:w-3/5 flex flex-col gap-4 justify-start text-center md:text-left">
          <a
            href="https://school-of-school.onrender.com/"
            className="text-black font-bold text-2xl hover:underline transition-all duration-200 ease-linear"
          >
            Student Management System
          </a>
          <p className="text-black text-sm sm:text-base semilarge:text-lg large:text-xl">
            This application provides an efficient way to manage students. The
            application allows users to add new students including relevant data
            such as student name, gender, address, phone number and email. The
            users can also update and delete specified student making it easier
            to manage students.
          </p>

          <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
            {/* <a
              href="https://school-of-school.onrender.com/"
              target="_blank"
              className="text-3xl text-black hover:scale-110 transition-all duration-200 ease-linear"
            >
              <ion-icon name="exit-outline"></ion-icon>
            </a> */}
            <a
              href="https://github.com/mikefillar/school-of-school"
              target="_blank"
              className="text-3xl text-black hover:scale-110 transition-all duration-200 ease-linear"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
          <ul className="flex gap-4 justify-center items-center md:justify-start md:items-start flex-wrap">
            <li className="text-black text-sm sm:text-base">Bootstrap5</li>
            <li className="text-black text-sm sm:text-base">CSS</li>
            <li className="text-black text-sm sm:text-base">Handlebars.JS</li>
            <li className="text-black text-sm sm:text-base">Node.JS</li>
            <li className="text-black text-sm sm:text-base">Express.JS</li>
            <li className="text-black text-sm sm:text-base">Jasonwebtoken</li>
            <li className="text-black text-sm sm:text-base">Cookie-parser</li>
            <li className="text-black text-sm sm:text-base">MySQL</li>
          </ul>
        </div>
      </div>
      {/* car rental */}
      <div className="relative w-full h-auto md:h-screen py-20">
        <div className="static md:absolute left-0 w-full md:w-5/6 rounded shadow-md shadow-gray-600 md:hover:z-20 md:hover:scale-105 transition-all duration-400 ease-linear">
          <a href="https://mikefillar.github.io/car-rental-ph" target="_blank">
            <img className="" src={project1} alt="coding" />
          </a>
        </div>
        <div className="static md:absolute right-0 mt-10 md:mt-0 md:bg-blue-300 rounded md:p-10 bottom-10 z-10 w-full md:w-4/5 xl:w-3/5 flex flex-col gap-4 justify-start text-center md:text-left mb-10">
          <a
            href="https://mikefillar.github.io/car-rental-ph"
            target="_blank"
            className="text-black font-bold text-2xl hover:underline transition-all duration-200 ease-linear"
          >
            Car Rental PH
          </a>
          <p className="text-black text-sm sm:text-base semilarge:text-lg large:text-xl">
            This application provides an efficient way to simplifies booking,
            allowing you to choose cars, pickup locations, select dates, and
            view transparent pricing.
          </p>

          <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
            {/* <a
              href="https://mikefillar.github.io/car-rental-ph"
              target="_blank"
              className="text-3xl text-black hover:scale-110 transition-all duration-200 ease-linear"
            >
              <ion-icon name="exit-outline"></ion-icon>
            </a> */}
            <a
              href="https://github.com/mikefillar/mikefillar.github.io"
              target="_blank"
              className="text-3xl text-black hover:scale-110 transition-all duration-200 ease-linear"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
          <ul className="flex gap-4 justify-center items-center md:justify-start md:items-start flex-wrap">
            <li className="text-black text-sm sm:text-base">React.JS</li>
            <li className="text-black text-sm sm:text-base">TailwindCSS</li>
            <li className="text-black text-sm sm:text-base">
              React Router Dom
            </li>
          </ul>
        </div>
      </div>
      {/* e-magazine */}
      <div className="relative w-full h-auto md:h-screen py-20 flex flex-col justify-start items-start">
        <div className="static md:absolute left-0 w-full md:w-5/6 rounded shadow-md shadow-gray-600 md:hover:z-20 md:hover:scale-105 transition-all duration-400 ease-linear">
          <a href="https://mikefillar.github.io/newproject" target="_blank">
            <img className="" src={project} alt="coding" />
          </a>
        </div>
        <div className="static md:absolute right-0 mt-10 md:mt-0 md:bg-blue-300 rounded md:p-10 bottom-10 z-10 w-full md:w-4/5 xl:w-3/5 flex flex-col gap-4 justify-start text-center md:text-left">
          <a
            href="https://mikefillar.github.io/newproject/"
            target="_blank"
            className="text-black font-bold text-2xl hover:underline transition-all duration-200 ease-linear"
          >
            E-Magazine
          </a>
          <p className="text-black text-sm sm:text-base semilarge:text-lg large:text-xl">
            This application is all about the anime called "One Piece".
          </p>

          <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
            {/* <a
              href="https://mikefillar.github.io/newproject/"
              target="_blank"
              className="text-3xl text-black hover:scale-110 transition-all duration-200 ease-linear"
            >
              <ion-icon name="exit-outline"></ion-icon>
            </a> */}
            <a
              href="https://github.com/mikefillar/newproject"
              target="_blank"
              className="text-3xl text-black hover:scale-110 transition-all duration-200 ease-linear"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
          <ul className="flex gap-4 justify-center items-center md:justify-start md:items-start flex-wrap">
            <li className="text-black text-sm sm:text-base">HTML5</li>
            <li className="text-black text-sm sm:text-base">CSS</li>
            <li className="text-black text-sm sm:text-base">JavaScript</li>
            <li className="text-black text-sm sm:text-base">Bootstrap5</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project;

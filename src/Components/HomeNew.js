import React from "react";
// import Header from "./Header";
import wave from "../img/waving.png";
import heroimage from "../img/mike.jpg";

const HomeNew = () => {
  const links = [
    { linkName: "HTML5" },
    { linkName: "CSS3" },
    { linkName: "Javascript" },
    { linkName: "Bootstrap5" },
    { linkName: "TailwindCSS" },
    { linkName: "React.JS" },
    { linkName: "PHP" },
    { linkName: "Handlebar.JS" },
    { linkName: "Express.JS" },
    { linkName: "Node.JS" },
    { linkName: "MySQL" },
    { linkName: "Laragon" },
  ];
  return (
    <div className="h-screen">
      {/* <Header /> */}
      <main>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center m-5 p-3 sm:m-7 sm:p-10 md:p-15 semilarge:px-32 semilarge:m-15  semilarge:gap-20 gap-5 sm:gap-12 md:gap-15 h-auto transition-all duration-500 ease-in-out">
          <div className="flex flex-col gap-7 w-full md:w-6/12 text-center md:pr-10 md:text-left">
            <h1 className=" text-gray-800 font-bold text-2xl sm:text-3xl md:text-4xl semilarge:text-4xl lg:text-altxl semilarge:leading-none">
              Full-stack Web Developer{" "}
              <span>
                <img
                  className="inline-block w-6 sm:w-8 md:w-10 semilarge:w-14"
                  src={wave}
                  alt="Hello!"
                />
              </span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base semilarge:text-lg large:text-xl">
              Hi, I'm Mike Fillar. A passionate Full-stack Web Developer based
              in Bulacan, Philippines.
            </p>
            <div className="text-3xl text-gray-600 flex justify-center items-center md:justify-start md:items-start gap-4">
              <ion-icon name="logo-github"></ion-icon>
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
            <div className="overflow-hidden">
              <ul className="flex animate-loop-scroll gap-5 hover:paused">
                {links.map((link) => (
                  <li
                    className="text-gray-500 hover:text-blue-400 cursor-pointer"
                    key={link.linkName}
                  >
                    {link.linkName}
                  </li>
                ))}
                {links.map((link) => (
                  <li
                    className="text-gray-500 hover:text-blue-400 cursor-pointer"
                    key={link.linkName}
                  >
                    {link.linkName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-full w-2/3 md:w-5/12 overflow-hidden object-contain">
            <img className="w-full" src={heroimage} alt="Mike Fillar" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeNew;

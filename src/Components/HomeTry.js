import React from "react";
import wave from "../img/waving.png";
import heroimage from "../img/mike.jpg";

const Home = () => {
  const list = [
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
    <section
      className="flex flex-col justify-center items-center h-dvh overflow-hidden"
      id="home"
    >
      <div className="bg-red-100 flex flex-col items-center h-5/6 mt-14 px-24 semilarge:px-40 gap-10 semilarge:gap-20 py-5 semilarge:flex-row-reverse">
        <div className="rounded-full w-full md:1/2 semilarge:w-2/3 overflow-hidden cursor-pointer object-cover">
          <img src={heroimage} className="" alt="Mike Fillar" />
        </div>
        <div className="text-center flex flex-col gap-5 semilarge:text-left">
          <h1 className="font-bold text-gray-800 semilarge:leading-tight text-2xl sm:text-3xl md:text-4xl semilarge:text-altxl">
            Full-Stack Web Developer{" "}
            <span>
              <img className="inline-block md:w-14 w-8" src={wave} alt="" />
            </span>
          </h1>
          <p className="md:text-lg text-base text-gray-600">
            Hi, I'm Mike Fillar. A passionate Full-stack Web Developer based in
            Bulacan, Philippines.
          </p>
          <div className=" ">
            <a
              href="/"
              className="ml-5 text-3xl text-gray-600 hover:text-blue-400 duration-300 ease-in"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href="/"
              className="ml-5 text-3xl text-gray-600 hover:text-blue-400 duration-300 ease-in"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

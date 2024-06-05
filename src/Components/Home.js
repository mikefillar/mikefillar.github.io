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
      className="flex flex-col-reverse justify-center items-center md:gap-20 gap-10  h-screen bg-color-body xl:px-48 lg:px-24 px-10 transition-all duration-300 ease-in-out md:flex-row"
      id="home"
    >
      <div className="flex flex-col w-7/12 gap-6 md:text-left text-center mt-10">
        <h1 className="md:text-altxl font-bold text-gray-800 leading-tight text-4xl">
          Full-Stack Web Developer{" "}
          <span>
            <img className="inline-block md:w-14 w-8" src={wave} alt="" />
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          Hi, I'm Mike Fillar. A passionate Full-stack Web Developer based in
          Bulacan, Philippines.
        </p>
        <div className="mt-3 flex gap-6">
          <ion-icon id="homeicon" name="logo-github"></ion-icon>
          <ion-icon id="homeicon" name="logo-linkedin"></ion-icon>
        </div>
        <div className=" overflow-hidden">
          {/* <p className='text-blue-400 font-semibold'>Tech Stack</p> */}
          <ul className="flex mt-5 gap-5 animate-loop-scroll w-full hover:paused">
            {list.map((item) => {
              return (
                <li
                  className="text-gray-600 hover:text-blue-400 cursor-pointer"
                  key={item.linkName}
                >
                  {item.linkName}
                </li>
              );
            })}
            {list.map((item) => {
              return (
                <li
                  className="text-gray-600 hover:text-blue-400 cursor-pointer"
                  key={item.linkName}
                >
                  {item.linkName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-5/12 rounded-full overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer object-cover">
        <img src={heroimage} className="" alt="Mike Fillar" />
      </div>
      {/* ---------- */}
      <div className="semilarge:py-5 md:flex-row-reverse md:text-left semilarge:px-32 flex flex-col px-20 items-center justify-center gap-5 md:gap-10 semilarge:gap-20 transition-all duration-300 ease-in-out text-center">
        <div className="rounded-full w-full overflow-hidden cursor-pointer object-cover md:w-5/12">
          <img src={heroimage} className="" alt="Mike Fillar" />
        </div>
        <div className="w-full md:w-7/12 flex flex-col gap-5">
          <h1 className="font-bold text-gray-800 semilarge:leading-tight text-3xl md:text-4xl semilarge:text-altxl">
            Full-Stack Web Developer{" "}
            <span>
              <img className="inline-block md:w-14 w-8" src={wave} alt="" />
            </span>
          </h1>
          <p className="md:text-lg text-base text-gray-600">
            Hi, I'm Mike Fillar. A passionate Full-stack Web Developer based in
            Bulacan, Philippines.
          </p>
          <div className=" overflow-hidden">
            {/* <p className='text-blue-400 font-semibold'>Tech Stack</p> */}
            <ul className="flex mt-5 gap-5 animate-loop-scroll w-full hover:paused">
              {list.map((item) => {
                return (
                  <li
                    className="text-gray-600 hover:text-blue-400 cursor-pointer"
                    key={item.linkName}
                  >
                    {item.linkName}
                  </li>
                );
              })}
              {list.map((item) => {
                return (
                  <li
                    className="text-gray-600 hover:text-blue-400 cursor-pointer"
                    key={item.linkName}
                  >
                    {item.linkName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

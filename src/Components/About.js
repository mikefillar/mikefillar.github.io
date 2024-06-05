import React from "react";
import illustration from "../img/Code typing-bro.png";

const About = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-center items-center m-5 px-28 semilarge:m-15 semilarge:px-32 md:m-10 md:p-5 semilarge:gap-24 gap-5 md:gap-20 h-screen transition-all duration-500 ease-in-out bg-color-body"
      id="about"
    >
      <div className="flex text-left w-2/3 md:w-6/12 gap-6 rounded overflow-hidden object-contain">
        <img className="" src={illustration} alt="coding" />
      </div>
      <div className=" w-full md:w-6/12 flex flex-col gap-4 text-center md:text-left">
        <h1 className=" text-blue-500 uppercase font-bold">About Me</h1>
        <h2 className=" text-gray-800 font-bold text-2xl">
          Full-stack web developer based in Bulacan, Philippines.
        </h2>
        <p className=" text-gray-600">
          Hey, my name is Mike, and I'm a full-stack developer. My passion is to
          create and develop clean website for the users.
        </p>
        <p className=" text-gray-600">
          My main stack currently is HTML, CSS, JavaScript, TailwindCSS,
          Bootstrap5, Handlebar.JS, React.JS, Node.JS, Express.JS, PHP, MySQL,
          Laragon.
        </p>
      </div>
    </section>
  );
};

export default About;

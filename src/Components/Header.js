import React, { useState } from "react";

const Header = () => {
  let links = [
    {
      link: "Home",
      url: "/#home",
    },
    {
      link: "About",
      url: "/#about",
    },
    {
      link: "Project",
      url: "/#project",
    },
    {
      link: "Contact",
      url: "/#contact",
    },
  ];
  let [open, setOpen] = useState(false);
  return (
    <header className="flex justify-between bg-white items-center px-12 z-50 py-6 shadow sticky top-0">
      <div className="">
        <h1 className="text-gray-800 text-2xl font-extrabold cursor-pointer ease-in duration-100">
          Mike<span className="text-sm font-black">.DEV</span>
        </h1>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={`semilarge:hidden text-gray-700 text-2xl cursor-pointer hover:text-blue-400 z-20`}
      >
        <ion-icon name={open ? "close-sharp" : "menu-sharp"}></ion-icon>
      </div>
      <div
        className={`semilarge:static semilarge:w-auto semilarge:h-auto absolute z-10 semilarge:z-0 left-0 top-0 bg-white flex w-full h-screen justify-center items-center text-center ${
          open ? "translate-y-0" : "-translate-y-full semilarge:translate-y-0"
        }`}
      >
        <ul className="flex flex-col gap-7 semilarge:flex-row">
          {links.map((link) => (
            <li key={link.link} className="">
              <a
                onClick={() => setOpen(!open)}
                className=" text-gray-600 font-bold hover:text-blue-400 text-xl"
                href={link.url}
              >
                {link.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

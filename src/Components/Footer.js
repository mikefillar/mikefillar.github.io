import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center md:justify-between gap-10 p-5 semilarge:m-15 semilarge:px-32 md:p-5  transition-all duration-500 ease-in-out bg-gray-800 h-1/5 w-full">
      <h2 className="font-bold text-white">
        Copyright &copy; 2024. All rights reserved
      </h2>
      <div className="flex gap-5">
        <a href="/">
          <a href="https://www.linkedin.com/in/mike-fillar/" target="blank">
            <ion-icon id="footericon" name="logo-linkedin"></ion-icon>
          </a>
        </a>
        <a href="/">
          <a href="https://github.com/mikefillar" target="blank">
            <ion-icon id="footericon" name="logo-github"></ion-icon>
          </a>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

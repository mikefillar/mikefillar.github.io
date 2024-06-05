import React from "react";

const Contact = () => {
  return (
    <div className="h-screen">
      <section
        className="flex flex-col justify-center items-center md:justify-end md:items-start m-5 px-28 semilarge:m-15 semilarge:px-32 md:m-10 md:p-5 semilarge:gap-24 gap-5 md:gap-20 h-screen transition-all duration-500 ease-in-out bg-color-body"
        id="contact"
      >
        <div className="flex flex-col gap-5 mb-24">
          <h1 className=" uppercase font-bold text-blue-500 text-center md:text-left">
            Contact
          </h1>
          <h2 className=" font-bold text-gray-800 text-2xl text-center md:text-left">
            Hire me!
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="ml-8 md:ml-0 flex justify-center items-center gap-4">
              <div>
                <ion-icon id="contacticon" name="mail-outline"></ion-icon>
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Mail</h4>
                <p className="text-gray-600 hover:text-blue-400 cursor-pointer">
                  mikefillar21@gmail.com
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div>
                <ion-icon id="contacticon" name="map-outline"></ion-icon>
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Location</h4>
                <p className="text-gray-600 hover:text-blue-400 cursor-pointer">
                  Bulacan, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default Contact;

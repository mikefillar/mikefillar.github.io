import React from "react";

const Contact = () => {
  return (
    <section
      className="flex flex-col justify-center items-center md:justify-end md:items-start m-5 px-28 semilarge:m-15 semilarge:px-32 md:m-10 md:p-5 semilarge:gap-24 gap-5 md:gap-20 h-full semilarge:h-4/5 transition-all duration-500 ease-in-out bg-color-body"
      id="contact"
    >
      <div className="flex flex-col gap-3 md:gap-5">
        <h1 className=" uppercase font-bold text-blue-500 text-center md:text-left">
          Contact
        </h1>
        <h2 className=" font-bold text-gray-800 text-2xl text-center md:text-left">
          Hit me up!
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4 text-center md:text-left">
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4 text-center md:text-left">
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
  );
};

export default Contact;

import { Card } from "flowbite-react";
import React from "react";
import { FaAppStore, FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const Available = () => {
  return (
    <div
      className=" bg-fixed "
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1560088161-ca82e528afc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80')`,
        height: "500px", // Set the desired height here
      }}
    >
      <div className="  bg-transparent   bg-opacity-40">
        <div className="bg-amber-700 bg-opacity-20  m-20 ">
          {" "}
          <h5 className="mb-2 text-3xl font-bold text-center mt-10 pt-10  text-gray-200 dark:text-white">
            Contact fast from anywhere
          </h5>
          <p className="mb-5 lg:text-base text-gray-200 mt-8 text-center dark:text-gray-200 text-lg">
            <p>
              Stay up to date and move work forward with Dance Studio <br />
              on iOS & Android. Download the app today.
            </p>
          </p>
          <div className="items-center justify-center space-y-4 sm:flex mx-80 py-10 sm:space-x-4 sm:space-y-0">
            <a
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
              href="#"
            >
              <div className="text-left flex items-center gap-3 text-3xl">
                {" "}
                <FaAppStoreIos></FaAppStoreIos>
                <div className="mb-1 text-lg">
                  Download on the <br />{" "}
                  <span className="font-bold">Mac App Store</span>
                </div>
              </div>
            </a>
            <a
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
              href="#"
            >
              <div className="text-left flex items-center gap-3 text-3xl px-2">
                {" "}
                <FaGooglePlay />
                <div className="mb-1 text-lg">
                  Get in On <br />{" "}
                  <span className="font-bold">Google Play</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;

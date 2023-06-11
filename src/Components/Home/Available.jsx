import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const Available = () => {
  return (
    <section
      className="py-12 bg-gradient-to-r from-purple-800 to-indigo-800"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512149673953-1e251807ec7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Available on App Stores
        </h2>
        <div className="flex justify-center items-center">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <div className="bg-white rounded-lg p-4">
              <FontAwesomeIcon
                icon={faApple}
                className="text-4xl text-purple-800 hover:text-white transition-colors duration-300"
              />
            </div>
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white rounded-lg p-4">
              <FontAwesomeIcon
                icon={faGooglePlay}
                className="text-4xl text-purple-800 hover:text-white transition-colors duration-300"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Available;

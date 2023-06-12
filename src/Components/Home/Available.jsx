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
        <div className="lg:flex gap-9 mb-7  justify-center items-center">
          <img
            src="https://i.ibb.co/MkmQXDh/google-play-logo.webp"
            className="h-20"
            alt=""
          />
          <img
            src="https://i.ibb.co/ZGcWdzw/apple-app-store-logo.jpg"
            className="h-20"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Available;

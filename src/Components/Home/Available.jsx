import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Wave from "react-wavify";
import Download from "../../../public/dwnload.json";
import play from "../../../public/google.json";
import ios from "../../../public/apple.json";
import Lottie from "lottie-react";

const Available = () => {
  return (
    <div>
      <Wave mask="url(#mask)" fill="#ff9d5c">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>

      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        style={{ fontFamily: "Lemon, sans-serif" }}
        className="bg-gradient-to-r text-2xl text-center lg:text-4xl from-pink-400 to-orange-700 text-transparent bg-clip-text mt-10 mb-10"
      >
        <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
          Available on App Stores
        </span>
      </h1>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2">
        <div className="mx-auto">
          <Lottie animationData={Download} />
        </div>
        <div className="lg:flex mx-auto ">
          <Lottie
            animationData={play}
            style={{ width: "260px" }}
            className="ms-9 lg:ms-1"
          />
          <Lottie animationData={ios} style={{ width: "320px" }} />
        </div>
      </div>
    </div>
  );
};

export default Available;

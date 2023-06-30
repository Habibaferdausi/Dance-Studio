import React from "react";

import { Carousel } from "antd";

import Lottie from "lottie-react";
import button from "../../../public/button.json";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const contentStyle = {
  height: "100vh",
  color: "#fff",
  textAlign: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "relative",
};

const images = [
  "url('https://images.unsplash.com/photo-1621976498727-9e5d56476276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
  "url('https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
  "url('https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80')",
  "url('https://images.unsplash.com/photo-1596315458574-d99efaea3b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=878&q=80')",
];

const Banner = () => (
  <Carousel autoplay>
    <div className="">
      <div
        style={{
          ...contentStyle,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${images[0]}`,
        }}
        className="text-start mt-20 text-bold relative"
      >
        <div
          data-aos="fade-up-right"
          className=" pt-10 lg:pt-40 mt-20 mx-4 lg:mx-20  flex justify-center items-center flex-col "
        >
          <h3 className="text-xl pt-11 lg:text-4xl">Came Join Our </h3>
          <h1
            className="text-3xl mt-4 lg:mt-11 lg:text-7xl "
            style={{ fontFamily: "Lemon, sans-serif" }}
          >
            Dance Studio
          </h1>
          <p
            className="mt-6 lg:mt-10 text-xl lg:text-3xl font-bold uppercase"
            style={{ letterSpacing: "10px" }}
          >
            Dance For Every Body
          </p>

          <Lottie
            animationData={button}
            loop={true}
            style={{ width: "450px" }}
          />
        </div>
      </div>
    </div>
    <div>
      <div
        style={{
          ...contentStyle,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${images[1]}`,
        }}
        className=" mt-20 "
      >
        <div
          data-aos="fade-down-right"
          data-aos-duration="5000"
          className=" pt-10 lg:pt-40 mt-20 mx-4 lg:mx-20  flex justify-center items-center flex-col "
        >
          <h3
            className="text-xl pt-11 lg:text-4xl font-bold uppercase"
            style={{ letterSpacing: "8px" }}
          >
            We'll Teach You to
          </h3>
          <h1
            className="text-3xl mt-4 lg:mt-11 lg:text-7xl "
            style={{ fontFamily: "Lemon, sans-serif" }}
          >
            Dance
          </h1>

          <Lottie
            animationData={button}
            loop={true}
            style={{ width: "450px" }}
          />
        </div>
      </div>
    </div>
    <div>
      <div
        style={{
          ...contentStyle,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), ${images[2]}`,
        }}
        className="text-start text-bold  "
      >
        <div
          data-aos="fade-up-left"
          data-aos-duration="7000"
          className=" pt-10 lg:pt-40 mt-20 mx-4 lg:mx-20  flex justify-center items-center flex-col "
        >
          <h3
            className="text-xl pt-11 lg:text-4xl font-bold uppercase"
            style={{ letterSpacing: "8px" }}
          >
            ENCHANCE YOUR DANCE SKILLS WITH
          </h3>
          <h1
            className="text-3xl mt-4 lg:mt-11 lg:text-7xl "
            style={{ fontFamily: "Lemon, sans-serif" }}
          >
            Dance Studio
          </h1>

          <Lottie
            animationData={button}
            loop={true}
            style={{ width: "450px" }}
          />
        </div>
      </div>
    </div>
    <div>
      <div
        style={{
          ...contentStyle,
          backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.4), rgba(18, 18, 18, 0.4)), ${images[3]}`,
        }}
        className="  "
      >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="5000"
          className=" pt-10 lg:pt-40 mt-20 mx-4 lg:mx-20  flex justify-center items-center flex-col "
        >
          <h3
            className="text-xl pt-11 lg:text-4xl font-bold uppercase"
            style={{ letterSpacing: "10px" }}
          >
            dance with us
          </h3>
          <h1
            className="text-3xl mt-4 lg:mt-11 lg:text-7xl "
            style={{ fontFamily: "Lemon, sans-serif" }}
          >
            Join Our Classes
          </h1>

          <Lottie
            animationData={button}
            loop={true}
            style={{ width: "450px" }}
          />
        </div>
      </div>
    </div>
  </Carousel>
);

export default Banner;

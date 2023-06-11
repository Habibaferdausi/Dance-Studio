import React from "react";

import { Carousel } from "antd";

const contentStyle = {
  height: "100vh",
  color: "#fff",

  textAlign: "center",
  backgroundSize: "cover",
};

const images = [
  "url('https://images.unsplash.com/photo-1621976498727-9e5d56476276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
  "url('https://images.unsplash.com/photo-1605799548695-ad63992724cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
  "url('https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80')",
  "url('https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
];

const Banner = () => (
  <Carousel autoplay>
    <div>
      <div
        style={{ ...contentStyle, backgroundImage: images[0] }}
        className="text-start text-bold  "
      >
        <div className=" pt-10 lg:pt-20  mx-4 lg:mx-20 l flex justify-center items-center flex-col ">
          <h3 className="text-2xl pt-11 lg:text-4xl">Came Join Our </h3>
          <h1
            className="text-3xl lg:text-6xl "
            style={{ fontFamily: "Lemon, sans-serif" }}
          >
            Dance Studio
          </h1>
          <p className="text-lg w-1/2 lg:text-xl text-gray-200 mx-auto mt-7 lg:mt-11">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero,
            voluptatem officiis dolorem nemo reiciendis dolorum alias dicta.
            Soluta cumque molestiae eaque? Sapiente quis facilis quidem officia
            eligendi doloribus aperiam.
          </p>
          <button className="btn btn-primary px-3  mt-10 text-lg rounded text-white ">
            See More
          </button>
        </div>
      </div>
    </div>
    <div>
      <div
        style={{ ...contentStyle, backgroundImage: images[1] }}
        className="  "
      >
        <div className="w-1/2 lg:pt-11 flex justify-end items-center flex-col text-end  mx-4 lg:mx-20">
          <h3 className="text-2xl lg:text-4xl mt-20  ">Came Join Our </h3>
          <h1
            className="text-3xl lg:text-6xl "
            style={{ fontFamily: "Lemon, sans-serif" }}
          >
            Dance Studio
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mx-auto mt-7 lg:mt-11">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero,
            voluptatem officiis dolorem nemo reiciendis dolorum alias dicta.
            Soluta cumque molestiae eaque? Sapiente quis facilis quidem officia
            eligendi doloribus aperiam.
          </p>
          <button className="btn btn-primary px-3  mt-10 text-lg rounded text-white ">
            See More
          </button>
        </div>
      </div>
    </div>
    <div>
      <div
        style={{ ...contentStyle, backgroundImage: images[2] }}
        className="text-start text-bold  "
      >
        <div className=" pt-10 lg:pt-20  mx-4 lg:mx-20 l flex justify-center items-center flex-col ">
          <h3 className="text-2xl pt-11 lg:text-4xl">Came Join Our </h3>
          <h1
            className="text-3xl lg:text-6xl "
            style={{ fontFamily: "Lemon, sans-serif" }}
          >
            Dance Studio
          </h1>
          <p className="text-lg w-1/2 lg:text-xl text-gray-200 mx-auto mt-7 lg:mt-11">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero,
            voluptatem officiis dolorem nemo reiciendis dolorum alias dicta.
            Soluta cumque molestiae eaque? Sapiente quis facilis quidem officia
            eligendi doloribus aperiam.
          </p>
          <button className="btn btn-primary px-3  mt-10 text-lg rounded text-white ">
            See More
          </button>
        </div>
      </div>
    </div>
    <div>
      <div
        style={{ ...contentStyle, backgroundImage: images[3] }}
        className="  "
      >
        <div className="w-1/2 lg:pt-11 flex justify-end items-center flex-col text-end  mx-4 lg:mx-20">
          <h3 className="text-2xl lg:text-4xl mt-20  ">Came Join Our </h3>
          <h1
            className="text-3xl lg:text-6xl "
            style={{ fontFamily: "Lemon, sans-serif" }}
          >
            Dance Studio
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mx-auto mt-7 lg:mt-11">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero,
            voluptatem officiis dolorem nemo reiciendis dolorum alias dicta.
            Soluta cumque molestiae eaque? Sapiente quis facilis quidem officia
            eligendi doloribus aperiam.
          </p>
          <button className="btn btn-primary px-3  mt-10 text-lg rounded text-white ">
            See More
          </button>
        </div>
      </div>
    </div>
  </Carousel>
);

export default Banner;

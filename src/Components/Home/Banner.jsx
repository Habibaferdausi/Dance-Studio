import React from "react";

import { Carousel } from "antd";

const contentStyle = {
  height: "100vh",
  color: "#fff",

  textAlign: "center",
  backgroundSize: "cover",
};

const images = [
  "url('https://i.ibb.co/FwbNwHy/Pngtree-dancing-purple-hand-drawn-banner-1063674.jpg')",
  "url('https://i.ibb.co/hLK5VLd/Free-HD-Dance-Wallpapers.jpg')",
  "url('https://img.freepik.com/free-photo/dance-time-stylish-men-woman-dancing-hip-hop-bright-clothes-green-background-dance-hall-neon-light_155003-16406.jpg?w=740&t=st=1686136833~exp=1686137433~hmac=0c2666a65688312709905f24e3038a2890cad00dac7ac07735aad042b2231d4b')",
  "url('https://as2.ftcdn.net/v2/jpg/04/57/10/55/1000_F_457105571_3mWGRkjsFJT6SOOxu5W1dZUFda4hNtuC.jpg')",
];

const Banner = () => (
  <Carousel autoplay>
    <div>
      <div
        style={{ ...contentStyle, backgroundImage: images[0] }}
        className="text-start text-bold  "
      >
        <div className="w-1/2 pt-10 lg:pt-11 flex justify-center items-center flex-col ">
          <h3 className="text-2xl lg:text-4xl">Came Join Our </h3>
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
          <button className="btn btn-primary p-3  mt-10 text-lg rounded bg-amber-950 text-white ">
            See More
          </button>
        </div>
      </div>
    </div>
    <div>
      <div
        style={{ ...contentStyle, backgroundImage: images[1] }}
        className="  text-end"
      >
        <div className="w-1/2 pt-10 lg:pt-11 flex justify-end items-center flex-col  text-end ">
          <h3 className="text-2xl lg:text-4xl">Came Join Our </h3>
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
          <button className="btn btn-primary p-3  mt-10 text-lg rounded bg-amber-950 text-white ">
            See More
          </button>
        </div>
      </div>
    </div>
    <div>
      <div style={{ ...contentStyle, backgroundImage: images[2] }}>
        <h3>3</h3>
      </div>
    </div>
    <div>
      <div style={{ ...contentStyle, backgroundImage: images[3] }}>
        <h3>4</h3>
      </div>
    </div>
  </Carousel>
);

export default Banner;

import React from "react";

import { Carousel } from "antd";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const Banner = () => (
  <Carousel autoplay>
    <div style={contentStyle}>
      <img src="https://images.pexels.com/photos/3727556/pexels-photo-3727556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
    <div style={contentStyle}>
      <h3>2</h3>
    </div>
    <div style={contentStyle}>
      <h3>3</h3>
    </div>
    <div style={contentStyle}>
      <h3>4</h3>
    </div>
  </Carousel>
);

export default Banner;

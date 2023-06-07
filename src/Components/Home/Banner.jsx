import React from "react";

import { Carousel } from "antd";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundSize: "cover",
};

const images = [
  "url('https://img.freepik.com/free-vector/ballerina-dance-stage-girl-perform-ballet_107791-7663.jpg?w=826&t=st=1686136604~exp=1686137204~hmac=9918846f34b913738ae2809db7b1d0f2b605a7d9eec4b813bd20a9bdf027abd4')",
  "url('https://img.freepik.com/free-photo/dynamic-portrait-young-man-woman-dancing-hiphop-isolated-black-background-with-mixed-lights-effect_155003-46269.jpg?w=740&t=st=1686136753~exp=1686137353~hmac=d1672e34b88ec4672d369ebe1760fea076951c533d7651c0793f1a1cb899dcac')",
  "url('https://img.freepik.com/free-photo/dance-time-stylish-men-woman-dancing-hip-hop-bright-clothes-green-background-dance-hall-neon-light_155003-16406.jpg?w=740&t=st=1686136833~exp=1686137433~hmac=0c2666a65688312709905f24e3038a2890cad00dac7ac07735aad042b2231d4b')",
  "url('https://img.freepik.com/free-vector/silhouettes-people-dancing_1048-4078.jpg?w=740&t=st=1686137036~exp=1686137636~hmac=59ecb97207564804f516f4ad1a36aac3b1ebda9435ac9088d139e9e17e3626f9')",
];

const Banner = () => (
  <Carousel autoplay>
    <div>
      <div style={{ ...contentStyle, backgroundImage: images[0] }}>
        <h3>1</h3>
      </div>
    </div>
    <div>
      <div style={{ ...contentStyle, backgroundImage: images[1] }}>
        <h3>2</h3>
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

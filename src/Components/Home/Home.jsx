import React from "react";
import Banner from "./Banner";
import Available from "./Available";
import Countdown from "./CountDown";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Available></Available>
      <Countdown></Countdown>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "./Banner";
import Available from "./Available";
import Countdown from "./CountDown";
import NewsLetterPage from "./NewsLetterPage";
import ChoosePlan from "./ChoosePlan";
import WhyChooseUs from "./WHyChooseUs";
import Passion from "./Passion";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <Passion></Passion>
      <Countdown></Countdown>
      <ChoosePlan></ChoosePlan>
      <Available></Available>
      <NewsLetterPage></NewsLetterPage>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "./Banner";
import Available from "./Available";
import Countdown from "./CountDown";
import NewsLetterPage from "./NewsLetterPage";
import ChoosePlan from "./ChoosePlan";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Available></Available>
      <Countdown></Countdown>
      <ChoosePlan></ChoosePlan>
      <NewsLetterPage></NewsLetterPage>
    </div>
  );
};

export default Home;

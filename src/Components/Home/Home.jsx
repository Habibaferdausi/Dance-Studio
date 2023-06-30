import React from "react";
import Banner from "./Banner";
import Available from "./Available";
import Countdown from "./CountDown";
import NewsLetterPage from "./NewsLetterPage";
import ChoosePlan from "./ChoosePlan";
import WhyChooseUs from "./WHyChooseUs";
import Passion from "./Passion";
import Classes from "../Pages/Classes";
import InstructorsPage from "../Pages/InstructorsPage";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div className="mx-auto">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <WhyChooseUs></WhyChooseUs>
      <div className="my-20">
        <Classes></Classes>
      </div>

      <ChoosePlan></ChoosePlan>
      <Countdown></Countdown>
      <InstructorsPage></InstructorsPage>
      <Available></Available>
    </div>
  );
};

export default Home;

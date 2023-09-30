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
import BlogSection from "./BlogSection";
import UpcomingEvents from "./UpcomingEvents";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div className=" mx-auto">
      <Banner></Banner>
      <div className="max-w-screen-2xl mx-auto">
        <AboutUs></AboutUs>
        <WhyChooseUs></WhyChooseUs>

        <Classes></Classes>

        <ChoosePlan></ChoosePlan>
        <Countdown></Countdown>
        <InstructorsPage></InstructorsPage>
        <BlogSection></BlogSection>
        <UpcomingEvents></UpcomingEvents>
        <ContactUs></ContactUs>
        <Available></Available>
      </div>
    </div>
  );
};

export default Home;

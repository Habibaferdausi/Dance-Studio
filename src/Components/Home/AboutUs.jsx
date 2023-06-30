import { LottiePlayer } from "lottie-react";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import learn from "../../../public/learn.json";
const AboutUs = () => {
  const [studentCount, setStudentCount] = useState(50);
  const [performanceCount, setPerformanceCount] = useState(110);

  useEffect(() => {
    const studentInterval = setInterval(() => {
      if (studentCount < 356) {
        setStudentCount(studentCount + 1);
      }
    }, 10);

    const performanceInterval = setInterval(() => {
      if (performanceCount < 670) {
        setPerformanceCount(performanceCount + 1);
      }
    }, 10);

    return () => {
      clearInterval(studentInterval);
      clearInterval(performanceInterval);
    };
  }, [studentCount, performanceCount]);

  return (
    <div className="mt-20 mb-20">
      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        style={{ fontFamily: "Lemon, sans-serif" }}
        className="bg-gradient-to-r text-2xl text-center lg:text-4xl from-pink-500 to-orange-700 text-transparent bg-clip-text mt-10 mb-10"
      >
        Welcome to Dance Studio
      </h1>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="2000"
        className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20  mx-10 lg:mx-20"
      >
        <div>
          <img src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
        </div>
        <div>
          <div
            className="bg-white dark:bg-gray-800 pt-7  mt-7 lg:ps-20"
            style={{ marginLeft: "-50px" }}
          >
            <h1
              style={{ letterSpacing: "3px" }}
              className="ms-3 text-2xl lg:text-4xl text-black dark:text-white font-bold"
            >
              BEST DANCE SCHOOL &amp; <br></br> STUDIO SINCE 2010
            </h1>
            <p className="mt-10 text-xl lg:text-2xl text-gray-600 dark:text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dicta rerum reiciendis similique neque voluptatum accusantium?
              Enim dolore corrupti delectus.
            </p>
            <Lottie
              animationData={learn}
              loop={true}
              style={{ width: "160px" }}
            />
          </div>
          <div className="flex justify-center gap-10 lg:gap-20 items-center ms-5 lg:ms-11">
            <p className="text-gray-900    font-bold text-2xl lg:text-4xl dark:text-white">
              {studentCount} <span className="text-blue-600 "> +</span>
              <br></br>{" "}
              <span className="text-lg font-normal lg:text-xl text-gray-700 dark:text-gray-100">
                Successful Students
              </span>
            </p>
            <p className="text-gray-900   font-bold text-2xl lg:text-4xl dark:text-white">
              {performanceCount} <span className="text-blue-600 "> +</span>
              <br></br>{" "}
              <span className="text-lg font-normal lg:text-xl text-gray-700 dark:text-gray-100">
                Live Performance
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

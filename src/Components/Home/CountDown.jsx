import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        const { days, hours, minutes, seconds } = prevCountdown;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevCountdown;
        }

        let updatedSeconds = seconds - 1;
        let updatedMinutes = minutes;
        let updatedHours = hours;
        let updatedDays = days;

        if (updatedSeconds < 0) {
          updatedMinutes -= 1;
          updatedSeconds = 59;
        }

        if (updatedMinutes < 0) {
          updatedHours -= 1;
          updatedMinutes = 59;
        }

        if (updatedHours < 0) {
          updatedDays -= 1;
          updatedHours = 23;
        }

        return {
          days: updatedDays,
          hours: updatedHours,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        };
      });
    }, 1000); // Update countdown every second

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <div
        className="flex flex-col  items-center  mb-20 justify-center lg:h-screen bg-cover bg-fixed"
        style={{
          height: "600px",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://images.unsplash.com/photo-1550026593-cb89847b168d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
        }}
      >
        <h1 className="lg:text-4xl text-sm font-bold text-black mx-12 rounded  bg-gray-200 p-6 bg-opacity-70">
          Our Next Class Starts In:
        </h1>
        <div className="mx-20 lg:mx-10 ">
          <div className="flex mt-4    bg-gray-900 p-9 bg-opacity-70">
            <div className="px-2 text-sm lg:text-4xl font-bold text-white bg-black bg-opacity-50">
              {countdown.days}
            </div>
            <div className="flex flex-col justify-center ml-2">
              <span className=" text-sm lg:text-2xl font-bold text-white">
                Days
              </span>
            </div>
            <div className="px-2 text-sm lg:text-4xl font-bold text-white bg-black bg-opacity-50">
              {countdown.hours}
            </div>
            <div className="flex flex-col justify-center ml-2">
              <span className="lg:text-2xl text-sm font-bold text-white">
                Hours
              </span>
            </div>
            <div className="px-2 text-sm lg:text-4xl font-bold text-white bg-black bg-opacity-50">
              {countdown.minutes}
            </div>
            <div className="flex flex-col justify-center ml-2">
              <span className="lg:text-2xl text-sm font-bold text-white">
                Minutes
              </span>
            </div>
            <div className="px-2 text-sm lg:text-4xl  font-bold text-white bg-black bg-opacity-50">
              {countdown.seconds}
            </div>
            <div className="flex flex-col justify-center ml-2">
              <span className="lg:text-2xl text-sm font-bold text-white">
                Seconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

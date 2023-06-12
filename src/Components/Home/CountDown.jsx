import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 30,
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
          height: "500px",
          backgroundImage:
            "url(https://images.pexels.com/photos/2057274/pexels-photo-2057274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <h1 className="lg:text-4xl text-sm font-bold text-black mx-12   bg-gray-200 p-6 bg-opacity-70">
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

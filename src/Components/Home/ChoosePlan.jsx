import { Card } from "flowbite-react";
import React from "react";
import Wave from "react-wavify";

const ChoosePlan = () => {
  return (
    <div>
      <Wave mask="url(#mask)" fill="#f88b">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <div>
        <h1
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          style={{ fontFamily: "Lemon, sans-serif" }}
          className="bg-gradient-to-r text-2xl text-center lg:text-4xl from-pink-400 to-orange-700 text-transparent bg-clip-text mt-10 mb-10"
        >
          <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
            Choose Plan
          </span>
        </h1>
        <h4
          className="mt-2 mb-5 text-center text-2xl text-blue-600 dark:text-blue-200 font-semibold"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          style={{ letterSpacing: "10px" }}
        >
          Our Membership
        </h4>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-8 mx-20"
      >
        <Card>
          <h5 className="mb-4 text-xl font-medium mb-5  text-gray-500 dark:text-gray-400">
            Beginner Plan
          </h5>
          <div className="flex items-baseline text-blue-600 dark:text-blue-200">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold  tracking-tight">29</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Access to 5 dance classes per month
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Limited practice space availability
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Basic choreography guidance
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <span className="text-base font-normal leading-tight text-gray-500">
                Personalized dance routines
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <span className="text-base font-normal leading-tight text-gray-500">
                Access to all dance styles
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <span className="text-base font-normal leading-tight text-gray-500">
                Private coaching sessions
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <span className="text-base font-normal leading-tight text-gray-500">
                Performance opportunities
              </span>
            </li>
          </ul>
          <button
            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            type="button"
          >
            <p>Choose plan</p>
          </button>
        </Card>

        <Card>
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Intermediate Plan
          </h5>
          <div className="flex items-baseline text-blue-600 dark:text-blue-200">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">59</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Access to 10 dance classes per month
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Priority practice space availability
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Customized choreography guidance
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Personalized dance routines
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <span className="text-base font-normal leading-tight text-gray-500">
                Access to all dance styles
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <span className="text-base font-normal leading-tight text-gray-500">
                Private coaching sessions
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <span className="text-base font-normal leading-tight text-gray-500">
                Performance opportunities
              </span>
            </li>
          </ul>
          <button
            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            type="button"
          >
            <p>Choose plan</p>
          </button>
        </Card>

        <Card>
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Advanced Plan
          </h5>
          <div className="flex items-baseline text-blue-600 dark:text-blue-200">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">99</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Unlimited access to dance classes
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Dedicated practice space availability
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Customized choreography guidance
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Personalized dance routines
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Access to all dance styles
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Private coaching sessions
              </span>
            </li>
            <li className="flex space-x-3">
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                Performance opportunities
              </span>
            </li>
          </ul>
          <button
            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            type="button"
          >
            <p>Choose plan</p>
          </button>
        </Card>
      </div>
    </div>
  );
};

export default ChoosePlan;

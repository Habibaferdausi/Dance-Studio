import React from "react";

const NewsLetterPage = () => {
  const bgImage =
    "https://img.freepik.com/free-photo/dynamic-portrait-young-man-woman-dancing-hiphop-isolated-black-background-with-mixed-lights-effect_155003-46271.jpg?t=st=1686281498~exp=1686282098~hmac=186a0665d9d394fbed20f8dac15513c8ea3aeb64bc76225ac44dcff47576dae6";

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-sm">
        <h1 className="text-3xl text-center text-gray-800 font-semibold mb-6">
          Newsletter
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterPage;

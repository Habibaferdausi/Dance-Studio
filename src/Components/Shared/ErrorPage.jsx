import React from "react";

import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="mt-5 ">
        <h1 className="text-center text-3xl text-bold mb-10 text-purple-400 mb-4">
          Oops! Something went wrong.
        </h1>
        <img
          src="https://i.pinimg.com/originals/76/28/9a/76289acbe6c5a83ccf648702b7e8d3b9.gif"
          className="mb-4  mx-auto text-center"
        />
        <p className="text-center text-2xl">
          We're sorry, but it looks like there was an error processing your
          request.
        </p>
        <div className="text-center">
          {" "}
          <Link className="btn mt-3   mb-20 text-center btn-primary" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../../../public/login.json";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        photoURL: loggedInUser.photoURL,
      };

      fetch("https://dance-studio-hazel.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Successfully Login with Google",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="mt-10 lg:mt-20 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10 lg:mt-20 mx-auto">
        <div>
          <Lottie animationData={login} />
        </div>
        <div className="max-w-md w-full mt-10 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl mt-8 font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
              Login Now
            </span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                  <svg
                    className="h-5 w-5 text-gray-500 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v7m0 0v4m0-4h4m-4 0H8m-2 0a10 10 0 1 1 12.36 0A10 10 0 0 1 6 12z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-lg">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-red-600  font-bold hover:underline"
              >
                Register Here
              </a>
            </p>
          </div>

          <div className="mt-6">
            <div className="divider font-bold">OR</div>

            <div className="flex space-x-2 mt-2">
              <button
                onClick={handleGoogleSignIn}
                className=" py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <img
                  src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

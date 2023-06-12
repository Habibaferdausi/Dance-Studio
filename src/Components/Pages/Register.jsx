import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { createUser, googleSignIn, updateUserProfile } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Successfully Register",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => {
            console.log(err.message);
          });

        fetch("https://dance-studio-hazel.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData);

            Swal.fire({
              position: "top",
              icon: "success",
              title: "Successfully Register",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.log(error);
            // Handle error
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //

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
            title: "Successfully Registered with Google",
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              })}
              className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters and contain at least one
                capital letter and one special character.
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password,
              })}
              className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                Passwords do not match.
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="photoURL" className="text-sm font-medium">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              {...register("photoURL")}
              className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="gender" className="text-sm font-medium">
              Gender
            </label>
            <select
              id="gender"
              {...register("gender", { required: true })}
              className="border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">
                Please select a gender.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm">Or sign up with:</p>
          <div className="flex space-x-2 mt-2">
            <button
              onClick={handleGoogleSignIn}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

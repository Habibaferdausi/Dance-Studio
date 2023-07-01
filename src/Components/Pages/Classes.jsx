import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import {
  faChalkboardTeacher,
  faMoneyBills,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useUserRole } from "../Layout/Dashboard";
import Wave from "react-wavify";
import useAuth from "../Hooks/useAuth";
import { FaStar } from "react-icons/fa";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosHook] = useAxios();

  const userRole = useUserRole(user);

  const [selectedClasses, setSelectedClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosHook
      .get("/filterClasses")
      .then((response) => {
        const data = response.data;
        setClasses(data);
      })
      .catch((err) => {
        console.error("Error retrieving classes:", err);
        setClasses([]);
        setIsLoading(false);
      });
  }, []);

  const handleSelectClass = (classData) => {
    const {
      _id,
      className,
      classImage,
      price,
      availableSeats,
      instructorName,
      instructorEmail,
    } = classData;

    if (!user) {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#003526",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
      return;
    }
    if (userRole === "admin" || userRole === "instructor") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "As an Admin/Instructor, you can't select a class.",
      });
      return;
    }
    if (selectedClasses.includes(classData._id)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have already selected this class.",
      });
      return;
    }

    setSelectedClasses([...selectedClasses, classData._id]);

    axiosHook
      .post("https://dance-studio-hazel.vercel.app/selects", {
        classId: _id,
        className,
        classImage,
        price,
        availableSeats,
        instructorName,
        instructorEmail,
        email: user?.email,
      })
      .then((response) => {
        const data = response.data;
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added..",
            text: "Successfully Added.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
          });
        }
      })
      .catch((err) => {
        console.error("Error selecting course:", err);
        alert("Failed to select course. Please try again.");
      });
  };

  return (
    <div className="mb-20 mt-10 mx-auto">
      <Wave mask="url(#mask)" fill="#e77bff">
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
      <h1
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        style={{ fontFamily: "Lemon, sans-serif" }}
        className="bg-gradient-to-r text-2xl text-center lg:text-4xl from-pink-400 to-orange-700 text-transparent bg-clip-text mt-10 mb-10"
      >
        <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
          Our Classes
        </span>
      </h1>
      <h4
        className="mt-2 mb-5 text-center text-2xl text-blue-600 dark:text-blue-200 font-semibold"
        data-aos="fade-right"
        data-aos-offset="200"
        style={{ letterSpacing: "10px" }}
      >
        Choose your style
      </h4>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-9 mt-10 lg:mt-20 "
      >
        {classes.map((classData) => (
          <Card
            className="w-80 mb-7 h-100 mx-auto"
            key={classData?._id}
            imgAlt={classData?.className}
            imgSrc={classData?.classImage}
          >
            <div className="bg-pink-100 p-5 text-center dark:bg-gray-700">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
                  {classData?.className}
                </span>
              </h5>
            </div>
            <div className="mb-4 mt-2.5 text-yellow-500 flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-blue-600 dark:text-white">
                ${classData?.price}
              </span>
              <button
                className={` ${
                  classData?.availableSeats === "0" ||
                  (user &&
                    (user.role === "admin" || user.role === "instructor")) ||
                  !user
                    ? "cursor-not-allowed"
                    : ""
                }`}
                disabled={
                  classData?.availableSeats === "0" ||
                  (user &&
                    (user.role === "admin" || user.role === "instructor")) ||
                  !user
                }
                onClick={() => handleSelectClass(classData)}
                style={{
                  padding: "10px",
                }}
              >
                <span>
                  {user &&
                  (user.role === "admin" || user.role === "instructor") ? (
                    "Logged in as Admin/Instructor"
                  ) : (
                    <img
                      src="https://media2.giphy.com/media/ZIER92NnlAmChYwLlr/200.gif?cid=6c09b952dh5l8vjhr12rl1aqaviqfdbl6bncsbwsdvfj40kv&ep=v1_internal_gif_by_id&rid=200.gif&ct=g"
                      alt="Enroll Now"
                      style={{ width: "110px" }}
                    />
                  )}
                </span>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;

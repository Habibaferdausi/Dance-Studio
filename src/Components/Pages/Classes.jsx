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
        className="mt-2 mb-5 text-center text-2xl font-semibold"
        data-aos="fade-right"
        data-aos-offset="200"
        style={{ letterSpacing: "10px" }}
      >
        Choose your style
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-9 mt-7 mx-12">
        {classes.map((classData) => (
          <Card
            key={classData?._id}
            imgAlt={classData?.className}
            imgSrc={classData?.classImage}
          >
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
                  {classData?.className}
                </span>
              </h5>
            </a>
            <div className="mb-5 mt-2.5 text-yellow-500 flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${classData?.price}
              </span>
              <button
                className={`rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 ${
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
                  backgroundImage: `url(https://www.ascncfmacademy.com/stock-market/assets/new-images/enroll-now.gif)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  {user && (user.role === "admin" || user.role === "instructor")
                    ? "Logged in as Admin/Instructor"
                    : ""}
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

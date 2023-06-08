import React, { useState, useEffect } from "react";

import useAuth from "../Hooks/useAuth";
import { Card } from "flowbite-react";
import {
  faChalkboardTeacher,
  faMoneyBills,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useAuth();

  fetch("http://localhost:4000/filterClasses")
    .then((response) => response.json())
    .then((data) => setClasses(data))
    .catch((err) => {
      console.error("Error retrieving classes:", err);
      setClasses([]);
    });

  const handleSelectClass = (classId) => {
    if (!user) {
      alert("Please log in before selecting a course.");
      return;
    }

    if (user?.role === "admin" || user?.role === "instructor") {
      alert("You are not allowed to select this course.");
      return;
    }

    fetch("http://localhost:4000/classes/select", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        classId,
        user,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Course selected successfully!");
          // Handle any additional logic after successful course selection
        } else {
          alert("Failed to select course: " + data.error);
        }
      })
      .catch((err) => {
        console.error("Error selecting course:", err);
        alert("Failed to select course. Please try again.");
      });
  };

  return (
    <div>
      <h1 className=" text-center my-5 pb-7 text-red-900 text-3xl font-extrabold">
        Approved Classes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-9 mx-12">
        {classes.map((classData) => (
          <Card
            key={classData?._id}
            imgAlt={classData?.className}
            imgSrc={classData?.classImage}
            className={classData?.availableSeats === "0" ? "bg-red-500" : ""}
            style={{
              height: "200px",
            }}
          >
            <h5 className="text-2xl font-bold text-center bg-red-100 p-3  text-red-900 dark:text-white">
              {classData?.className}
            </h5>
            <p className="font-semibold text-lg text-orange-400  dark:text-gray-400">
              <span className="font-bold  text-gray-700">
                <FontAwesomeIcon
                  icon={faChalkboardTeacher}
                  className="me-2 text-red-400"
                ></FontAwesomeIcon>
                Instructor:
              </span>{" "}
              {classData?.instructorName}
            </p>
            <p className="font-semibold  flex gap-2 text-lg text-blue-700 dark:text-gray-400">
              <span className="font-bold  text-gray-700 flex gap-2">
                <FontAwesomeIcon
                  icon={faUserTimes}
                  className=" text-blue-800"
                ></FontAwesomeIcon>{" "}
                Available Seats :
              </span>{" "}
              {classData?.availableSeats}
            </p>
            <p className="font-semibold text-lg text-red-700 dark:text-gray-400">
              <span className="font-bold text-gray-700">
                <FontAwesomeIcon
                  icon={faMoneyBills}
                  className="me-2 text-green-500"
                ></FontAwesomeIcon>
                Price:
              </span>{" "}
              {classData?.price} $
            </p>
            <button
              className="text-white text-lg font-semibold bg-red-900 p-2 mt-4"
              disabled={
                classData?.availableSeats === "0" ||
                user?.role === "admin" ||
                user?.role === "instructor"
              }
              onClick={() => handleSelectClass(classData._id)}
            >
              {user?.role === "admin"
                ? "Logged in as Admin"
                : user?.role === "instructor"
                ? "Logged in as Instructor"
                : "Select"}
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;

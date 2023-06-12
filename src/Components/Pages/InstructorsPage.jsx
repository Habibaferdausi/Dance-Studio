import React, { useState, useEffect } from "react";
import useAxios from "../Hooks/useAxios";
import { Card, Progress } from "flowbite-react";

import { Bars } from "react-loader-spinner";
import {
  FaFacebook,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);
  const [axiosHook] = useAxios();

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axiosHook.get("/users");
        const allUsers = response.data;
        const instructorUsers = allUsers.filter(
          (user) => user.role === "instructor"
        );
        setInstructors(instructorUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold   text-purple-700  mb-5 text-center">
        Our Instructors
      </h1>
      {instructors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 mx-12">
          {instructors.map((instructor) => (
            <Card key={instructor._id} className="shadow-2xl">
              <div className="flex flex-col items-center pb-3">
                <img
                  alt="image"
                  className="mb-3 rounded-full shadow-lg"
                  height="40"
                  src={instructor?.photoURL}
                  width="96"
                />
                <h5 className="mb-1  font-bold text-2xl text-gray-700 dark:text-white">
                  {instructor?.name}
                </h5>
                <span className=" text-base text-gray-500 dark:text-gray-400">
                  {instructor?.email}
                </span>
                <div className=" flex gap-8 mt-5 text-4xl">
                  {" "}
                  <FaFacebook className="text-blue-500" />
                  <FaWhatsapp className="text-green-500" />
                  <FaTwitter className="text-blue-400" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <p>
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </p>
      )}
    </div>
  );
};

export default InstructorsPage;

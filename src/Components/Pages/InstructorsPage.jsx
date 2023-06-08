import React, { useState, useEffect } from "react";
import useAxios from "../Hooks/useAxios";
import { Card, Progress } from "flowbite-react";

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
      <h1 className="text-3xl font-bold mb-4">Instructors</h1>
      {instructors.length > 0 ? (
        <div>
          {instructors.map((instructor) => (
            <Card key={instructor._id} className="mb-4">
              <div className="flex flex-col items-center pb-10">
                <div
                  Display
                  Name
                  alt="image"
                  className="mb-3 rounded-full shadow-lg"
                  height="96"
                  src={instructor.img}
                  width="96"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {instructor?.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {instructor?.email}
                </span>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <p>
          <Progress
            labelProgress
            labelText
            progress={50}
            size="lg"
            textLabel="Loading"
          />
        </p>
      )}
    </div>
  );
};

export default InstructorsPage;

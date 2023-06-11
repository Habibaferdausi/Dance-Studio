import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

const SelectedClasses = () => {
  const { user } = useAuth();
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [axiosHook] = useAxios();

  useEffect(() => {
    const fetchSelectedCourse = async () => {
      try {
        const response = await axiosHook(`/selects/${user?.email}`);
        setSelectedCourse(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSelectedCourse();
  }, []);

  return (
    <div>
      {selectedCourse &&
        selectedCourse?.map((course) => (
          <div
            key={course?._id}
            className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden"
          >
            <img
              src={course?.classImage}
              alt="Class Image"
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{course?.className}</h2>
              <p className="mb-2">Class ID: {course?.classId}</p>
              <p className="mb-2">Price: {course?.price}</p>
              <div className="flex justify-between">
                <button className="btn btn-danger">Delete</button>
                <Link
                  to={`/dashboard/payment/${course?.classId}`}
                  className="btn btn-success"
                >
                  Pay
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SelectedClasses;

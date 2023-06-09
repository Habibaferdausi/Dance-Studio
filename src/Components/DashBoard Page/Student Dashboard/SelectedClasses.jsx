import React, { useEffect, useState } from "react";
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
  console.log(selectedCourse);

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
              {/* Add additional fields you want to display */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default SelectedClasses;

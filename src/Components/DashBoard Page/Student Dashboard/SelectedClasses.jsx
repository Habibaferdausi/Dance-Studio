import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

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

  const handleDelete = async (_id) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axiosHook.delete(`/selects/${user?.email}/${_id}`);
        setSelectedCourse(
          selectedCourse.filter((course) => course._id !== _id)
        );
        Swal.fire("Deleted!", "The item has been deleted.", "success");
      } catch (error) {
        console.error(error);
        Swal.fire(
          "Error",
          "An error occurred while deleting the item.",
          "error"
        );
      }
    }
  };

  return (
    <div>
      {selectedCourse &&
        selectedCourse.map((course) => (
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
                <button
                  onClick={() => handleDelete(course?._id)}
                  className="btn btn-ghost bg-red-600 text-white"
                >
                  <FaTrash />
                </button>
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

import React from "react";

const ClassesList = ({ classes }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {classes.map((classItem) => (
        <div key={classItem._id} className="border p-4 my-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-purple-900">
              {classItem.className}
            </h2>
            <span className="text-sm font-semibold text-amber-500">
              {classItem.status}
            </span>
          </div>
          <img
            src={classItem.classImage}
            alt={classItem.className}
            className="w-full max-h-64 mb-4"
          />
          <p className="font-bold text-lg text-gray-700">
            Instructor Name:{classItem.instructorName}
          </p>
          <p className="text-green-700 font-semibold mt-2">
            Email: {classItem.instructorEmail}
          </p>
          <p className="text-gray-700 font-semibold mt-2">
            Available Seats: {classItem.availableSeats}
          </p>
          <p className="text-red-700 font-semibold mt-2">
            Price: {classItem.price}
          </p>

          <p className="text-green-700 font-semibold  mt-2">
            Total Enrolled Students: {classItem.totalEnrolledStudents}
          </p>
          <p className="text-purple-400 font-semibold mt-2">
            Feedback: {classItem?.feedback}
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4">
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default ClassesList;

import React from "react";

const ClassesList = ({ classes }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {classes.map((classItem) => (
        <div key={classItem._id} className="border p-4 my-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold">{classItem.className}</h2>
            <span className="text-sm font-semibold">{classItem.status}</span>
          </div>
          <img
            src={classItem.classImage}
            alt={classItem.className}
            className="w-full max-h-64 mb-4"
          />
          <p className="text-gray-700">{classItem.instructorName}</p>
          <p className="text-gray-700">{classItem.instructorEmail}</p>
          <p className="text-gray-700">
            Available Seats: {classItem.availableSeats}
          </p>
          <p className="text-gray-700">Price: {classItem.price}</p>

          <p className="text-gray-700 mt-2">
            Total Enrolled Students: {classItem.totalEnrolledStudents}
          </p>
          <p className="text-gray-700">Feedback: {classItem?.feedback}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4">
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default ClassesList;

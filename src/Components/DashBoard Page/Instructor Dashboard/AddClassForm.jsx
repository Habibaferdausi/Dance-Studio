import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const AddClassForm = () => {
  const { user } = useAuth();
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [price, setPrice] = useState("");

  const handleClassNameChange = (e) => {
    setClassName(e.target.value);
  };

  const handleClassImageChange = (e) => {
    setClassImage(e.target.value);
  };

  const handleAvailableSeatsChange = (e) => {
    setAvailableSeats(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAddClass = () => {
    // Create a new class object with the form values
    const newClass = {
      className,
      classImage,
      instructorName: user?.displayName,
      instructorEmail: user?.email,
      availableSeats,
      price,
      status: "pending",
    };

    // Make an API call to your backend server to save the new class
    fetch("http://localhost:4000/classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((response) => response.json())
      .then((data) => {
        // Log the response from the server
        console.log("Response from server:", data);

        // Reset form fields
        setClassName("");
        setClassImage("");
        setAvailableSeats("");
        setPrice("");
      })
      .catch((error) => {
        // Handle error if API call fails
        console.error("Error:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a Class</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="className"
        >
          Class name
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          id="className"
          value={className}
          onChange={handleClassNameChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="classImage"
        >
          Class Image
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          id="classImage"
          value={classImage}
          onChange={handleClassImageChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="instructorName"
        >
          Instructor name
        </label>
        <input
          className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
          type="text"
          id="instructorName"
          value={user?.displayName}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="instructorEmail"
        >
          Instructor email
        </label>
        <input
          className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
          type="text"
          id="instructorEmail"
          value={user?.email}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="availableSeats"
        >
          Available seats
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="number"
          id="availableSeats"
          value={availableSeats}
          onChange={handleAvailableSeatsChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="number"
          id="price"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddClass}
      >
        Add
      </button>
    </div>
  );
};

export default AddClassForm;

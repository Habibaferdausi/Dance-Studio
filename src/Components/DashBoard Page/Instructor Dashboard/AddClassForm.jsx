import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClassForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            className,
            classImage,
            instructorName,
            instructorEmail,
            availableSeats,
            price,
            status,
          } = data;
          const newClass = {
            className,
            classImage: imgURL,
            instructorName: user?.displayName,
            instructorEmail: user?.email,
            availableSeats: parseFloat(availableSeats),
            price: parseFloat(price),
            status: "pending",
          };

          // Make an API call to your backend server to save the new class
          // ...
          fetch("http://localhost:4000/classes", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newClass),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("New Class", data);
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Class added successfully",
                  showConfirmButton: false,
                  timer: 1000,
                });
              }
            });
        }
      });
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("className", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="label block text-gray-700 font-bold mb-2">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
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
            {...register("availableSeats", { required: true })}
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
            {...register("price", { required: true })}
          />
        </div>
        <button
          className="w-full bg-red-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};
export default AddClassForm;

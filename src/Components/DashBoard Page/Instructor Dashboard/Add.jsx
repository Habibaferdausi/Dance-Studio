import React from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const Add = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
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
            price,
            availableSeats,
            status,
          } = data;
          const newClass = {
            className,
            classImage,
            instructorName: user?.displayName,
            instructorEmail: user?.email,
            availableSeats: parseFloat(availableSeats),
            price: parseFloat(price),
            status: "pending",
          };
          console.log(newClass);
          useAxios
            .post("http://localhost:4000/classes", newClass)
            .then((data) => {
              console.log("response from server", data.data);
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Item added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("className", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Available seat*</span>
            </label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instractor Name</span>
          </label>
          <textarea
            {...register("instructorName", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Name"
            value={user?.displayName}
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instractor email</span>
          </label>
          <textarea
            {...register("instructorEmail", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Name"
            value={user?.email}
          ></textarea>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("classImage", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default Add;

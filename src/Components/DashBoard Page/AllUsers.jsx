import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  FaOldRepublic,
  FaRemoveFormat,
  FaSchool,
  FaTrashAlt,
  FaUserAltSlash,
  FaUserCheck,
  FaUserEdit,
  FaUserShield,
} from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const AllUsers = () => {
  const [axiosHook] = useAxios();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosHook.get("/users");
    return res.data;
  });

  const handleMakeRole = (user, role) => {
    fetch(`http://localhost:4000/users/role/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now a ${
              role.charAt(0).toUpperCase() + role.slice(1)
            }!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {};

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mt-10 text-amber-800 text-center">
        Welcome To Manage Users
      </h1>
      <h3 className="text-xl text-center mb-10 font-semibold mt-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="text-center p-2 text-amber-800 bg-gray-200 ">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>

              <th>Role (Admin)</th>
              <th>Role (Instructor)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold text-gray-800">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeRole(user, "admin")}
                      className="btn btn-ghost bg-purple-600 p-2 mx-auto rounded flex gap-1  text-white"
                    >
                      <FaUserEdit /> Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "Instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeRole(user, "instructor")}
                      className="btn btn-ghost bg-blue-500 p-2 rounded mx-auto flex gap-1  text-white"
                    >
                      <FaUserCheck />
                      Instructor
                    </button>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaUserAltSlash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

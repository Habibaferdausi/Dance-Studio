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
    fetch(`https://dance-studio-hazel.vercel.app/users/role/${user._id}`, {
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
    <div className="w-full bg-slate-50 dark:bg-slate-600">
      <h1 className="text-3xl font-bold pt-10 text-amber-800 text-center dark:text-white">
        Welcome To Manage Users
      </h1>
      <h3 className="text-xl text-center mb-10 font-semibold mt-4 dark:text-purple-300">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="text-center p-2 text-amber-800 dark:text-gray-100 bg-gray-200  dark:bg-slate-400">
            <tr className="bg-gray-100 dark:bg-slate-600">
              <th></th>
              <th>Name</th>
              <th>Email</th>

              <th>Role (Admin)</th>
              <th>Role (Instructor)</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold text-purple-800 dark:text-gray-100">
            {users.map((user, index) => (
              <tr key={user._id} className=" bg-purple-100 ">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

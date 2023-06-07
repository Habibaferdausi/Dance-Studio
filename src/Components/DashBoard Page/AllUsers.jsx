import { useQuery } from "@tanstack/react-query";
import React from "react";

import { FaTrashAlt, FaUserShield } from "react-icons/fa";
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
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
                      className="btn btn-ghost bg-orange-600 text-white"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "teacher" ? (
                    "Teacher"
                  ) : (
                    <button
                      onClick={() => handleMakeRole(user, "teacher")}
                      className="btn btn-ghost bg-orange-600 text-white"
                    >
                      Make Teacher
                    </button>
                  )}
                  {/* <button
                    onClick={() => handleMakeRole(user, "teacher")}
                    className="btn btn-ghost bg-blue-600 text-white"
                  >
                    Make Teacher
                  </button> */}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
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

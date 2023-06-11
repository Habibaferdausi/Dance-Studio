import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import SideNav from "../DashBoard Page/SideNav";
import { Outlet } from "react-router-dom";
import useAxios from "../Hooks/useAxios";

export const useUserRole = (user) => {
  const [userRole, setUserRole] = useState("");
  const [axiosHook] = useAxios();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await axiosHook.get(`/users/role/${user?.email}`);
        console.log("Response:", response.data);

        const { admin, instructor } = response.data;

        if (admin) {
          setUserRole("admin");
        } else if (instructor) {
          setUserRole("instructor");
        } else {
          // Fetch the user role from the database directly
          const usersResponse = await axiosHook.get("/users");
          const users = usersResponse.data;

          const userRole = users.find((u) => u.email === user?.email)?.role;

          if (userRole) {
            setUserRole(userRole);
          } else {
            setUserRole("unknown");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (user) {
      fetchUserRole();
    }
  }, [user, axiosHook]);

  return userRole;
};

const Dashboard = () => {
  const { user } = useAuth(); // Use the appropriate hook provided by your authentication library
  const userRole = useUserRole(user);
  console.log(userRole);

  return (
    <div className="relative min-h-screen md:flex">
      <SideNav userRole={userRole} />
      <div className="flex-1  md:ml-11">
        <div className="p-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

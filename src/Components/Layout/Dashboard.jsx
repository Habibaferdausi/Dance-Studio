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
        const adminResponse = await axiosHook.get("/users/admin/:email");
        const instructorResponse = await axiosHook.get(
          "/users/instructor/:email"
        );
        const { email: adminEmail } = adminResponse.data;
        const { email: instructorEmail } = instructorResponse.data;

        if (adminEmail === user?.email) {
          setUserRole("admin");
        } else if (instructorEmail === user?.email) {
          setUserRole("instructor");
        } else {
          setUserRole("user");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserRole();
  }, [user]);

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

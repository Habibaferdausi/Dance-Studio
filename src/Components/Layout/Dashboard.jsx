import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import SideNav from "../DashBoard Page/SideNav";
import { Outlet } from "react-router-dom";

const useUserRole = (user) => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Make the API request to get the user's role
    const fetchUserRole = async () => {
      try {
        const adminResponse = await axios.get(
          "http://localhost:4000/users/admin/:email"
        ); // Replace with the actual API endpoint for admin role
        const instructorResponse = await axios.get(
          "http://localhost:4000/users/instructor/:email"
        ); // Replace with the actual API endpoint for instructor role
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

    // Call the fetchUserRole function
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

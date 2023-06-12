import axios from "axios";
import React, { useEffect, useState } from "react";

const userRole = (user) => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Make the API request to get the user's role
    const fetchUserRole = async () => {
      try {
        const adminResponse = await axios.get(
          "https://dance-studio-hazel.vercel.app/users/admin/:email"
        ); // Replace with the actual API endpoint for admin role
        const instructorResponse = await axios.get(
          "https://dance-studio-hazel.vercel.app/users/instructor/:email"
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

export default userRole;

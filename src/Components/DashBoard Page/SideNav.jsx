import { fabClasses } from "@mui/material";
import { Sidebar } from "flowbite-react";
import React from "react";
import {
  FaCartPlus,
  FaChalkboardTeacher,
  FaHome,
  FaSign,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">
              <p>Dashboard</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaChalkboardTeacher}>
              <p>instructors</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaCartPlus}>
              <Link to="/dashboard/allUsers">All Users</Link>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaUser}>
              <p>All Users</p>
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={FaSign}>
              <p>Sign In</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaSignOutAlt}>
              <p>Sign Up</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item>
              <img
                alt="Flowbite React Logo"
                className="mr-3 h-20 sm:h-28"
                src="https://i.ibb.co/PwPjsVY/AK-removebg-preview.png"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Dance Studio
              </span>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={FaHome}>
              <p>Home</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideNav;

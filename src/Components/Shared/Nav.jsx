import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaSign, FaSignInAlt } from "react-icons/fa";
import ToggleButton from "./ToggleButton ";

const Nav = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar fluid rounded className="">
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            className="mr-3 h-20 sm:h-28"
            src="https://i.ibb.co/PwPjsVY/AK-removebg-preview.png"
          />
          <span
            style={{ fontFamily: "Lemon, sans-serif" }}
            className="self-center whitespace-nowrap  text-amber-900 text-xl font-semibold dark:text-white"
          >
            Dance <span className="text-gray-500">Studio</span>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              inline
              label={
                <Avatar alt="User settings" img={user?.photoURL} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item>
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost bg-purple-300  dark:text-black"
                >
                  LogOut
                </button>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Navbar.Collapse>
              <Link
                to="/login"
                className="flex justify-center items-center gap-2 bg-yellow-800 rounded p-2 text-white"
              >
                <FaSignInAlt /> Login
              </Link>
            </Navbar.Collapse>
          )}
          <Navbar.Toggle />
          <ToggleButton></ToggleButton>
        </div>
        <Navbar.Collapse>
          <Link to="/">Home</Link>
          <Link to="instructors">Instructors</Link>
          <Link to="classes"> Classes</Link>
          {user && <Link to="dashboard">Dashboard</Link>}
          <Navbar.Link>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;

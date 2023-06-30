import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import {
  FaChalkboardTeacher,
  FaHome,
  FaSign,
  FaSignInAlt,
} from "react-icons/fa";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import DarkModeToggle from "react-dark-mode-toggle";

const Nav = ({ isDarkTheme, toggleTheme }) => {
  const { user, logOut } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setIsDarkMode(isDarkTheme);
  }, [isDarkTheme]);

  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  return (
    <div className=" relative">
      <Navbar
        fluid
        rounded
        className={` fixed top-0 left-0 right-0 z-20 w-full bg-transparent  ${
          scroll
            ? "bg-transparent bg-gradient-to-l   from-transparent to-pink-200  "
            : "bg-transparent"
        }`}
        style={{ fontFamily: "Lemon, sans-serif" }}
      >
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
                <Button
                  gradientDuoTone="pinkToOrange"
                  outline
                  onClick={handleLogOut}
                >
                  LogOut
                </Button>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Navbar.Collapse>
              <Button gradientDuoTone="pinkToOrange" outline>
                <Link
                  to="/login"
                  className="flex justify-center items-center gap-2"
                >
                  <FaSignInAlt /> Login
                </Link>
              </Button>
            </Navbar.Collapse>
          )}
          <Navbar.Collapse>
            <div className="flex items-center space-x-2 ml-2">
              <DarkModeToggle
                onChange={handleDarkModeToggle}
                checked={isDarkMode}
                size={80}
              />
            </div>
          </Navbar.Collapse>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link className="flex gap-2" to="/">
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
              Home
            </span>
          </Link>

          <Link to="instructors">
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
              Instructors
            </span>
          </Link>
          <Link to="classes">
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
              Classes
            </span>
          </Link>
          <Link to="/">
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
              Home
            </span>
          </Link>
          {user && (
            <Link to="dashboard">
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
                Dashboard
              </span>
            </Link>
          )}
          <Navbar.Link className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;

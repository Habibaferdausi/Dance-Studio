import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            className="mr-3 h-20 sm:h-28"
            src="https://i.ibb.co/PwPjsVY/AK-removebg-preview.png"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Dance Studio
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
                <button onClick={handleLogOut} className="btn btn-ghost">
                  LogOut
                </button>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Navbar.Link>
              <Link to="/login">Login</Link>
            </Navbar.Link>
          )}
          <Navbar.Toggle />
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

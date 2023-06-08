import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChalkboardTeacher,
  faPlus,
  faBookOpen,
  faCog,
  faUsers,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../Hooks/useAuth";

const SideNav = ({ userRole }) => {
  const { user } = useAuth();

  return (
    <div className="bg-gray-800 w-64 h-screen">
      <nav className="mt-10">
        <div className="flex items-center py-4 px-6 mb-8 bg-gray-400 border-b border-gray-400">
          <FontAwesomeIcon icon={faChartBar} className="text-gray-600 mr-3" />
          <h2 className="text-xl text-gray-800 font-semibold">Dashboard</h2>
        </div>
        <NavLink className="my-4 mx-auto ">
          <img
            className="object-cover w-24 h-24 mx-auto rounded-full"
            src={user?.photoURL}
            alt="avatar"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-white py-5 font-bold mx-auto text-center">
            {user?.displayName}
          </h1>
          <hr />
          <br />
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center py-2 px-8 text-gray-400 hover:bg-gray-700 hover:text-white"
          activeClassName="bg-gray-900 text-white"
        >
          <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-3" />
          Home
        </NavLink>
        {(userRole === "admin" || userRole === "instructor") && (
          <>
            {userRole === "admin" && (
              <>
                <NavLink
                  to="/manage-classes"
                  className="flex items-center py-2 px-8 text-gray-400 hover:bg-gray-700 hover:text-white"
                  activeClassName="bg-gray-900 text-white"
                >
                  <FontAwesomeIcon icon={faCog} className="w-6 h-6 mr-3" />
                  Manage Classes
                </NavLink>
                <NavLink
                  to="/manage-users"
                  className="flex items-center py-2 px-8 text-gray-400 hover:bg-gray-700 hover:text-white"
                  activeClassName="bg-gray-900 text-white"
                >
                  <FontAwesomeIcon icon={faUsers} className="w-6 h-6 mr-3" />
                  Manage Users
                </NavLink>
              </>
            )}
            {userRole === "instructor" && (
              <>
                <NavLink
                  to="/dashboard/addClass"
                  className="flex items-center py-2 px-8 text-gray-400 hover:bg-gray-700 hover:text-white"
                  activeClassName="bg-gray-900 text-white"
                >
                  <FontAwesomeIcon icon={faPlus} className="w-6 h-6 mr-3" />
                  Add a Class
                </NavLink>
                <NavLink
                  to="/dashboard/instructorClass"
                  className="flex items-center py-2 px-8 text-gray-400 hover:bg-gray-700 hover:text-white"
                  activeClassName="bg-gray-900 text-white"
                >
                  <FontAwesomeIcon icon={faBookOpen} className="w-6 h-6 mr-3" />
                  My Classes
                </NavLink>
              </>
            )}
          </>
        )}
        {(userRole === "user" || !userRole) && (
          <>
            <NavLink
              to="/my-selected-classes"
              className="flex items-center py-2 px-8 text-gray-400 hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900 text-white"
            >
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                className="w-6 h-6 mr-3"
              />
              My Selected Classes
            </NavLink>
            <NavLink
              to="/my-enrolled-classes"
              className="flex items-center py-2 px-8 text-gray-400 hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-900 text-white"
            >
              <FontAwesomeIcon icon={faBookOpen} className="w-6 h-6 mr-3" />
              My Enrolled Classes
            </NavLink>
          </>
        )}
        <NavLink className="my-9  mx-auto ">
          <br />
          <hr />
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-20  mx-11 px-6 sm:h-28"
            src="https://i.ibb.co/PwPjsVY/AK-removebg-preview.png"
          />
          <h1 className="text-center text-xl font-semibold text-white">
            Dance Studio
          </h1>
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center py-2 px-8 text-gray-400 hover:bg-gray-700 hover:text-white"
          activeClassName="bg-gray-900 text-white"
        >
          <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-3" />
          Home
        </NavLink>
      </nav>
    </div>
  );
};

export default SideNav;

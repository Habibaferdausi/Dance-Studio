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
} from "@fortawesome/free-solid-svg-icons";

const SideNav = ({ userRole }) => {
  return (
    <div className="bg-gray-800 w-64 h-screen">
      <nav className="mt-10">
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
                  to="/add-class"
                  className="flex items-center py-2 px-8 text-gray-400 hover:bg-gray-700 hover:text-white"
                  activeClassName="bg-gray-900 text-white"
                >
                  <FontAwesomeIcon icon={faPlus} className="w-6 h-6 mr-3" />
                  Add a Class
                </NavLink>
                <NavLink
                  to="/my-classes"
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
      </nav>
    </div>
  );
};

export default SideNav;

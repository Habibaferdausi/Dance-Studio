import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white w-1/4">
        <h2 className="text-2xl font-bold p-4">Dashboard</h2>
        <nav>
          <ul>
            <li
              className={`p-4 cursor-pointer ${
                activeLink === "home" ? "bg-gray-700" : ""
              }`}
            >
              Home
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeLink === "settings" ? "bg-gray-700" : ""
              }`}
              onClick={() => handleNavLinkClick("settings")}
            >
              Settings
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeLink === "profile" ? "bg-gray-700" : ""
              }`}
              onClick={() => handleNavLinkClick("profile")}
            >
              Profile
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Section */}
      <div className="flex-grow p-8">
        {activeLink === "home" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Home</h2>
            <p>This is the home section.</p>
          </div>
        )}

        {activeLink === "settings" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p>This is the settings section.</p>
          </div>
        )}

        {activeLink === "profile" && <Link to="/allUsers"></Link>}
      </div>
    </div>
  );
};

export default Dashboard;

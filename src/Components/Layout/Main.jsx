import React, { useState, useEffect } from "react";
import Nav from "../Shared/Nav";
import { Outlet } from "react-router-dom";
import FooterSection from "../Shared/Footer";

const Main = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? "dark" : ""}`}>
      <div className="bg-slate-100 dark:bg-gray-800 p-4">
        <label htmlFor="themeToggle" className="flex items-center space-x-2">
          <span>Toggle theme:</span>
          <input
            type="checkbox"
            id="themeToggle"
            checked={isDarkTheme}
            onChange={toggleTheme}
            className="form-checkbox h-6 w-6 text-indigo-600"
          />
          <span className="text-sm">{isDarkTheme ? "Dark" : "Light"}</span>
        </label>
      </div>

      <Nav></Nav>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </div>
  );
};

export default Main;

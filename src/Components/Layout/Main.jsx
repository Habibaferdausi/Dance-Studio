import React, { useState, useEffect } from "react";
import Nav from "../Shared/Nav";
import { Outlet } from "react-router-dom";
import FooterSection from "../Shared/Footer";

const Main = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? "dark" : ""}`}>
      <div className="bg-slate-100 dark:bg-gray-800 "></div>

      <Nav isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Outlet className="max-w-screen-2xl mx-auto" />
      <FooterSection />
    </div>
  );
};

export default Main;

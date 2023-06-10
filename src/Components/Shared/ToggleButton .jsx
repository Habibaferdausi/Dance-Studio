import React, { useState, useEffect } from "react";

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center">
      <button
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        } text-white font-semibold py-2 px-4 rounded`}
        onClick={toggleTheme}
      >
        {isDarkMode ? "Dark" : "Light"}
      </button>
      <span className="ml-2 text-gray-600">
        Theme: {isDarkMode ? "Dark" : "Light"}
      </span>
    </div>
  );
};

export default ToggleButton;

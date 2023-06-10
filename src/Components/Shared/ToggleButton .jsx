import React, { useState, useEffect } from "react";
import anime from "animejs";

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const moonPath =
      "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
    const sunPath =
      "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
    const darkMode = document.getElementById("dark_mode");

    const timeline = anime.timeline({
      duration: 750,
      easing: "easeOutExpo",
    });

    timeline
      .add({
        targets: ".moon",
        d: [{ value: isDarkMode ? moonPath : sunPath }],
      })
      .add(
        {
          targets: "#dark_mode",
          rotate: isDarkMode ? 0 : 320,
        },
        "-=350"
      )
      .add(
        {
          targets: "section",
          backgroundColor: isDarkMode ? "rgba(255,255,255)" : "rgba(22,22,22)",
          color: isDarkMode ? "rgba(22,22,22)" : "rgba(255,255,255)",
        },
        "-=700"
      );

    if (!isDarkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [isDarkMode]);

  return (
    <section className="rounded p-2 ms-8">
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <svg
        id="dark_mode"
        width="55"
        height="55"
        viewBox="0 0 55 55"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleTheme}
      >
        <path
          className="moon pt-2"
          d="M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z"
          fill="#fee140"
        />
      </svg>
    </section>
  );
};

export default ToggleButton;

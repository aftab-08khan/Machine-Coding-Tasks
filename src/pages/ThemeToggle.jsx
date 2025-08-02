import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import ContentWrapper from "../components/ContentWrapper";
import Title from "../components/Title";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) || false
  );

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        Implement a theme toggle feature to switch between light and dark modes.
        This component demonstrates:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>State management for toggling themes</li>
          <li>Conditional class handling based on the selected theme</li>
          <li>Persisting theme preference using localStorage</li>
          <li>Applying global styles dynamically with Tailwind CSS</li>
        </ul>
      </TaskOverview>

      <div
        className={`${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } max-w-2xl w-full  shadow-lg rounded-lg p-6 mb-12`}
      >
        <Title isDarkMode={isDarkMode}>Theme Toggle</Title>
        {isDarkMode ? (
          <CiLight
            size={36}
            className="cursor-pointer"
            onClick={() => handleThemeToggle()}
          />
        ) : (
          <MdOutlineDarkMode
            size={36}
            className="cursor-pointer"
            onClick={() => handleThemeToggle()}
          />
        )}
      </div>
    </ContentWrapper>
  );
};

export default ThemeToggle;

import React from "react";

const Title = ({ isDarkMode, children }) => {
  return (
    <h1
      className={`${
        isDarkMode ? "text-white" : "text-indigo-800"
      } text-2xl font-bold text-center text-indigo-800 mb-4`}
    >
      {children}
    </h1>
  );
};

export default Title;

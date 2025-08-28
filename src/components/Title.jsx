import React from "react";

const Title = ({ isDarkMode, children }) => {
  return (
    <h1 className="text-gray-300  text-2xl font-bold text-center mb-4">
      {children}
    </h1>
  );
};

export default Title;

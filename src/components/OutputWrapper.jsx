import React from "react";

const OutputWrapper = ({ children }) => {
  return (
    <div className="max-w-3xl w-full mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default OutputWrapper;

import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-4xl w-full  bg-white shadow-lg rounded-lg p-6">
      {children}
    </div>
  );
};

export default Wrapper;

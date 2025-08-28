import React from "react";

const OutputWrapper = ({ children }) => {
  return (
    <div className="max-w-3xl w-full mt-6 p-4 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-lg shadow-lg text-white">
      {children}
    </div>
  );
};

export default OutputWrapper;

import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center pt-6 min-h-screen bg-black text-white pb-20 p-6">
      {children}
    </div>
  );
};

export default ContentWrapper;

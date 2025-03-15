import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center pt-6 min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {children}
    </div>
  );
};

export default ContentWrapper;

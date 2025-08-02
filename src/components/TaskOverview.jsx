import React from "react";

const TaskOverview = ({ children }) => {
  return (
    <div className="max-w-2xl bg-gray-50 p-4 rounded-lg shadow-md mb-6 mt-2">
      <p className="text-gray-700 text-lg">
        📌 <strong>Task Overview: </strong>
        {children}
      </p>
    </div>
  );
};

export default TaskOverview;

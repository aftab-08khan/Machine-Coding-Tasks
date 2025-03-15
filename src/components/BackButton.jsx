import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to={"/"}
      className="px-5 py-2 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md flex items-center self-start gap-2 transition-all hover:bg-indigo-500 hover:shadow-lg active:scale-95 dark:bg-indigo-700 dark:hover:bg-indigo-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back
    </Link>
  );
};

export default BackButton;

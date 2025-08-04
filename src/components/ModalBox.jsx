import React from "react";
import Heading from "./Heading";

const ModalBox = ({ setOpen }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="max-w-2xl w-full  bg-white shadow-lg rounded-lg p-6"
    >
      <Heading>Welcome to Machine Coding Task , This is Modal Box Task</Heading>
      <button
        onClick={() => setOpen(!open)}
        className="px-5 py-2 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md flex gap-2 transition-all hover:bg-indigo-500 hover:shadow-lg active:scale-95 self-center justify-self-center"
      >
        Close Dialog
      </button>
    </div>
  );
};

export default ModalBox;

import React from "react";
import Heading from "./Heading";

const ModalBox = ({ setOpen }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="max-w-2xl w-full bg-neutral-900/80 backdrop-blur-md shadow-xl rounded-lg p-6 border border-white/10 text-white"
    >
      {/* Heading */}
      <Heading>Welcome to Machine Coding Task, This is Modal Box Task</Heading>

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="mt-6 px-5 py-2 bg-neutral-800 text-white text-lg font-semibold rounded-lg shadow-md flex gap-2 transition-all hover:bg-neutral-700 hover:shadow-lg active:scale-95 self-center justify-self-center border border-white/10"
      >
        Close Dialog
      </button>
    </div>
  );
};

export default ModalBox;

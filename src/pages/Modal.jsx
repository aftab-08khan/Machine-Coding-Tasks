import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import TaskOverview from "../components/TaskOverview";
import Heading from "../components/Heading";
import BackButton from "../components/BackButton";
import ModalBox from "../components/ModalBox";
const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <ContentWrapper>
      <BackButton></BackButton>
      <TaskOverview>Build a Modal Dialog box </TaskOverview>
      <Heading>Build a Modal Dialog box </Heading>
      <div className="max-w-2xl w-full  bg-white shadow-lg rounded-lg p-6">
        <button
          onClick={() => setOpen(!open)}
          className="px-5 py-2 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md flex gap-2 transition-all hover:bg-indigo-500 hover:shadow-lg active:scale-95 self-center justify-self-center"
        >
          Open Dialog
        </button>
      </div>
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="w-full opacity-0.4 h-full justify-center flex items-center absolute top-0 bg-gray-400/90 shadow-lg rounded-lg p-6 transition-all ease-in-out duration-300 "
        >
          <ModalBox setOpen={setOpen} />
        </div>
      )}
    </ContentWrapper>
  );
};

export default Modal;

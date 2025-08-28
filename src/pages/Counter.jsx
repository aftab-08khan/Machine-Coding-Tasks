import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Title from "../components/Title";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <ContentWrapper className="bg-gray-900/80 backdrop-blur-md min-h-screen">
      <BackButton />
      <TaskOverview>
        Build a counter application using Redux for state management. This
        component demonstrates:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
          <li>Setting up Redux store</li>
          <li>Dispatching actions to update the global state</li>
          <li>Accessing state using Redux hooks</li>
          <li>UI updates in response to global state changes</li>
        </ul>
      </TaskOverview>

      <div className="max-w-2xl w-full shadow-lg rounded-xl p-6 mb-12 bg-gray-800 border border-gray-700 text-white">
        <Title className="text-white">Build a Counter using Redux</Title>
        <div className="flex items-center justify-around mt-6">
          <CiCircleMinus
            size={36}
            className="cursor-pointer text-red-500 hover:text-red-400 transition-colors"
            onClick={() => count >= 1 && dispatch(decrement())}
          />
          <span className="text-3xl font-semibold">{count}</span>
          <CiCirclePlus
            size={36}
            className="cursor-pointer text-green-500 hover:text-green-400 transition-colors"
            onClick={() => count < 20 && dispatch(increment())}
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Counter;

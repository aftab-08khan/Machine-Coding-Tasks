import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Title from "../components/Title";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action";

const Counter = () => {
  let count = useSelector((state) => state.count);
  let dispatch = useDispatch();

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        Build a counter application using Redux for state management. This
        component demonstrates:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Setting up Redux store</li>
          <li>Dispatching actions to update the global state</li>
          <li>Accessing state using Redux hooks</li>
          <li>UI updates in response to global state changes</li>
        </ul>
      </TaskOverview>

      <div
        className={`max-w-2xl w-full  shadow-lg rounded-lg p-6 mb-12 bg-white`}
      >
        <Title>Build a Counter using Redux</Title>
        <div className="flex items-center justify-around">
          <CiCircleMinus
            size={36}
            className="cursor-pointer"
            onClick={() => count >= 1 && dispatch(decrement())}
          />
          {count}
          <CiCirclePlus
            size={36}
            className="cursor-pointer"
            onClick={() => count < 20 && dispatch(increment())}
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Counter;

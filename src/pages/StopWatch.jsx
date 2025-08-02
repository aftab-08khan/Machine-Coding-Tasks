import React, { useEffect, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Title from "../components/Title";

const StopWatch = () => {
  let [seconds, setSeconds] = useState(0);
  const [minutes, setMiuntes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => (prev += 1));
        if (seconds === 59) {
          setSeconds(0);
          setMiuntes((prev) => (prev += 1));
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const handleReset = () => {
    setSeconds(0);
    setMiuntes(0);
    setIsRunning(false);
  };

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        In this task, you will create a Stopwatch that allows users to start,
        pause, and reset the timer. The stopwatch will count time in minutes and
        seconds, updating dynamically.
      </TaskOverview>
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
        <Title>StopWatch</Title>
        <div className="flex justify-center items-center space-x-4 text-4xl font-semibold text-gray-900 mb-6">
          <span>{minutes.toString().padStart(2, "0")}</span>:
          <span>{seconds.toString().padStart(2, "0")}</span>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition-all"
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition-all"
          >
            Reset
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default StopWatch;

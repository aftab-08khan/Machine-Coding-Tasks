import React, { useEffect, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Title from "../components/Title";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 59) {
            setMinutes((m) => m + 1);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleReset = () => {
    setSeconds(0);
    setMinutes(0);
    setIsRunning(false);
  };

  return (
    <ContentWrapper className="flex flex-col items-center pt-6 min-h-screen bg-gray-900/80 p-6 backdrop-blur-md">
      <BackButton />

      <TaskOverview>
        In this task, you will create a Stopwatch that allows users to start,
        pause, and reset the timer. The stopwatch will count time in minutes and
        seconds, updating dynamically.
      </TaskOverview>

      <div className="w-full max-w-md mx-auto bg-gray-900/80 backdrop-blur-md border border-gray-700 shadow-lg rounded-xl p-6 text-center">
        <Title className="text-white">StopWatch</Title>

        <div className="flex justify-center items-center space-x-4 text-4xl font-semibold text-white mb-6">
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

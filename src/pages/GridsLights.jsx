import React, { useEffect, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import TaskOverview from "../components/TaskOverview";
import BackButton from "../components/BackButton";

const GridsLights = () => {
  const [arr, setArr] = useState([]);
  const [filled, setFilled] = useState(false);

  const handleCard = (index) => {
    if (!arr.includes(index)) {
      setArr((prev) => [...prev, index]); // Store clicked order
    }

    if (arr.length + 1 === 4) {
      // Fix: Set `filled` correctly when the 4th box is clicked
      setFilled(true);
    }
  };

  useEffect(() => {
    if (filled) {
      let interval = setInterval(() => {
        setArr((prev) => {
          if (prev.length === 0) {
            clearInterval(interval);
            setFilled(false);
            return [];
          }
          return prev.slice(1); // Remove the first clicked box in order
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [filled]);

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        {" "}
        Click on a box to light it up. Once all boxes are filled, they will turn
        off in the order they were clicked.
      </TaskOverview>
      <h1 className="text-2xl font-bold text-center mb-4">Grids Lights</h1>

      <div className="grid grid-cols-2 gap-4 place-items-center">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            onClick={() => handleCard(i)}
            className="w-32 h-32 flex items-center justify-center rounded-lg shadow-md cursor-pointer transition-all duration-500 hover:scale-105"
            style={{
              backgroundColor: arr.includes(i) ? "pink" : "gray",
            }}
          ></div>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default GridsLights;

import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import TaskOverview from "../components/TaskOverview";
import BackButton from "../components/BackButton";
import Heading from "../components/Heading";
import OutputWrapper from "../components/OutputWrapper";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQData = [
  {
    heading: "First",
    description: "This is my first Description",
  },
  {
    heading: "Second",
    description: "This is my second Description",
  },
  {
    heading: "Third",
    description: "This is my third Description",
  },
  {
    heading: "Fourth",
    description: "This is my fourth Description",
  },
];

const ToggleAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>Build Toggle Accordion</TaskOverview>
      <Heading>Toggle Accordion FAQ</Heading>
      {/* <OutputWrapper> */}
      <ul className="flex flex-col w-full">
        {FAQData.map((item, i) => (
          <li key={i} className="border-b list-none">
            {/* Shared container for heading and description */}
            <div className="w-full">
              {/* Clickable header row */}
              <div
                className="flex justify-between items-center bg-gray-300 px-4 py-3 cursor-pointer"
                onClick={() => toggleAccordion(i)}
              >
                <span className="font-semibold">{item.heading}</span>
                {activeIndex === i ? (
                  <FaMinus size={20} />
                ) : (
                  <FaPlus size={20} />
                )}
              </div>

              {/* Description (shown only when active) */}
              {activeIndex === i && (
                <div className="bg-red-100 px-4 py-2">
                  <p className="text-sm text-gray-800">{item.description}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      {/* </OutputWrapper> */}
    </ContentWrapper>
  );
};

export default ToggleAccordion;

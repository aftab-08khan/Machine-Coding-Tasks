import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import TaskOverview from "../components/TaskOverview";
import BackButton from "../components/BackButton";
import Heading from "../components/Heading";
import OutputWrapper from "../components/OutputWrapper";
import { FaPlus, FaMinus } from "react-icons/fa";
import Wrapper from "../components/Wrapper";

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
      <TaskOverview>
        Build a **Toggle Accordion** component that displays a list of FAQs.
        Each FAQ item should expand/collapse when clicked, showing or hiding its
        description. Only one item should be open at a time.
      </TaskOverview>

      <Heading>Toggle Accordion FAQ</Heading>

      <Wrapper>
        <ul className="flex flex-col w-full divide-y divide-gray-700 rounded-xl overflow-hidden shadow-md">
          {FAQData.map((item, i) => (
            <li key={i} className="list-none">
              {/* Accordion Container */}
              <div className="w-full">
                {/* Header */}
                <div
                  className="flex justify-between items-center bg-gray-700 px-4 py-3 cursor-pointer 
                       hover:bg-gray-600 transition-colors duration-200"
                  onClick={() => toggleAccordion(i)}
                >
                  <span className="font-medium text-gray-200">
                    {item.heading}
                  </span>
                  {activeIndex === i ? (
                    <FaMinus size={18} className="text-indigo-400" />
                  ) : (
                    <FaPlus size={18} className="text-indigo-400" />
                  )}
                </div>

                {/* Body */}
                {activeIndex === i && (
                  <div className="bg-gray-800 px-4 py-3">
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </ContentWrapper>
  );
};

export default ToggleAccordion;

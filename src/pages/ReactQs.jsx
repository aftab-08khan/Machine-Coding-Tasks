import React, { useEffect, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import { BsCopy } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const ReactQs = () => {
  const [reactQA, setReactQA] = useState([]);
  const [faqIndex, setFAQIndex] = useState(null);
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleFAQ = (index) => {
    setFAQIndex(faqIndex === index ? null : index);
  };
  const handleClipBoard = (answer) => {
    navigator.clipboard.writeText(answer).then(() => {
      setToggleIcon(true);

      setTimeout(() => {
        setToggleIcon(false);
      }, 2000);
    });
  };
  useEffect(() => {
    const url = import.meta.env.VITE_GITHUB_REACT_QA_URL;

    const fetchReactQA = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setReactQA(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchReactQA();
  }, []);

  return (
    <ContentWrapper>
      <BackButton />
      <Title>React Interview Questions</Title>

      <TaskOverview>
        Explore common React interview questions with answers. Click on a
        question to reveal the answer.
      </TaskOverview>

      <Wrapper>
        <div className="space-y-4">
          {reactQA?.map((obj, index) => {
            const isOpen = faqIndex === index;
            return (
              <div
                key={obj.id}
                className="bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-lg shadow-lg transition-all duration-300"
              >
                {/* Question Button */}
                <button
                  onClick={() => handleFAQ(index)}
                  className="w-full text-left px-4 py-3 flex justify-between items-center text-white font-semibold text-lg hover:bg-gray-800 rounded-t-lg transition-colors"
                >
                  {obj.question}
                  <span className="text-gray-400 text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-4 text-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 py-3" : "max-h-0"
                  }`}
                >
                  {obj.answer}
                  <div
                    onClick={() => handleClipBoard(obj.answer)}
                    className="cursor-pointer flex justify-self-end"
                  >
                    {!toggleIcon ? (
                      <BsCopy size={20} className="hover:text-gray-50" />
                    ) : (
                      <TiTick size={20} className="text-green-400" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default ReactQs;

import React, { useRef } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Heading from "../components/Heading";
import Wrapper from "../components/Wrapper";

const ScrollToTop = () => {
  const containerRef = useRef(null);
  const handleScroll = () => {
    // if (containerRef.current) {
    //   containerRef.current.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // }
    if (!containerRef.current) return;
    window.scrollTo({
      top: containerRef.current,
      behavior: "smooth",
    });
  };
  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>ScrollToTop</TaskOverview>
      <Heading>ScrollToTop</Heading>
      <Wrapper>
        <div
          ref={containerRef}
          className="h-180 p-3 justify-center flex items-end bg-gray-400"
        >
          <button
            onClick={handleScroll}
            className=" px-4 py-2 font-bold hover:bg-gray-200 transition-all ease-in-out duration-150 bg-gray-50 rounded-2xl flex justify-self-center"
          >
            Scroll To Top
          </button>
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default ScrollToTop;

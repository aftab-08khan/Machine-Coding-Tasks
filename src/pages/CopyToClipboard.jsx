import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Heading from "../components/Heading";
import Wrapper from "../components/Wrapper";
import { BsCopy } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const CopyToClipboard = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const textToCopy = "Hello World Copy to Clipboard";
  const handleClipBoard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setToggleIcon(true);

      setTimeout(() => {
        setToggleIcon(false);
      }, 2000);
    });
  };

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>CopyToClipboard</TaskOverview>
      <Heading>Copy to Clipboard</Heading>
      <Wrapper>
        <div className="bg-gray-900 text-gray-200 px-4 py-3 rounded-2xl flex justify-between items-center">
          <p>{textToCopy}</p>
          <div onClick={handleClipBoard} className="cursor-pointer">
            {!toggleIcon ? (
              <BsCopy size={20} className="hover:text-gray-50" />
            ) : (
              <TiTick size={20} className="text-green-400" />
            )}
          </div>
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default CopyToClipboard;

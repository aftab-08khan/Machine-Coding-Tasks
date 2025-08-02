import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Heading from "../components/Heading";
import { FaFolder, FaFileAlt, FaPlus } from "react-icons/fa";
import Data from "../data/VsCodeData.json";
import BackButton from "../components/BackButton";
const VsCodeTask = () => {
  const [data, setData] = useState(Data);

  const handleAddFolder = (index) => {
    console.log(index);
    const inputName = prompt("Enter a Folder Name");
    if (!inputName) return;

    setData((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              subNodes: [
                ...(item.subNodes || []),
                {
                  id: Date.now(),
                  type: "folder",
                  name: inputName,
                  subNodes: [],
                },
              ],
            }
          : item
      )
    );
  };

  const handleAddFile = (index) => {
    const inputName = prompt("Enter a File Name");
    if (!inputName) return;

    setData((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              subNodes: [
                ...(item.subNodes || []),
                { id: Date.now(), type: "file", name: inputName },
              ],
            }
          : item
      )
    );
  };

  return (
    <ContentWrapper>
      <BackButton />
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <Heading>VS Code Files and Folder Explorer</Heading>

        <div className="mt-4 space-y-2">
          {data?.map((item, i) => (
            <div key={i} className="ml-4">
              <div className="flex items-center space-x-2">
                {item.type === "folder" ? (
                  <FaFolder className="text-yellow-500" />
                ) : (
                  <FaFileAlt className="text-gray-500" />
                )}
                <span className="text-lg font-medium text-gray-800">
                  {item.name}
                </span>

                {item.type === "folder" && (
                  <>
                    <button
                      onClick={() => handleAddFolder(i)}
                      className="ml-2 px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 flex items-center"
                    >
                      <FaPlus className="mr-1" /> Folder
                    </button>
                    <button
                      onClick={() => handleAddFile(i)}
                      className="ml-2 px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600 flex items-center"
                    >
                      <FaPlus className="mr-1" /> File
                    </button>
                  </>
                )}
              </div>

              {item.subNodes && (
                <div className="ml-6 mt-2 border-l-2 border-gray-300 pl-4">
                  {item.subNodes.map((node, index) => (
                    <div
                      key={node.id ? node.id : index}
                      className="flex items-center space-x-2"
                    >
                      {node.type === "folder" ? (
                        <FaFolder className="text-yellow-500" />
                      ) : (
                        <FaFileAlt className="text-gray-500" />
                      )}
                      <span className="text-gray-700">{node.name}</span>

                      {node.type === "folder" && (
                        <>
                          <button
                            onClick={() => handleAddFolder(i)}
                            className="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600 flex items-center"
                          >
                            <FaPlus className="mr-1" /> Folder
                          </button>
                          <button
                            onClick={() => handleAddFile(i)}
                            className="ml-2 px-2 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600 flex items-center"
                          >
                            <FaPlus className="mr-1" /> File
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default VsCodeTask;

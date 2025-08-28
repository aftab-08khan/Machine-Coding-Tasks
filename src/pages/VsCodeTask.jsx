import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Heading from "../components/Heading";
import { FaFolder, FaFileAlt, FaPlus } from "react-icons/fa";
import Data from "../data/VsCodeData.json";
import BackButton from "../components/BackButton";

const VsCodeTask = () => {
  const [data, setData] = useState(Data);

  const handleAddFolder = (index) => {
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

      <div className="p-6 bg-gray-900/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-700">
        <Heading className="text-white">
          VS Code Files and Folder Explorer
        </Heading>

        <div className="mt-4 space-y-3">
          {data?.map((item, i) => (
            <div key={i} className="ml-4">
              <div className="flex items-center space-x-2">
                {item.type === "folder" ? (
                  <FaFolder className="text-yellow-400" />
                ) : (
                  <FaFileAlt className="text-gray-400" />
                )}

                <span className="text-white font-medium text-lg">
                  {item.name}
                </span>

                {item.type === "folder" && (
                  <>
                    <button
                      onClick={() => handleAddFolder(i)}
                      className="ml-2 px-2 py-1 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded flex items-center transition-all"
                    >
                      <FaPlus className="mr-1" /> Folder
                    </button>
                    <button
                      onClick={() => handleAddFile(i)}
                      className="ml-2 px-2 py-1 text-sm text-white bg-green-600 hover:bg-green-700 rounded flex items-center transition-all"
                    >
                      <FaPlus className="mr-1" /> File
                    </button>
                  </>
                )}
              </div>

              {item.subNodes && (
                <div className="ml-6 mt-2 border-l-2 border-gray-700 pl-4 space-y-1">
                  {item.subNodes.map((node, index) => (
                    <div
                      key={node.id || index}
                      className="flex items-center space-x-2"
                    >
                      {node.type === "folder" ? (
                        <FaFolder className="text-yellow-400" />
                      ) : (
                        <FaFileAlt className="text-gray-400" />
                      )}
                      <span className="text-gray-200">{node.name}</span>

                      {node.type === "folder" && (
                        <>
                          <button
                            onClick={() => handleAddFolder(i)}
                            className="ml-2 px-2 py-1 text-xs text-white bg-blue-600 hover:bg-blue-700 rounded flex items-center transition-all"
                          >
                            <FaPlus className="mr-1" /> Folder
                          </button>
                          <button
                            onClick={() => handleAddFile(i)}
                            className="ml-2 px-2 py-1 text-xs text-white bg-green-600 hover:bg-green-700 rounded flex items-center transition-all"
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

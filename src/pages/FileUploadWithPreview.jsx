import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";

const FileUploadWithPreview = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e) => {
    const images = Array.from(e.target.files);
    const url = images.map((i) => URL.createObjectURL(i));
    setFiles((prev) => [...prev, ...url]);
  };

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        Build a modern file uploader with drag & drop support and live previews.
      </TaskOverview>
      <Wrapper>
        <Heading>File Upload with Preview</Heading>

        <div className="px-12 py-6">
          <form className="flex items-center justify-center">
            <label className="w-full flex flex-col items-center px-4 py-6 bg-gray-100 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition">
              <span className="text-gray-600 font-medium">
                Click to upload or drag & drop
              </span>
              <input
                onChange={handleFileUpload}
                type="file"
                multiple
                className="hidden"
              />
            </label>
          </form>

          {files.length > 0 && (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {files.map((item, index) => (
                <div
                  key={index}
                  className="relative group rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
                >
                  <img
                    src={item}
                    alt={`preview-${index}`}
                    className="w-60 h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
                    Preview
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default FileUploadWithPreview;

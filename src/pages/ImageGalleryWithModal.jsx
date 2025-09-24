import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Wrapper from "../components/Wrapper";
import { GalleryImages } from "../data/CustomData";
import CustomModal from "../components/CustomModal";

const ImageGalleryWithModal = () => {
  const [imgSrc, setImgSrc] = useState("");
  const [preview, setPreview] = useState(false);
  const handleClick = (img) => {
    setImgSrc(img);
    setPreview((prev) => !prev);
  };

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview></TaskOverview>
      <Wrapper>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {GalleryImages.length > 0 &&
            GalleryImages.map((image) => {
              return (
                <div className="relative group rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
                  <img
                    src={image.src}
                    key={image.id}
                    className="w-full h-full object-cover"
                  />
                  onClick={() => handleClick(image?.src)}
                  <div
                    className="absolute inset-0 bg-neutral-600/70 bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium"
                    onClick={() => handleClick(image?.src)}
                  >
                    Preview
                  </div>
                </div>
              );
            })}
        </div>

        {preview && <CustomModal image={imgSrc} setPreview={setPreview} />}
      </Wrapper>
    </ContentWrapper>
  );
};

export default ImageGalleryWithModal;

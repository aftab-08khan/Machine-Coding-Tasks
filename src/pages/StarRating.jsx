import React, { useRef, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Heading from "../components/Heading";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const StarRating = () => {
  const [input, setInput] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setRating(Number(input));
    setInput("");
  };

  const isHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - rating;

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        Build a dynamic Star Rating component where users can input a rating
        between 0.5 and 5 in increments of 0.5. Upon submission, the component
        should display the corresponding number of full stars, half stars, and
        empty stars using icon-based visuals. This helps in understanding
        conditional rendering, icon usage, and controlled form handling in
        React.
      </TaskOverview>

      <Heading>Star Rating Component</Heading>
      <div className="max-w-2xl w-full  bg-white shadow-lg rounded-lg p-6">
        <form className="flex gap-2 mb-6" onSubmit={handleSubmit}>
          <div className="flex-1">
            <label className="block text-gray-700  font-medium mb-1">
              Range 0.5 to 5 ratings
            </label>

            <input
              value={input}
              name="ratings"
              min={0.5}
              max={5}
              step={0.5}
              type="number"
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 border-2 border-indigo-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter a Ratings..."
            />
          </div>
          <button className="px-5 py-2 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md flex gap-2 transition-all hover:bg-indigo-500 hover:shadow-lg active:scale-95 self-end">
            Submit
          </button>
        </form>
        {rating > 0 && (
          <div className="flex items-center justify-center">
            {Array(Math.floor(rating))
              .fill()
              .map((_, i) => (
                <FaStar key={i} />
              ))}
            {isHalfStar && <FaRegStarHalfStroke />}
            {emptyStars > 0
              ? Array(Math.floor(emptyStars))
                  .fill()
                  .map((_, i) => <FaRegStar key={i} />)
              : ""}
          </div>
        )}
      </div>
    </ContentWrapper>
  );
};

export default StarRating;

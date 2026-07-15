import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Wrapper from "../components/Wrapper";

const WordOmitter = () => {
  const [formData, setFormData] = useState({
    sentence: "",
    text: "",
  });

  const [result, setResult] = useState("No Result");

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const wordOmitter = (sentence, text) => {
    if (!sentence.trim()) return "Please enter a sentence.";
    if (!text.trim()) return sentence;

    return sentence
      .trim()
      .split(/\s+/)
      .filter((word) => word.toLowerCase() !== text.trim().toLowerCase())
      .join(" ");
  };

  const handleForm = (e) => {
    e.preventDefault();

    const answer = wordOmitter(formData.sentence, formData.text);
    setResult(answer);

    setFormData({
      sentence: "",
      text: "",
    });
  };

  return (
    <ContentWrapper>
      <BackButton />

      <TaskOverview>Word Omitter</TaskOverview>

      <Wrapper>
        <div className="max-w-2xl mx-auto mt-8 rounded-xl bg-white shadow-lg p-8 border">
          <form onSubmit={handleForm} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Enter a Sentence
              </label>

              <textarea
                name="sentence"
                rows={5}
                value={formData.sentence}
                onChange={handleInput}
                placeholder="Example: I love programming in JavaScript"
                className="w-full rounded-lg border text-black border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Word to Remove
              </label>

              <input
                type="text"
                name="text"
                value={formData.text}
                onChange={handleInput}
                placeholder="Example: programming"
                className="w-full rounded-lg border text-black border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Remove Word
            </button>
          </form>

          <div className="mt-8 rounded-lg border bg-gray-50 p-5">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Result
            </h3>

            <p className="text-gray-900 break-words">
              {result || "No Result"}
            </p>
          </div>
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default WordOmitter;
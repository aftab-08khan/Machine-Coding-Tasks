import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";
import { RxCross2 } from "react-icons/rx";

const TagInput = () => {
  const [input, setInput] = useState("");
  const [skills, setSkills] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const normalized = input.trim().toLowerCase();
    if (!skills.includes(normalized)) {
      setSkills((prev) => [...prev, normalized]);
    } else {
      alert("Already included");
    }
    setInput("");
  };

  const handleDelete = (index) => {
    const filteredSkills = skills.filter((_, i) => i !== index);
    setSkills(filteredSkills);
  };

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        Enter skills in the field below. Press{" "}
        <span className="font-semibold">Add</span> or hit{" "}
        <span className="font-semibold">Enter</span> to create tags. You can
        remove a skill by clicking ✖️.
      </TaskOverview>

      <Wrapper>
        <Heading>Tag Input</Heading>

        <form
          action="#"
          onSubmit={handleSubmit}
          className="flex items-center gap-3 mt-4"
        >
          <input
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
            placeholder="Enter your skills..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md shadow transition-all"
          >
            Add
          </button>
        </form>

        <div className="mt-6">
          {skills.length > 0 ? (
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <li
                  key={skill + index}
                  className="flex items-center gap-2 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-gray-100 px-3 py-1 rounded-full text-sm shadow hover:shadow-md transition"
                >
                  <span className="capitalize">{skill}</span>
                  <button
                    onClick={() => handleDelete(index)}
                    className="hover:bg-indigo-200 dark:hover:bg-gray-600 p-1 rounded-full transition"
                  >
                    <RxCross2 size={14} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-500 text-sm pt-6 text-center">
              No skills added yet. Start typing above.
            </p>
          )}
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default TagInput;

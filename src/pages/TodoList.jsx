import React, { useState } from "react";
import BackButton from "../components/BackButton";
import ContentWrapper from "../components/ContentWrapper";
import TaskOverview from "../components/TaskOverview";
import Title from "../components/Title";

const TodoList = () => {
  const [todosArr, setTodosArr] = useState([]);
  const [input, setInput] = useState("");
  const [isEditingIndex, setIsEditingIndex] = useState(null);

  const handleInputValue = (e) => setInput(e.target.value);

  const handleDeleteTodo = (index) => {
    setTodosArr((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSumbitTodo = (e) => {
    e.preventDefault();

    if (isEditingIndex !== null) {
      setTodosArr((prev) =>
        prev.map((item, i) => (i === isEditingIndex ? input : item))
      );
      setIsEditingIndex(null);
    } else {
      if (input.trim() !== "") {
        setTodosArr((prev) => [...prev, input]);
      } else {
        alert(`"${input}" Not Acceptable`);
      }
    }
    setInput("");
  };

  const handleEditingIndex = (index) => {
    setIsEditingIndex(index);
    setInput(todosArr[index]);
  };

  return (
    <ContentWrapper className="flex flex-col items-center pt-12 min-h-screen bg-gray-900/80 p-6 backdrop-blur-md">
      <BackButton />

      <TaskOverview>
        In this task, you will create a To-Do List where users can add, edit,
        and delete tasks. The task list will be updated dynamically, and users
        will be able to manage their tasks efficiently.
      </TaskOverview>

      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
        <Title className="text-white">Todo List</Title>

        <form onSubmit={handleSumbitTodo} className="flex gap-2">
          <input
            placeholder="Enter a new Todo"
            name="todoValue"
            type="text"
            onChange={handleInputValue}
            value={input}
            required
            className="flex-1 p-2 border-2 border-indigo-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-all"
          >
            {isEditingIndex !== null ? "Update" : "Add"}
          </button>
        </form>

        <div className="mt-6">
          <ul className="space-y-2">
            {todosArr?.map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-800/70 p-3 rounded-md border border-gray-700"
              >
                <span className="text-gray-100">{item}</span>
                <div className="space-x-2">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded-lg py-1 transition-all"
                    onClick={() => handleEditingIndex(i)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 rounded-lg py-1 transition-all"
                    onClick={() => handleDeleteTodo(i)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default TodoList;

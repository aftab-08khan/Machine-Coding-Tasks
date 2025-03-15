import React, { useState } from "react";
import BackButton from "../components/BackButton";
import ContentWrapper from "../components/ContentWrapper";
import TaskOverview from "../components/TaskOverview";

const TodoList = () => {
  const [todosArr, setTodosArr] = useState([]);
  const [input, setInput] = useState("");
  const [isEditingIndex, setIsEditingIndex] = useState(null);
  const handleInputValue = (e) => {
    setInput(e.target.value);
  };
  const handleDeleteTodo = (index) => {
    let filteredArr = todosArr.filter((item, i) => i !== index);

    setTodosArr(filteredArr);
  };
  const handleSumbitTodo = (e) => {
    e.preventDefault();

    if (isEditingIndex !== null) {
      todosArr[isEditingIndex] = input;
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
    <ContentWrapper className="flex flex-col items-center pt-12 min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <BackButton />
      <TaskOverview>
        In this task, you will create a To-Do List where users can add, edit,
        and delete tasks. The task list will be updated dynamically, and users
        will be able to manage their tasks efficiently.
      </TaskOverview>
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-800 dark:text-indigo-300 mb-4">
          Todo List
        </h1>
        <form onSubmit={handleSumbitTodo} className="flex gap-2">
          <input
            placeholder="Enter a new Todo"
            name="todoValue"
            type="text"
            onChange={handleInputValue}
            value={input}
            required
            className="flex-1 p-2 border-2 border-indigo-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </form>

        <div className="mt-6">
          <ul className="space-y-2">
            {todosArr?.map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 p-3 rounded-md"
              >
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
                <div className="space-x-2">
                  <button
                    className="bg-blue-600 dark:bg-blue-400  text-white px-3 rounded-lg py-1 "
                    onClick={() => handleEditingIndex(i)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 dark:bg-red-400 text-white px-3 rounded-lg py-1"
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

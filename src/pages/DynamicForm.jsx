import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";

const DynamicForm = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    subject: "",
    class: "",
    lectureTime: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>Dynamic form with conditional fields</TaskOverview>

      <Wrapper>
        <Heading>Dynamic form with conditional fields</Heading>

        {/* Role Selection */}
        <div className="flex gap-6 mt-4 mb-6">
          <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-200">
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === "student"}
              onChange={(e) => setRole(e.target.value)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            Student
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-200">
            <input
              type="radio"
              name="role"
              value="teacher"
              checked={role === "teacher"}
              onChange={(e) => setRole(e.target.value)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            Teacher
          </label>
        </div>

        {/* Form Fields */}
        <form className="space-y-5">
          {role === "student" ? (
            <>
              {/* Name */}
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                  Name
                </label>
                <input
                  onChange={handleInputChange}
                  name="name"
                  type="text"
                  value={formData.name}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
                />
              </div>

              {/* Roll No */}
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                  Roll No
                </label>
                <input
                  onChange={handleInputChange}
                  name="rollNo"
                  type="text"
                  value={formData.rollNo}
                  placeholder="Enter your Roll No"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
                />
              </div>

              {/* Class */}
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                  Class
                </label>
                <input
                  onChange={handleInputChange}
                  name="class"
                  type="text"
                  value={formData.class}
                  placeholder="Enter your Class"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
                />
              </div>
            </>
          ) : role === "teacher" ? (
            <>
              {/* Subject */}
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
                >
                  <option value="">Select subject</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Urdu">Urdu</option>
                </select>
              </div>

              {/* Lecture Time */}
              <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                  Lecture Time
                </label>
                <input
                  onChange={handleInputChange}
                  name="lectureTime"
                  type="time"
                  value={formData.lectureTime}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
                />
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Please select a role above to continue.
            </p>
          )}
        </form>
      </Wrapper>
    </ContentWrapper>
  );
};

export default DynamicForm;

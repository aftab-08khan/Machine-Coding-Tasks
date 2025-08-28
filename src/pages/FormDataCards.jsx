import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Heading from "../components/Heading";

const FormDataCards = () => {
  const [formDataArr, setFormDataArr] = useState({
    fname: "",
    lname: "",
    age: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormDataArr((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prev) => [...prev, formDataArr]);
    setFormDataArr({
      fname: "",
      lname: "",
      age: "",
    });
  };

  return (
    <ContentWrapper className="flex flex-col items-center pt-6 min-h-screen bg-gray-900/80 p-6 backdrop-blur-md">
      <BackButton />

      <TaskOverview>
        Enter your details (First Name, Last Name, Age) in the form below. After
        submission, the entered data will be displayed. The form fields will
        reset after submission.
      </TaskOverview>

      <div className="max-w-xl w-full bg-gray-900/80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
        <Heading className="text-white">Fill Your Details</Heading>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-200 font-medium mb-1">
              First Name
            </label>
            <input
              onChange={handleInputChange}
              name="fname"
              type="text"
              value={formDataArr.fname}
              placeholder="Enter your First Name"
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-200 font-medium mb-1">
              Last Name
            </label>
            <input
              onChange={handleInputChange}
              name="lname"
              type="text"
              value={formDataArr.lname}
              placeholder="Enter your Last Name"
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-200 font-medium mb-1">Age</label>
            <input
              onChange={handleInputChange}
              name="age"
              type="number"
              value={formDataArr.age}
              placeholder="Enter your Age"
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition-all"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="max-w-xl w-full mt-6 p-4 bg-gray-900/80 backdrop-blur-md rounded-xl shadow-md border border-gray-700">
        {submittedData.length > 0 ? (
          submittedData.map((item, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Submitted Details:
              </h3>
              <p className="text-gray-200">
                <strong>First Name:</strong> {item.fname}
              </p>
              <p className="text-gray-200">
                <strong>Last Name:</strong> {item.lname}
              </p>
              <p className="text-gray-200">
                <strong>Age:</strong> {item.age}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">
            Fill the above form to see the details.
          </p>
        )}
      </div>
    </ContentWrapper>
  );
};

export default FormDataCards;

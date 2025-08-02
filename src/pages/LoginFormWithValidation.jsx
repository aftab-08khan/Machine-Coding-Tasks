import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import TaskOverview from "../components/TaskOverview";
import BackButton from "../components/BackButton";
import Title from "../components/Title";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";

const LoginFormWithValidation = () => {
  const [isActive, setIsActive] = useState(false);
  const passwordTypeToggle = () => {
    setIsActive((prev) => !prev);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e;

    setFormData((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
    if (error) setError(null);
  };
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const testCredentails = {
      email: "test@gmail.com",
      password: "test@123",
    };

    if (formData.email !== "" && formData.password !== "") {
      if (
        testCredentails.email === formData.email &&
        formData.password === testCredentails.password
      ) {
        alert("Form Submitted Successfully");
        setFormData({
          email: "",
          password: "",
        });
        setError(null);
      } else {
        setError("Invalid Credentails");
      }
    } else {
      alert("Fill the input Fields");
    }
  };
  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        Create a secure login form with client-side validation that:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Validates email format and required fields</li>
          <li>Includes password visibility toggle</li>
          <li>Handles submission states and errors</li>
          <li>Matches against test credentials</li>
        </ul>
        <div className="mt-3 p-3 bg-gray-100 ">
          <p className="text-green-600">Test credentials:</p>
          <p>Email: test@gmail.com</p>
          <p>Password: test@123</p>
        </div>
      </TaskOverview>
      <div className="max-w-2xl w-full bg-white  shadow-lg rounded-lg p-6 mb-12">
        <Title>Login form With Validation</Title>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700  font-medium mb-1">Email</label>
          <input
            placeholder="Enter Your Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange(e.target)}
          />
          <label className="block mt-3 text-gray-700 font-medium mb-1">
            Password
          </label>
          <div className="relative">
            <input
              required
              placeholder="Enter Your Password"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              name="password"
              type={!isActive ? "password" : "text"}
              value={formData.password}
              onChange={(e) => handleInputChange(e.target)}
            />
            <div onClick={passwordTypeToggle} className="">
              {!isActive ? (
                <BsEyeSlash
                  size={20}
                  color=""
                  className="text-blue-800 absolute right-3 top-2.5"
                />
              ) : (
                <BsEyeFill
                  size={20}
                  className="text-blue-800 absolute right-3 top-2.5"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 mt-3 rounded-md transition-all"
          >
            Submit
          </button>
          {error && (
            <div className="text-red-600 text-sm p-2 bg-red-50  rounded-md">
              {error}
            </div>
          )}
        </form>
      </div>
    </ContentWrapper>
  );
};

export default LoginFormWithValidation;

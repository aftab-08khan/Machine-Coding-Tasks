import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import TaskOverview from "../components/TaskOverview";
import BackButton from "../components/BackButton";
import Title from "../components/Title";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";

const LoginFormWithValidation = () => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const passwordTypeToggle = () => setIsActive((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const testCredentails = { email: "test@gmail.com", password: "test@123" };

    if (formData.email && formData.password) {
      if (
        formData.email === testCredentails.email &&
        formData.password === testCredentails.password
      ) {
        alert("Form Submitted Successfully");
        setFormData({ email: "", password: "" });
        setError(null);
      } else {
        setError("Invalid Credentials");
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
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
          <li>Validates email format and required fields</li>
          <li>Includes password visibility toggle</li>
          <li>Handles submission states and errors</li>
          <li>Matches against test credentials</li>
        </ul>
        <div className="mt-3 p-3 bg-gray-800/50 rounded-md text-gray-200">
          <p className="text-green-400 font-semibold">Test credentials:</p>
          <p>Email: test@gmail.com</p>
          <p>Password: test@123</p>
        </div>
      </TaskOverview>

      <div className="max-w-2xl w-full bg-gray-900/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-12 border border-gray-700">
        <Title className="text-white">Login Form With Validation</Title>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-200 font-medium mb-1">
              Email
            </label>
            <input
              placeholder="Enter Your Email"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-200 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                required
                placeholder="Enter Your Password"
                className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                name="password"
                type={isActive ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
              />
              <div
                onClick={passwordTypeToggle}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-300 hover:text-indigo-400"
              >
                {isActive ? <BsEyeFill size={20} /> : <BsEyeSlash size={20} />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition-all"
          >
            Submit
          </button>

          {error && (
            <div className="text-red-400 text-sm p-2 bg-red-900/30 rounded-md">
              {error}
            </div>
          )}
        </form>
      </div>
    </ContentWrapper>
  );
};

export default LoginFormWithValidation;

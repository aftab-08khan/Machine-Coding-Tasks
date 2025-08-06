import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Title from "../components/Title";

const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState("");

  const handlechange = (e) => {
    setPassword(e.target.value);
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(
        password
      )
    ) {
      setPasswordStrength("god mode strong");
    } else if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setPasswordStrength("very strong");
    } else if (/[!@#$%^&*(),.?":{}|<>[\]\\/~`+=_-]/.test(password)) {
      setPasswordStrength("strong");
    } else if (/\d/.test(password)) {
      setPasswordStrength("weak");
    } else if (/^[A-Za-z]+$/.test(password)) {
      setPasswordStrength("very weak");
    } else {
      setPasswordStrength("invalid or empty");
    }
  };

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        Build a password strength meter component that enhances user experience
        and improves password security by:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Analyzing password strength in real-time as the user types</li>
          <li>
            Displaying a visual meter with levels (e.g., Weak, Medium, Strong)
          </li>
          <li>
            Providing feedback or tips to improve the password (e.g., “Use
            special characters”)
          </li>
          <li>Ensuring it integrates well within a login or signup form</li>
        </ul>
        <div className="mt-3 p-3 bg-gray-100">
          <p className="text-green-600 font-medium">Optional Enhancements:</p>
          <p>- Color-coded strength bar for better UX</p>
          <p>
            - Customizable validation rules (length, symbols, numbers, etc.)
          </p>
        </div>
      </TaskOverview>

      <div className="max-w-2xl w-full bg-white  shadow-lg rounded-lg p-6 mb-12">
        <Title>Implement a Password Strength Meter</Title>
        <label className="block text-gray-700  font-medium mb-1">
          password
        </label>
        <input
          placeholder="Enter Your Password"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          name="password"
          type="text"
          required
          value={password}
          onChange={handlechange}
        />
        <button
          type="submit"
          className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 mt-3 rounded-md transition-all"
        >
          Submit
        </button>
        {passwordStrength === "very weak" ? (
          <p className="text-red-500">{passwordStrength}</p>
        ) : passwordStrength === "weak" ? (
          <p className="text-orange-500">{passwordStrength}</p>
        ) : passwordStrength === "strong" ? (
          <p className="text-yellow-500">{passwordStrength}</p>
        ) : passwordStrength === "very strong" ? (
          <p className="text-green-500">{passwordStrength}</p>
        ) : passwordStrength === "god mode strong" ? (
          <p className="text-green-800">{passwordStrength}</p>
        ) : (
          ""
        )}
      </div>
    </ContentWrapper>
  );
};

export default PasswordStrengthMeter;

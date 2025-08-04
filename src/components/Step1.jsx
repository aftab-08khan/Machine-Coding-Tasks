import React from "react";

const Step1 = ({ onChange, formData }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          First Name
        </label>
        <input
          value={formData.firstName}
          name="firstName"
          type="text"
          onChange={(e) => onChange(e)}
          placeholder="Enter your First Name"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Last Name
        </label>
        <input
          value={formData.lastName}
          name="lastName"
          type="text"
          onChange={(e) => onChange(e)}
          placeholder="Enter your Last Name"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>
    </form>
  );
};

export default Step1;

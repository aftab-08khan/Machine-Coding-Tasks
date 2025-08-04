import React from "react";

const Step2 = ({ onChange, formData }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Gender</label>

        <div className="flex items-center gap-2 mb-2">
          <input
            type="radio"
            name="gender"
            value="Male"
            id="male"
            checked={formData.gender === "Male"}
            onChange={onChange}
            className="accent-indigo-600"
          />
          <label htmlFor="male">Male</label>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <input
            type="radio"
            name="gender"
            value="Female"
            id="female"
            checked={formData.gender === "Female"}
            onChange={onChange}
            className="accent-indigo-600"
          />
          <label htmlFor="female">Female</label>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <input
            type="radio"
            name="gender"
            value="Others"
            id="others"
            checked={formData.gender === "Others"}
            onChange={onChange}
            className="accent-indigo-600"
          />
          <label htmlFor="others">Others</label>
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Age</label>
        <input
          value={formData.age}
          name="age"
          type="number"
          min={0}
          max={18}
          placeholder="Enter your Age"
          required
          onChange={(e) => onChange(e)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>
    </form>
  );
};

export default Step2;

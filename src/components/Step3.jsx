import React from "react";

const Step3 = ({ onChange, formData, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Avatar Upload
        </label>
        <input
          onChange={(e) => onChange(e)}
          name="avatar"
          type="file"
          placeholder="Upload avatar in jpg"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {formData.avatar && (
        <img
          src={URL.createObjectURL(formData.avatar)}
          alt="Image"
          className="w-40 h-40 rounded-[50%] mt-4 flex justify-self-center"
        />
      )}
      {formData.avatar && (
        <button
          className="px-5 py-2 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md flex items-center self-start gap-2 transition-all hover:bg-indigo-500 hover:shadow-lg active:scale-95 mb-4 justify-center"
          type="submit"
        >
          Submit{" "}
        </button>
      )}
    </form>
  );
};

export default Step3;

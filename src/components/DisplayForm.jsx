import React from "react";

const DisplayForm = ({ formData, setFormData, setCurrentStep, setActive }) => {
  return (
    <div className="mb-6">
      <button
        className="px-5 py-2 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md flex items-center self-start gap-2 transition-all hover:bg-indigo-500 hover:shadow-lg active:scale-95 mb-4 justify-self-center"
        onClick={() => {
          setActive(false);
          setCurrentStep("Step 1"),
            setFormData({
              firstName: "",
              lastName: "",
              gender: "",
              age: "",
              avatar: "",
            });
        }}
      >
        Home
      </button>
      <h3 className="text-lg font-semibold text-indigo-800 mb-2">
        Submitted Details:
      </h3>
      <p className="text-gray-800">
        <strong>First Name:</strong> {formData.firstName}
      </p>
      <p className="text-gray-800">
        <strong>Last Name:</strong> {formData.lastName}
      </p>
      <p className="text-gray-800">
        <strong>Age:</strong> {formData.age}
      </p>
      <p className="text-gray-800">
        <strong>Gender:</strong> {formData.gender}
      </p>
      <p className="text-gray-800">
        <strong>Avatar:</strong>{" "}
        {formData.avatar && (
          <img
            src={URL.createObjectURL(formData.avatar)}
            className=" w-30 h-30 rounded-full"
          ></img>
        )}
      </p>
    </div>
  );
};

export default DisplayForm;

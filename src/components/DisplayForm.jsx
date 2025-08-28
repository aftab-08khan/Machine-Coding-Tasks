import React from "react";

const DisplayForm = ({ formData, setFormData, setCurrentStep, setActive }) => {
  return (
    <div className="mb-6 text-white">
      {/* Home Button */}
      <button
        className="px-5 py-2 bg-neutral-800 text-white text-lg font-semibold rounded-lg shadow-md flex items-center self-start gap-2 transition-all hover:bg-neutral-700 hover:shadow-lg active:scale-95 mb-4 justify-self-center border border-white/10"
        onClick={() => {
          setActive(false);
          setCurrentStep("Step 1");
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

      {/* Submitted Details */}
      <div className="bg-neutral-900/80 backdrop-blur-md p-4 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-3">
          Submitted Details:
        </h3>
        <p className="text-gray-300">
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p className="text-gray-300">
          <strong>Last Name:</strong> {formData.lastName}
        </p>
        <p className="text-gray-300">
          <strong>Age:</strong> {formData.age}
        </p>
        <p className="text-gray-300">
          <strong>Gender:</strong> {formData.gender}
        </p>
        <p className="text-gray-300">
          <strong>Avatar:</strong>{" "}
          {formData.avatar && (
            <img
              src={URL.createObjectURL(formData.avatar)}
              alt="Avatar"
              className="w-24 h-24 rounded-full border border-white/10 mt-2"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default DisplayForm;

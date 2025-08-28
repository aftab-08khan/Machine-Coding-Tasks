import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import TaskOverview from "../components/TaskOverview";
import Heading from "../components/Heading";
import BackButton from "../components/BackButton";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import DisplayForm from "../components/DisplayForm";

const Tabs = () => {
  const [currentStep, setCurrentStep] = useState("Step 1");
  const buttons = ["Step 1", "Step 2", "Step 3"];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    avatar: "",
  });
  const [active, setActive] = useState(false);

  const handleInputChange = (e) => {
    const { value, name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "avatar" ? files[0] : value,
    }));
  };

  const handleStepsButton = (button) => {
    if (button === "Step 1") {
      setCurrentStep("Step 1");
      return;
    }
    if (button === "Step 2") {
      if (formData.firstName && formData.lastName) {
        setCurrentStep("Step 2");
        alert("Step 1 Completed");
      } else {
        alert("Please fill First Name and Last Name to proceed.");
      }
      return;
    }
    if (button === "Step 3") {
      if (
        formData.firstName &&
        formData.lastName &&
        formData.age &&
        formData.gender
      ) {
        setCurrentStep("Step 3");
        alert("Step 2 Completed");
      } else {
        alert("Please fill Gender and Age to proceed.");
      }
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(true);
    setCurrentStep(null);
  };

  return (
    <ContentWrapper className="bg-gray-900 min-h-screen">
      <BackButton />
      <TaskOverview>
        Build a multi-step form using a Tabs component. Each tab represents a
        step in the form:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
          <li>
            <strong>Step 1</strong> collects basic information (first and last
            name)
          </li>
          <li>
            <strong>Step 2</strong> captures demographic details (age and
            gender)
          </li>
          <li>
            <strong>Step 3</strong> allows avatar upload with an image preview
          </li>
        </ul>
      </TaskOverview>

      <Heading className="text-white">Build a Tabs component</Heading>
      <div className="max-w-4xl w-full bg-gray-800 shadow-lg rounded-lg p-6 text-white">
        {!active && (
          <div className="flex justify-center gap-5 mb-4">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => handleStepsButton(button)}
                className="px-5 py-2 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-indigo-500 hover:shadow-lg active:scale-95 transition-all"
              >
                {button}
              </button>
            ))}
          </div>
        )}

        <div>
          {currentStep === "Step 1" && (
            <Step1 formData={formData} onChange={handleInputChange} />
          )}
          {currentStep === "Step 2" && (
            <Step2 formData={formData} onChange={handleInputChange} />
          )}
          {currentStep === "Step 3" && (
            <Step3
              formData={formData}
              handleSubmit={handleSubmit}
              onChange={handleInputChange}
            />
          )}

          {active && (
            <DisplayForm
              setActive={setActive}
              setFormData={setFormData}
              formData={formData}
              setCurrentStep={setCurrentStep}
            />
          )}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Tabs;

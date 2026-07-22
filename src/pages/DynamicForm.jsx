import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";

const DynamicForm = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    subject: "",
    class: "",
    lectureTime: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ContentWrapper className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <BackButton />
      <TaskOverview>Dynamic form with conditional fields</TaskOverview>

      <Wrapper>
        <div className="max-w-xl mx-auto mt-4">
          <Heading className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Dynamic Configuration Form
          </Heading>
          <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">
            Conditional Rendering Module
          </p>

<<<<<<< HEAD
          <div className="grid grid-cols-2 gap-3 mt-6 mb-8 bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
=======
        
          <div className="grid grid-cols-2 gap-3 mt-6 mb-8 bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
          
>>>>>>> 500d3e4c08bb0974c340652743bcf165c1eb82bc
            <label
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-sans text-sm font-bold tracking-wide transition-all cursor-pointer select-none border ${
                role === "student"
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/10"
                  : "bg-transparent text-slate-600 dark:text-slate-400 border-transparent hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
              }`}
            >
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === "student"}
                onChange={(e) => setRole(e.target.value)}
                className="sr-only"
              />
              🎓 Student Member
            </label>

<<<<<<< HEAD
=======
         
>>>>>>> 500d3e4c08bb0974c340652743bcf165c1eb82bc
            <label
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-sans text-sm font-bold tracking-wide transition-all cursor-pointer select-none border ${
                role === "teacher"
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/10"
                  : "bg-transparent text-slate-600 dark:text-slate-400 border-transparent hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
              }`}
            >
              <input
                type="radio"
                name="role"
                value="teacher"
                checked={role === "teacher"}
                onChange={(e) => setRole(e.target.value)}
                className="sr-only"
              />
              💼 Faculty Instructor
            </label>
          </div>

<<<<<<< HEAD
          <form className="space-y-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 rounded-2xl shadow-xl shadow-slate-100 dark:shadow-black/20 transition-all duration-300">
            {role === "student" ? (
              <div className="space-y-5 animate-fade-in">
=======
       
          <form className="space-y-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 rounded-2xl shadow-xl shadow-slate-100 dark:shadow-black/20 transition-all duration-300">
            {role === "student" ? (
              <div className="space-y-5 animate-fade-in">
           
>>>>>>> 500d3e4c08bb0974c340652743bcf165c1eb82bc
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Full Name
                  </label>
                  <input
                    onChange={handleInputChange}
                    name="name"
                    type="text"
                    value={formData.name}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 outline-none transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Roll Number
                  </label>
                  <input
                    onChange={handleInputChange}
                    name="rollNo"
                    type="text"
                    value={formData.rollNo}
                    placeholder="Enter your Roll No"
                    required
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 outline-none transition-all shadow-inner"
                  />
                </div>

            
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Assigned Class
                  </label>
                  <input
                    onChange={handleInputChange}
                    name="class"
                    type="text"
                    value={formData.class}
                    placeholder="Enter your Class"
                    required
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 outline-none transition-all shadow-inner"
                  />
                </div>
              </div>
            ) : role === "teacher" ? (
              <div className="space-y-5 animate-fade-in">
               
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Department Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 outline-none transition-all shadow-inner font-medium cursor-pointer"
                  >
                    <option value="">Select core subject</option>
                    <option value="English">English Language</option>
                    <option value="Hindi">Hindi Lit</option>
                    <option value="Urdu">Urdu Core</option>
                  </select>
                </div>

              
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Scheduled Lecture Time
                  </label>
                  <input
                    onChange={handleInputChange}
                    name="lectureTime"
                    type="time"
                    value={formData.lectureTime}
                    required
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 outline-none transition-all shadow-inner font-mono font-bold"
                  />
                </div>
              </div>
            ) : (
              
              <div className="py-8 text-center flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-950 flex items-center justify-center border border-slate-200 dark:border-slate-800 text-lg mb-2">
                  ⚡
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  No Active Profile Selected
                </p>
                <p className="text-xs max-w-xs mt-1">
                  Choose a user categorization layer from the selector grid above to initiate conditional form data fields.
                </p>
              </div>
            )}
          </form>
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default DynamicForm;

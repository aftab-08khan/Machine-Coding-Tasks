import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import Wrapper from "../components/Wrapper";
import TaskOverview from "../components/TaskOverview";
import Heading from "../components/Heading";

const PasswordGenerator = () => {
  const [formData, setFormData] = useState({
    length: 8,
    upper: false,
    lower: true,
    special: false,
  });

  const [result, setResult] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : Number(value),
    }));
  }

  function generatePassword(
    length = 8,
    lower = true,
    upper = false,
    special = false
  ) {
    const lowerChr = "abcdefghijklmnopqrstuvwxyz";
    const upperChr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChr = "!@#$%^&*";

    let charset = "";

    if (lower) charset += lowerChr;
    if (upper) charset += upperChr;
    if (special) charset += specialChr;

    if (!charset) {
      setResult("Please select at least one character type.");
      return;
    }

    let password = "";

    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
      password += charset[randomValues[i] % charset.length];
    }

    setResult(password);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { length, lower, upper, special } = formData;
    generatePassword(length, lower, upper, special);
  };

  const copyPassword = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    alert("Password copied!");
  };

  return (
    <ContentWrapper className="min-h-screen bg-slate-950 text-slate-100">
      <BackButton />

      <TaskOverview>
  Build a secure password generator that creates random passwords based on user-selected options such as password length, uppercase letters, lowercase letters, and special characters using the Web Crypto API.
</TaskOverview>

      <Wrapper>
        <div className="max-w-md mx-auto text-center mb-2">
          <Heading className="text-2xl font-black text-white tracking-tight">
            Password Generator
          </Heading>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">
            Secure Entropy Node
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-6 space-y-6 bg-slate-900 border border-slate-800/80 p-6 rounded-2xl shadow-xl shadow-black/40 relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div>
            <label className="block mb-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Password Length
            </label>
            <input
              type="number"
              min={4}
              max={64}
              name="length"
              value={formData.length}
              onChange={handleChange}
              className="w-full bg-slate-950 border-2 border-slate-800 focus:border-blue-500 rounded-xl px-4 py-2.5 text-sm text-slate-200 outline-none transition-all font-mono font-bold"
            />
          </div>

          <div className="space-y-3.5 bg-slate-950/50 p-4 rounded-xl border border-slate-800/40">
            <label className="flex items-center gap-3 text-sm text-slate-300 font-medium cursor-pointer group select-none">
              <input
                type="checkbox"
                name="lower"
                checked={formData.lower}
                onChange={handleChange}
                className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-0 focus:ring-offset-0 accent-blue-500 cursor-pointer transition-all"
              />
              <span className="group-hover:text-white transition-colors">Lowercase Letters</span>
            </label>

            <label className="flex items-center gap-3 text-sm text-slate-300 font-medium cursor-pointer group select-none">
              <input
                type="checkbox"
                name="upper"
                checked={formData.upper}
                onChange={handleChange}
                className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-0 focus:ring-offset-0 accent-blue-500 cursor-pointer transition-all"
              />
              <span className="group-hover:text-white transition-colors">Uppercase Letters</span>
            </label>

            <label className="flex items-center gap-3 text-sm text-slate-300 font-medium cursor-pointer group select-none">
              <input
                type="checkbox"
                name="special"
                checked={formData.special}
                onChange={handleChange}
                className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-0 focus:ring-offset-0 accent-blue-500 cursor-pointer transition-all"
              />
              <span className="group-hover:text-white transition-colors">Special Characters</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-3 rounded-xl transition-all shadow-md active:scale-[0.99] font-mono text-xs uppercase tracking-wider"
          >
            Generate Password
          </button>
        </form>

        <div className="max-w-md mx-auto mt-5 bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-inner">
          <span className={`font-mono text-sm break-all select-all ${result ? 'text-emerald-400 font-bold' : 'text-slate-600'}`}>
            {result || "Entropy string pending..."}
          </span>

          {result && (
            <button
              onClick={copyPassword}
              type="button"
              className="ml-4 shrink-0 px-4 py-1.5 bg-emerald-600 text-white rounded-xl text-xs font-mono font-bold hover:bg-emerald-500 transition-all shadow-xs active:scale-[0.97]"
            >
              COPY
            </button>
          )}
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default PasswordGenerator;
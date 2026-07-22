import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import TaskOverview from "../components/TaskOverview";

const ColorPasswordMatcher = () => {
  const goal = "redredredred";
  
  const defaultColor = {
    colorcode: "transparent",
    colorName: "empty",
  };

  const [selectedColor, setSelectedColor] = useState([
    defaultColor,
    defaultColor,
    defaultColor,
    defaultColor,
  ]);

  const colorsPlate = [
    {
      colorcode: "#ef4444",
      colorName: "red",
      label: "Red",
      glowClass: "hover:shadow-red-500/50 hover:border-red-400",
    },
    {
      colorcode: "#eab308",
      colorName: "yellow",
      label: "Yellow",
      glowClass: "hover:shadow-yellow-500/50 hover:border-yellow-400",
    },
    {
      colorcode: "#3b82f6",
      colorName: "blue",
      label: "Blue",
      glowClass: "hover:shadow-blue-500/50 hover:border-blue-400",
    },
    {
      colorcode: "#22c55e",
      colorName: "green",
      label: "Green",
      glowClass: "hover:shadow-green-500/50 hover:border-green-400",
    },
  ];

  // Derive input string directly to prevent state desync bugs
  const currentInput = selectedColor
    .filter((item) => item.colorName !== "empty")
    .map((item) => item.colorName)
    .join("");

  const filledCount = selectedColor.filter((item) => item.colorName !== "empty").length;
  const isFull = filledCount === 4;
  const isCorrect = isFull && currentInput === goal;
  const isWrong = isFull && !isCorrect;

  const handleColorSelect = (color) => {
    if (isFull) return;

    setSelectedColor((prev) => {
      const updatedColors = [...prev];
      const emptyIndex = updatedColors.findIndex(
        (item) => item.colorName === "empty"
      );

      if (emptyIndex !== -1) {
        updatedColors[emptyIndex] = color;
      }

      return updatedColors;
    });
  };

  const handleClear = () => {
    setSelectedColor([defaultColor, defaultColor, defaultColor, defaultColor]);
  };

  const handleUndo = () => {
    setSelectedColor((prev) => {
      const updated = [...prev];
      const lastFilledIndex = [...updated]
        .reverse()
        .findIndex((item) => item.colorName !== "empty");

      if (lastFilledIndex !== -1) {
        const targetIndex = updated.length - 1 - lastFilledIndex;
        updated[targetIndex] = defaultColor;
      }
      return updated;
    });
  };

  return (
    <ContentWrapper className="min-h-screen bg-slate-950 text-slate-100">
      <BackButton />

      <Title>Color Password Matcher</Title>
      <TaskOverview>The Color Password Matcher is an interactive visual security component where users attempt to discover and match a secret 4-color passcode sequence.</TaskOverview>
      <Wrapper>
        <div className="max-w-md mx-auto mt-6 bg-slate-900/90 border border-slate-800/80 p-8 rounded-3xl shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500" />

          <div className="text-center mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Security Protocol
            </p>
            <h2 className="text-lg font-bold text-white mt-1">
              Select 4 Color Keys
            </h2>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {selectedColor.map((item, index) => {
              const isEmpty = item.colorName === "empty";
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: item.colorcode,
                  }}
                  className={`w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center ${
                    isEmpty
                      ? "border-2 border-dashed border-slate-700 bg-slate-950/60"
                      : "border-2 border-white/20 shadow-lg scale-105"
                  }`}
                >
                  {isEmpty && (
                    <span className="text-xs font-mono text-slate-600">
                      0{index + 1}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mb-8">
            <p className="text-xs font-mono text-center text-slate-500 uppercase tracking-wider mb-3">
              Available Palette
            </p>
            <div className="flex justify-center gap-4">
              {colorsPlate.map((item) => (
                <button
                  key={item.colorName}
                  onClick={() => handleColorSelect(item)}
                  disabled={isFull}
                  title={item.label}
                  style={{
                    backgroundColor: item.colorcode,
                  }}
                  className={`w-12 h-12 rounded-2xl border-2 border-transparent transition-all duration-200 hover:scale-110 active:scale-95 shadow-md ${item.glowClass} ${
                    isFull ? "opacity-40 cursor-not-allowed hover:scale-100" : "cursor-pointer"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="min-h-[52px] flex items-center justify-center mb-6">
            {isCorrect && (
              <div className="w-full py-2.5 px-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center animate-fade-in">
                <span className="text-sm font-mono font-bold text-emerald-400 tracking-wide uppercase">
                  🎉 Access Granted — Password Matched!
                </span>
              </div>
            )}

            {isWrong && (
              <div className="w-full py-2.5 px-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-center animate-fade-in">
                <span className="text-sm font-mono font-bold text-rose-400 tracking-wide uppercase">
                  ❌ Access Denied — Incorrect Match
                </span>
              </div>
            )}

            {!isFull && (
              <p className="text-xs font-mono text-slate-500 text-center">
                {4 - filledCount} slot{4 - filledCount > 1 ? "s" : ""} remaining
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleUndo}
              disabled={filledCount === 0}
              className="flex-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 font-mono text-xs uppercase tracking-wider py-2.5 rounded-xl transition border border-slate-700/60 active:scale-95"
            >
              Undo
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={filledCount === 0}
              className="flex-1 bg-slate-800 hover:bg-rose-950/40 hover:border-rose-800/60 hover:text-rose-300 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 font-mono text-xs uppercase tracking-wider py-2.5 rounded-xl transition border border-slate-700/60 active:scale-95"
            >
              Clear
            </button>
          </div>
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default ColorPasswordMatcher;
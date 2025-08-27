import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { PagesData } from "./data/PagesData";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ReactQs from "./pages/ReactQs";

const App = () => {
  const updatedData = PagesData.map((obj) => {
    return {
      ...obj,
      id: Math.random(Date.now()),
    };
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home data={updatedData} />} index />
          <Route element={<ReactQs />} path="react-qs" />

          {updatedData?.map((item) => {
            return (
              <Route element={item?.screen} path={item?.link} key={item?.id} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

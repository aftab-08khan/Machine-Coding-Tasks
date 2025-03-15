import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { PagesData } from "./data/PagesData";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} index />
          {PagesData?.map((item, i) => {
            return <Route element={item?.screen} path={item?.link} key={i} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

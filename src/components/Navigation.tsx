import React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "../pages/home";
import Model from "../pages/model";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/savedModel" element={<Model />} />
        <Route path="/savedModel" element={<Model />} />
        <Route path="/savedModel" element={<Model />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default Navigation;

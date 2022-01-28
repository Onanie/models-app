import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Navibar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navibar />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}
export default App;

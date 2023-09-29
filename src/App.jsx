import React from "react";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchAppBar from "./components/nav/Nav";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <>
      <SearchAppBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

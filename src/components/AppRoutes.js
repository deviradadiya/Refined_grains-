import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./assets/scss/style.scss";
import Login from "./components/Login/Login";
import Verify from "./components/Verify/Verify";



function AppRoutes() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

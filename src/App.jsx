import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard"; //Redirection for the future//

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default Main;
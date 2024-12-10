import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<SignUpForm />} />

        {/* Route for Sign Up */}
        <Route path="/signup" element={<SignUpForm />} />

        {/* Route for Login */}
        <Route path="/login" element={<Login />} />

        {/* Route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

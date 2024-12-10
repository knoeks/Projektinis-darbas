import React, { useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    // email validation
    if (!email) {
      setEmailError("Can't be empty");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("Email is not registered");
    }

    // pass validation
    if (!password) {
      setPasswordError("Can't be empty");
      isValid = false;
    } else {
      setPasswordError("Invalid password");
    }

    if (!isValid) return;

    try {
      const response = await fetch("http://localhost:5001/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const users = await response.json();
      const user = users.find((u) => u.email === email);

      if (!user) {
        setEmailError("This email is not registered");
      } else if (user.password !== password) {
        setPasswordError("Invalid password.");
      } else {
        navigate("/home");
      }
    } catch (err) {
      setEmailError("An error occurred. Please try again later");
    }
  };

  return (
    <div className="menu-position">
      {/* logo */}
      <div className="logo">
        <img
          src="/logo.svg" // cia reikia pakeist
          alt="Logo"
          className="w-12 h-10"
        />
      </div>

      {/* menu */}
      <div className="menu">
        {/* title */}
        <h1 className="title">Login</h1>

        <form onSubmit={handleSubmit} className="on-submit" noValidate>
          {/* mail field */}
          <div className="email-field">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className={`w-[calc(100%-12px)] pl-4 bg-transparent border-0 border-b text-white pb-5 text-lg focus:outline-none focus:ring-0 ${
                emailError
                  ? "border-b-red"
                  : "border-b-accent focus:border-b-white"
              }`}
              placeholder="Email address"
            />
            {emailError && <span className="email-error">{emailError}</span>}
          </div>

          {/* password field */}
          <div className="password-field">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              className={`w-[calc(100%-12px)] pl-4 bg-transparent border-0 border-b text-white pb-5 text-lg focus:outline-none focus:ring-0 ${
                passwordError
                  ? "border-b-red"
                  : "border-b-accent focus:border-b-white"
              }`}
              placeholder="Password"
            />
            {passwordError && (
              <span className="password-error">{passwordError}</span>
            )}
          </div>

          {/* button */}
          <button type="submit" className="submit-button-style">
            Login to your account
          </button>
        </form>

        {/* apacioje tekstas */}
        <p className="text-at-the-bottom">
          Don’t have an account?{" "}
          <a href="/signup" className="sign-up-button">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

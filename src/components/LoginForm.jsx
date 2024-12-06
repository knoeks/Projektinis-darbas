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
      setEmailError("Invalid email format.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // pass validation
    if (!password) {
      setPasswordError("Can't be empty");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!isValid) return;

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const users = await response.json();
      const user = users.find((u) => u.email === email);

      if (!user) {
        setEmailError("This email is not registered.");
      } else if (user.password !== password) {
        setPasswordError("Invalid password.");
      } else {
        navigate("/home");
      }
    } catch (err) {
      setEmailError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#10141E] relative">
      {/* logo */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <img
          src="/logo.svg" // cia reikia pakeist
          alt="Logo"
          className="w-12 h-12"
        />
      </div>

      {/* menu */}
      <div className="w-[480px] bg-[#161D2F] p-12 rounded-2xl shadow-lg relative mt-28">
        {/* title */}
        <h1 className="text-white text-3xl font-bold absolute top-6 left-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="mt-12">
          {/* mail field */}
          <div className="mb-6 relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className={`w-[calc(100%-12px)] bg-transparent border-0 border-b text-white pb-3 text-lg focus:outline-none focus:ring-0 ${
                emailError
                  ? "border-b-red-500"
                  : "border-b-[#5A698F] focus:border-b-white"
              }`}
              placeholder="Email address"
            />
            {emailError && (
              <span className="absolute right-0 top-2 text-sm text-red-500">
                {emailError}
              </span>
            )}
          </div>

          {/* pass field */}
          <div className="mb-6 relative">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              className={`w-[calc(100%-12px)] bg-transparent border-0 border-b text-white pb-3 text-lg focus:outline-none focus:ring-0 ${
                passwordError
                  ? "border-b-red-500"
                  : "border-b-[#5A698F] focus:border-b-white"
              }`}
              placeholder="Password"
            />
            {passwordError && (
              <span className="absolute right-0 top-2 text-sm text-red-500">
                {passwordError}
              </span>
            )}
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-[calc(100%-12px)] py-5 bg-[#FC4747] text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Login to your account
          </button>
        </form>

        {/* apacioje tekstas */}
        <p className="text-center mt-6 text-white">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#FC4747] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

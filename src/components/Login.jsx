import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error as user types
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|io|info)$/i.test(email);
  const isValidPassword = (password) => /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Normalize email to lowercase before validation
    const email = formData.email.trim().toLowerCase();
    const { password } = formData;

    if (!email) {
      newErrors.email = "Can't be empty";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Can't be empty";
    } else if (!isValidPassword(password)) {
      newErrors.password = "Capital letter, number & 6+ characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.get("http://localhost:5001/users");
      const users = response.data;

      // Compare normalized email
      const user = users.find((user) => user.email === email);

      if (!user) {
        setErrors({ email: "Email does not exist" });
        return;
      }

      if (user.password !== password) {
        setErrors({ password: "Invalid password" });
        return;
      }

      // Alert on successful login
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error processing login:", err);
      setErrors({ general: "Error processing login." });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-light font-outfit px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <div className="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="27"
          viewBox="0 0 33 27"
          className="w-10 sm:w-12 h-10 sm:h-12"
        >
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          />
        </svg>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg w-[90%] max-w-[350px] sm:max-w-[400px] lg:max-w-[500px] text-white form-gap 16px"
      >
        <h2 className="text-left Outfit sans-serif text-2xl sm:text-3xl mb-4 sm:mb-6">Log in</h2>

        {/* Email Field */}
        <div className="mb-4 sm:mb-6">
          <div className="relative">
            <input
              autoComplete="off"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full h-12 sm:h-14 px-4 bg-transparent border-b ${
                errors.email ? "border-red" : "border-gray-400"
              } focus:outline-none focus:border-red text-white`}
              placeholder="Email Address"
            />
            {errors.email && (
              <span className="text-red text-xs sm:text-sm absolute right-0 top-3 sm:top-6">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-4 sm:mb-6">
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full h-12 sm:h-14 px-4 bg-transparent border-b ${
                errors.password ? "border-red" : "border-gray-400"
              } focus:outline-none focus:border-red text-white`}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red text-xs sm:text-sm absolute right-0 top-5 sm:top-6">
                {errors.password}
              </span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red text-white py-2 sm:py-3 rounded-lg hover:bg-white/90 hover:text-black transition"
        >
          Log in to your account
        </button>

        {/* Backward Navigation to Sign Up */}
        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-red cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

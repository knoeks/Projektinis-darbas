import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error as the user types
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|io|info)$/i;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    const { email, password, repeatPassword } = formData;

    if (!email) {
      newErrors.email = "Can't be empty";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Can't be empty";
    } else if (!isValidPassword(password)) {
      newErrors.password = "Must include a number & be 6+ characters";
    }

    if (password !== repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;

      const userExists = users.some((user) => user.email === email);

      if (userExists) {
        setErrors({ email: "This email is already registered" });
        return;
      }

      await axios.post("http://localhost:5000/users", { email, password });

      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Error signing up:", err);
      setErrors({ general: "Error signing up. Please try again later." });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-light font-outfit">
      <form
        onSubmit={handleSubmit}
        noValidate // Disable browser validation tooltips
        className="bg-dark p-8 rounded-[1.25rem] shadow-lg w-96 text-white"
      >
        {/* Header */}
        <div className="flex justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <rect x="4" y="6" width="16" height="12" rx="2" ry="2" />
            <path d="M6 6h2v2H6zM10 6h2v2h-2zM14 6h2v2h-2z" fill="#0d1117" />
          </svg>
        </div>
        <h2 className="text-heading-m mb-6 text-center">Sign Up</h2>

     {/* Email Field */}
<div className="mb-6">
  <label htmlFor="email" className="block text-accent text-body-m mb-1">
   
  </label>
  <div className="relative">
    <input
      autoComplete="off"
      type="email"
      name="email"
      id="email"
      value={formData.email}
      onChange={handleChange}
      className={`w-full p-2 bg-transparent border-b ${
        errors.email ? "border-red" : "border-accent"
      } focus:outline-none focus:border-red text-white`}
      placeholder="Email Address"
    />
    {errors.email && (
      <span className="text-red text-xs absolute right-0 top-3">
        {errors.email}
      </span>
    )}
  </div>
</div>

{/* Password Field */}
<div className="mb-6">
  <label htmlFor="password" className="block text-accent text-body-m mb-1">
   
  </label>
  <div className="relative">
    <input
      type="password"
      name="password"
      id="password"
      value={formData.password}
      onChange={handleChange}
      className={`w-full p-2 bg-transparent border-b ${
        errors.password ? "border-red" : "border-accent"
      } focus:outline-none focus:border-red text-white`}
      placeholder="Password"
    />
    {errors.password && (
      <span className="text-red text-xs absolute right-0 top-3">
        {errors.password}
      </span>
    )}
  </div>
</div>


        {/* Repeat Password Field */}
<div className="mb-6">
  <label htmlFor="repeatPassword" className="block text-accent text-body-m mb-1">
   
  </label>
  <div className="relative">
    <input
      type="password"
      name="repeatPassword"
      id="repeatPassword"
      value={formData.repeatPassword}
      onChange={handleChange}
      className={`w-full p-2 bg-transparent border-b ${
        errors.repeatPassword ? "border-red" : "border-accent"
      } focus:outline-none focus:border-red text-white`}
      placeholder="Repeat Password"
    />
    {errors.repeatPassword && (
      <span className="text-red text-xs absolute right-0 top-3">
        {errors.repeatPassword}
      </span>
    )}
  </div>
</div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red text-white py-3 rounded-lg hover:bg-white/90 hover:text-black transition"

        >
          Create Account
        </button>

        {/* Link to Login */}
        <p className="text-center text-accent mt-6 text-body-s">
          Already have an account?{" "}
          <a href="/login" className="text-red hover:underline">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

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
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|io|info)$/i.test(email);
  const isValidPassword = (password) => /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    const email = formData.email.trim().toLowerCase();
    const { password, repeatPassword } = formData;

    if (!email) newErrors.email = "Can't be empty";
    else if (!isValidEmail(email)) newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Can't be empty";
    else if (!isValidPassword(password)) newErrors.password = "Capital letter, number & 6+ characters";

    if (password !== repeatPassword) newErrors.repeatPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.get("http://localhost:5001/users");
      const users = response.data;
      const userExists = users.some((user) => user.email === email);

      if (userExists) {
        setErrors({ email: "This email is already registered" });
        return;
      }

      await axios.post("http://localhost:5001/users", { email, password });

      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Error signing up:", err);
      setErrors({ general: "Error signing up. Please try again later." });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-light font-outfit px-4 sm:px-6 lg:px-8 form-gap 16px">
      <div className="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="26.5"
          viewBox="0 0 33 27"
          className="w-10 sm:w-12 h-10 sm:h-12"
        >
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          />
        </svg>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg w-[90%] max-w-[400px] lg:max-w-[500px] text-white"
      >
        <h2 className="text-left font-bold text-2xl sm:text-3xl mb-4 sm:mb-6">Sign Up</h2>

        <div className="mb-4 sm:mb-6">
          <div className="relative">
            <input
              autoComplete="off"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 bg-transparent border-b ${
                errors.email ? "border-red" : "border-accent"
              } focus:outline-none focus:border-red text-white`}
              placeholder="Email Address"
            />
            {errors.email && (
              <span className="text-red text-xs sm:text-sm absolute right-0 top-3 ">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-2 bg-transparent border-b ${
                errors.password ? "border-red" : "border-accent"
              } focus:outline-none focus:border-red text-white`}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red text-xs sm:text-sm absolute right-0 top-3">
                {errors.password}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <div className="relative">
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              className={`w-full p-2 bg-transparent border-b ${
                errors.repeatPassword ? "border-red" : "border-accent"
              } focus:outline-none focus:border-red text-white`}
              placeholder="Repeat Password"
            />
            {errors.repeatPassword && (
              <span className="text-red text-xs sm:text-sm absolute right-0 top-3">
                {errors.repeatPassword}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red text-white py-2 sm:py-3 rounded-lg hover:bg-white/90 hover:text-black transition"
        >
          Create Account
        </button>

        <p className="text-center text-gray-400 mt-4 sm:mt-6">
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

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
    <div className="flex flex-col justify-center items-center min-h-screen bg-light font-outfit form-gap 16px">
      <div className="absolute md:top-[3rem] top-[4.9rem] left-1/2 transform -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="27"
          viewBox="0 0 33 27"
          className="h-[1.6rem] w-[2rem]"
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
        className="bg-dark shadow-lg md:w-[25rem] md:h-[26.1rem] w-[20.4rem] h-[26.3rem] rounded-[0.625rem] md:rounded-[1.25rem] border-dark text-white"
      >
        <h2 className="ml-[1.5rem] mt-[1.5rem] mb-[2.5rem] md:heading-l md:tracking-[-0.03125rem] font-outfit font-normal md:ml-[2rem] md:mt-[2rem] md:text-[2rem] md:mb-[2.5rem]">Sign Up</h2>

        <div>
          <div className="relative ">
            <input
              autoComplete="off"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`md:w-[21rem] w-[17.4rem] mx-[1.5rem] h-[2.31rem] md:mb-[1.5rem] mb-[1.5rem] bg-transparent border-b ${
                errors.email ? "border-red" : "border-accent"
              } focus:outline-none focus:border-red text-white placeholder:pl-[1rem] placeholder:pb-[1.06rem] placeholder:body-m placeholder:opacity-50`}
              placeholder="Email Address"
            />
            {errors.email && (
              <span className="text-red text-xs sm:text-sm absolute right-0 top-3 ">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <div>
          <div className="relative ">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`md:w-[21rem] w-[17.4rem] mx-[1.5rem] h-[2.31rem] md:mb-[1.5rem] bg-transparent border-b ${
                errors.password ? "border-red text-opacity-0" : "border-accent"
              } focus:outline-none focus:border-red text-white placeholder:pl-[1rem] placeholder:pb-[1.06rem] placeholder:body-m placeholder:opacity-50`}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red text-xs sm:text-sm absolute right-0 top-3">
                {errors.password}
              </span>
            )}
          </div>
        </div>

        <div>
          <div className="relative  ">
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              className={`md:w-[21rem] w-[17.4rem] mx-[1.5rem] h-[2.31rem] md:mb-[1.5rem] bg-transparent border-b ${
                errors.repeatPassword ? "border-red" : "border-accent"
              } focus:outline-none focus:border-red text-white placeholder:pl-[1rem] placeholder:pb-[1.06rem] placeholder:body-m placeholder:opacity-50`}
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
          className="md:ml-[2rem] bg-red text-white md:rounded-[0.375rem] md:mb-[1.5rem] md:w-[21rem] md:h-[3rem] hover:bg-white/90 hover:text-black transition font-outfit"
        >
          Create an account
        </button>

        <p className="text-center text-white body-m font-outfit">
          Already have an account?{" "}
          <a href="/login" className="text-red body-m hover:underline font-outfit">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

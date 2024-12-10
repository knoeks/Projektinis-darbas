import React, { useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;

    if (!email) {
      newErrors.email = "Can't be empty";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Can't be empty";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const users = await response.json();
      const user = users.find((u) => u.email === email);

      if (!user) {
        setErrors({ email: "This email is not registered" });
      } else if (user.password !== password) {
        setErrors({ password: "Invalid password" });
      } else {
        // Redirect to dashboard upon successful login
        navigate("/dashboard");
      }
    } catch (err) {
      setErrors({ general: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-light font-outfit form-gap 16px">
      <div className="absolute top-[4.9rem] left-1/2 transform -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="26.5"
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
        <h2 className="ml-[1.5rem] mt-[1.5rem] mb-[2.5rem] text-[2rem] heading-l md:tracking-[-0.03125rem] font-outfit font-normal md:ml-[2rem] md:mt-[2rem] md:text-[2rem] md:mb-[2.5rem] h-[2.5rem]">Login</h2>

        <div className="relative">
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={`md:w-[21rem] w-[17.4rem] mx-[1.5rem] h-[2.31rem] mb-[1.5rem] bg-transparent border-b ${
              errors.email ? "border-red" : "border-accent"
            } focus:outline-none focus:border-red text-white placeholder:pl-[1rem] placeholder:pb-[1.06rem] placeholder:body-m placeholder:opacity-50`}
            placeholder="Email Address"
          />
          {errors.email && (
            <span className="text-red text-xs sm:text-sm absolute right-10 top-3">
              {errors.email}
            </span>
          )}
        </div>

        <div className="relative">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={`md:w-[21rem] w-[17.4rem] mx-[1.5rem] h-[2.31rem] mb-[1.5rem] bg-transparent border-b ${
              errors.password ? "border-red" : "border-accent"
            } focus:outline-none focus:border-red text-white placeholder:pl-[1rem] placeholder:pb-[1.06rem] placeholder:body-m placeholder:opacity-50`}
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red text-xs sm:text-sm absolute right-10 top-3">
              {errors.password}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="md:ml-[2rem] bg-red text-white rounded-[0.375rem] mb-[1.5rem] md:w-[21rem] w-[17.4rem] h-[3rem] hover:bg-white/90 hover:text-black transition font-outfit ml-[1.5rem]"
        >
          Login to your account
        </button>

        <p className="text-center text-white body-m font-outfit">
          Don’t have an account?{" "}
          <a href="/signup" className="text-red body-m hover:underline font-outfit">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

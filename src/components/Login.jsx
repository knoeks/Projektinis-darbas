import React, { useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;

    // Email validation
    if (!email) {
      newErrors.email = "Can't be empty";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Can't be empty";
      isValid = false;
    } else if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      newErrors.password = "Invalid password";
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
      const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );

      if (!user) {
        setErrors({ email: "This email is not registered" });
      } else if (user.password !== password) {
        setErrors({ password: "Invalid password" });
      } else {
        // Redirect to dashboard upon successful login
        navigate("/home");
      }
    } catch (err) {
      setErrors({ general: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="login--main--container">
      <div className="signup--icon">
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
        className="login--form--container"
      >
        <h2 className="signup--heading--text">Login</h2>

        <div className="relative">
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={`login--input ${
              errors.email ? "border-red" : "border-accent"
            } placeholder:pl-[1rem] placeholder:pb-[1.06rem] placeholder:body-m placeholder:opacity-50`}
            placeholder="Email Address"
          />
          {errors.email && (
            <span className="signup--error">{errors.email}</span>
          )}
        </div>

        <div className="relative">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={`login--input mb-[2.5rem] ${
              errors.password ? "border-red" : "border-accent"
            } placeholder:pl-[1rem] placeholder:pb-[1.06rem] placeholder:body-m placeholder:opacity-50`}
            placeholder="Password"
          />
          {errors.password && (
            <span className="signup--error">{errors.password}</span>
          )}
        </div>

        <button type="submit" className="signup--button">
          Login to your account
        </button>

        <p className="text-center text-white body-m font-outfit">
          Don’t have an account?{" "}
          <a href="/" className="text-red body-m hover:underline font-outfit">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

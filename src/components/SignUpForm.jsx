import { useState } from "react";
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

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|io|info)$/i.test(email);
  const isValidPassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d).{6,18}$/.test(password);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    const email = formData.email.trim().toLowerCase();
    const { password, repeatPassword } = formData;

    if (!email) newErrors.email = "Can't be empty";
    else if (!isValidEmail(email)) newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Can't be empty";
    else if (!isValidPassword(password))
      newErrors.password = "Capital letter, number, 6-18 characters";

    if (password !== repeatPassword)
      newErrors.repeatPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.get("http://localhost:5001/users");
      const users = response.data;
      const userExists = users.some((user) => user.email === email);

      if (userExists) {
        setErrors({ email: "Email is already registered" });
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
    <div className="signup--main--container">
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
        className="signup--form--container"
      >
        <h2 className="signup--heading--text heading-l">Sign Up</h2>

        <div>
          <div className="relative ">
            <input
              autoComplete="off"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`signup--input ${
                errors.email ? "border-red" : "border-accent"
              } placeholder:pl-[1rem] placeholder:pb-[1.06rem] placeholder:body-m placeholder:opacity-50`}
              placeholder="Email Address"
            />
            {errors.email && (
              <span className="signup--error">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="relative ">
          <input
            type="password"
            name="password"
            value={formData.password}
            maxLength={16}
            onChange={handleChange}
            className={`signup--input ${
              errors.password ? "border-red" : "border-accent"
            } placeholder:pl-[1rem] placeholder:pb-[1.06rem] placeholder:body-m placeholder:opacity-50`}
            placeholder="Password"
          />
          {errors.password && (
            <span className="signup--error">{errors.password}</span>
          )}
        </div>

        <div className="relative  ">
          <input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            className={`signup--input placeholder:pl-[1rem] placeholder:pb-[1.06rem] placeholder:body-m placeholder:opacity-50 ${
              errors.repeatPassword ? "border-red" : "border-accent"
            } `}
            placeholder="Repeat Password"
          />
          {errors.repeatPassword && (
            <span className="signup--error">{errors.repeatPassword}</span>
          )}
        </div>

        <button type="submit" className="signup--button">
          Create an account
        </button>

        <p className="text-center text-white body-m font-outfit">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-red body-m hover:underline font-outfit"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

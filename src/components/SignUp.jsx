import { useState } from "react";
import { Link, useNavigate } from "react-router";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(""); // errors
  const [loading, setLoading] = useState(false); // loading

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up.");
      }

      // if success, sens to home page
      navigate("/login");
    } catch (error) {
      setError(error.message); // if error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#10141E] text-white">
      {/* logo */}
      <div className="mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="50"
          viewBox="0 0 33 26"
          fill="none"
        >
          <rect x="4" y="8" width="30" height="20" rx="2" fill="#FC4747" />
          <path d="M7 4h3v4H7V4zm5 0h3v4h-3V4zm5 0h3v4h-3V4z" fill="#FC4747" />
        </svg>
      </div>

      {/* form Container */}
      <div className="bg-[#161D2F] p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {/* email input */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium tracking-wide">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-transparent border border-[#5A698F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* password input */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium tracking-wide">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-transparent border border-[#5A698F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* repeat password input */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium tracking-wide">
              Repeat password
            </label>
            <input
              type="password"
              placeholder="Repeat your password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="w-full p-3 rounded bg-transparent border border-[#5A698F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* error */}
          {error && (
            <div className="mb-4 text-red-500 text-center">{error}</div>
          )}

          {/* submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 py-3 rounded-lg text-white font-semibold hover:bg-red-600 transition duration-300"
          >
            {loading ? "Creating account..." : "Create an account"}
          </button>

          {/* login link */}
          <p className="text-center mt-6 text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-red-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

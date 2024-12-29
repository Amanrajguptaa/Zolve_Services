import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true); // Start animation on button click
      const response = await axios.post(
        "https://zolve-soln.onrender.com/api/user/login",
        { email, password }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Stop animation after request is complete
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-8">Login</h1>

        <form onSubmit={formSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              placeholder="••••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading} // Disable button when loading
            className={`w-full py-3 rounded-lg font-medium transition-all duration-300 transform ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#1a94c2] text-white hover:bg-[#16879b] active:scale-95"
            } ${isLoading ? "animate-pulse" : ""}`}
          >
            {isLoading ? (
              <span>Logging...</span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="text-[#1a94c2] font-medium hover:underline"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

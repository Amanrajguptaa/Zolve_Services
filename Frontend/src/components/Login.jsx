import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://zolve-soln.onrender.com/api/user/login",
        { email, password }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      window.location.reload();
    } catch (error) {
      console.log(error);
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
            className="w-full bg-[#1a94c2] text-white py-3 rounded-lg font-medium"
          >
            Login{" "}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Dont have an account?{" "}
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

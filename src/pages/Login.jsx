import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginImg from "../assets/login.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Login:", { email, password });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium text-gray-900">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Hey there!
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email and password to login
          </p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md text-gray-900 bg-white focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign In
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-700">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={LoginImg}
            alt="Login to Account"
            className="h-[650px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

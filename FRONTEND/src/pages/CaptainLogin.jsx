import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext';

export default function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        { email, password }
      );

      if (response.status === 201) {
        const { captain, token } = response.data;
        setCaptain(captain);
        localStorage.setItem("token", token);
        navigate('/captainhome');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || "Login failed. Please try again.");
      setPassword(""); // Clear password on error
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-sm w-full bg-white rounded-2xl p-6">
        {/* Logo - Updated colors to match signup */}
        <Link to="/">
        <div className="flex flex-col justify-center items-center mb-6 space-x-2">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-10 h-10 bg-[#02733E] rounded-full flex items-center justify-center text-white font-bold text-sm">
              ER
            </div>
            <h1 className="text-xl font-extrabold tracking-wide">EasyRide</h1>
          </div>
          <div className="w-full text-center mt-[-10px] ml-[-10px]">
            <p className="text-xs text-gray-500">captain</p>
          </div>
        </div>
        </Link>
        {/* Sign In Title */}
        <h2 className="text-2xl font-bold text-left text-gray-800 mb-4">Log In</h2>

        {/* Form - Updated input styles */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button - Updated colors */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#02733E] text-white py-2 rounded-md font-normal hover:bg-green-700 transition-all text-lg"
          >
            Login
          </motion.button>
        </form>

        {/* Footer Links - Updated colors */}
        <div className="flex justify-end items-center mt-4 text-[1rem] text-gray-500">
          <Link to='/captainsignup'>
            <button className="font-normal text-[#02733E] hover:underline cursor-pointer">Join as captain</button>
          </Link>
        </div>

        {/* Login as User Button - Updated colors */}
        <Link to="/userlogin">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-0.5 w-full  bg-indigo-600  text-white py-2 rounded-md font-normal  hover:bg-indigo-700 transition-all text-lg px-10 mt-28"
          >
            Login as user
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
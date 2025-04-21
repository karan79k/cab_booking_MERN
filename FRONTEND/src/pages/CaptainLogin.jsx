import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext';
import Logo from './logo'

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
        <Logo userType="captain" />
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
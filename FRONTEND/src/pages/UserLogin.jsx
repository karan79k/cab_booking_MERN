import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';
import Logo from './logo';

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add error state
  
  const navigate = useNavigate();
  const { setUser } = React.useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        { email, password }
      );

      if (response.status === 201) { // Change to 200 for successful login
        const { user, token } = response.data;
        setUser(user);
        localStorage.setItem("token", token);
        setEmail("");
        setPassword("");
        navigate('/home');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || "Invalid email or password");
      setPassword(""); // Clear password on error
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-sm w-full bg-white rounded-2xl p-6">
        {/* Logo */}
        <Logo userType="user" />

        <h2 className="text-2xl font-bold text-left text-gray-800 mb-4">Log In</h2>

        {/* Add error message display */}
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-md text-gray-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-normal hover:bg-indigo-700 transition-all text-lg"
          >
            Login
          </motion.button>
        </form>

        {/* Footer Links */}
        <div className="flex justify-end items-right mt-4 text-[1rem] text-gray-500">
          <div className="flex justify-end items-center text-[1rem] text-gray-800"> New Here?<Link to='/usersignup'><button className="font-normal text-indigo-600 hover:underline cursor-pointer"> Create new Account</button> </Link></div>
        </div>

        {/* Sign In as Captain Button */}
        <Link to="/captainlogin">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" mb-0.5 w-full bg-[#02733E] text-white py-2 rounded-md font-600 hover:bg-lime-500 transition-all text-lg px-10 mt-28"
          >
            Sign In as Captain
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
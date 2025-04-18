import React, { useState } from 'react' // Remove 'use'
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Fix Navigate import
import axios from 'axios'
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  // Individual states for each field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); // Fix navigation hook name
  const { user, setUser } = React.useContext(UserDataContext);

  // Handle form submission with error handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        fullname: {
          firstname: firstName,
          lastname: lastName
        },
        email,
        password,
      };
      
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token); // Store token in local storage
        
        // Clear form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        
        navigate('/home'); // Use lowercase navigate
      }
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      // Add error handling here if needed
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-sm w-full bg-white rounded-2xl p-6">
        {/* Logo */}
         <Link to="/">
        <div className="flex flex-col justify-center items-center mb-6 space-x-2">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
              ER
            </div>
            <h1 className="text-xl font-extrabold tracking-wide">EasyRide</h1>
          </div>
          <div className="w-full text-center mt-[-10px] ml-[-28px]">
            <p className="text-xs text-gray-500">user</p>
          </div>
        </div>
        </Link>
        {/* Change title to Sign Up */}
        <h2 className="text-2xl font-bold text-left text-gray-800 mb-4">Sign Up</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Add name fields for signup */}
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              id="firstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              id="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
            />
          </div>

          {/* Update email and password fields */}
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

          {/* Change button text to Sign Up */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-normal hover:bg-indigo-700 transition-all text-lg"
          >
            Create Account
          </motion.button>
        </form>

        {/* Update footer link to point to login */}
        <div className="flex justify-end items-right mt-4 text-[1.1rem] text-gray-500">
          <Link to='/userlogin'>
            <button className="font-normal text-indigo-600 hover:underline cursor-pointer">Login Instead</button>
          </Link>
        </div>

        {/* Captain signup button */}
        <Link to="/captainsignup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-0.5 w-full bg-[#02733E] text-white py-2 rounded-md font-600 hover:bg-lime-500 transition-all text-lg px-10 mt-6"
          >
            Sign Up as Captain
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default UserSignup
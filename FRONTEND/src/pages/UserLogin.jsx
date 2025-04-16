import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    })
    console.log(userData);
    

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-sm w-full bg-white rounded-2xl p-6">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center mb-6 space-x-2">
  <div className="flex justify-center items-center space-x-2">
    <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
      ER
    </div>
    <h1 className="text-xl font-extrabold tracking-wide">EasyRide</h1>
  </div>
  <div className="w-full text-center mt-[-10px] ml-[-30px]">
    <p className="text-xs text-gray-500">user</p>
  </div>
</div>


        {/* Sign In Title */}
        <h2 className="text-2xl font-bold text-left text-gray-800 mb-8">Log In</h2>

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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
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
       
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <button className="hover:underline cursor-pointer">Forgot Password?</button>
          <Link to='/usersignup'>
          <button className="font-normal text-indigo-600 hover:underline cursor-pointer">Sign Up</button>
          </Link>
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
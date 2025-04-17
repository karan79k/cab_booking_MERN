import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  // State management
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    vehicle: {
      color: '',
      plate: '',
      capacity: '',
      type: 'Car' // default value
    }
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('vehicle.')) {
      const vehicleField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        vehicle: {
          ...prev.vehicle,
          [vehicleField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Captain Signup Data:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-sm w-full bg-white rounded-2xl p-6">
        {/* Logo */}
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
        <h2 className="text-2xl font-bold text-left text-gray-800 mb-4">Captain Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information */}
          <div>
            <label htmlFor="firstname" className="block text-sm font-[10px] text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
            />
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
            />
          </div>

          {/* Vehicle Information */}
          <div className="pt-4 border-t">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Vehicle Details</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="vehicle.color" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Color</label>
                <input
                  type="text"
                  name="vehicle.color"
                  value={formData.vehicle.color}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="vehicle.plate" className="block text-sm font-medium text-gray-700 mb-1">License Plate</label>
                <input
                  type="text"
                  name="vehicle.plate"
                  value={formData.vehicle.plate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="vehicle.capacity" className="block text-sm font-medium text-gray-700 mb-1">Seating Capacity</label>
                <input
                  type="number"
                  name="vehicle.capacity"
                  value={formData.vehicle.capacity}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="vehicle.type" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                <select
                  name="vehicle.type"
                  value={formData.vehicle.type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
                >
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#02733E] text-white py-2 rounded-md font-normal hover:bg-green-700 transition-all text-lg mt-6"
          >
            Sign Up 
          </motion.button>
        </form>

        <div className="flex justify-end items-right mt-4 text-[1rem] text-gray-500">
          <Link to='/captainlogin'>
            <button className="font-normal text-[#02733E] hover:underline cursor-pointer">Login Instead</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
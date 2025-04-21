import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ userType = 'user' }) => {
  const bgColor = userType === 'captain' ? 'bg-[#02733E]' : 'bg-cyan-400'
  const textColor = userType === 'captain' ? 'text-white' : 'text-black'
  const marginLeft = userType === 'captain' ? 'ml-[-10px]' : 'ml-[-25px]'

  return (
    <Link to="/">
      <div className="flex flex-col justify-center items-center mb-6 space-x-2">
        <div className="flex justify-center items-center space-x-2">
          <div className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center ${textColor} font-bold text-sm`}>
            ER
          </div>
          <h1 className="text-xl font-extrabold tracking-wide">EasyRide</h1>
        </div>
        <div className={`w-full text-center mt-[-10px] ${marginLeft}`}>
          <p className="text-xs text-gray-500">{userType}</p>
        </div>
      </div>
    </Link>
  )
}

export default Logo
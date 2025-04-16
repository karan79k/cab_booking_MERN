import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.jpg"; // Replace with your image path

export default function LuxuryCarLanding() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] flex items-center justify-center px-4 text-white"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-sm w-full">
        {/* Top bar with modern logo */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg">
              ER
            </div>
            <h1 className="text-xl font-extrabold tracking-wide">EasyRide</h1>
          </div>
        </div>

        {/* Car Image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={homeImg}
            alt="Luxury Car"
            className="w-full object-cover"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-6"
        >
          <h2 className="text-2xl font-bold">
            Book your ride in the <br /> world class luxury cars!
          </h2>
          <p className="text-gray-300 mt-2 text-sm">
            Book your ride in the world class luxury cars and enjoy uninterrupted rides.
          </p>
        </motion.div>

        {/* Button with Arrow */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="flex justify-center mt-8"
        >
          <Link to="/userlogin">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center shadow-md hover:bg-lime-500 transition-all"
            >
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
                <ArrowRight className="text-black" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
